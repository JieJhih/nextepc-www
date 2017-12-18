---
title: Installation
order: 1
page: guides
---

This post will guide you on how to get installed **NextEPC** with your environment. To date, NextEPC has been tested on GNU/Linux distributions(Debian, Ubuntu, CentOS, Fedora, OpenSUSE), FreeBSD, and Mac OS X.



## Ubuntu

To get the latest Ubuntu version, please visit the official Ubuntu website: [https://www.ubuntu.com/download/](https://www.ubuntu.com/download/). 

* ### Install with a Package Manager

The Nextepc package is available on the recent versions of Ubuntu.

```bash
sudo add-apt-repository ppa:acetcom/nextepc
sudo apt-get update
sudo apt-get install nextepc
```
This will create a virtual network interface named as *pgwtun*. It is automatically removed by uninstalling NextEPC.

```markdown
ifconfig pgwtun
pgwtun    Link encap:UNSPEC  HWaddr 00-00-00-00-00-00-00-00-00-00-00-00-00-00-00-00  
          inet addr:45.45.0.1  P-t-P:45.45.0.1  Mask:255.255.0.0
          inet6 addr: fe80::50f6:182c:5aa3:16bb/64 Scope:Link
          inet6 addr: cafe::1/64 Scope:Global
          ...
```



* ### Uninstall NextEPC

```bash
sudo apt-get purge nextepc-core
```

You may need to remove manually /var/log/nextepc unless it is empty.
```bash
sudo rm -Rf /var/log/nextepc
```


## Debian, CentOS, Fedora, OpenSUSE, FreeBSD, and Mac OS X

For these OS, you should build NextEPC from the code. First clone this [repository](https://github.com/acetcom/nextepc.git) and then follow instructions described in the [documentation](http://nextepc.org/docs/). 

* ### [FreeBSD](http://nextepc.org/docs/build/1-freebsd)
* ### [Mac OS X](http://nextepc.org/docs/build/2-macosx)
* ### [CentOS](http://nextepc.org/docs/build/3-centos)
* ### [Fedora](http://nextepc.org/docs/build/4-fedora)
* ### [Ubuntu](http://nextepc.org/docs/build/5-ubuntu)
