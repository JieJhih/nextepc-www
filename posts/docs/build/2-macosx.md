---
title: Mac OS X
order: 22
page: docs
---

## OS X El Capitan 10.11.6

#
Install the depedencies for building the source
```bash
sudo brew install mongodb mongo-c-driver libusrsctp gnutls libgcrypt libidn libyaml
```

Compile and install NextEPC.
```bash
autoreconf -iv
./configure --prefix=`pwd`/install
make -j `nproc`
sudo make install
```

Install TUN/TAP driver
- You can download it from [http://tuntaposx.sourceforge.net/](http://tuntaposx.sourceforge.net/)

Setup your network.
```bash
sudo ifconfig lo0 alias 127.0.0.2 netmask 255.255.255.255
sudo ifconfig lo0 alias 127.0.0.3 netmask 255.255.255.255
sudo ifconfig lo0 alias 127.0.0.4 netmask 255.255.255.255
sudo ifconfig lo0 alias 127.0.0.5 netmask 255.255.255.255
```

Enable IP forwarding.
```bash
sudo sysctl -w net.inet.ip.forwarding=1
```

``
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
