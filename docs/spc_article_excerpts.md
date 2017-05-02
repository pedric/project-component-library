*- Square blocks for articlepreviews*

*- Designed as a Spacecraft Starterkit compatible component*

## Quick start
The article excerpts shows the image, heading, author and tags for each article in a responsive grid. 

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