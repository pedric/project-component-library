*- Heading (for example page/company name) that adjust fontsize to be full-width (limited by parent element)*

*- Designed as a Spacecraft Starterkit compatible component*

## Quick start

In spc_fullwidth_heading.config.json you control the text-content and link-target for the heading. If you want a line break you just use the `<br />`-tag. 

Change the font-family and color variables in scss-file to customise, by default it´s `'Helvetica', sans-serif` and `#000`.

## Install

### Spacecraft Starterkit
If you have not yet installed [Spacecraft Starterkit](https://github.com/pedric/spacecraft-starterkit) , do so by running:

`git clone git@github.com:pedric/spacecraft-starterkit.git`

`cd spacecraft-starterkit`

`npm install`

### spc_article
If you have already installed [Spacecraft Starterkit](https://github.com/pedric/spacecraft-starterkit), run:

`npm install --save spc_fullwidth_heading && gulp import --component spc_fullwidth_heading`

And don't forget to import the css by adding:

`@import "views/spc_fullwidth_heading/spc_fullwidth_heading";`

in

`./src/scss/components/_components.main.scss`

