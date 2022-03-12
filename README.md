# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

 
To run the project - Project uses REACT JS

use npm i
then npm start

External Packages
—  "primeflex": "^3.1.3",
    "primeicons": "^5.0.0",
    "primereact": "^7.2.1",



App.jsx
App.jsx has the state for api data and also has logic for data retention during page refresh.

There are two components in the file 
Form.jsx and Content.jsx 


Form.jsx
Form.jsx has a form validation and submit feature. The API data from form.jsx are passed to the App.jsx file.
The input fields are made empty on purpose after the user submits the data.
The user data like email, name, and his/her horoscope signs are merged with the api response object. So that all details are accessible from a single apiData object.

Content.jsx
Content.jsx has the code related to the description of the horoscope. The props are passed from App.js
