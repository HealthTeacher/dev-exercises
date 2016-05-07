## Tada!

I've implemented a single, absolutely position tile on the page. That behaviour can be easily removed and replaced with a `float: left` style for use in a grid.

In order to compile the styles, run `npm run build-css`.

### Some notes:
- My goal was to do the best job I could with the very limited amount of time I had available this weekend.
- I would normally spin up a build process via webpack and use that to handle any preprocessing.
- My handling of SVGs was a little heavy-handed as well. I would ideally use webpack to handle those.
- I also used stylus for fun. It's not my go-to preprocessor.
- To make this more cross-browser compatible I would implement autoprefixer (also through webpack)
