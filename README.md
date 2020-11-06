## Title: Working list 

## Description: 
This project is created in regards to the Covid-19 pandemic, and is an app made for health-workers and contact tracers to help keep track of the positive registered cases as well as the contacts of these cases. This version currently handles the data for Nesodden municipality. 

## Motivation: 
Our motivation for this project is 

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

Tracker Capture App URLs: 
/dhis-web-tracker-capture/index.html#/?program=<programId>

/dhis-web-tracker-capture/index.html#/dashboard?tei=<trackedEntityInstanceId>&program=<programId>&ou=<organisationUnitId>

## How to use: 

## Credits: 
Wahed 

This project was bootstrapped with [DHIS2 Application Platform](https://github.com/dhis2/app-platform).

## Available Scripts

In the project directory, you can run:

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
