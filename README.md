[![Node version][node-shield]][node-url]
[![npm version][npm-shield]][npm-url]
[![GitHub commit activity][commits-shield]][commits-url]

# Food2 (Create, Remove, Update, Delete JSON file) 
#### Demo: 
<img src="https://github.com/thraddash/food2/blob/master/src/images/mockup.jpg" width="800" title="Mockup">

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
 
## Features:  
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
- add menu bar
- add search bar
- add component to play video files
## Good to Have:   
- form validation (text, img size/type)
- multi image upload
- delete image/video files   
- onClick + to add additional textfields and append to json file
- autoscroll user to top of page when making updates or pops up new window        

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
[commits-shield]: https://img.shields.io/badge/commits-29-green.svg
[commits-url]: https://img.shields.io/github/commit-activity/y/thraddash/food2
[product-screenshot]: /src/images/
