---
title: FreeBSD
order: 21
page: docs
---

## FreeBSD Release 11.1

Setup your network.
```bash
sudo ifconfig em0 alias 10.1.35.214 netmask 255.255.255.255
sudo ifconfig em0 alias 10.1.35.215 netmask 255.255.255.255
sudo ifconfig em0 alias 10.1.35.216 netmask 255.255.255.255
sudo ifconfig em0 alias 10.1.35.218 netmask 255.255.255.255
sudo ifconfig em0 alias 10.1.35.219 netmask 255.255.255.255
```

Enable IP forwarding
```bash
sudo sysctl -w net.inet.ip.forwarding=1
```

Run MongoDB server.
```bash
sudo mkdir -p /data/db
sudo mongod
```

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

Run NextEPC.
```bash
sudo ./epcd
```
(this should require sudo due to access `/dev/tun0`)
