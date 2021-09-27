<h1 align=center><strong>b👀merang</strong></h1>

In June 2021 [Germany passed new security laws](https://www.spiegel.de/netzwelt/netzpolitik/bundestag-genehmigt-staatstrojaner-fuer-alle-a-d01006d4-a530-41c9-ad69-21a3990acfa8) which allow authorities to utilize "governmental" [trojans](https://en.wikipedia.org/wiki/Trojan_horse_(computing)) to spy on the broad public so I decided to build a small honey-pot defense service. The boomerang server sets up a trap to phish potential sniffers. The victim is being contacted via mail with the attacker's header information. Everyone can download and install boomerang without any programmatic experience or need for SMTP servers or providers and can run on Windows/Linux/MacOS locally or server side.

## Dependencies
📌 [npm](https://www.npmjs.com/)   
📌 [node.js](https://www.npmjs.com/package/sendmail)    
📌 [node-sendmail](https://www.npmjs.com/package/sendmail)  

## Features
🍯 Sets up a trap service   
📯 Broadcasts alerts via mail (no smtp information needed)   
🐧 OS friendly

<br>


# Usage
For Windows download the repository and run the `setup.bat`.

On UNIX like systems (Ubuntu) run a prompt setup
```bash
wget -O - https://b0-b.github.io/boomerang-server/setup.sh | bash
```
This will install all dependencies and trigger the service.
Follow the instructions in the console
```
~/boomerang-server$ node boomerang

                      GUIDE

        1] Copy the following text
        --------- copy below ---------
        wallet keys & cash database
        Link: http://HOST:8080
        Password: wncjxuuvvp
        ---------- copy end ----------
        or copy a custom text to clipboard.

        2] Create for instance a new file "wallet.txt" on 
        your desktop and paste the text there.
        Save and close - the trap is set.
```

The generated text includes sensitive looking information and a pseudo generated password to draw the Hacker's maximum attention. If anyone accesses this link the specified mail will receive a mail with header data. Note: It is possible that the mail will be moved to the spam folder gmail addresses were tested successfully.

<br>

# Spoothing
It is straight forward to spooth the link like running another server or hide the same server behind a domain e.g. mydomain.com which redirects to the link. This will ensure alert triggering as well. 

