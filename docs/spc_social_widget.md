*- Toggle menu for contact and links to social media*

*- Designed as a Spacecraft Starterkit compatible component*

## Quick start
This menu will toggle from a fixed button on all devices, prepared with icons for Facebook, Instagram and Twitter. You can customize all of the content from the config-file.


## Install
Clone/download [Spacecraft Starterkit](https://github.com/pedric/spacecraft-starterkit) and run:

`npm install`

`npm install --save <component-name>`
// To get this actual component downloaded.

`gulp import --component <component-name>`
// To get the files into your project.

`gulp`
// To start up Spacecraft.

The last step is to import the css, in..

`./src/scss/components/_components.main.scss`

..add..

`@import "views/<component-name>/<component-name>";`