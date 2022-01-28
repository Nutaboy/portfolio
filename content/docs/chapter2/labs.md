---
title: Hands On
type: book
date: 2019-05-05T00:00:00+01:00

# Prev/next pager order (if `docs_section_pager` enabled in `params.toml`)
weight: 8
---

## LAB

Install cisco packet tracer:

FFHS benutzt ausschliesslich Version 7.2.1, auch für Modulprüfungen.

https://amanox.sharepoint.com/:f:/g/Engk0-GKymBGppemNMZ2V20B7UjGTGvSd3Yffqh3aFvQUA?e=XfWoNS


Guidelines for the Tasks:

Bottom left are the devices you can add to your network.

Switch between realtime and simulation mode in the bottom right corner. You can inspect and follow packets in the simulation mode (good for troubleshooting). You can also fast-forward in the bottm left corner, which is useful when restarting devices or waiting for convergence.

Quick tutorial:

1 leftclick to inspect a device (configure, tools etc..)
Inside the inspection window, you can power on/off devices. Remove components with rightclick + hold and add new with leftclick + hold.


Hardware to use:

Switch: 2960

Router: 4321

Access Point: AP-PT

Clients: Laptop, PC, Printer

Servers: Server

Black connection cables

To state the obvious: connect Gb ports with Gb ports and FastEthernet with FastEthernet.



After installing and logging in to the application, try the following tasks to get a feel for the software:

Task 1:

Create a network with just a switch and 2 clients (laptop and PC).

The clients should be able to ping eachother.


Task 2:

Expand the network with a DHCP server. The clients should get an IP from your defined DHCP pool.


Task 3:

Expand the network with a router and place the DHCP server in another subnet. The clients and the server should be in different subnets. Configure your devices correctly, and your clients should still be able to get an IP-Address from the DHCP server.

(hint: you may have to use the CLI -> google ;-) )


Task 4:

Expand the network with a webserver, which you place in the same subnet the DHCP server resides (call it the internal server subnet). Can your clients access the website?



Task 5:

Expand your serverfarm with a DNS server. Give all your servers a name and check, if your clients can ping them with just the name. Can you open the website with the name now?



Task 6:

Expand your network with an access point (AP). Connect a new, additional laptop to the client subnet via the AP.

(hint: you may have to change some hardware on the virtual laptop)



Task 7:

1. Add an additional router, connect it to the switch in the internal servers subnet.
2. Add a new switch and connect it to the new router.
3. Add a printer and connect it to the new switch.
4. Create a DNS record for the printer.

Goal: Clients and servers should be able to ping the printer.


Task 8:

tbd (DMZ + FW)


Task 9:

tbd (More security)


Task 10:

tbd (Whats left)





Big lab:

Create a network plan with the following criteria:

    - 4 networks
        * Office network
            § Employee subnet
            § Printer subnet
            § IT subnet
        * Production (special secured network)
        * DMZ
        * Internal servers
    - Each network should have 1'000 usable addresses
    - subnets are /24
    - Router or firewall to connect the networks
    - Trafficrestrictions (with usage of a firewall)
        * IT -> Production: ssh, rdp
        * Office -> DMZ: https, DNS
        * Office -> Production: Drop all
        * Production <-> DMZ: Drop all
        * Production & Office <-> internal servers: https, DNS, DHCP
        * IT -> Internal server: Allow any
        * Production -> Internet: Drop any
    - Servers:
        * DNS
        * DHCP
        * Webserver
        * Mailserver
    - DHCP configuration according to your created networks
    - Internal websites:
        * Pibs.crop.biz
        * Intranet.corp.biz
        * ...
    - External websites:
        * Pibs.amanox.ch

Create the networkconfiguration in the Cisco packet tracer.

Check the configuration.

Do clients get an IP-adr. from the DHCP pool?

Can clients open internal and external websites?

Does the DNS- Nameresolution work?

(Out of scope: Do the Firewall rules filter traffic?)


Additional tasks:

1. Make clients go to an internal website when they request google.com
2. ..
3. ..



Not relevant for this lab, but:

Where are the weaknesses and threats in this configuration?

How can you minimize/eliminate them?
	
