# Openlinks Development

<img width="734" alt="Screen Shot 2022-07-16 at 10 04 05 PM" src="https://user-images.githubusercontent.com/30084404/179382086-fca97ac9-d587-49a3-95e0-2c119e901429.png">

<img width="728" alt="Screen Shot 2022-07-16 at 10 04 12 PM" src="https://user-images.githubusercontent.com/30084404/179382088-b3257c59-29da-41c9-8840-ae056fc1b3f9.png">

## Current Project Updates

- User interface updates
- Homepad Update (add photo)
- Videos on how we coded our project

## Recent updates/notes

Date: 17-8 
->Slowed down considerably. It took me a forever to figure out api gateway/lambda headers/response compatibility and web3.storage binary data 
-> blob convo... Resolved moving to deploy picutures via Web3.Storage tomorrow or the next day.

Date: 20-8 -> Minor tweaks to upload flow code.
-> Moving both lambda function to gateway proxy integration again... This was needed because api gateway -> lambda proxy still is as atrocious as I remember. Anyway, it allows us to have more control over incoming requests and the custom responses we want. I have a relatively simple framework within lambda functions that helps us handle as well as keep our response/request handling consistent across functions.
-> Lambda layers are now updated for both functions, of course, utilities and node_modules to our functions are being served from Lambda layers :)
-> Cloudwatch logs for both lambda functions
-> Comments to help you navigate the code.
-> Adding loading state to stepper, pass it down to our components through Context Api and added a nice looking loader for our action buttons in form stepper to show our app is loading something, to improve UX.
-> Ability to actually delete profile picture (from auth0 metadata).
-> Required fields now show asterisk, just to follow general design language, again, to improve UX a little bit.
-> The minor UI changes we needed including moving login button to left + some similar other UI fixes.
-> Boilerplate mostly on backend, and a bit on frontend (handleExport function) for our next theming task.
