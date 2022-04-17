# script reference: https://stackoverflow.com/questions/3878624/how-do-i-programmatically-determine-if-there-are-uncommitted-changes
# bash colors reference: https://misc.flogisoft.com/bash/tip_colors_and_formatting
# tput colors reference: https://linux.101hacks.com/ps1-examples/prompt-color-using-tput/

# Update the index
git update-index -q --ignore-submodules --refresh
err=0

COLOR_BOLD="$(tput bold)"
COLOR_ERROR="$(tput setaf 3)"
COLOR_REST="$(tput sgr0)"

# Disallow unstaged changes in the working tree
if ! git diff-files --quiet --ignore-submodules --
then
  printf >&2 "%s%s%s\n" "${COLOR_ERROR}Cannot$1: You have ${COLOR_BOLD}unstaged changes.${COLOR_REST}"
  git diff-files --name-status -r --ignore-submodules -- >&2
  err=1
fi

# Disallow uncommitted changes in the index
if ! git diff-index --cached --quiet HEAD --ignore-submodules --
then
  printf >&2 "%s%s%s\n" "${COLOR_ERROR}Cannot$1: Your index ${COLOR_BOLD}contains uncommitted changes.${COLOR_REST}"
  git diff-index --cached --name-status -r --ignore-submodules HEAD -- >&2
  err=1
fi

if [ $err = 1 ]
then
  printf >&2 "%s%s%s\n" "Please commit or stash them."
  exit 1
fi
