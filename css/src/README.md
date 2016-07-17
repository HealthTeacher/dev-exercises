# CSS

### Testing
The Component has been cross-browser and platform tested.  UX and presentation remains constant on all platforms and devices.

### Technology
The test was completed using a combination of Ruby and Node.js tools. 
 
- [Gulp.js](http://gulpjs.com/) was utilized as a build.
- Sass, Compass, Compass-Normalize and Haml gems were used for markup and styling.
- A Ruby script is included for use with the Gulp-ruby-haml plugin to mimic the Rails render function.
- Gems were utilized via Gulp plugins.
- No jQuery was used to complete this test.
- ~~CSS3 transitions are used on the footer links.~~
- ~~GSAP is used to animate the favorite button states and transitions.~~
- After creating the initial pull request I discovered your style guide and refactored styling classification to better align with spec.
- Additionally, all animations have been converted to CSS3 tweens.
- [GSAP](https://greensock.com/) is still being used for IE9.  A fallback has been established so that all animations mirror that of modern browsers supporting CSS3 animation functionality.  
- An additional fallback is in place to inject GSAP from a local source if the CDN load fails.
- Bower support has been integrated to manage common JS dependencies.
- utilLayer.js has been converted to a Gist and is now managed via Bower

### Setup
Before running the system ensure [Ruby](https://www.ruby-lang.org/en/) is installed on your system and install the following gem:

[Bundler](http://bundler.io/)
```
gem install bundler
```
Install the Gemfile dependencies
```
bundle install
```

With [Bower](https://bower.io/) installed, add additional project dependencies.
```
bower install
```


### Server
The basic web server was replaced with [BrowserSync](https://browsersync.io/) to leverage cross-platform and browser testing in real-time, as well as for handling live reloading the viewport.

Assuming Node.js is already installed on your system, install Gulp as a global
```
npm install -g gulp
```


```
cd path/to/repo/css/
npm install
npm start
```

After visiting `http://localhost:3000` in your browser, you should see the tile component in action. Use <kbd>CTRL</kbd> + <kbd>c</kbd> to stop the server.

Feel free to add any additional infrastructure that you would like, as long as the page is still accessible by running `npm start`.

### Tile Component
- Because annotated comp did not indicate font size, semantic elements whose default font sizes seem to match were used

### Deviations
- The one intended deviation is the page outputs 3 tile components.  This is done to exemplify the component's modularity.
