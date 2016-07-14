# CSS Exercise

So this was fun! Just a quick heads up:

- I'm pretty sure this isn't perfect
- I'm sending it over now, because I said I'd get this over yesterday but the whole HDD crash thing happened.
- And I realized while doing this, I need work on my animations

Ideally the gulp file wouldn't be a mess, there would be a build dir, and would package components individually
Structure would be
- css
    - build
        - components
            - tile
                - fonts
                - scripts
                - scss
                - tasks

### Tile Component

Tile component is located inside the scss/components

- Used Icomoon to convert svg files to font for icons
- tile.js located in src/assets/scripts handles click events for the heart

### Starting the server
This directory is configured to utilize a basic web server. You will first need to install [Node.js](https://nodejs.org). Once Node.js is installed and you have cloned this repository, you can start the server by running the following in Terminal:

```
cd path/to/repo/css/
npm install
npm start
```

After visiting `http://localhost:8080` in your browser, you should see the Tile Component
