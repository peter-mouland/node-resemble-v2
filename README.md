node-resemble-v2
=============

A new Node port of [Resemble.js v2](https://github.com/Huddle/Resemble.js).

##Installation

```bash
$ npm i node-resemble-v2
```

##Prerequisites

[Cairo](http://cairographics.org/) is required for [node-canvas](https://github.com/Automattic/node-canvas), installation instructions can be found node-canvas [Wiki](https://github.com/Automattic/node-canvas/wiki/_pages).

##Example

```js
var fs = require('fs');

var resemble = require('node-resemble-v2');

var github_img1 = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAABGdBTUEAALGPC/xhBQAAAJlQTFRFJiYmJiYmJSUlJiYmKysrJiYmJSUlJiYmJSUlJCQkJiYmJycnJiYmJiYmJSUlJiYmJSUlJiYmJSUlJCQkJycnJCQkJycnJiYmJSUlJiYmJiYmJycnJiYmJiYmJSUlJycnJycnJCQkJSUlJiYmJiYmJycnJiYmJycnJiYmJSUlJiYmJiYmJycnJiYmEhISISEhJycnAAAAJiYmQmWwmAAAADJ0Uk5T9JNotgyiTK2KR0P7Zij+PYni/StBMdmBpKnq5tbw1VXsKu9RUM3O7cl8V5ql3w42+gB0ejcrAAAApElEQVQY012PRRIEMQwDs8zMOAzhyP9/3CYDl9XJ7irZEoOXldo5LW2YGWAUlVwIXpIyAZi6ytAor2rjgao2pgXjpFJglvLLdrbez4eT1TIny2QJS50WKCXTHLceDMA1cwLXHsQQjrkIhx4wRC5YRj2og0UW2Ll2P05RSP82g72/iJ6PMzL/FipOgIJIA6cQzEdPBT7eAZE20UO5b7jy7sr91f8BZR4qkBlEJUYAAAAASUVORK5CYII=';

var github_img2 = fs.readFileSync('./example.png');

resemble(github_img1).onComplete(function(data){
    console.log(data);
});

resemble(github_img1).compareTo(github_img2).onComplete(function(data){
    console.log(data);
});
```