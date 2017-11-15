---
title: Installation
order: 1
page: guides
---

This post will guide you on how to get installed **NextEPC** with your environment. To date, **NextEPC** has been tested on GNU/Linux distributions(Debian, Ubuntu, CentOS, Fedora, OpenSUSE), FreeBSD, and Mac OS X.



* ## Ubuntu

To get the latest Ubuntu version, please visit the official Ubuntu website: [https://www.ubuntu.com/download/](https://www.ubuntu.com/download/). 

* ### Install with a Package Manager

The Nextepc package is available on the recent versions of Ubuntu.

```bash
sudo add-apt-repository ppa:acetcom/nextepc
sudo apt-get update
sudo apt-get install nextepc
```


* ### Uninstall NextEPC

```bash
sudo apt-get purge nextepc-core
```

* ## Debian, CentOS, Fedora, OpenSUSE, FreeBSD, and Mac OS X

For these OS, you should build Nextepc from the code. First clone this [repository](https://github.com/acetcom/nextepc.git) and then follow instructions described in the [documentation](https://nextepc.org/docs/). 

* ### [FreeBSD](https://nextepc.org/docs/build/1-freebsd)
* ### [Mac OS X](https://nextepc.org/docs/build/2-macosx)
* ### [CentOS](https://nextepc.org/docs/build/3-centos)
* ### [Fedora](https://nextepc.org/docs/build/4-fedora)
* ### [Ubuntu](https://nextepc.org/docs/build/5-ubuntu)
