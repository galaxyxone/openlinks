# OpenLinks.io

## This repo is a work in progress- FYI nothing works yet

### Using IPFS and the IPFS public gateway, easily create personalized web-pages with user defined hyperlinks(photos, article, recipe, social post). Login to the app, add your links and create your own website link using IPFS. Users returned a CID and link. Login to openlinks.io again to change the website anytime(users website link is updated with a new one).

Currently we are trying to get this app to work in Chrome- its working in any non-chromium browsers

[![made-with-javascript](https://img.shields.io/badge/Made%20with-JavaScript-1f425f.svg)](https://www.javascript.com)
[![](https://img.shields.io/badge/project-IPFS-blue.svg?style=flat-square)](https://ipfs.io/)


- Users using Brave will use native IPFS. Users not on Brave, personal website loads using the IPFS Public Gateway. 

## This project is still deep in development mode- come back soon for more updates
## Program Flow

- User Loggs-In (https://openlinks.io) 
- User uses UI to create a .html page that gets added to either IPFS or Pinata(as advised on IPFS Docs, https://docs.ipfs.io/how-to/websites-on-ipfs/single-page-website/#set-up-a-domain)

- User creates IPFS website with info they want 
  
- PIN the website to IPFS using local IPFS node

- Users personal website is linked with either IPFS CID or IPFS gateway link (return users CID to users system) 

<img src="https://rawgit.com/gorangajic/react-icons/master/react-icons.svg" width="120" alt="React Icons">

### Make sure to write some tests at the end of this- Come up with good testing- You need to know where youre going
