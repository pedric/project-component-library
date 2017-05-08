*- Full width single block for articlepreview*

*- Designed as a Spacecraft Starterkit compatible component*

## Quick start
This can for example be used to haedline an article together with the article excerpts component since it has the same design. The article excerpts shows the image, heading, author and tags for each article in a responsive grid while this shows one fullwidth preview att all screensizes and also shows the ingress for the article.

## Install

### Spacecraft Starterkit
If you have not yet installed [Spacecraft Starterkit](https://github.com/pedric/spacecraft-starterkit) , do so by running:

`git clone git@github.com:pedric/spacecraft-starterkit.git`

`cd spacecraft-starterkit`

`npm install`

### spc_article
If you have already installed [Spacecraft Starterkit](https://github.com/pedric/spacecraft-starterkit), run:

`npm install --save spc_hero_article && gulp import --component spc_hero_article`

And don't forget to import the css by adding:

`@import "views/spc_hero_article/spc_hero_article";`

in

`./src/scss/components/_components.main.scss`

