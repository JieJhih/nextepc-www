---
title: Configuration
order: 3
page: guides
---

In LTE, there are tons of configurable parameters. This page will guide you to set essential parameters up. The configuration consists of three parts: IP network connectivity, LTE network settings and Subscriber registering.

## 1. IP Connectivity between Network Entities

The minimum requirement of having IP connectvity is to modify the configuration files of MME and SGW. Once NextEPC has been installed, you can find [YAML](http://yaml.org/)-format configuration files in `/etc/nextepc/*.conf`. (Note that `/etc/nextepc/nextepc.conf` is just sample configuration. It will not be affecting anything).

Before setting up, please decide a network interface to run NextEPC, and then the IP address of the interface needs to be recorded in the configuration files (Note that the IPv6 support requires v0.3.0 or higher).

### Modification of MME config

Open `/etc/nextepc/mme.conf` file, and find an item in mme &rarr; s1ap. Please set your IP address with putting `addr:` keyword.

```yaml
mme:
    freeDiameter: mme.conf
    s1ap:
      addr: <ip address>
...
```

Save and exit.

### Modification of SGW config

Open `/etc/nextepc/sgw.conf` file, and find an item in sgw &rarr; gtpu. Please set your IP address with putting `addr:` keyword.

```yaml
sgw:
    gtpc:
      addr: 127.0.0.2
    gtpu:
      addr: <ip address>
...
```

Save and exit.


### Adding a route for UE to have Internet connectivity

By default, a LTE UE will receive a IP address with the network address of 45.45.0.0/16. If you have a [NAT](https://en.wikipedia.org/wiki/Network_address_translation) router (e.g., wireless router, cable modem, etc), the LTE UE can reach Internet in uplink, but it cannot in downlink. It's because the NAT router has no idea on 45.45.0.0/16, so adding a route is required. Please refer to the user manual to know how to add a static route in your router.

Add a route of both 45.45.0.0/16 and cafe::0/64 to go the PGW IP address. For example, a command for Linux will be:

```bash
sudo ip route add 45.45.0.0/16 via <PGW IP address>
sudo ip route add cafe::0/64 via <PGW IP address>
```

If you have no NAT router, there is another option for you. `iptables` can solve the problem. You execute the following command in NextEPC installed host.

Note that you may need to change `eth0` with your interface which is connected to internet line.

```bash
sudo sh -c "echo 1 > /proc/sys/net/ipv4/ip_forward"
sudo iptables -t nat -A POSTROUTING -o eth0 -j MASQUERADE
sudo iptables -I INPUT -i pgwtun -j ACCEPT
```

## 2. LTE Network Settings

### PLMN and TAC

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


### Restarting MME and SGW.

After changing conf files, please restart NextEPC daemons.

```bash
systemctl restart nextepc-mmed
systemctl restart nextepc-sgwd
```

## 3. Register a subscriber

Open _http://localhost:3000_. Login with **admin**. Later, you can change the password in _Account_ Menu.

```markdown
  Username : admin
  Password : 1423
```

Using Web UI, you can add a subscriber without a Mongo DB client. 

```markdown
  * Go to Subscriber Menu.
  * Click `+` Button to add a new subscriber.
  * Fill the IMSI, security context(K, OPc, AMF), and APN of the subscriber.
  * Click `SAVE` Button
```

This addition affects immediately NextEPC without restaring any daemon.

