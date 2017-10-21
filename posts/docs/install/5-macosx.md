---
title: Mac OS X
order: 25
page: docs
---

## OS X El Capitan 10.11.6

Setup your network.
```bash
sudo ifconfig lo0 alias 10.1.35.214 netmask 255.255.255.255
sudo ifconfig lo0 alias 10.1.35.215 netmask 255.255.255.255
sudo ifconfig lo0 alias 10.1.35.216 netmask 255.255.255.255
sudo ifconfig lo0 alias 10.1.35.218 netmask 255.255.255.255
sudo ifconfig lo0 alias 10.1.35.219 netmask 255.255.255.255
```

According to [user-land SCTP](https://github.com/sctplab/usrsctp/blob/master/Manual.md), it is not working with NAT-box involved. In our testing, SCTP does not work if there is an IP alias in the interface. As such, an interface with only one IP address is required. For example, suppose you receive 192.168.0.6 from DHCP on the en0 interface. Then, modify `nextepc.conf` as follows.

```
  MME :
  {
    NETWORK :
    {
      S1AP_IPV4 : "192.168.0.6",
      GTPC_IPV4: "10.1.35.215",
    }
  },
  SGW :
  {
    NETWORK :
    [
      {
        GTPC_IPV4: "10.1.35.216",
        GTPU_IPV4: "192.168.0.6",
      }
    ]
  }
```

Enable IP forwarding.
```bash
sudo sysctl -w net.inet.ip.forwarding=1
```

Run MongoDB server.
```bash
sudo mkdir -p /data/db
sudo mongod
```

Install TUN/TAP driver
- You can download it from [http://tuntaposx.sourceforge.net/](http://tuntaposx.sourceforge.net/)

Install the depedencies for building the source
```bash
sudo brew install libusrsctp gnutls libgcrypt libidn mongo-c-driver mongdb
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
