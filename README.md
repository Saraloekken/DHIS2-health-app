## Working list 

## Description: 
This project is created in regards to the Covid-19 pandemic, and is an app made for health workers and contact tracers to help keep track of the positive registered cases as well as the contacts of these cases. This version currently handles the data for Nesodden municipality. 

## Motivation: 
Our motivation for this project is to learn more about application design and development within platform ecosystems.
We want to to improve ourselves on the use of Git, Javascript, React, CSS and the use of APIs. 

## Technologies: 
React.js - https://reactjs.org/  
DHIS2 - https://www.dhis2.org/

## Main functionalities:  
Overview of index cases  
Overview of contacts  
Overview of both  
Directed to data entry form   
Generate overview of workload  
“Sub-view” with contacts linked to same case  

## Extras: 
Keep track of the cases and contacts they need to follow up on  
Lists of persons they should contact at any given time  
Sort different cases and contacts by time frames  
Simplify the work process of the workers  
User-friendly interface  
Easy and simple!   

## Missing functionality/possible improvements: 
Previous follow-ups/completed  
Search-function  
Alert/notice box when a tracker capture has been confirmed  
A status filter that filters on: "All", "Completed", "Active" and "Scheduled"  
Save filter for session  

## API-reference: 
Getting a list of index cases and contacts:  
/api/trackedEntityInstances

Getting a list of required and optional attributes:  
/api/trackedEntityAttributes/

## How to use: 
This application is divided into three different pages.  

Index Cases shows a view of contacts that have tested positive for Covid-19, and will be handled specifically by health workers with a medical background.  

Contacts consists of people who have been close to a positive case, and will mainly be handled by contact tracers.  

Relations shows a combination of these two. If you click on an index case, a modal with the people they have been in contact with will show up.  

When a health worker or a contact tracers follows up on a case, they can click the blue "tracker caption" button. This will take them directly to the tracker capture app, where they can edit the case info, set a new date for follow-up or mark the case as recovered. 

## Credits: 
Wahed Mangal (teaching assistant)

This project was bootstrapped with [DHIS2 Application Platform](https://github.com/dhis2/app-platform).

## Available Scripts

In the project directory, you can run:

### `yarn install`

Installs all dependencies for the project. 

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner and runs all available tests found in `/src`.<br />

See the section about [running tests](https://platform.dhis2.nu/#/scripts/test) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
A deployable `.zip` file can be found in `build/bundle`!

See the section about [building](https://platform.dhis2.nu/#/scripts/build) for more information.

## Learn More

You can learn more about the platform in the [DHIS2 Application Platform Documentation](https://platform.dhis2.nu/).

You can learn more about the runtime in the [DHIS2 Application Runtime Documentation](https://runtime.dhis2.nu/).

To learn React, check out the [React documentation](https://reactjs.org/).
