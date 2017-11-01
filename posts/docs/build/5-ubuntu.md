---
title: Ubuntu
order: 25
page: docs
---

## Ubuntu 14.04 (Trusty)

_Ubuntu 14.04_ release does not have the **Mongo C Driver** provided by [http://mongoc.org](https://mongoc.org). You have to compile and install it manually

#
First, install the following packages except Mongo C Driver.

```bash
sudo apt-get -y install git gcc flex bison make autoconf libtool pkg-config libsctp-dev libssl-dev libgnutls-dev libidn11-dev mongodb
```

And then, compile and install Mongo C Driver like the followings.
```bash
sudo apt-get -y install g++ libsasl2-dev
tar xzf mongo-c-driver-1.8.0.tar.gz
cd mongo-c-driver-1.8.0
./configure --disable-automatic-init-and-cleanup
make
sudo make install
sudo ldconfig
```

Finally, you can compile and install the NextEPC as described in the Installation Guide.

## Ubuntu 16.04 (Zenial), 17.04 (Zesty), 17.10 (Artful)

```bash
sudo apt-get -y install autotools-dev pkg-config git flex bison libsctp-dev libgnutls28-dev libgcrypt-dev libssl-dev libmongoc-dev libbson-dev mongodb
```
