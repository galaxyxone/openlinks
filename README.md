# Openlinks.io

[![made-with-javascript](https://img.shields.io/badge/Made%20with-JavaScript-1f425f.svg)](https://www.javascript.com)
[![](https://img.shields.io/badge/project-IPFS-blue.svg?style=flat-square)](https://ipfs.io/)

### https://openlinks.io

### Using Web3.Storage and IPFS, easily create personalized web-pages with user defined hyperlinks (photos, article, recipe, social post). 

- Login to the app and withn a few clicks create your own personalized link in bio website on IPFS.
- Change the website anytime (user's website link is updated with a new one).

### [Example openlinks page](https://bafybeidqlaf4jkw7nfaqqgymuyahlwh4uyf7ewgzhigd3bet4mveynkbt4.ipfs.dweb.link/My-Openlinks.html)

<img width="537" alt="Screen Shot 2022-08-24 at 1 31 17 AM" src="https://user-images.githubusercontent.com/90220293/193971796-8fe5876f-3cdb-4a31-b22e-d29740f7abc4.png">

## User Flow
- [User signs in @ Openlinks.io](https://openlinks.io) 
- User inputs their links, a title for each link, a profile photo, & gives the webpage a title
- Web-page & profile photo are exported to IPFS (web3.storage)
- User is returned an IPFS webpage address (a CID and link)
- Using various IPFS Gateways, users can access webpages from anywhere

## Development Configuration
If you want to run this in development mode, you will need to host a local Docker instanance with the AWS Lamda runtime installed.

## Recently Completed 
- responsive homepage- mobile optimized (less borked)
- themes backend/Added another Lambda function for themes that exports page to an S3 bucket before upload

## Currently Working on 
- Adding Themes & webpage preview to front-end
- Updated schematic/verify via Yasir as well
- IPNS links 
