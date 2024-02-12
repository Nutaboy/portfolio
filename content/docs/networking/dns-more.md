---
title: Domain Name System & more
type: book
date: 2019-05-05T00:00:00+01:00

# Prev/next pager order (if `docs_section_pager` enabled in `params.toml`)
weight: 6
---

## Domain Name System (DNS) 

DNS (Domain Name System) is one of the most important technologies/services on the internet, as without it the Internet would be very difficult to use.

DNS provides a name to number (IP address) mapping or translation, allowing internet users to use, easy to remember names, and not numbers to access resources on a network and the Internet.


In this tutorial we will cover the basics of DNS starting with why it was developed, what problems it was designed to solve.

### Understanding Why we Need it
The DNS or Domain Name System is a globally distributed directory that ‘resolves’ domain names into IP addresses. Just like a phone directory matches human names with phone numbers, the DNS links domain names to IP addresses of websites. 

In a nutshell, the DNS locates the IP address of a domain name in order to display the website to the user requesting it. This process happens over a series of electronic queries and responses which help retrieve the website. 

The DNS is also a scalable database, which grows as new websites and domain names are added to the internet on a daily basis. It’s reliable and dynamic, and is absolutely integral to the smooth functioning of the internet!

### Host file on Windows PC

The location for the hosts file is normally C\windows\system32\drivers\etc

As network sizes increased the hosts file approach became impractical due to the fact that:

It needed to be stored on each computer
The text file could take a along time to process due to the fact that it was unstructured.
Updates were difficult to manage as all of the computers would need to be given an updated file.
To overcome these (and other) limitations the DNS system was developed.

The DNS system essentially provides for:

A way to organize the names- Domain name structure
Protocols ,services and methods for storing,updating, and retrieving IP addresses for hosts computers.- DNS System
From the perspective of an end user you can consider the DNS system as a structured hosts file.

### Domain Name Structure
The hosts file is simply a list of names and IP addresses with no structure making it difficult to scale to a large number of machines.

The solution is to place the machines into administrative areas known as domains, and arrange the domains in a hierarchy.

This takes the form of a tree like structure that resembles the file system structure found on computers. See Understanding The Domain Name Structure

# DNS System
The DNS system consists of many Domain Name servers that together provide the name to IP address mapping for registered devices (usually servers) on the Internet.

The main DNS severs (root servers) are owned and managed by a variety of different organizations, and are located mainly in the USA.

Here is a list http://www.iana.org/domains/root/servers.

Other companies including ISPs have their own DNS servers which are linked to the root servers in a hierarchical fashion providing a distributed system.

The following video explain both the host file and its problems, and the basics of how DNS works.

<iframe width="803" height="608" src="https://www.youtube.com/embed/Vgc-Yqf_Tt4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Fortunately you don’t need to manage a DNS server or create DNS records to use the Internet.

However you need to have access to a DNS server.

To access a DNS server you will need the IP address of the DNS server.

This is usually supplied to you by your ISP (Internet Service Provider).

Most client computers/devices will be configured to obtain an IP and a DNS server address automatically over DHCP.

### DNS Services- Open DNS and Google DNS
Most Home users will use the DNS severs provided by their ISP via their home router.

However you can use alternative DNS servers like OpenDNS and Google Public DNS. Recently it good quite fames to filter soe request already on the DNS Server of the ISP thats you can also use the one from other providers.

# Basic DNS Concepts
There are many terms that you will see when reading about DNS.

Terms like zones, zone files, caching server etc.

This video is a good introduction to understanding those basic terms.

<iframe width="803" height="608" src="https://www.youtube.com/embed/T6ZD8st8S2w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

See DNS Zones and Zone Files Explained

# DNS Name Resolution
To resolve a host name to an IP address using DNS you will need to have s DNS client on your machine, and the client must know the IP address of a DNS server.

The DNS client queries it’s DNS server which then follows through a process to get an answer- See DNS lookups explained.

Host Name Resolution
DNS and Host are two name resolution methods but they are not the only ones.

A Windows client will use DNS,Hosts and other methods to resolve a host name or computer name to an IP address. See Understanding Host name resolution methods.

### Dynamic DNS
Internal IP addresses are normally are non static as they are usually assigned by a DHCP server.

In large corporate networks that use their own internal DNS and DHCP servers a need to keep the DNS servers up to date was required.

DDNS (Dynamic DNS updates) was introduced  to solve this problem- Wiki

The basic procedure is:

The Machine gets IP address from DHCP
The Machine or the DHCP server contacts the DNS server and updates the DNS record with the IP address and DNS name.
Home and small business networks don’t use their own DNS servers because they don’t have so many servers/machines,and they don’t really need DDNS either because  all their machines are in the same broadcast domain.

Because they are in the same broadcast domain windows networking will resolve the names and IP addresses, even if the IP addresses change.

However small business/home network may need DDNS if they want to provide access to internal resources from across the internet. See Dynamic DNS and Services Guide

### DNS Problems
If you have problems connecting to resources or service over a network or the internet the you should always start to check if the name resolution is still working.

There are multiple tools that you can use for this purpose which are build in the command line interfaces of the operating system.

{{< icon name="microsoft" pack="fab" >}} nslookup

{{< icon name="linux" pack="fab" >}} dig

### DNS Record Types

* A Record (address)‍ 
Most commonly used to map a fully qualified domain name (FQDN) to an IPv4 address and acts as a translator by converting domain names to IP addresses.

* AAAA Record (quad A)  
Similar to A Records but maps to an IPv6 address (smartphones prefer IPv6, if available).

* CNAME Record (Canonical Name)
An alias that points to another domain or subdomain, but never an IP address. Alias record mapping FQDN to FQDN, multiple hosts to a single location. This record is also good for when you want to change an IP address over time as it allows you to make changes without affecting user bookmarks, etc.

* ANAME Record
This record type allows you to point the root of your domain to a hostname or FQDN

* SOA Record (Start of Authority)‍
Stores information about domains and is used to direct how a DNS zone propagates to secondary name servers.

* NS Record (name server)‍
Specifies which name servers are authoritative for a domain or subdomains (these records should not be pointed to a CNAME).

* MX Record (Mail eXchange)‍
Uses mail servers to map where to deliver email for a domain (should point to a mail server name and not to an IP address).

* TXT (text) Record‍
Allows administrators to add limited human and machine-readable notes and can be used for things such as email validation, site, and ownership verification, framework policies, etc., and doesn’t require specific formatting.

* SRV Record (service)‍
Allows services such as instant messaging or VoIP to be directed to a separate host and port location.

* PTR Record (pointer)
A reverse of A and AAAA records, which maps IP addresses to domain names. These records require domain authority and can’t exist in the same zone as other DNS record types (put in reverse zones).

* SPF Record (sender policy framework)‍
Helps prevent email spoofing and limits spammers.
‍Note: This record type has been deprecated in favor of TXT record types and may no longer be supported by all providers. We still support modifications and deletions of SPF records currently in your Constellix account, but new configurations must be in TXT record format.





## Ports
Imagine the host as a house, the MAC-address like a name of someone living in the house, the IP-address as the streetnumber, postalcode and country. The port would then be a means of entry to the house, which maybe has multiple doors or windows. Applications typically have standard ports that are agreed upon by the IANA (?). HTTP and HTTPS for example always use 80 (http) and 443 (https, secure). If you type in an address in your webbrowser, you can control the port using a colon at the end, for example https://google.com:443 (or IP+Port, 192.168.0.15:80). Theoretically, you can configure an application to use any port you'd like. Ports range from 0 to 65'535. If you were to block port 80 and 443 on your device, anyone trying to contact you via this port would be rejected. 

## Firewall
A firewall is the controlling instance in a network. Almost every device has a firewall on it that controls the flow of outgoing and incoming packets, but that doesn't work on a network level like the example of a company. 

The firewall has a list of rules that it checks for every packet it receives and operates on Layer 3. A packet that has it's destination marked to be netflix.com for example can be dropped if the firewall is configured to do so. A packet from the subnet accounting is destined for a server in the production subnet can be filtered out. A MAC-address from a device thats not a company device can be blocked from all communication over the firewall.

### Basic modes
There are 2 modes a firewall treats packets: Deny all or Allow all.

It stands to reason which one should be used. In a company network, deny all is certainly better to not take any risks. In a home network, where people just want to connect to the internet, allow all is often used.




## Common protocols

Task: Complete the rest of the protocols

### ARP
**A**ddress **R**esolution **P**rotocol



Only used with IPv4. IPv6 uses NDP (Neighbour Discovery Protocol) instead of ARP.

### DNS
domain name system
IP-address resolution

### DHCP
Port: 67 and 68

Transport protocol: UDP

### SSH
Port: 22

Transport protocol: TCP

**S**ecure **SH**ell



### FTP
Port: 21

Transport protocol: TCP

**F**ile **T**ransfer **P**rotocol

### SFTP
Port: 22

Transport protocol: TCP

**SSH** **F**ile **T**ransfer **P**rotocol or **S**ecure **F**ile **T**ransfer **P**rotocol

### RDP
Port: 3389

Transport protocol: TCP & UDP

**R**emote **D**esktop **P**rotocol


### HTTP/S
Ports: 80 for http and 443 for https

Transport protocol: TCP

**H**ypter**T**ext **T**ransfer **P**rotocol.

Used for everything over the web.

### SMB


### Telnet


### SNMP


Questions:

What is a protocol? Explain in your own words.

..

..