---
# Documentation: https://wowchemy.com/docs/managing-content/

title: "Getting started with the Trainee Diary"
subtitle: "Easy setup guide for your own Trainee Diary"
summary: ""
authors: ['Fabian Brunner']
tags: []
categories: []
date: 2021-07-21T11:37:33+02:00
lastmod: 2021-07-21T11:37:33+02:00
featured: true
draft: false

#Features of the page
reading_time: true # Show estimated reading time?
share: true # Show social sharing links?
profile: true # Show author profile?
commentable: true  # Allow visitors to comment? Supported by the Page, Post, and Docs content types.
editable: false  # Allow visitors to edit the page? Supported by the Page, Post, and Docs content types.
type: book

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder.
# Focal points: Smart, Center, TopLeft, Top, TopRight, Left, Right, BottomLeft, Bottom, BottomRight.
image:
  caption: "Journey"
  focal_point: "Smart"
  preview_only: false

# Projects (optional).
#   Associate this post with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `projects = ["internal-project"]` references `content/project/deep-learning/index.md`.
#   Otherwise, set `projects = []`.
projects: []
---


## Overview

Welcome to the team I wish you a great start and time at our company ❤️
In this post I will guide you on the setup of your trainee diary. 
In a later post I will share with you a guide and my expectations.
If you have any questions or you are stuck at something just get in touch with me.
Looking forward to work with you.

{{< toc >}}

## Requirements
Befor you start make sure you fullfill all the requirements to start this guide otherwise it can cause problems.


<input type="checkbox"> Download a Packet Manager [For Windows](https://chocolatey.org) |[for Mac](https://www.brew.sh) 


[If you need a place to store your private passwords](https://vault.bitwarden.com/#/register)


<input type="checkbox"> Have some portrait of you ready


<input type="checkbox"> [Create a Github account](https://www.github.com/join)


<input type="checkbox"> [Link your Github account with a Netlify account](https://app.netlify.com/signup) 


<input type="checkbox"> [Create a Gravatar/Wordpress account](https://en.gravatar.com) 


<input type="checkbox"> [Create a LinkedIn account](https://linkedin.com/signup) 


<input type="checkbox"> Have an editor or IDE installed an be familiar with [I recommend Visual Code](https://code.visualstudio.com) 


So now that you have everything let's start.

## Installation of Chocolatey
Go to your search and tipp in Windows Powershell and then open it as an Administrator.
{{< figure src="1-choco.png" caption="Windows Search" numbered="true" >}}

Then copy paste the following command into powershell.
```bash
Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))
```
Use this to check if everything went fine.
```bash
choco
```
{{< figure src="2-choco.png" caption="Version of chocolatey that is installed" numbered="true" >}}
## Installation
First of all you need to [fork the Repo from wowchemy](https://app.netlify.com/start/deploy?repository=https://github.com/wowchemy/starter-academic&stack=cms).

After clicking on the link, you'll be greeted with the welcome screen.


Click the big Connect To Github button on the welcome screen (or alternatively click the link underneath to connect with Gitlab):
{{< figure src="1-hugo.png" caption="Netlify welcome screen" numbered="true" >}}

Login with your Github account 
{{< figure src="2-hugo.png" caption="Login with your Github account" numbered="true" >}}

Click Save & Deploy to create a repository for your site in Github:
{{< figure src="3-hugo.png" caption="Confirm creation of a repository for your site in Github" numbered="true" >}}

Netlify will now generate your new site. Generally this takes around 1 to 5 minutes, but can take longer during busy periods. You’ll see the green “Published” notice appear under Production Deploys once it has completed.
{{< figure src="4-netlify.png" caption="Netlify will now generate your shiny new site" numbered="true" >}}

You’ll notice that Netlify assign a free, random URL to the site. Let’s customize the URL to something more relevant. First click Site Settings:
{{< figure src="4-site-settings.png" caption="View your site settings" numbered="true" >}}

Click Change site name…
{{< figure src="4.1-domain.png" caption="View your domain (URL)" numbered="true" >}}

Enter your site’s name, such as your name or organisation name, separating words with a hyphen (-) rather than a space.
{{< figure src="4.3-domain.png" caption="Click edit site name" numbered="true" >}}
Lastly, click Save to update our Netlify subdomain.

Awesome! We can now visit the site at the URL you chose!
Check your (GitHub) email to accept the invite to edit your site in the admin panel:
{{< figure src="cms-1-accept.png" caption="Check your (GitHub) email to accept the invite to edit your site." numbered="true" >}}

{{% callout note %}}
If you can’t find the email,
* Go to **Settings > Identity**, and select **Enable Identity** service
* Under **Registration** preferences, select **Invite Only**
* Scroll down to **Services > Git Gateway**, and click **Enable Git Gateway**
  * This allows editors to write content without needing a GitHub account
* Head to the **Identity** tab at the top of the Netlify dashboard and then click the **Invite Users** button to invite yourself by entering your email address
{{% /callout %}}

You will then be prompted to create a password:
{{< figure src="cms-2-create-password.png" caption="Create a password for editing your site." numbered="true" >}}

Now you’re ready to edit your site in the CMS:
{{< figure src="cms-3-dashboard.png" caption="Edit your site in the CMS." numbered="true" >}}

## Clone the Repository on your machine

Now let's get our hands dirty with git. Git is version control system and their are many Solutions out there to name a few Github, Gitlab, CodeCommit, etc. Initialy it was created by **Linus Torvald** (Father of Linux kernel) to help him and other people to collaborate on the development of the kernel code. The base software is open source. Git is widley used in the opensource community anyhow it is a basical skill which you will likely face at one point if you work in IT. So if you hear commit, branch, fork or repository it is always related to git.

Log you into your Github account and check if there was a new repository created. 
You should see something like <githubAccountNme/ogithubOrganizationName>/<repositoryname>
{{< figure src="1-github" caption="Github Dashboard" numbered="true" >}}

Next you should open an command line tool on your pc.
{{< icon name="apple" pack="fab" >}} On mac open the terminal and type in the following command:
```bash
homebrew install git golang hugo
```
{{% callout note %}}
If you should use an mac with the new M1 you need to install go this way.
```bash
arch -arm64 brew install go       
```
{{% /callout %}}
{{< icon name="microsoft" pack="fab" >}}  On windows open powershell
```bash
choco install git golang hugo -confirm
```
After this steps all required tools are installed. But you can also install the [Github Desktop Version](https://desktop.github.com)
I recommend you to master the command line it is more convinient and indepentent. The next step will be to create an folder on your pc where we store our repositories.


Into your Github account navigate now into the newly created repository and copy the clone Link of the repository we will need it to create a local copy of the repository on your machine.
{{< figure src="2-github" caption="Overview over your repository" numbered="true" >}}

Now you go back to your already open console.
The following command are creating a simple folder structur in your user directory.

```bash
cd ~
mkdir code
cd code
mkdir amanox
cd amanox
git clone <Link to your repo>
```
```mermaid
graph LR;
  User-->code;
  code-->amanox;
  amanox-->trainee diary;
```
You can also choose a different structure if it fits your need better it is just a proposal.
Congrats you also finished this part. 🙌
## Setup your CV
Open now **visual Code** an click on "open Folder"
{{< figure src="1-visualCode" caption="Start screen of visual Code" numbered="true" >}}


Next you navigate to your Repository and open it.
{{< figure src="2-visualCode" caption="Choose the root folder of your repository" numbered="true" >}}


## Write your first post

## Made it unique