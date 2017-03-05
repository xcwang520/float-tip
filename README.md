# float-tip

> 页面tip,分享,收藏,返回顶部

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

&nbsp;
##[Demo](https://xcwang520.github.io/float-tip/)
&nbsp;

## Installation
# NPM
npm install --save float-tip

## Usage

### Loading the library

##### Browserify / Webpack

```javascript
var Tip = require('float-tip');

Vue.use(Tip);
```

### Using the social sharing component

```html
<tip :opts="OPTS">

</tip>
```

#### Available properties

Demo props to use in the component:
```javascript
top: {
  type: 'always',
  el: "'#header'",
  icon: 'fa fa-chevron-up fa-3x',
  text: "返回顶部"
},
share: {
  icon: "fa fa-share-alt fa-3x",
  text: "分享"
},
star: {
  icon: "fa fa-star-o fa-3x",
  text: "收藏"
}
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
