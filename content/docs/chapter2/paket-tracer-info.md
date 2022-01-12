---
title: Intro Paket Tracer
type: book
date: 2019-05-05T00:00:00+01:00

# Prev/next pager order (if `docs_section_pager` enabled in `params.toml`)
weight: 7
---

### LAB

Install cisco packet tracer:
FFHS benutzt ausschliesslich Version 7.2.1, auch für Modulprüfungen.

### Modulaufgabe

Task: Create a network plan regarding the following requirements:

    - 4 Networks
        ○ Office (network for normal employees)
            * Subnet for employees
            * Subnet for printers
            * Subnet for IT-employees
        ○ Production (secured network)
        ○ DMZ
        ○ Internal servers
    - Each network should have at least 1000 usable addresses
    - Subnets are /24
    - Firewall to connect networks
    - Traffic restrictions
        ○ IT -> Production according to IP/Port-List
        ○ Office -> DMZ according to IP/Port-List
        ○ Office -> Production according to IP/Port-List
        ○ Production <-> DMZ drop
        ○ Production & Office <-> internal servers according to IP/Port-List
        ○ IT -> Internal servers allow any
        ○ Production -> Internet drop any
        ○ rest -> Internet according to IP/Port-List
    - Servers
        ○ DNS
        ○ DHCP
        ○ Webserver
        ○ Mailserver
    - DHCP Configuration according to created network plan
    - Internal websites:
        ○ pibs.corp.biz
        ○ intranet.corp.biz
        ○ ..
    - External website:
        ○ pibs.amanox.ch

Create the network configuration according to the network plan in Cisco Packet Tracer.

Check the configuration.

Do clients get an IP-address from the defined DHCP pools?

Can clients open internal websites?

Is the name-resolution working?

Is traffic restricted at the firewall?

After:

Configure the DNS server to lead you to the internal website intranet.corp.biz when requesting google.com

Not relevant for Cisco Packet Tracer but:

Where are the weakpoints in your network? How can you mitigate them?


#### IP/Port-Liste
Firewall is configured as drop any.

Office <-> internal servers:

    * http
    * https
    * dns
    * dhcp
    * mailserver

Production <-> internal server:

    * http
    * https
    * dns
    * dhcp
    * mailserver

Office <-> DMZ

    * http
    * https

Production <-> DMZ

    * drop any

DMZ <-> Internal servers

    * drop any

IT <-> internal server

    * allow any

IT <-> DMZ

    * ssh
    * http
    * https
    * rdp
    * ...



### Basic commands

## Work in Progress