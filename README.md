# [Openlinks.io](https://openlinks.io)

[![made-with-javascript](https://img.shields.io/badge/Made%20with-JavaScript-1f425f.svg)](https://www.javascript.com)
[![](https://img.shields.io/badge/project-IPFS-blue.svg?style=flat-square)](https://ipfs.io/)

### Using Web3.Storage and IPFS, easily create a personalized Link in Bio webpage with user defined links.

- Login to the app and withn a few clicks create your own personalized link in bio website on IPFS
- Change the website anytime (user's website link is updated with a new one)

### [Live Openlinks Page Example](https://bafybeihwda3qc4ck4txip3aj2kqvnshp22c5qz3ewoxuberskcb64ckr5m.ipfs.dweb.link/Logan-L.html)

<img width="459" alt="Screen Shot 2022-10-17 at 11 03 18 PM" src="https://user-images.githubusercontent.com/30084404/196333635-1d345cb5-bb93-4cf4-b7e1-4027d140bcb1.png">

## User Flow
- [User signs in with an email address (SSO) at Openlinks.io](https://openlinks.io) 
- User inputs their links, a title for each link, a profile photo, & gives the webpage a title
- Web-page & profile photo are exported to IPFS (web3.storage)
- User is returned an IPFS webpage address (a CID and link)
- Using various IPFS Gateways, users can access webpages from anywhere

## Development Configuration
If you want to run this in development mode, you will need to host a local Docker instnance with the AWS Lamda runtime installed.

## Recently Completed 
- responsive homepage- mobile optimized (less borked)
- themes backend/Added another Lambda function for themes that exports page to an S3 bucket before upload
- privacy policy

## Currently Working on 
- Homepage Page Re-write
- Adding Themes & webpage preview to front-end
- Updated schematic/verify via Yasir as well
- IPNS links via Web3.Name
