*- Toggle menu for contact and links to social media*

*- Designed as a Spacecraft Starterkit compatible component*

## Quick start
This menu will toggle from a fixed button on all devices, prepared with icons for Facebook, Instagram and Twitter. You can customize all of the content from the config-file.

## Install

### Spacecraft Starterkit
If you have not yet installed [Spacecraft Starterkit](https://github.com/pedric/spacecraft-starterkit) , do so by running:

`git clone git@github.com:pedric/spacecraft-starterkit.git`

`cd spacecraft-starterkit`

`npm install`

### spc_article
If you have already installed [Spacecraft Starterkit](https://github.com/pedric/spacecraft-starterkit), run:

`npm install --save spc_social_widget && gulp import --component spc_social_widget`

And don't forget to import the css by adding:

`@import "views/spc_social_widget/spc_social_widget";`

in

`./src/scss/components/_components.main.scss`