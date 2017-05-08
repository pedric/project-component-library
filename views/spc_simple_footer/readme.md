*- A supersimple footer*

*- Designed as a Spacecraft Starterkit compatible component*

## Quick start

No config.json needed, set your name in the `data-spc_simple_footer` attribute like this: `data-spc_simple_footer="company name"` in spc_simple_footer.twig.

Change the color variable or it's value in scss-file to customise. By default it´s the same style for p-, span- and a elements.

The span element will contain `@YEAR` + `name` set as described above.

## Install

### Spacecraft Starterkit
If you have not yet installed [Spacecraft Starterkit](https://github.com/pedric/spacecraft-starterkit) , do so by running:

`git clone git@github.com:pedric/spacecraft-starterkit.git`

`cd spacecraft-starterkit`

`npm install`

### spc_article
If you have already installed [Spacecraft Starterkit](https://github.com/pedric/spacecraft-starterkit), run:

`npm install --save spc_simple_footer && gulp import --component spc_simple_footer`

And don't forget to import the css by adding:

`@import "views/spc_simple_footer/spc_simple_footer";`

in

`./src/scss/components/_components.main.scss`