---
title: Fedora
order: 24
page: docs
---

## Fedora 26

#
Install the depedencies for building the source
```bash
sudo dnf -y install git gcc flex bison autoconf libtool mongodb-server mongo-c-driver-devel lksctp-tools-devel libidn-devel gnutls-devel libgcrypt-devel openssl-devel cyrus-sasl-devel snappy-devel libyaml-devel iproute
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
sudo ip addr add cafe::1/64 dev pgwtun
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

Update Configuration (e.g LTE PLMN and TAC)
```bash
vi `pwd`/install/etc/nextepc/nextepc.conf
```

Run NextEPC.
```bash
./nextepc-epcd
```
