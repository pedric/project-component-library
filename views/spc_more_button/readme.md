*- Button with rounded corners and some hover-effects*

*- Designed as a Spacecraft Starterkit compatible component*

## Quick start

No config.json needed, set button-content in the `data-spc_more_button` attribute like this: `data-spc_more_button="value"` in spc_more_button.twig.

Change the color variables in scss-file to customise, by default it´s #fff and #000 set as "bright and dark". Button set to fullwidth at `@media screen and (max-width:800px)`.

## Install

### Spacecraft Starterkit
If you have not yet installed [Spacecraft Starterkit](https://github.com/pedric/spacecraft-starterkit) , do so by running:

`git clone git@github.com:pedric/spacecraft-starterkit.git`

`cd spacecraft-starterkit`

`npm install`

### spc_article
If you have already installed [Spacecraft Starterkit](https://github.com/pedric/spacecraft-starterkit), run:

`npm install --save spc_more_button && gulp import --component spc_more_button`

And don't forget to import the css by adding:

`@import "views/spc_more_button/spc_more_button";`

in

`./src/scss/components/_components.main.scss`