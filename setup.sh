#!/bin/bash
function highlight () {
	printf "\n\t\033[1;33m$1\033[1;35m\n"; sleep 1
}
function caddy () {
    local pid=$!
    declare -a ani=("   🛒" "  🛒 " " 🛒  " "🛒   " "     ")
    declare -i id
    id=0
    while [ "$(ps a | awk '{print $1}' | grep $pid)" ]; do
        id=$id%5
        #echo "$id ${ani[$id]}"
        printf "[\033[1;35m${ani[$id]}\033[0m]: $1\r"
        id=$((id+1))
        sleep .15
    done
}
function install () {
    cd $HOME
    sudo apt install git &&
    git clone https://github.com/B0-B/boomerang-server.git && cd boomerang-server &&
    sudo apt install nodejs npm -y &&
    npm install
}

highlight '         b👀merang setup\n'

# install
sudo apt update -y
wait
v=$(perl -ne 'if (/"version": "(.*)"/) { print $1 . "\n" }' package.json) &&
install &> /dev/null & caddy "installing boomerang" && echo "Successfully installed boomerang $v" &&

# service
highlight 'start the service? (y/n) \n'
read s
if [[ $s == "y" ]];then
    node boomerang
else
    highlight 'boomerang setup finished.'
fi
exit 1