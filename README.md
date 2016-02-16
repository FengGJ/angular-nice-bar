# Angular-nice-bar
A nice and lightweight scrollbar in Angular.

[Demo](http://forsigner.com/nice-bar)

### Install

```
bower install angular-nice-bar --save
```
### Usage

``` html
<link rel="stylesheet" href="bower_components/angular-nice-bar/dist/css/angular-nice-bar.css" />

<script src="bower_components/angular-nice-bar/dist/js/angular-nice-bar.js"></script>

```

```js
angular.module('app', ['ngNiceBar']);
```

#### As a directive

```js
angular.module('app', ['foPopover']);
```

```html
<div nice-bar nice-bar-delay="1000">
  <!-- content here-->
</div>
```

#### As a service

``` html
<div id="container">
  <!-- content here-->
</div>
```

```js
angular.module('app', ['ngNiceBar'])
.controller('HomeCtrl', function($scope, niceBar) {
  $timeout(function() {
    niceBar.init(document.getElementById('container'));
  }, 10);
});
```

### License

  [MIT](LICENSE)
