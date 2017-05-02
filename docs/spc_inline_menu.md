*- Inline menu that switches to toggle menu on smaller devices*

*- Designed as a Spacecraft Starterkit compatible component*

## Quick start
Add the amount of menu-items that´s in your custom menu to spc\_inline_menu.config.json and it will divided and lined up inline forming a fullwidth menu. Add submenu items under your menu items and they´ll dropdown on hover, yet there is no support for items wrapped under sub-menu items. On smaller devices the menu will toggle from the menu button and expand the whole menu scrollable.

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