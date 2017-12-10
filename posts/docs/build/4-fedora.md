---
title: Fedora
order: 24
page: docs
---

## Fedora 26

Install the depedencies for building the source
```bash
sudo dnf -y install git gcc flex bison autoconf libtool lksctp-tools-devel \
     libidn-devel gnutls-devel libgcrypt-devel openssl-devel \
     cyrus-sasl-devel mongo-c-driver-devel mongodb-server
```

Compile and install NextEPC.
```bash
autoreconf -iv
./configure --prefix=`pwd`/install
make -j `nproc`
make install
```

Setup your network.
```bash
sudo ip tuntap add name pgwtun mode tun
sudo ip addr add 45.45.0.1/16 dev pgwtun
sudo ip link set pgwtun up
```

Run MongoDB server.
```bash
mkdir -p data/db
mongod --dbpath data/db
```

Check Installation
```bash
./test/testepc
```

Run NextEPC.
```bash
./nextepc-epcd
```
