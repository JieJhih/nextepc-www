---
title: Configuration
order: 2
page: guides
---

## Configuration of IP connectivity

Configuration files are located `/etc/nextepc` directory. 

Let's modify first the `/etc/nextepc/mme.conf` to set your IP address which is connected to eNodeB. For example, if your IP address is 192.168.0.6, both MME.NETWORK.S1AP_IPV4 and SGW.NETWORK.GTPU_IPV4 are changed as follows.
```json
  MME :
  {
    NETWORK :
    {
      S1AP_IPV4: "192.168.0.6",
      GTPC_IPV4: "127.76.0.1"
    }
  },
  SGW :
  {
    NETWORK :
    {
      GTPC_IPV4: "127.76.0.2",
      GTPU_IPV4: "192.168.0.6"
    }
  }
```

And then, modify `/etc/nextepc/sgw.conf` to set your IP address. SGW.NETWORK.GTPU_IPV4 is updated with 192.168.0.6.
```json
  SGW :
  {
    NETWORK :
    {
      GTPC_IPV4: "127.76.0.2",
      GTPU_IPV4: "192.168.0.6"
    }
  }
```

Finally, you should modify the routing table of the router, which is connected to the nextepc installed host. The following command is just a sample. The configuration method for each router will be different.
```bash
sudo ip route add 45.45.0.0/16 via 192.168.0.6
```

## Update GUMMEI and TAI

The followings are the **GUMMEI** and **TAI** of the *MME* currently set to Default. Your *eNodeB* will also have a **PLMN ID** and **TAC** set. Refer to these parameters to change the setting of MME or eNodeB.

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

For reference, MME can set several GUMMEI and TAI as **JSON array notation** as follows.

```json
GUMMEI:
[
  {
    PLMN_ID : 
    {
      MCC : "001",
      MNC : "01"
    }
    MME_GID : 2,
    MME_CODE : 1
  },
  {
    PLMN_ID : 
    {
      MCC : "005",
      MNC : "05"
    }
    MME_GID : 5,
    MME_CODE : 6
  },
]
TAI:
[
  {
    PLMN_ID :
    {
      MCC: "001",
      MNC: "01",
    }
    TAC: 12345
  },
  {
    PLMN_ID :
    {
      MCC: "005",
      MNC: "05",
    }
    TAC: 6789
  }
]
```

## Restart MME and SGW.

```bash
systemctl restart nextepc-mmed
systemctl restart nextepc-sgwd
```

Now, S1-Setup is ready! 
