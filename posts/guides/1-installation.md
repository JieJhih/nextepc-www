---
title: Installation
order: 1
page: guides
---

This post will guide you on how to get installed with **NextEPC**. To date, **NextEPC** has been compiled and tested on GNU/Linux distributions(Debian, Ubuntu, CentOS, Fedora, OpenSUSE), FreeBSD, and Mac OS X.

We will describe this guide using **Ubuntu**. You'll need to install Ubuntu if you don't have it installed already. To get the latest Ubuntu version, please visit the official Ubuntu website: [https://www.ubuntu.com/download/](https://www.ubuntu.com/download/). 

## Install with a Package Manager

The nextepc package is available on recent versions of Ubuntu.

```bash
sudo add-apt-repository ppa:acetcom/nextepc
sudo apt-get update
sudo apt-get install nextepc
```

That's it!

## Uninstall NextEPC

```bash
sudo apt-get purge nextepc-core
```
