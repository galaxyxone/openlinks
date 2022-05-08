
## Development Steps

1. Finish New React Login (Done)
2. Website Generator (Generate HTML website via user designated links)
3. Add website to IPFS for hosting via Gateway(Add ipfs-add HTTP API request)
4. Return IPFS CID/BAFY to users Auth0 React CMS storage and user retrieval 

## Mockups

![mockup-openlinks2](https://user-images.githubusercontent.com/30084404/166916200-287246a8-cf53-438a-814a-b4416be0f405.png)
![mockup-openlinks](https://user-images.githubusercontent.com/30084404/166916203-3128f76c-a75a-47dd-9b87-05b2b3adf7a9.png)

## Future Updates 

1. decentralized login or no login at all, uses IPFS/node information
2. design updates
3. change the website
4. other from the front page of this repo


ps. Thank the lord or Juan B. or someone that its easy to display html pages via IPFS... Its almost as if IPFS was made for this (:D)
------------------------------------------------------------------------------------------------------------------------------------------------

## Important Milestones (Sprint Report)

Input:

- Create a text field, which requires text to be entered in the specified format.
- Click + button to add to a list of links.
- For each link in the list, clicking - button would remove it.

Export:
- Clicking the export button would send html to ipfs add http api?
- The resulting CID would then be added to user's metadata?

Server side endpoints: One for an html page through a template engine, other for updating auth0 metadata.
- The input fields and list.

Lastly:
- Integrate everything i.e., send the list to the rest endpoint to get an html page, then send that to IPFS node, and finally call the auth0 update metadata. 2 trips to your server and 1 trip to locql ipfs node.
