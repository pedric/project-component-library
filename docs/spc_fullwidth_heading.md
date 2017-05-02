*- Heading (for example page/company name) that adjust fontsize to be full-width (limited by parent element)*

*- Designed as a Spacecraft Starterkit compatible component*

## Quick start

In spc_fullwidth_heading.config.json you control the text-content and link-target for the heading. If you want a line break you just use the `<br />`-tag. 

Change the font-family and color variables in scss-file to customise, by default it´s `'Helvetica', sans-serif` and `#000`.

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