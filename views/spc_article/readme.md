*- Designed to display current article*

*- Designed as a Spacecraft Starterkit compatible component*

## Quick start
Ths Spc_article component will contain and display the article whom is currently chosen. The heading will adjust to fullwidth and you can linebreak it with the `<br />`-tag. Css styles set as parameters are "theme color" and the max-width of the content which you can easily customise and there is prepared styles for the most common html-elements with ongoing updates for better support. The "main image" are best fit for landscape format.

## Install

### Spacecraft Starterkit
If you have not yet installed [Spacecraft Starterkit](https://github.com/pedric/spacecraft-starterkit) , do so by running:

`git clone git@github.com:pedric/spacecraft-starterkit.git`

`cd spacecraft-starterkit`

`npm install`

### spc_article
If you have already installed [Spacecraft Starterkit](https://github.com/pedric/spacecraft-starterkit), run:

`npm install --save spc_article`

`gulp import --component spc_article`

And don't forget to import the css by adding:

`@import "views/spc_article/spc_article";`

in

`./src/scss/components/_components.main.scss`

