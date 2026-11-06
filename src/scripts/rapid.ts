// Behavior shared by the Rapid Match v2 pages: reveal on scroll, counters, spotlight, scan run, story, timeline, report quiz.
import { buildingLibrary } from "../data/buildingLibrary";
import { lifeGoals, laneLabels, pricePoints, reportHoods } from "../data/rapidListings";

const reduce = () => matchMedia("(prefers-reduced-motion: reduce)").matches;
const $$ = <T extends Element = HTMLElement>(sel: string, root: ParentNode = document) => Array.from(root.querySelectorAll<T>(sel));

export function initReveal() {
  const items = $$("[data-reveal]");
  if (reduce() || !("IntersectionObserver" in window)) { items.forEach((n) => n.classList.add("in")); return; }
  const io = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }), { threshold: 0.18, rootMargin: "0px 0px -6% 0px" });
  items.forEach((n) => io.observe(n));
}

function countTo(el: HTMLElement, to: number, ms = 1600) {
  const suffix = el.dataset.suffix || "";
  if (reduce()) { el.textContent = to.toLocaleString("en-US") + suffix; return; }
  const t0 = performance.now();
  const step = (t: number) => {
    const p = Math.min(1, (t - t0) / ms);
    const e = 1 - Math.pow(1 - p, 3);
    el.textContent = Math.round(to * e).toLocaleString("en-US") + suffix;
    if (p < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

export function initCounters() {
  const items = $$("[data-count]");
  const run = (n: HTMLElement) => countTo(n, Number(n.dataset.count));
  if (!("IntersectionObserver" in window)) { items.forEach(run); return; }
  const io = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { run(e.target as HTMLElement); io.unobserve(e.target); } }), { threshold: 0.5 });
  items.forEach((n) => io.observe(n));
}

export function initSpotlight() {
  $$("[data-spot]").forEach((n) => {
    n.addEventListener("pointermove", (e) => {
      const r = n.getBoundingClientRect();
      n.style.setProperty("--mx", (e as PointerEvent).clientX - r.left + "px");
      n.style.setProperty("--my", (e as PointerEvent).clientY - r.top + "px");
    });
  });
}

// A run through the reference library: building names stream past while the counters climb.
export function initScanRun() {
  $$("[data-scan]").forEach((root) => {
    const total = buildingLibrary.length;
    const nEl = root.querySelector<HTMLElement>("[data-scan-n]")!;
    const bar = root.querySelector<HTMLElement>("[data-scan-bar]")!;
    const log = root.querySelector<HTMLElement>("[data-scan-log]")!;
    const hEl = root.querySelector<HTMLElement>("[data-scan-h]")!;
    const state = root.querySelector<HTMLElement>("[data-scan-state]");
    const msg = root.querySelector<HTMLElement>("[data-scan-msg]");
    const say = (i: number) => {
      if (!msg) return;
      msg.textContent = i >= total ? "Library read. Ready to match you to the feeds."
        : i < total * 0.2 ? "Opening the Manhattan building library"
        : i < total * 0.6 ? "Reading each building: its rules, finances and daily life"
        : "Cross-checking neighborhoods against the six feeds";
    };
    const order = buildingLibrary.map((b, i) => ({ b, k: (i * 37) % total })).sort((x, y) => x.k - y.k).map((x) => x.b);
    const paint = (i: number, seen: Set<string>) => {
      nEl.textContent = String(i);
      bar.style.width = (i / total) * 100 + "%";
      hEl.textContent = String(seen.size);
    };
    if (reduce() || !("IntersectionObserver" in window)) {
      paint(total, new Set(buildingLibrary.map((b) => b.hood).filter((h) => reportHoods.includes(h))));
      say(total);
      order.slice(0, 5).forEach((b) => { const li = document.createElement("li"); li.textContent = b.name + " · " + b.hood; log.append(li); });
      if (state) state.textContent = "Run complete";
      return;
    }
    let timer = 0;
    const run = () => {
      let i = 0;
      const seen = new Set<string>();
      log.replaceChildren();
      if (state) state.textContent = "Reading";
      paint(0, seen);
      say(0);
      timer = window.setInterval(() => {
        const burst = i < total - 12 ? 2 : 1;
        for (let k = 0; k < burst && i < total; k++) {
          const b = order[i++];
          if (reportHoods.includes(b.hood)) seen.add(b.hood);
          const li = document.createElement("li");
          li.textContent = b.name + " · " + b.hood;
          log.prepend(li);
          while (log.children.length > 5) log.lastElementChild!.remove();
        }
        paint(i, seen);
        say(i);
        if (i >= total) {
          clearInterval(timer);
          if (state) state.textContent = "Run complete";
          setTimeout(run, 3200);
        }
      }, 85);
    };
    const io = new IntersectionObserver((es) => es.forEach((e) => {
      if (e.isIntersecting) { if (!timer) run(); } else { clearInterval(timer); timer = 0; }
    }), { threshold: 0.2 });
    io.observe(root);
  });
}

// Chapters on the left, one visual on the right that changes with the chapter in view.
export function initStory() {
  $$("[data-story]").forEach((root) => {
    const chaps = $$("[data-chap]", root);
    if (!chaps.length) return;
    const set = (i: string) => { root.dataset.step = i; };
    set("0");
    if (!("IntersectionObserver" in window)) return;
    const io = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) set((e.target as HTMLElement).dataset.chap!); }), { rootMargin: "-42% 0px -42% 0px" });
    chaps.forEach((c) => io.observe(c));
  });
}

// Words light up one by one as the paragraph scrolls through the middle of the screen.
export function initWords() {
  $$("[data-words]").forEach((p) => {
    const words = (p.textContent || "").trim().split(/\s+/);
    p.replaceChildren(...words.map((w, i) => { const s = document.createElement("span"); s.className = "w"; s.textContent = w + (i < words.length - 1 ? " " : ""); return s; }));
    const spans = $$("span.w", p);
    if (reduce()) { spans.forEach((x) => x.classList.add("on")); return; }
    const update = () => {
      const r = p.getBoundingClientRect(), vh = window.innerHeight;
      const t = Math.max(0, Math.min(1, (vh * 0.82 - r.top) / (r.height + vh * 0.32)));
      const n = Math.round(t * spans.length);
      spans.forEach((x, i) => x.classList.toggle("on", i < n));
    };
    let raf = 0;
    const on = () => { if (!raf) raf = requestAnimationFrame(() => { raf = 0; update(); }); };
    window.addEventListener("scroll", on, { passive: true });
    window.addEventListener("resize", on);
    update();
  });
}

// A beam that follows the scroll down a vertical timeline.
export function initTimeline() {
  $$("[data-tl]").forEach((root) => {
    const steps = $$("[data-tl-step]", root);
    const update = () => {
      const r = root.getBoundingClientRect();
      const vh = window.innerHeight;
      const p = Math.max(0, Math.min(1, (vh * 0.6 - r.top) / r.height));
      root.style.setProperty("--p", String(p));
      steps.forEach((s) => s.classList.toggle("on", s.getBoundingClientRect().top < vh * 0.62));
    };
    if (reduce()) { root.style.setProperty("--p", "1"); steps.forEach((s) => s.classList.add("on")); return; }
    let raf = 0;
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(() => { raf = 0; update(); }); };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    update();
  });
}

// ---------- The sample report: life goals in, answer out ----------
interface Answer { hood: string; alt: string[]; beds: number; lane: string; goals: string[] }

function hash(s: string) { let h = 2166136261; for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619); } return Math.abs(h); }
function money(n: number) { return n >= 1000000 ? "$" + (n / 1000000).toFixed(n % 1000000 ? 1 : 0).replace(/\.0$/, "") + "M" : "$" + n.toLocaleString("en-US"); }
function monthNames() {
  const d = new Date();
  return [0, 1, 2].map((i) => new Date(d.getFullYear(), d.getMonth() + 1 + i, 1).toLocaleDateString("en-US", { month: "short" }));
}
const tierNote = [
  "Meets the core of your goals, with one trade-off.",
  "The balance most buyers land on: more of the list, fewer trade-offs.",
  "Adds the finishes and outlook that move a good home to a great one.",
  "The top of your range: the few homes that tick every box.",
];

// The answer is told, not asked: each goal votes for neighborhoods, a bedroom count and a price band.
export function infer(ids: string[]): Answer | null {
  const picked = lifeGoals.filter((g) => ids.includes(g.id));
  if (!picked.length) return null;
  const score: Record<string, number> = {};
  picked.forEach((g) => g.hoods.forEach((h, i) => { score[h] = (score[h] || 0) + (3 - i); }));
  const ranked = Object.keys(score).sort((a, b) => score[b] - score[a] || hash(a) - hash(b));
  const order = ["under3", "3to6", "6plus"];
  const lane = order[Math.round(picked.reduce((n, g) => n + order.indexOf(g.lane), 0) / picked.length)];
  const beds = Math.max(1, Math.min(3, Math.round(picked.reduce((n, g) => n + g.beds, 0) / picked.length)));
  return { hood: ranked[0], alt: ranked.slice(1, 3), beds, lane, goals: picked.map((g) => g.id) };
}

export function buildReport(a: Answer) {
  const pts = pricePoints[a.lane];
  const tiers = pts.map((p, i) => {
    const seed = hash(a.hood + a.beds + p.label);
    const fit = Math.min(97, 60 + (seed % 14) + Math.min(a.goals.length, 3) * 4 + i * 3);
    const base = Math.max(1, 5 - i + (seed % 3));
    const avail = [base, Math.max(1, base + ((seed >> 3) % 3) - 1), Math.max(1, base + ((seed >> 5) % 4) - 1)];
    return { ...p, fit, avail, note: tierNote[i] };
  });
  const best = tiers.reduce((x, y) => (y.fit > x.fit ? y : x));
  const lib = buildingLibrary.filter((b) => b.hood === a.hood).map((b) => b.name);
  return { tiers, best, lib };
}

function el<K extends keyof HTMLElementTagNameMap>(tag: K, cls?: string, text?: string) {
  const n = document.createElement(tag);
  if (cls) n.className = cls;
  if (text != null) n.textContent = text;
  return n;
}

export function renderReport(out: HTMLElement, a: Answer) {
  const { tiers, best, lib } = buildReport(a);
  const months = monthNames();
  const picked = lifeGoals.filter((g) => a.goals.includes(g.id));
  out.replaceChildren();

  const hd = el("header", "rq-hd");
  hd.append(el("span", "rq-k", "Your sample report · where we'd start"), el("h3", "", a.hood));
  hd.append(el("p", "", a.beds + (a.beds === 3 ? "+" : "") + " bedroom" + (a.beds > 1 ? "s" : "") + " · " + laneLabels[a.lane] + " · " + months[0] + " to " + months[2] + " outlook"));
  if (a.alt.length) hd.append(el("p", "rq-alt", "Also worth a look: " + a.alt.join(" and ")));
  out.append(hd);

  const top = el("div", "rq-best");
  const fit = el("b", "rq-fit"); fit.dataset.count = String(best.fit); fit.dataset.suffix = "%"; fit.textContent = "0%";
  const topText = el("div", "rq-best-t");
  topText.append(el("span", "rq-k", "Best fit across the array"), el("strong", "", best.label + " · " + money(best.price)));
  const why = el("ul", "rq-why");
  picked.slice(0, 3).forEach((g) => why.append(el("li", "", g.label + ": " + g.note)));
  topText.append(why);
  top.append(fit, topText);
  out.append(top);

  const ladder = el("ol", "rq-ladder");
  tiers.forEach((t, i) => {
    const li = el("li", t === best ? "best" : "");
    li.style.setProperty("--d", i * 90 + "ms");
    const head = el("div", "rq-l-hd"); head.append(el("span", "rq-k", t.label), el("strong", "", money(t.price)));
    const meter = el("div", "rq-meter"); const bar = el("i"); bar.style.setProperty("--w", t.fit + "%"); meter.append(bar);
    const fitLbl = el("small", "", t.fit + "% fit");
    const av = el("div", "rq-av");
    t.avail.forEach((v, k) => { const c = el("span"); const b = el("i"); b.style.setProperty("--h", Math.min(100, v * 16) + "%"); c.append(b, el("em", "", months[k])); av.append(c); });
    li.append(head, meter, fitLbl, el("p", "", t.note), av, el("small", "rq-avl", "Expected matches by month. Illustrative."));
    ladder.append(li);
  });
  out.append(ladder);

  const library = el("div", "rq-lib");
  library.append(el("span", "rq-k", "Buildings we track in " + a.hood + " (" + lib.length + ")"));
  const chips = el("div", "rq-chips");
  lib.slice(0, 8).forEach((n) => chips.append(el("span", "", n)));
  if (lib.length > 8) chips.append(el("span", "more", "+" + (lib.length - 8) + " more"));
  library.append(chips);
  out.append(library);

  out.append(el("p", "rq-note", "A sample. The answer, price points, scores and outlook are illustrative. Your full report names real homes, with sources, dates and the building research behind each."));
  const cta = el("div", "rq-cta");
  const a1 = el("a", "rq-btn", "Request my full report"); a1.href = "/contact?intent=property";
  const a2 = el("a", "rq-btn ghost", "See the building profiles"); a2.href = "/building-reports/individual-buildings";
  cta.append(a1, a2);
  out.append(cta);

  out.hidden = false;
  out.classList.remove("in"); void out.offsetWidth; out.classList.add("in");
  $$("[data-count]", out).forEach((n) => countTo(n, Number(n.dataset.count), 1600));
}

// Pick up to three life goals. "live" tells the answer as you pick; "submit" waits for the button.
export function initQuiz(mode: "submit" | "live") {
  const form = document.getElementById("rq-form") as HTMLFormElement | null;
  const out = document.getElementById("rq-out") as HTMLElement | null;
  if (!form || !out) return;
  const boxes = $$<HTMLInputElement>('input[name="goal"]', form);
  const hint = document.getElementById("rq-hint");
  const count = document.getElementById("rq-count");
  const picked = () => boxes.filter((b) => b.checked).map((b) => b.value);
  const sync = () => {
    const n = picked().length;
    boxes.forEach((b) => { b.disabled = n >= 3 && !b.checked; });
    if (count) count.textContent = n ? n + " of 3 chosen" : "Choose up to three";
  };
  const tell = () => { const a = infer(picked()); if (!a) { out.hidden = true; if (hint) hint.hidden = false; return false; } if (hint) hint.hidden = true; renderReport(out, a); return true; };

  form.addEventListener("change", () => { sync(); if (mode === "live") tell(); });
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (tell()) out.scrollIntoView({ behavior: reduce() ? "auto" : "smooth", block: "start" });
    else { const f = form.querySelector("fieldset"); f?.classList.add("nudge"); setTimeout(() => f?.classList.remove("nudge"), 500); }
  });
  if (/[?&]sample\b/.test(location.search)) {
    ["quiet", "outdoors"].forEach((id) => { const b = boxes.find((x) => x.value === id); if (b) b.checked = true; });
    sync(); tell();
  }
  sync();
}
