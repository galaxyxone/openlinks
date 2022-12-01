# [Openlinks.io](https://openlinks.io)

[![MIT](https://img.shields.io/npm/l/react-tag-input.svg?style=flat-square)](https://github.com/react-tags/react-tags/blob/master/LICENSE)
[![](https://img.shields.io/badge/project-IPFS-blue.svg?style=flat-square)](https://ipfs.io/)


### Using Web3.Storage and IPFS, easily create a personalized Link in Bio webpage with user defined links.

- Login to the app on desktop or mobile 
- In a few clicks, create your own personalized link in bio website on IPFS
- Change the website anytime (user's website link is updated with a new one)

### [Live Openlinks Page Example](https://bafybeigudn33kfiho647u5ad6hsw7r7p6ddzsplbvphalv34fyso3yuup4.ipfs.dweb.link/My-Openlinks.html)

<img width="849" alt="Screenshot 2022-11-25 at 3 56 41 PM" src="https://user-images.githubusercontent.com/30084404/204060651-1b094ca7-857f-42fb-93f9-68844ea7251d.png">

## User Flow
- [User signs in with an email address (SSO) at Openlinks.io](https://openlinks.io) 
- User inputs their links, a title for each link, a profile photo, & gives the webpage a title
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
### After your Auth0 configuration is setup, you can then procede to terminal and do-

- npm install
- npm start


## Sprint 7 (Completed) 
- New Homepage re-write
- Domain Seperation JS Homepage/React App after login
- Privacy Policy hosted by Web3.Storage

## Sprint 8 (Completed) 
- Add required sdk modules to our lambda layer config
- Add s3 service to our openlinks_utility Lambda layer
- Added the new /themes/config lambda configuration with S3 integration API Gateway

## Sprint 9 (Completed)
- Add required sdk modules to our lambda layer config
- Add s3 service to our openlinks_utility Lambda layer
- Added the new /themes/config lambda configuration with S3 integration API Gateway
- Update /export lambda function with S3 themes config
- Update themes preview generator script with S3 themes config

## Sprint 9(Current Work)
- Website re-work
- Finish writing Auth0 Authentication Setup instructions
- Web3.name integration documentation

## Development Roadmap-
- Change IPFS Gateway configuration from dweb.link back to Leto Gateway

## Longer Paced Updates-
- Change IPFS Gateway configuration from dweb.link back to nft.storage
- Replace exported page name/conventional CID address with IPNS links via Web3.Name
- Linktree conversion feature - connect an Openlinks account to a Linktree via user login to display Linktree links instantly - [heres](https://github.com/benkaiser/linktree-scraper) a Linktree Scraper from a couple years ago
- Custom webpage themes - choose from any color or upload a photo
- Custom webpage fonts - choose from a list of different fonts
- Login & create an Openlinks page with a Metamask/Lens account (add these login options to our Auth0 login screen)
- Disply NFT profile photo

## [New Project Milestone Board](https://github.com/orgs/galaxyxone/projects/4)
