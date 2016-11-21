#  usage: ./run_pa11y.sh <url> <story_pivotal_id>

#!/bin/bash

url=$1
story=$2

pa11y --config pa11y_wcag2aa.json --reporter markdown "$url" > "pa11y_report_wcag2aa_$story.md"
pa11y --config pa11y_wcag2aa_tablet.json --reporter markdown "$url" > "pa11y_report_wcag2aa_tablet_$story.md"
