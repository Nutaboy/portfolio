---
title: Domain Name System & more
type: book
date: 2019-05-05T00:00:00+01:00

# Prev/next pager order (if `docs_section_pager` enabled in `params.toml`)
weight: 1
---

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