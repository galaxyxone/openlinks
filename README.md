# [Openlinks.io](https://openlinks.io)

[![made-with-javascript](https://img.shields.io/badge/Made%20with-JavaScript-1f425f.svg)](https://www.javascript.com)
[![](https://img.shields.io/badge/project-IPFS-blue.svg?style=flat-square)](https://ipfs.io/)

### Using Web3.Storage and IPFS, easily create a personalized Link in Bio webpage with user defined links.

- Login to the app and withn a few clicks create your own personalized link in bio website on IPFS
- Change the website anytime (user's website link is updated with a new one)

### [Live Openlinks Page Example](https://bafybeihwda3qc4ck4txip3aj2kqvnshp22c5qz3ewoxuberskcb64ckr5m.ipfs.dweb.link/Logan-L.html)

<img width="695" alt="Screen Shot 2022-10-17 at 11 17 50 PM" src="https://user-images.githubusercontent.com/30084404/196334418-2865c68e-fd5c-498f-a1b3-43a8f82a6115.png">

## User Flow
- [User signs in with an email address (SSO) at Openlinks.io](https://openlinks.io) 
- User inputs their links, a title for each link, a profile photo, & gives the webpage a title
- Web-page & profile photo are exported to IPFS (web3.storage)
- User is returned an IPFS webpage address (a CID and link)
- Using various IPFS Gateways, users can access webpages from anywhere

## Development Configuration
This code is a full functioning front-end. If you want to edit this yourself, you will need to create an auth0 account and follow the instructions below-


- Go to [Auth0.com](https://auth0.com) and create an account- then-

- Within your Auth0 config- Create a new Auth0 Application, then- you will need to copy and past the Domain that's inside your Auth0 Application settings, Client ID into your .env file in the project file. Do that now-

- Within your Auth0 Config- set the callback URL in the "allowed Callback URL" field-

Notes and guidance on Auth0 configuration can be found inside a .md here: /openlinks/development/devdoc..


## Recently Completed 
- responsive homepage- mobile optimized (less borked)
- themes backend
- privacy policy

## Currently Working on 
- Adding homepage 
- Seperation of domains
- Adding webpage preview to front-end
- Replace exported page name/conventional CID address with IPNS links via Web3.Name
