*- A supersimple footer*

*- Designed as a Spacecraft Starterkit compatible component*

## Quick start

No config.json needed, set your name in the `data-spc_simple_footer` attribute like this: `data-spc_simple_footer="company name"` in spc_simple_footer.twig.

Change the color variable or it's value in scss-file to customise. By default it´s the same style for p-, span- and a elements.

The span element will contain `@YEAR` + `name` set as described above.

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