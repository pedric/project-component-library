*- Button with rounded corners and some hover-effects*

*- Designed as a Spacecraft Starterkit compatible component*

## Quick start

No config.json needed, set button-content in the `data-spc_more_button` attribute like this: `data-spc_more_button="value"` in spc_more_button.twig.

Change the color variables in scss-file to customise, by default it´s #fff and #000 set as "bright and dark". Button set to fullwidth at `@media screen and (max-width:800px)`.

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