#!/bin/sh

set -e

script_name=`basename $0`

usage() {
  echo "usage $script_name [options]"
  echo "options:"
  echo "  -p project_id"
  echo "  -t firebase cli token"
  exit 1
}

# TODO: should be get value with flag, not with option
while getopts p:t: OPT
do
  case $OPT in
    "p" ) project_id="$OPTARG" ;;
    "t" ) token="$OPTARG" ;;
      * ) usage 1>&2
          exit 1 ;;
  esac
done


if [ -z $token -o -z $project_id ]; then
  usage
fi

$(npm bin)/firebase use $project_id
$(npm bin)/firebase deploy --token $token
