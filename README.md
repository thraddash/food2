[![Node version][node-shield]][node-url]
[![npm version][npm-shield]][npm-url]
[![GitHub commit activity][commits-shield]][commits-url]

# Food2 (Create, Remove, Update, Delete JSON file)  
#### Demo: https://happy-shannon-69aac4.netlify.app/   
###### (branch image) - Recipe Search Page test   
###### (branch search) - Search Bar test   
###### (branch todolist) - Todolist for Shopping list Page   
###### Menu Navbar test: (branch menu) 
https://github.com/thraddash/navbar Demo: https://clever-hodgkin-c4212b.netlify.app/   
###### Img/Video Carousel test: (branch vid_img_merge)   
https://github.com/thraddash/carousel_test Demo: https://hungry-fermat-1aa832.netlify.app   


<img src="https://github.com/thraddash/food2/blob/master/src/images/mockup.png" width="800" title="Mockup">

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#install">Install</a></li>
        <li><a href="#package-modules-used">Package modules used</a></li>
      </ul>
    </li>
    <li><a href="#starting-the-app">Starting the App</a></li>
  </ol>
</details>

## About the Project
React App. Fontend render and loads data.json file.   
User can update post, delete post and download data.json file.    
Running "yarn dev" will concurently start up frontend and backend server.  

#### frontend: http://localhost:3000  
#### backend: http://localhost:5000  

## [Projects Kanban board](https://github.com/thraddash/food2/projects/1) 
###### 📕 Hard  📙 Mid  📘 InProgress  📗 Completed  
   
## Features:
<details>
  <summary> Completed </summary>
  
  
- Ability to download data.json file (DONE)
- Add 3rd argument to JSON.stringify, to represent the space indentation level for easy of reading (DONE)
<details>
  <summary> data.json </summary>
  
```json 
[
  {
    "id": "18a34f20-bc30-11eb-b83d-13213367ae36",
    "title": "hello",
    "content": "world"
  },
  {
    "id": "00d4fd70-bc31-11eb-806e-4119ef39d572",
    "title": "aa",
    "content": "aa"
  }
]
```
</details>

- update index.css to parse json file with newlines (DONE)     
(issue came up when copying and pasting list of ingredients in textbox)   
```
p {
  white-space: pre-wrap;
}
```
- local storage, file designation (DONE) 
- separate features into components (DONE)
- add menu bar (DONE)
- add search bar (DONE)
- add component to play video files (DONE)   
- add placeholder image (DONE)
</details>

## Good to Have / Future Release 
<details>
  <summary> Future Release </summary>
- form validation (text, img size/type)
- multi image upload or dropzone    
- onClick + to add additional textfields and append to json file
- autoscroll user to top of page when making updates or pops up new window   
- delete local files (image/video) server side   
- reverse order data.json, latest recipe changes will be displayed first    
</details>

## Reference Materials

<details>
  <summary> Reference materials </summary>

CRUD   
https://www.youtube.com/watch?v=lFkBk3f6Xww&ab_channel=WebStylePress   
  
MERN (Mongodb, express, react, node)      
https://medium.com/swlh/how-to-create-your-first-mern-mongodb-express-js-react-js-and-node-js-stack-7e8b20463e66   

Recipe form   
https://codesandbox.io/s/vigilant-swanson-b6dmq?file=/src/NewRecipeForm.jsx   
  
dropzone   
https://codesandbox.io/s/removable-drop-zone-82km9?file=/src/App.js   

group json file   
https://stackoverflow.com/questions/55478962/groupby-json-data-then-map-in-react-component   
  
parsing json   
https://www.youtube.com/watch?v=MQhpMIzCAC8&ab_channel=JavaScriptMastery   
  
```
outJSON= [ {team: "TeamA",name: "Ahmed",field3:"val3"}, {team: "TeamB",name: "Ahmed",field3:"val43"}, {team: "TeamA",name: "Ahmed",field3:"val55"} ]

var groupBy = function(xs, key) {
  return xs.reduce(function(rv, x) {
    (rv[x[key]] = rv[x[key]] || []).push(x);
    return rv;
  }, {});
};
var groubedByTeam=groupBy(outJSON, 'team')
console.log(groubedByTeam);
```
  
How to access nested JSON object Inside Array in react js   
https://medium.com/officialrajdeepsingh/how-to-access-nested-json-object-inside-array-in-react-js-c00cef3c252c   

React File Uploader with Express   
https://www.youtube.com/watch?v=b6Oe2puTdMQ&ab_channel=TraversyMedia   

Google API upload/delete/create    
https://www.youtube.com/watch?v=1y0-IfRW114&ab_channel=yoursTRULY   

How-to-pass-data-between-react-components   
https://www.pluralsight.com/guides/how-to-pass-data-between-react-components   
  
SVG   
```HTML
<svg id="fork-icon" width="24" height="24" viewBox="0 0 24 24">
<path d="M11 9H9V2H7v7H5V2H3v7c0 2.12 1.66 3.84 3.75 3.97V22h2.5v-9.03C11.34 12.84 13 11.12 13 9V2h-2v7zm5-3v8h2.5v8H21V2c-2.76 0-5 2.24-5 4z" fill="currentColor"></path>
</svg>    
    
<svg id="time-icon" width="24" height="24" viewBox="0 0 24 24">
<path d="M22 5.72l-4.6-3.86-1.29 1.53 4.6 3.86L22 5.72zM7.88 3.39L6.6 1.86 2 5.71l1.29 1.53 4.59-3.85zM12.5 8H11v6l4.75 2.85.75-1.23-4-2.37V8zM12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9c4.97 0 9-4.03 9-9s-4.03-9-9-9zm0 16c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z" fill="currentColor"></path>
</svg>
```
  

  

  
</details>

## Install 
yarn install  
```
npm install --global yarn
```

## Package modules used
see package.json file  
```
yarn add axios body-parser cors express uuid
yarn add concurrently morgan nodemon --dev
```

## Starting the App
yarn dev will run scripts that is define in th scripts obejct in package.json  
concurrently is used to start up both frontend and backend server  
```sh
yarn dev
```

```node
"scripts": {
    "start": "react-scripts start",
    "serverNode": "node ./src/server.js",
    "server": "nodemon ./src/server.js",
    "client": "react-scripts start",
    "dev": "concurrently \"yarn server\" \"yarn client\"",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
 ```

<!-- MARKDOWN LINKS & IMAGES -->
[node-shield]: https://img.shields.io/badge/node-v14.15.5-blue
[node-url]: https://nodejs.org/
[npm-shield]: https://img.shields.io/badge/npm-v6.14.11-orange
[npm-url]: https://www.npmjs.com/package/npm-install
[commits-shield]: https://img.shields.io/badge/commits-112-green.svg
[commits-url]: https://img.shields.io/github/commit-activity/y/thraddash/food2
[product-screenshot]: /src/images/
