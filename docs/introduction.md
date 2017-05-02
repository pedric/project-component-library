Spacecraft is a tool for building websites in which you are in control- of and can work based on components. When working with this method it would be quite handy to be able to develop and reuse these components between projects. This styleguide is part of a project with the aim to find- and implement a way to distribute- and have versioncontrolled components.

To use Spacecraft together with the ready-to-use components, start with cloning this repo: [https://github.com/pedric/spacecraft-starterkit](https://github.com/pedric/spacecraft-starterkit), which is a version of Spacecraft-Starter in where another customised version of Spacecraft lives. This kit are expanded with the tasks for importing components direct to your project with a few commands presented below in the installation guide.

There is no limitation to what a component is, this styleguide for example, could be fewer components or even one big "page" component or the other way torn down to more even smaller components. But in first hand this is built to test and develop the structure, conventions, distribution etc for components.

## Installation guide
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

## The copy/paste
Somewhere you will do the "copy/paste", sure you can be developing your component directly and push it to NPM/GIT, but probably you will enhance components while working on them in different projects. In the structure as it is built now you will have to do this "copy/paste" since the import process is copying components into a project and from there one are not working with the original version.

## Sources
* [Spacecraft Starterkit](https://github.com/pedric/spacecraft-starterkit)

* [Spacecraft Module (customised project version)](https://github.com/pedric/spacecraft-projectversion)

* [Browse components](https://spc-component-library.herokuapp.com/)

* These Components at github