*- Inline menu that switches to toggle menu on smaller devices*

*- Designed as a Spacecraft Starterkit compatible component*

## Quick start
Add the amount of menu-items that´s in your custom menu to spc\_inline_menu.config.json and it will divided and lined up inline forming a fullwidth menu. Add submenu items under your menu items and they´ll dropdown on hover, yet there is no support for items wrapped under sub-menu items. On smaller devices the menu will toggle from the menu button and expand the whole menu scrollable.

## Install

### Spacecraft Starterkit
If you have not yet installed [Spacecraft Starterkit](https://github.com/pedric/spacecraft-starterkit) , do so by running:

`git clone git@github.com:pedric/spacecraft-starterkit.git`

`cd spacecraft-starterkit`

`npm install`

### spc_article
If you have already installed [Spacecraft Starterkit](https://github.com/pedric/spacecraft-starterkit), run:

`npm install --save spc_inline_menu && gulp import --component spc_inline_menu`

And don't forget to import the css by adding:

`@import "views/spc_inline_menu/spc_inline_menu";`

in

`./src/scss/components/_components.main.scss`

