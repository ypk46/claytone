#!/bin/bash
# claytone pre-tool-use hook
#
# Runs before Claude Code executes a file-write tool. Extend this script
# to add design system validation — e.g. linting token usage, checking
# that new files follow naming conventions.
#
# Input (via stdin): JSON with keys { tool_name, tool_input }
# Exit 0 to allow the tool call, exit non-zero to block it.
#
# Token file: src/styles/tokens.css

TOOL_INPUT=$(cat)
TOOL_NAME=$(echo "$TOOL_INPUT" | node -e "process.stdin.resume();let d='';process.stdin.on('data',c=>d+=c);process.stdin.on('end',()=>console.log(JSON.parse(d).tool_name))" 2>/dev/null || echo "unknown")

case "$TOOL_NAME" in
  Write|Edit|MultiEdit)
    # Future: run a token linter against the file being written
    # Example: check that no raw hex colors appear in the diff
    # if grep -qE '#[0-9a-fA-F]{3,6}\b' <<< "$TOOL_INPUT"; then
    #   echo "Design engine: raw color value detected — use a token instead" >&2
    #   exit 1
    # fi
    exit 0
    ;;
  *)
    exit 0
    ;;
esac
