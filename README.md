# Custom Map
> In the development of this project it was used, gulp, stylus and jade.

## Usage
To install the dependencies use.
```sh
$ npm install
```
### Files

```sh

├── app
│   ├── images
│   ├── scripts
│   ├── styles
│   └── index.jade
│     
└── dist
│   ├── scripts
│   ├── styles
│
├── .gitignore
├── LICENSE
├── README.md
├── gulpfile.js
├── index.html
├── package.json
```

### Run
to generate all minificados files, both jade, styl and js, use the following command.

```sh
$ gulp watch 
```

### Tasks
- `gulp stylus`: compile stylus to css
- `gulp jade`: compile jade to html
- `gulp uglify`: minify and concat js
- `gulp jshint`: execute jshint
- `gulp watch`: call for watch files
