---
title: Configuration
order: 2
page: guides
---

In LTE, there are tons of configurable parameters. This page will guide you to set essential parameters up. The configuration consists of two parts: IP network connectivity and LTE network settings.

## 1. IP Connectivity between Network Entities

The minimum requirement of having IP connectvity is to modify the configuration files of MME and SGW. Once NextEPC has been installed, you can find [JSON](https://www.json.org/)-format configuration files in `/etc/nextepc/*.conf`.

Before setting up, please decide a network interface to run NextEPC, and then the IP address of the interface needs to be recorded in the configuration files (Note that the IPv6 support requires v0.3.0 or higher).

### Modification of MME config

Open `/etc/nextepc/mme.conf` file, and find an item in MME &rarr; NETWORK &rarr; S1AP_IPV4. Please set your IP address for S1AP_IPV4 putting double quotes around it.  

```json
  MME :
  {
    NETWORK :
    {
      S1AP_IPV4: "<ip address>",
      GTPC_IPV4: "127.76.0.1"
    }
  },
```

Similarily, find the next item in SGW &rarr; NETWORK &rarr; GTPU_IPV4 in the same file. Please set your IP address for GTPU_IPV4 putting double quotes around it, again.  

```json
  SGW :
  {
    NETWORK :
    {
      GTPC_IPV4: "127.76.0.2",
      GTPU_IPV4: "<ip address>"
    }
  }
```

Save and exit.


### Modification of SGW config

Open `/etc/nextepc/sgw.conf` file, and find an item in SGW &rarr; NETWORK &rarr; GTPU_IPV4. Please set your IP address for GTPU_IPV4 putting double quotes around it.

```json
  SGW :
  {
    NETWORK :
    {
      GTPC_IPV4: "127.76.0.2",
      GTPU_IPV4: "<ip address>"
    }
  }
```

Save and exit.


### Adding a route for UE to have Internet connectivity

By default, a LTE UE will receive a IP address with the network address of 45.45.0.0/16. If you have a [NAT](https://en.wikipedia.org/wiki/Network_address_translation) router (e.g., wireless router, cable modem, etc), the LTE UE can reach Internet in uplink, but it cannot in downlink. It's because the NAT router has no idea on 45.45.0.0/16, so adding a route is required. Please refer to the user manual to know how to add a static route in your router.

Add a route of 45.45.0.0/16 to go the ip address mentioned above. For example, a command for Linux will be:

```bash
sudo ip route add 45.45.0.0/16 via <ip address>
```

## 2. LTE Network Settings

### PLMN and TAC

By default, LTE PLMN and TAC are set as shown in the following:

```json
GUMMEI:
{
  PLMN_ID : 
  {
    MCC : "001",
    MNC : "01"
  }
  MME_GID : 2,
  MME_CODE : 1
},
TAI:
{
  PLMN_ID :
  {
    MCC: "001",
    MNC: "01",
  }
  TAC: 12345
}
```

The LTE EnodeBs need to be set to use the same values of PLMN and TAC in NextEPC. If you want to change them, please modifiy in `/etc/nextepc/mme.conf` and `etc/nextepc/sgw.conf`.


### Restarting MME and SGW.

After changing conf files, please restart NextEPC daemons.

```bash
systemctl restart nextepc-mmed
systemctl restart nextepc-sgwd
```

