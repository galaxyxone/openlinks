# [Openlinks.io](https://openlinks.io)

[![MIT](https://img.shields.io/npm/l/react-tag-input.svg?style=flat-square)](https://github.com/react-tags/react-tags/blob/master/LICENSE)
[![](https://img.shields.io/badge/project-IPFS-blue.svg?style=flat-square)](https://ipfs.io/)


### Using Web3.Storage and IPFS, easily create a personalized Link in Bio webpage with user defined links.

- Login to the app on desktop or mobile 
- In a few clicks, create your own personalized link in bio website on IPFS
- Change the website anytime (user's website link is updated with a new one)

<img width="250" alt="Screenshot 2022-11-25 at 3 56 41 PM" src="https://user-images.githubusercontent.com/30084404/204060651-1b094ca7-857f-42fb-93f9-68844ea7251d.png">

### [Live Openlinks Page Example](https://bafybeigudn33kfiho647u5ad6hsw7r7p6ddzsplbvphalv34fyso3yuup4.ipfs.dweb.link/My-Openlinks.html)

## User Flow
[User signs in with an email address (SSO) at Openlinks.io](https://openlinks.io) 
- Input links and a title for each link
- Add a profile photo, choose a background theme, and give the webpage a title
- Web-page & profile photo are exported to IPFS (web3.storage)
- User is returned an IPFS webpage address (a CID and link)
- Using various IPFS Gateways, users can access webpages from anywhere


<img width="1460" alt="Screenshot 2022-11-25 at 4 08 54 PM" src="https://user-images.githubusercontent.com/90220293/204059259-a9b94c16-1526-4fae-ba0d-0ea9a6214d85.png">

## Development Configuration
This code is a full functioning front-end. If you want to edit this yourself, you will need to create an auth0 account and follow the instructions below-

- Go to [Auth0.com](https://auth0.com) and create an account- then-

- Within your Auth0 config- Create a new Auth0 Application, then- you will need to copy and past the Domain that's inside your Auth0 Application settings, Client ID into your .env file in the project file. Do that now-

- Within your Auth0 Config- set the callback URL in the "allowed Callback URL" field-

### Notes and guidance on Auth0 configuration can be found inside a .md [here](https://github.com/noryev/openlinks/blob/main/development/auth0ConfigSetup.md)

- When you have your Auth0 Account setup, then you can modify the sample.env file within the root of the project and save it as `.env`-. 

### After your Auth0 configuration is setup, you can then procede to terminal and do-

- npm install
- npm start

## Sprint 12 (Current Work)
- Review Documentation 
- Website Updates
- Infrastructure Upkeeping

### [Current Project Milestone Board](https://github.com/orgs/galaxyxone/projects/4)

### [Case Study by Web3.Storage<3](https://blog.web3.storage/posts/openlinks-case-study)
