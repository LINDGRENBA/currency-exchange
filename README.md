# Currency Exchange

#### An API and Asynchronous JavaScript project for Epicodus, 07.03.2020

## By Brittany Lindgren

## Description

Don't be caught without enough money while you're traveling abroad. With our app, you can plan your trip and make sure you've budgeted enough for it all - food, fun and adventure.

## Setup/Installation Requirements

| Steps | Example |
| -------- | ----- |
| Follow this [link to the project repository](https://github.com/LINDGRENBA/currency-exchange.git) on GitHub.   |  [Link to the project repository](https://github.com/LINDGRENBA/currency-exchange.git)  |    
| Click on the "Clone or download" button to copy the project link.   |   ![Image of GitHub Clone or download button](assets/images/readme/clone-download-button.PNG)   |   
| If you are comfortable with the command line, you can copy the project link and clone it through your command line with the command `git clone` + project link. Otherwise, I recommend choosing "**Download ZIP**".   |   ![Download ZIP option on GitHub](assets/images/readme/download-zip.PNG)  |   
|  Once the ZIP file has finished downloading, you can right click on the file to view the zip folder in your downloads.   |   ![ZIP folder in downloads](assets/images/readme/zip-folder.PNG)  |   
| Right click on the project ZIP folder that you have just downloaded and choose the option "**Copy To...**", then choose the location where you would like to save this folder.    |   ![Saving ZIP to new location with 'Copy To'](assets/images/readme/copy-to.PNG)  |   
| Navigate to the final location where you have chosen to save the project folder.   |    |   
| To view the code itself, right click, choose "open with..." and open using a text editor such as VS Code or Atom, etc.   |     |
|  Once you have cloned or downloaded the project and opened it in VS Code or another text editor, open a new terminal by navigating to Terminal -> New Terminal. A terminal will open on the page.  | ![Opening a terminal in VS Code](assets/images/readme/terminal.PNG)  |
| In the terminal type the command `npm install` and hit enter to install node modules. You should see a file called node_modules appear and it should be greyed out  |  ![running npm install](assets/images/readme/npm-install.PNG)  |
| You can now view the project in your browser by typing the command `npm run start` in the terminal  | `npm run start` |    

#### Get a unique API Key
| Steps | Example |
| -------- | ----- |
| To get an API key for the currency exchange website, go to the [ExchangeRate-API](https://www.exchangerate-api.com/) website.  | ![Go to the exchangerate-api.com site](assets/images/readme/exchange-rate-website.PNG) |
|  Enter your email and click on the 'Get Free Key' button  |  ![Get Free Key button](assets/images/readme/get-free-key.PNG)  |
|  Enter your information to sign up for a free account  |  ![Sign up for a free account](assets/images/readme/create-account.PNG)  |
|  Your API key will be provided to you once you have signed in  |  ![Page with your API key and information](assets/images/readme/your-key.PNG)   |
|  Your API key is unique to you. DO NOT SHARE YOUR KEY. Below are the instructions for _`Add .env file`_ which will walk you through setting up a .env file. You will store your key inside of that file to keep it private.  |  see _`Add .env file`_ below  |  
|  After you have added your API key to your .env file _(see instructions below for setting up your .env file)_, type the command `npm run build` into your terminal and hit enter. This will incorporate your unique API into the project  |  |


#### Add .env file to project
| Steps | Example |
| -------- | ----- |
|Create a file named .env in the head (top) directory of the project |     |
| Once you have added the .env file it should be **greyed out**!!! A greyed out file indicates that it is private, will not be available to the public if you push the project to github and will keep any information inside of it **(such as your API key)** private |  ![the .env file](assets/images/readme/env-file.PNG)  |
|    Inside of your .env file, you can add your API key. See the format in the image to the right.   |   ![API format in .env file](assets/images/readme/api-env.PNG)    |
| **_IMPORTANT NOTE_**:  Do not delete or change anything in the project's .gitignore file. This file specifies which directories and files are private and should not be shared or shown to others. The .gitignore should look as it does in the example to the right |  ![.gitignore file](assets/images/readme/gitignore.PNG)  |


## Setup/Installation of Node.js and npm

| Steps | Example |
| -------- | ----- |


#### Additional Setup/Installation Notes:

* You will need to run npm install to install the node modules necessary to run this project. 

* Run a server to view this document using npm start.  

## Specifications

| Behavior | Input | Output |  Completed(Y/N?)  | 
| -------- | ----- | ------ | -------- |
|     Program will make an API call to ExchangeRate.com     |   n/a    |    Information returned from API    |    N     |
|    Program will return API call with either result or error message    |    n/a    |    Result or Error    |    N    |
|    Program will return API call with different currency depending on user selection    |   10 USD convert to  Euros    |   8.9 Eruos    |    N    |


## Known Bugs

| Location (html/css/js & specific location if known) |  Message  | Bug | Resolved (Y/N) |  How was the issue resolved?  |
| ------- | ----- | ------ | ------ | --------- |
|  |  |  |  |  |


## Support and contact details

Please feel free to contact me through GitHub (username: LINDGRENBA) with any questions, ideas or concerns.  

## Technologies Used

* HTML5
* CSS3
* Bootstrap v-4.5.0
* JavaScript
* jQuery v-3.5.0
* Visual Studio Code 
* Git and Git BASH 
* Node.js
* npm package manager
* Webpack
* API calls
* Asynchronous JavaScript

### License

*This site is licensed under the MIT license.*

Copyright (c) 2020 **_Brittany A Lindgren_**