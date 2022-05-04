# OpenLinks.io

## This repo is a work in progress- FYI nothing works yet

### Using IPFS public gateway, easily create personalized web-pages with user defined hyperlinks, photos, article, recipe(text), social post. Login to the app, add your links and create your own website link using IPFS. Users returned a CID and link. login and change the website and user is returned new link.


- Users using Brave will use native IPFS. Users not on Brave, personal website loads using the IPFS Public Gateway. 

## Installation Instructions

When building React- Auth0 Login, make sure to Install dependency script:

```sh
npm install auth0-js@9.13.4 auth0-lock@11.25.1 express@4.17.1 express-jwt@5.3.1 express-jwt-authz@1.0.0 jwks-rsa@1.3.0 npm-run-all@4.1.5 react-router-dom@5.2.0
```
## Program Flow

- User Loggs-In 

- User uses UI to create a .html page that gets added to either IPFS or Pinata(as advised on IPFS Docs, https://docs.ipfs.io/how-to/websites-on-ipfs/single-page-website/#set-up-a-domain)

- User creates IPFS website with info they want
  
- PIN the website

- Users personal website is linked with either IPFS CID or IPFS gateway link

## Future Features

-Eventually upgrade with IPNS

-Add video support(mp4,ect)

-Ability to edit pages(either get a new link or use IPNS to keep names the same)

-Decentralized login(keep asking around and looking for best options)



- What is the easiest way to create and export a webpage within a React web-app?

wise words via stack overflow- I'm not sure how familiar you are with jQuery, but you could either use the .on function to add an event listener to the input field where users will type their query, or there are individual functions that you can use as shortcuts to .on event listeners.

https://www.saltycrane.com/blog/2020/05/how-generate-static-html-using-react-typescript-and-nodejs/

<img src="https://rawgit.com/gorangajic/react-icons/master/react-icons.svg" width="120" alt="React Icons">
