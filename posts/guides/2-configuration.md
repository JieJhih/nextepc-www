---
title: Configuration
order: 2
page: guides
---

In LTE, there are tons of configurable parameters. This page will guide you to set essential parameters up. The configuration consists of two parts: IP network connectivity and LTE network settings.

## 1. IP Connectivity between Network Entities

The minimum requirement of having IP connectvity is to add a route for UE to have Internet connectivity.  

By default, a LTE UE will receive a IP address with the network address of 45.45.0.0/16 or cafe::0/64. If you have a [NAT](https://en.wikipedia.org/wiki/Network_address_translation) router (e.g., wireless router, cable modem, etc), the LTE UE can reach Internet in uplink, but it cannot in downlink. It's because the NAT router has no idea on these IP addresses, so adding a route is required. Please refer to the user manual to know how to add a static route in your router.

Add a route of both 45.45.0.0/16 and cafe::0/64 to go the PGW IP address. For example, a command for Linux will be:

```bash
sudo ip route add 45.45.0.0/16 via <PGW IP address>
sudo ip route add cafe::0/64 via <PGW IP address>
```

## 2. LTE Network Settings

By default, LTE PLMN and TAC are set as shown in the following:

```yaml
mme:
    gummei: 
      plmn_id:
        mcc: 001
        mnc: 01
      mme_gid: 2
      mme_code: 1
    tai:
      plmn_id:
        mcc: 001
        mnc: 01
      tac: 12345
```

The LTE EnodeBs need to be set to use the same values of PLMN and TAC in NextEPC. If you want to change them, please modifiy in `/etc/nextepc/mme.conf`.


After changing conf files, please restart NextEPC daemons.

```bash
systemctl restart nextepc-mmed
```

