# jQuery scroll to
A jQuery plugin that animates page jumps to anchors.

## Default initialization
```js
$('.js-scroll-to').spScrollTo();
```

## Settings
Option | Type | Default | Description
------ | ---- | ------- | -----------
container | jQuery object | $('body') | The containing element to scroll.
offset | integer | 0 | Distance to the top of the viewport.
scrollSpeed | integer | 800 | The duration of the scroll animation.
onBeforeScroll | function | undefined | A function to be executed after reaching the target.

## Initialization with custom settings
```js
/**
 * 1. Remove 5px more from the cropped (calculated) height.
 */
$('.js-scroll-to').spScrollTo({
    container: $('html'),
    offset: $('#js-site-header').outerHeight()
});
```

### Dependencies
jQuery

### License
Copyright © Steve Piron
