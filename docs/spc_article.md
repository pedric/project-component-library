*- Designed to display current article*

*- Designed as a Spacecraft Starterkit compatible component*

## Quick start
Ths Spc_article component will contain and display the article whom is currently chosen. The heading will adjust to fullwidth and you can linebreak it with the `<br />`-tag. Css styles set as parameters are "theme color" and the max-width of the content which you can easily customise and there is prepared styles for the most common html-elements with ongoing updates for better support. The "main image" are best fit for landscape format.

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