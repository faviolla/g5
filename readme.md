# G5 Test

Create new folder for project and open terminal

```bash
$ git clone https://github.com/faviolla/g5.git
$ cd g5
```

To use Gulp you need to have [Node.js](http://nodejs.org/) installed on your system.

Install the dependencies by running:

```bash
$ npm install
```

This creates `node_modules` directory with all the plugins in the root of project.

Run the gulp command in your project directory:

```bash
$ gulp
```

You should now have folder `build` in project root `g5`.

Navigate to `localhost:3000/pages/` in browser and you should see `index.html` open, as the server runs in the background.
