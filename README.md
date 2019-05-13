# How do I run the Web-App?
To run the web app you
1. First, need to setup and run the 'api' server, located in '/SW-interview/api' directory, using (in order)
  1. `npm install`
  2. `npm start`

2. Second, need to setup and run the 'client' server, located in '/SW-interview/client' directory, using (in order)
  1. `npm install`
  2. `npm start`


Once Done, you can view/use the web-app at 'http://localhost:3000/' on your browser.


## Requirements
To setup and run the app, you must have Node.js and NPM installed.


## Check List:
The following items below have been implemented and tested:
- Style Web-App with CSS:
  - Create a Header & Style it :heavy_check_mark:
  - Style Components :heavy_check_mark:
- Comment Code using Block comments :heavy_check_mark:
- Improve the Front End Look and Feel :heavy_check_mark:
- Look at possible error cases and how to handle them
  - empty sales Data :heavy_check_mark:
  - form validation for AcceptedSales component
    - Validate input for Sale Price Field :heavy_check_mark:
    - Ensure sell button changes sale item's state when sale item's transaction.salePrice property is of correct pattern :heavy_check_mark:
    - Validate input for Buyers Name Field :heavy_check_mark:
