# GoNoodle CSS Exericse Submission

To give you the best understanding of how I approached this problem, I'll be leaving all of my thoughts from beginning to end here. Todo outlines the steps that I took to do the exercise. Initial thoughts covers the first things I asked myself when I read over the exercise. Final thoughts covers my assumptions and things I would have done in the future to make the solution even better.

## Todo:
1. ~Stub out first pass of markup~
2. ~Build out component~
    a. ~Typekit~
    b. ~Add images~
    c. ~CSS~
3. ~Set up tooling~
    a. ~Webpack~
    b. ~PostCSS~
4. Browserstack free trial
5. Test test test fix fix fix

## Initial Thoughts
* How production should I treat this? Linting + minification? Naming convention?
* Figure out best way to incorporate SVGs. I've typically fallen back to icon fonts, but a good SVG workflow has been on my list of things to do for a while. Maybe this is a good time to try one out.
* Don't forget responsiveness and accessibility.
* It'd be interesting to try a microclasses approach, but I think I'll stick with something more traditional like SuitCSS.
* I think I'll try to implement as much as possible sans-tooling, and then come back over with tooling to make things more production ready.
* Should I sprite these SVGs for performance?
* Will I need js for some of these interactions?

## Final Thoughts
* I would have liked to have used a semantic `<button>` for the Tile footer, but given the sliding action, it'd feel really weird. Would the view more also need to be a `<button>` to be semantic?
* The annotations only covered some of the questions I might have had. I eyeballed things like the padding, shadows, and text sizes.
* I can't seem to figure out how to get the subtle shoe animation to play in reverse, so that's annoying.
* I had to use a few magic numbers for the sake of time. I'd refactor those out otherwise.
* Naming is hard. My first pass was silly. Second pass was a bit better.
* I totally should have squashed all my microcommits.
* Tried to setup webpack to use fancy tooling, but ran out of time before I could get it working well. Had to do some manual optimisation for the SVGs.
* I really hate relying on jQuery, but for time's sake and cross browser compatibility, I'm gonna lean on it for the button interaction. In a real production scenario, I'd never use an entire library for one trivial piece of functionality.