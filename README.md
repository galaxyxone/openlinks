# Openlinks.io

[![made-with-javascript](https://img.shields.io/badge/Made%20with-JavaScript-1f425f.svg)](https://www.javascript.com)
[![](https://img.shields.io/badge/project-IPFS-blue.svg?style=flat-square)](https://ipfs.io/)


## https://openlinks.io

## This repo is a work in progress-
### Using Web3.Storage and IPFS, easily create personalized web-pages with user defined hyperlinks(photos, article, recipe, social post). 

- Login to the app, add your links and create your own website link using IPFS. User is returned a CID and link. 
- Login to openlinks.io again to change the website anytime(users website link is updated with a new one).


## User Flow
- [User signs in @ Openlinks.io](https://openlinks.io) 
- User uses UI to create a personalized web-page
- web-page page is exported to IPFS(web3.storage)
- User is returned IPFS "Webpage" address
- Using various IPFS Gateways, users can access webpages from anywhere

<img width="667" alt="Screen Shot 2022-09-16 at 4 13 56 PM" src="https://user-images.githubusercontent.com/30084404/190755336-308bbd3a-d06b-4817-afbd-57d3c4fde603.png">

## Development Configuration
If you want to run this in development mode, you will need to host a local Docker instanance with the AWS Lamda runtime installed.

## Recently Completed 

- Added Profile Photos via Web3.Storage!
- Setting up S3 bucket for theme previews with roles and permissions(review better alternatives ASAP/Currently this is working well)
- Implement Theme preview generation script.
- Implement /themes/preview lambda with API Gateway integration.

## Currently Working on 

- Responsive home page
- Switch button text based on links added



Important Update ASAP: Documentation with Web3.Storage instead of local integration

[My example website](https://bafybeie2b4dzndtisdd455aokww3gv4fto5qxhgvpvrk32er4hdxyiufem.ipfs.dweb.link/Mylinks.html)
