---
title: FreeBSD
order: 21
page: docs
---

## FreeBSD Release 11.1

Install the depedencies for building the source
```bash
sudo pkg install git gcc bison gsed pkgconf autoconf automake libtool
sudo pkg install gnutls libgcrypt libidn mongo-c-driver mongdb
```

Compile and install NextEPC.
```bash
autoreconf -iv
./configure --prefix=`pwd`/install
make -j `nproc`
sudo make install
```

Setup your network.
```bash
sudo ifconfig lo0 alias 127.76.0.1 netmask 255.255.255.255
sudo ifconfig lo0 alias 127.76.0.2 netmask 255.255.255.255
sudo ifconfig lo0 alias 127.76.0.3 netmask 255.255.255.255
sudo ifconfig lo0 alias 127.76.0.4 netmask 255.255.255.255
sudo ifconfig lo0 alias 127.76.0.5 netmask 255.255.255.255
```

Enable IP forwarding
```bash
sudo sysctl -w net.inet.ip.forwarding=1
```

Run MongoDB server.
```bash
mkdir -p data/db
mongod --dbpath data/db
```

Check Installation
```bash
sudo ./test/testepc
```

Run NextEPC.
```bash
sudo ./nextepc-epcd
```
(this should require sudo due to access `/dev/tun0`)
