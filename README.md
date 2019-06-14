# larayner-web-demo

This project was created as a demo to show what updates needed to be done to an existing website.
A very barebones example of what changes would be made to the existing webpage.

--------------------------------------------------------------------
<strong>Starting Template<strong><br>

Enabled: <br>
Autoprefixer <br>
Browser-sync <br>
Del <br>
Gulp <br>
JQuery <br>
Normalize.css <br>
Postcss <br>
webpack <br>
<br>

Folder system

Project Folder holds: README, package.json, gulpfile, gitignore, app[], gulp[] <br>
 - app: assets[], temp[], any html pages <br>
    - assets: images[] /*Holds all image files*/, styles[], scripts[] <br>
       - styles: styles.css /*Main Styles*/, base[] /*Holds global styles 
       and variables*/, modules[] /*Holds all individual class styles*/ <br>
       - scripts: App.js /*Main Js File*/, modules[] /*Holds classes*/ <br>
    - temp: styles[] /*Used with postcss*/, scripts[] /*Used with webpack and babel*/ <br>
 - gulp: tasks[]: scripts.js, styles.js, watch.js /*gulp tasks*/ <br>