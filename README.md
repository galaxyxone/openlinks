# OpenLinks.io

[![made-with-javascript](https://img.shields.io/badge/Made%20with-JavaScript-1f425f.svg)](https://www.javascript.com)
[![](https://img.shields.io/badge/project-IPFS-blue.svg?style=flat-square)](https://ipfs.io/)

## As long as your local IPFS node is running, it should work! https://openlinks.io

## This repo is a work in progress- KNOWN BUGS BELOW!
- React UI gets a little buggy when adding hyperlinks(not a big issue, better react)
- Need to be more specific about required format for links (tell users to fix with "http://www.example.com")
- IPFS Files are not pinned by system! Local IPFS node needs to stay up for personal website to remain avaliable via IPFS and gateway(fix ASAP)

### Using IPFS and the IPFS public gateway, easily create personalized web-pages with user defined hyperlinks(photos, article, recipe, social post). 

- Login to the app, add your links and create your own website link using IPFS. User is returned a CID and link. 
- Login to openlinks.io again to change the website anytime(users website link is updated with a new one).

<img width="1411" alt="Screen Shot 2022-06-13 at 10 37 42 PM" src="https://user-images.githubusercontent.com/30084404/173488343-effee3e2-6e61-4a05-a590-5a2b32079dd1.png">


- User Loggs-In (https://openlinks.io) 
- User uses UI to create a .html page
- HTML page is exported to IPFS
- User is returned IPFS Webpage address
- Users personal website is linked with either IPFS CID or IPFS gateway link (return users CID to users system) 


<img width="1036" alt="Screen Shot 2022-06-07 at 1 35 53 AM" src="https://user-images.githubusercontent.com/30084404/172312297-65286008-e3b9-43ae-a4bc-117da4fe3498.png">

We are adding fixes ASAP- Web3.Storage integration is top priority
