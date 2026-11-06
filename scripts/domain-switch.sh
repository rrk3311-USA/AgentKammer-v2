#!/usr/bin/env bash
# Switch agentkammer.com between the old live project and the new v2 project.
# Nothing here runs by itself. Run one command at a time:
#   scripts/domain-switch.sh stage      add v2.agentkammer.com to the v2 project (old site untouched)
#   scripts/domain-switch.sh launch     move agentkammer.com and www to the v2 project
#   scripts/domain-switch.sh rollback   move both back to the old project
# Not yet tested: try "stage" first.
set -euo pipefail
V=${VERCEL:-/Users/r-kammer/.local/bin/vercel}
OLD=prj_V0wAAHDUkHg6hiKugYdO91xYjSkw   # agentkammer (old live site)
NEW=prj_mAkq8AKp5GCpejdAHmmrG3m7oYOe   # agentkammer-v2-preview (v2)
add()  { $V api "/v10/projects/$1/domains" -X POST -F "name=$2"; }
drop() { $V api "/v9/projects/$1/domains/$2" -X DELETE; }
case "${1:-}" in
  stage)    $V deploy --prod --yes; add $NEW v2.agentkammer.com ;;
  launch)   $V deploy --prod --yes
            for d in agentkammer.com www.agentkammer.com; do drop $OLD $d; add $NEW $d; done ;;
  rollback) for d in agentkammer.com www.agentkammer.com; do drop $NEW $d; add $OLD $d; done ;;
  *) echo "usage: $0 stage|launch|rollback"; exit 1 ;;
esac
