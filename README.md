# Openlinks.io

[![made-with-javascript](https://img.shields.io/badge/Made%20with-JavaScript-1f425f.svg)](https://www.javascript.com)
[![](https://img.shields.io/badge/project-IPFS-blue.svg?style=flat-square)](https://ipfs.io/)


## https://openlinks.io

### Using Web3.Storage and IPFS, easily create personalized web-pages with user defined hyperlinks(photos, article, recipe, social post). 

- Login to the app, add your links and create your own website link using IPFS. User is returned a CID and link. 
- To change the website, login to openlinks.io again anytime(users website link is updated with a new one).


## User Flow
- [User signs in @ Openlinks.io](https://openlinks.io) 
- User uses UI to create a personalized web-page
- web-page page is exported to IPFS(web3.storage)
- User is returned IPFS "Webpage" address
- Using various IPFS Gateways, users can access webpages from anywhere

<img width="734" alt="Screen Shot 2022-07-16 at 10 04 05 PM" src="https://user-images.githubusercontent.com/30084404/179382086-fca97ac9-d587-49a3-95e0-2c119e901429.png">

## Development

### for some reason this is not working right now- fixing ASAP

- to start, you will need have a web3.storage API key
[Configure your Web3.Storage account](https://web3.storage)
- You will also need to sign up and generate a API Key for Auth0. 
[Configure your Auth0 Account for login management](https://auth0.com/signup)
- copy/paste your Web3.Storage and AuthO API keys to the included .env file. 
- npm install
- npm start

## Recent Additions
- Web3 Storage Integration
- Fixed hyperlink space's problem
- Titles
- update out of scope fonts

## Current Work
- Add user profile photos (either with Web3.storage or nft.storage) 
- Add 3 different themes users can choose for their exported page(Dark, Light, and Homebrew) 
- redo splash page

Important Update ASAP: Documentation with Web3.Storage instead of local integration

[My example website](https://bafybeie2b4dzndtisdd455aokww3gv4fto5qxhgvpvrk32er4hdxyiufem.ipfs.dweb.link/Mylinks.html)

