---
title: Internet Protocol
type: book
date: 2019-05-05T00:00:00+01:00

# Prev/next pager order (if `docs_section_pager` enabled in `params.toml`)
weight: 4
draft: true
---

## IPv4-Notation
The IP address is made up of 4 octets of bits, separated with a dot. 

00000000.00000000.00000000.00000000 - 11111111.11111111.11111111.11111111

The IP-address is always assigned to a device participating in the network.

There are always 2 components that need to be configured for a device to communicate over the network: The IP-adr and the networkmask.

### Networkmask
The networkmask tells the device that inspects the packet (router) if the destination is in the same or in another network.  

Take the IP 192.168.0.12 as an example.

If the networkmask (also called subnetmask) is 255.255.255.0, the network address would be 192.168.0.0

The network-address is the logical AND operation of the IP-address and the networkmask.

The bitwise AND operation would look like this:

IPv4-Adr.: &ensp; 11000000.10110000.00000000.00001100

netmask: &ensp;&ensp; 11111111.11111111.11111111.00000000 AND
___
Networkadr: 11000000.10110000.00000000.00000000

The highest IP-adr. in this network would be 192.168.0.254, as the first and last addresses are reserved and normally the first usable IP-address is used for the gateway (more on the gateway later).

192.168.0.0 -> Networkadr.

192.168.0.255 -> Broadcast

192.168.0.1 -> Gateway (router)

192.168.0.2 - 192.168.0.254 -> usable addresses for endpoints

The broadcast address is the address to which (destination) any device can send packets to, and every device will forward this packet out of every network-connected port it has. It's basically a message to everyone.


### Private IPv4-Address ranges
The other notation for IPv4-addresses is the so called CIDR-notation.

In this notation, the subnetmask bits which are 1's are summed up and put behind the network address in decimal. 192.168.0.0/24 equals the networkadr. and netmask from above. See for yourself and count the netmask bits.

10.0.0.0/8 would be

00001010.00000000..

11111111.00000000..

Task: Write the networkmask for the CIDR-notation 155.25.17.230/19

11111111.11111111.11100000.00000000


As every network needs an addressspace, some addresses have been reserved as private addresses which cannot be used in the internet. Those are:

* 10.0.0.0/8
* 172.16.0.0/12
* 192.168.0.0/16

Questions: How many usable addresses are in those networks? What does the netmask look like?


### IPv4-Address classes

https://www.tutorialspoint.com/de/ipv4/ipv4_address_classes.htm

## Subnets
Subnets are a way to segment or split up a network. The basic 192.168.0.0/24 network is already a subnet of the bigger 192.168.0.0/16 private network.

Networks are subnetted by making different subnetmasks for different networks.
To split the 192.168.0.0/24 network up into two subnets, the new networkadresses would be:

192.168.0.0/25 and

192.168.0.128/25

Why isn't there just 1 Network for a whole company? Let's pretend thats how its done:

A company has different departements, let's say accounting, sales, research, production, human resources, IT ...

In a flat network with only subnet, everyone could address any host/endpoint. Why should employees from accounting be able to access a business critical production server? Normally those departements are split up in different subnets. If we connect all those subnets to a router, the network is still flat, but now has a single point of convergence to connect to other subnets. This single points can then be used as a sort of controlling point for all subnets. Thats what firewalls essentially are. 

Task:

Create 4 subnets with the following requirements based on the network 172.16.0.0/23 and list the network address, broadcast address as well as the number of usable addresses for hosts.
* 2 Networks with 60 hosts (usable IP-adresses)
* 1 network with 120 hosts
* 1 network with 250 hosts


Answer: Starting with the biggest:

- 250 hosts: 172.16.0.0/24, broadcast 172.16.0.255, usable: 254
- 120 hosts: 172.16.1.0/25, broadcast 172.16.1.127, usable: 126
- 60 hosts: 172.16.1.128/26, broadcast 172.16.1.191, usable: 62
- 60 hosts: 172.16.1.192/26, broadcast 172.16.1.255 , usable: 62
