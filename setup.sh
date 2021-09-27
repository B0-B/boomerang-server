#!/bin/bash
function highlight () {
	printf "\n\t\033[1;33m$1\033[1;35m\n"; sleep 1
}
highlight '         b👀merang setup'
sudo apt install nodejs npm &&
npm install &&
v=$(perl -ne 'if (/"version": "(.*)"/) { print $1 . "\n" }' package.json)
echo "Successfully installed boomerang $v"