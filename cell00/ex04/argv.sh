if [ $# -eq 0 ]; then
  echo "No arguments passed."
elif [ $# -gt 3 ]; then
  echo "Too many arguments. Maximum is 3."
else
  for i in "$@"; do
    echo "Argument: $i"
  done
fi

