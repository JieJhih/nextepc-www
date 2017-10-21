---
title: Network Configuration
order: 4
page: guides
---

NextEPC consists of five nodes such as _MME, SGW, PGW, HSS and PCRF_. Basically, each node can be installed in a physically separate host or in the same host.

We will run these five nodes that make up NextEPC in a **Single Host**. The reason is why it is the easiest way to understand how to configure NextEPC network.

## IP Configuration

In order to run _MME, HSS, SGW, PGW, and PCRF_ on a **Single Host**, IP address is set by using **IP aliasing**.

```bash
sudo ifconfig lo:hss 10.1.35.214 netmask 255.255.255.255 up
sudo ifconfig lo:mme 10.1.35.215 netmask 255.255.255.255 up
sudo ifconfig lo:sgw 10.1.35.216 netmask 255.255.255.255 up
sudo ifconfig lo:pcrf 10.1.35.218 netmask 255.255.255.255 up
sudo ifconfig lo:pgw 10.1.35.219 netmask 255.255.255.255 up
```

## Setup for Data Path

Use the **TUN Driver** to make _Data Path_ to be used by the **PGW**.

```bash
sudo ip tuntap add name pgwtun mode tun
sudo ifconfig pgwtun 45.45.0.1/16 up
```

## Testing Network Configuration

Once you are done, run the testing script.
```bash
./test/testepc
```
You can see the simulated packet through **Wireshark**.  _(FILTER : s1ap || gtpv2 || diameter)_

## Internet Connection

A configuration file is located `etc/nextepc.conf` from the installed paths. If you need to connect internet, set MME.NETWORK.S1AP_IPV4 and SGW.NETWORK.GTPU_IPV4 to your IP address which is connected with eNodeB. for example, your IP address is 192.168.0.6,

```json
  MME :
  {
    NETWORK :
    {
      S1AP_IPV4 : "192.168.0.6",
      GTPC_IPV4: "10.1.35.215",
    }
  }
  SGW :
  {
    NETWORK :
    [
      {
        GTPC_IPV4: "192.168.0.6",
        GTPU_IPV4: "10.1.35.216",
      }
    ]
  }
```

And then, you should modify the routing table of the router connected to the PGW.
```bash
sudo route add -net 45.45.0.0 192.168.0.6
```
