---
title: Web UI
order: 3
page: guides
---

NextEPC has a number of configuration files corresponding to LTE network entities, which are in [YAML](http://yaml.org/) format. The LTE user subcription information of NextEPC is stored and maintained by [Mongo DB](https://www.mongodb.com/). Configuration files, located in `etc/nextepc/*.conf` can be easily modified using a general text editor such as [vi](http://www.vim.org/) or [emacs](https://www.gnu.org/s/emacs/), while managing the subscriber information requires a [Mongo DB client](https://docs.mongodb.com/ecosystem/tools/).

NextEPC provides an alternative management interface for customers to manage their subscriber information in an easy way, that is **Web User Interface**. The following shows how to install the Web UI of NextEPC.

## 1. Install Node.js and NPM

To get the latest [Node.js](https://nodejs.org/) and [NPM](https://www.npmjs.com/), please visit the official Node.js website:
[https://nodesjs.org/en/download/](https://nodesjs.org/en/download/).

Or, you can install [Node.js](https://nodejs.org/) and [NPM](https://www.npmjs.com/) if you're using [Ubuntu](https://www.ubuntu.com):

```bash
sudo apt-get -y install curl gnupg
curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
sudo apt-get -y install nodejs
```

## 2. Obtain the source code

```bash
git clone https://github.com/acetcom/nextepc
```

## 3. Install the dependencies to build the code

```bash
cd nextepc/webui
npm install
```

## 4. Build
```bash
npm run build
```

## 5. Running

```bash
npm run start
```

Now the web server is running on _http://localhost:3000_.

## 6. Login with the default account

Open _http://localhost:3000_. Login with **admin**.

  * Username : admin
  * Password : 1423

Please change the password in _Account_ Menu.

## 7. Register a subscriber

Using Web UI, you can add a subscriber without a Mongo DB client. 

  * Go to Subscriber Menu.
  * Click `+` Button to add a new subscriber.
  * Fill the IMSI, security context(K, OPc, AMF), and APN of the subscriber.
  * Click `SAVE` Button

This addition affects immediately NextEPC without restaring any daemon.

