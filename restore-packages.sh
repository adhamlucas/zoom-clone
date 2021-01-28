#!/usr/bin/env bash
rm -rf **/**/node_modules

for item in `ls`:
do
  ITEM_NAME=${item%:*}
  if [[ -d $ITEM_NAME ]]
  then
    echo $ITEM_NAME
    cd $ITEM_NAME
    npm ci --silent
    cd ..
  fi

done