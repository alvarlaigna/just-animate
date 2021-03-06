# Just Animate

*Just Animate creates beautiful animations using the latest browser standards*


[![npm version](https://badge.fury.io/js/just-animate.svg)](https://badge.fury.io/js/just-animate) 
[![Build Status](https://travis-ci.org/just-animate/just-animate.svg?branch=master)](https://travis-ci.org/just-animate/just-animate)
[![Downloads](https://img.shields.io/npm/dm/just-animate.svg)](https://www.npmjs.com/package/just-animate)

<img src="./docs/resources/main-demonstration.gif" />

## Features

- over 75 preset animations
- hardware acceleration on Chrome and FireFox using the Web Animation API
- control multiple animations
- animation sequencing
- animation timelines
- randomness and staggered timing through property resolvers
- full animation control (reverse, pause, cancel, and seek)

> When this project gets to 100 🌟s, I'm going to work on morphing SVGs,  [so ^ star it please](https://github.com/just-animate/just-animate/stargazers).

## Getting Started

### Setup from CDN
 - For support in Internet Explorer, Edge, or Safari, include this script. Just Animate uses the Web Animation API and is not yet supported in these browsers.
    ```html
    <script src="https://cdnjs.cloudflare.com/ajax/libs/web-animations/2.2.2/web-animations.min.js"></script>
    ```

 - Include this script (change 1.0.7 to the current version to get the latest)
    ```html
    <script src="https://cdnjs.cloudflare.com/ajax/libs/just-animate/1.0.7/just-animate-all.min.js"></script>
    ```
 - ```just``` is available from
 - That's it!

### Setup for Webpack/Rollup/Browserify

Just Animate can also be installed through NPM for bundling.

<img src="./docs/resources/npm-demonstration.gif" />

```bash
npm i just-animate --save
```

Then it can be used like all other NPM libraries:

<img src="./docs/resources/import-demonstration.gif" />

## Usage

|property|type|description|
|:-------------|:-------------|:-------------|
|css|CSSKeyframe[] or CSSProperty|An array of keyframes or an object of properties to animate|
|delay|Time or Function|Time before animation starts as '2s', '2000ms', 2000, '+=2s', '100 to 200 ms', or function() { return 2000; }|
|direction|string|Direction of the animation (normal, reverse, alternate)|
|easing|AnimationTimingFunction|Animation timing function (ease, ease-in, easeOutCubic, step(1,end))|
|fill|string|Animation fill mode (none, both, forwards, backwards)|
|from|Time|When to start the animation as '2s', '2000ms', or 2000|
|iterations|number|Number of iterations, defaults to 1|
|mixins|string or string[]|A preset or a list of presets to add to the animation(e.g. fadeIn, hinge, zoomOutLeft, etc.)|
|targets|AnimationTarget|An html selector, an Element, a NodeList, or a jQuery object. This can also be an array of any of those or a function that returns any of those.|
|to|Time|When to stop the animation written as '2s', '2000ms', or 2000|


 ```javascript
  just.animate({
    // css: [
    //   { opacity: 0 },
    //   { opacity: 1 }
    // ],
       css: {
           opacity: [0, 1]
       },

    // delay: '0ms',
    // delay: '+=100',
    // delay: function(ctx) {
    //     return 10 * ctx.index;
    // },

    // direction: 'normal',
    // direction: 'reverse',
    // direction: 'alternate',

    // easing: 'linear',
    // easing: 'cubic-bezier(0, 0, 1, 1)',
    // easing: 'step(1, end)',

    // fill: 'none',
    // fill: 'forwards',
    // fill: 'backwards',
    // fill: 'both',

    // from: 0,
    // from: '0ms',
    // from: '0.002s',

    // iterations: 1,
    // iterations: Infinity,

    // mixins: 'fadeIn',
    // mixins: ['fadeIn'],

       targets: '#animate-me',
    // targets: document.getElementById('animate-me),
    // targets: document.querySelectorAll('#animate-me),
    // targets: $('#animate-me),
    // targets: ['#animate-me'],
    // targets: () => document.getElementById('animate-me'),

    // to: 1000,
    // to: '1000ms',
       to: '1s'
  })
 ```


### Animate multiple targets by using an html selector, JQuery, or an array of targets

<img src="./docs/resources/targets-demonstration.gif" />

 ```javascript
just.animate({
       mixins: 'fadeIn',
       targets: '#animate-me',
    // targets: document.getElementById('animate-me),
    // targets: document.querySelectorAll('#animate-me),
    // targets: $('#animate-me),
    // targets: ['#animate-me'],
    // targets: () => document.getElementById('animate-me'),
    // targets: function() { return document.getElementById('animate-me'); },
});
 ```

### Animate multiple targets in sequence by chaining .animate() calls

<img src="./docs/resources/sequence-demonstration.gif" />

 ```javascript
just.animate({
      mixins: 'fadeIn',
      targets: '#first',
  })
  .animate({
      mixins: 'fadeIn',
      targets: '.second'
  });

```


### Use multiple animations at the same time by passing in an array of animation options

<img src="./docs/resources/timeline-demonstration.gif" />

  ```javascript
  just.animate([
    {
      mixins: 'fadeOutLeft',
      targets: '#first',
      to: '2s',
      delay() {
        // delay animation for a random # of ms between 0 and 1000
        return just.random(0, 1000);
      }
      // delay: '0 to 1000'
    },
    {
      mixins: 'fadeOutRight',
      targets: '#second',
      to: '1.5s'
    }
  ]);

```

### Create custom animations or secondary effects using the update function

  ```javascript
just.animate({
    targets: '#first',
    to: '2s',
    on: {
        update: function(ctx) {
            console.log(ctx.delta);            // delta time since the last update
            console.log(ctx.currentTime);      // current time of animation
            console.log(ctx.relativeDuration); // total duration of the animation (to - from)
            console.log(ctx.offset);           // absolute offset (time) of the animation from 0 to 1
            console.log(ctx.playbackRate);     // current playback rate
            console.log(ctx.computedOffset);   // relative offset (progress) of the animation from 0 to 1
            console.log(ctx.target);           // target of this animation
            console.log(ctx.index);            // target index of this animation
            console.log(ctx.targets);          // all targets of this animation
        }
    }
});

```

### Animate CSS transforms with easy to use shorthand properties

```javascript
just.animate({
    /* .. */
    css: [{
        perspective: '200px',                // camera distance from the z plane
        matrix:      '1, 1, 1, 1, 1px, 1px', // matrix transform function
        translate:   '20px, 30px',           // X, Y distance from origin
        translate3d: '20px, 30px, 40px'      // X, Y, Z distance from origin
        translateX:  '20px'                  // same as x
        translateY:  '20px'                  // same as y
        translateZ:  '20px'                  // same as z
        x:           '20px',                 // X distance from origin
        y:           '30px',                 // Y distance from origin
        z:           '40px',                 // X distance from origin
        skew:        '20deg',                // X, Y skew function
        skewX:       '20deg',                // X skew function
        skewY:       '20deg',                // Y skew function
        scale:        1.1,                   // X, Y scale
        scale3d:      1.3,                   // X, Y, Z scale
        scaleX:       1,                     // X scale
        scaleY:       1,                     // Y scale
        scaleZ:       1,                     // Z scale
        rotate:      '90deg',                // same as rotateZ
        rotate3d:    '90deg',                // X, Y, Z rotation
        rotateX:     '90deg',                // X rotation
        rotateY:     '90deg',                // Y rotation
        rotateZ:     '90deg'                 // Z rotation
    }]
});
```

#### Notes:
- The properties are evaluated in the order shown here.  I believe the order solves a large number of use cases.  The transform property can be used directly for other cases. 
- Using aliased properties such as translateX and x together may result in unexpected results


### Use the player returned from .animate() to listen for events or other functions control the animations.

 ```javascript
var player = just.animate(/* ... */);

// event listeners
player.on('finish', function(ctx) { }); // fired when the animation finishes or .finish() is called
player.on('cancel', function(ctx) { }); // fired when .cancel() is called
player.on('pause',  function(ctx) { }); // fired when .pause() is called
player.on('update', function(ctx) { }); // fired each update cycle
player.on('iteration', function(ctx) { }); // fired each time the entire timeline is repeated
player.off('finish', function(ctx) { } ) // unregisteres a function from .on()

// or pass an object with all event listeners
player.on({
    finish(ctx) {},
    cancel(ctx) {},
    pause(ctx) {},
    update(ctx) {},
    iteration(ctx) {}
})

player.cancel();         // cancels animation and resets all properties
player.duration();       // returns duration of the animation (to-from) in milliseconds
player.finish();         // pauses animation and seeks to the end when moving forwards and the beginning when backwards
player.pause();          // pauses the animation
player.playState();      // returns the current play state 'playing', 'paused', etc.
player.reverse();        // reverses the direction of the animation

player.play();           // plays the animation
player.play(Infinity);   // plays the animation until canceled

// plays the timeline once forwards and then once backwards
player.play({ 
    iterations: 2, 
    direction: 'alternate' 
})

player.currentTime();    // returns the current time of the animations
player.currentTime(500); // seeks to 500 milliseconds

player.playbackRate();    // returns the current playbackRate
player.playbackRate(2); // changes the playback rate to 2 (2x speed)

player.animate({ });      // appends a new animation to this player
player.animate([ ]);      // appends a set of animations to this player
```

### Easings / Timing Functions
For convenience, Just Animate has the majority of the easings on http://easings.net/ built right in.  By default, the "ease" function is used just like in CSS.  If one of these included easings doesn't cut it, a string with a CSS timing function can be used instead as the easing property.

| Name        | Timing Function                           |
| ------------- |:-----------------------------------:|
|ease           | cubic-bezier(.25, .1, .25, 1)             |
|easeIn         | cubic-bezier(.42, 0, 1, 1)                |
|easeInBack     | cubic-bezier(.6, -.28, .735, .045)        |
|easeInCirc     | cubic-bezier(.6, .04, .98, .335)          |
|easeInCubic    | cubic-bezier(.55, .055, .675, .19)        |
|easeInExpo     | cubic-bezier(.95, .05, .795, .035)        |
|easeInOut      | cubic-bezier(.42, 0, .58, 1)              |
|easeInOutBack  | cubic-bezier(.68, -.55, .265, 1.55)       |
|easeInOutCirc  | cubic-bezier(.785, .135, .15, .86)        |
|easeInOutCubic | cubic-bezier(.645, .045, .355, 1)         |
|easeInOutExpo  | cubic-bezier(1, 0, 0, 1)                  |
|easeInOutQuad  | cubic-bezier(.455, .03, .515, .955)       |
|easeInOutQuart | cubic-bezier(.77, 0, .175, 1)             |
|easeInOutQuint | cubic-bezier(.86, 0, .07, 1)              |
|easeInOutSine  | cubic-bezier(.445, .05, .55, .95)         |
|easeInQuad     | cubic-bezier(.55, .085, .68, .53)         |
|easeInQuart    | cubic-bezier(.895, .03, .685, .22)        |
|easeInQuint    | cubic-bezier(.755, .05, .855, .06)        |
|easeInSine     | cubic-bezier(.47, 0, .745, .715)          |
|easeOut        | cubic-bezier(0, 0, .58, 1)                |
|easeOutBack    | cubic-bezier(.175, .885, .32, 1.275)      |
|easeOutCirc    | cubic-bezier(.075, .82, .165, 1)          |
|easeOutCubic   | cubic-bezier(.215, .61, .355, 1)          |
|easeOutExpo    | cubic-bezier(.19, 1, .22, 1)              |
|easeOutQuad    | cubic-bezier(.25, .46, .45, .94)          |
|easeOutQuart   | cubic-bezier(.165, .84, .44, 1)           |
|easeOutQuint   | cubic-bezier(.23, 1, .32, 1)              |
|easeOutSine    | cubic-bezier(.39, .575, .565, 1)          |
|elegantSlowStartEnd | cubic-bezier(.175, .885, .32, 1.275) |
|linear         | cubic-bezier(0, 0, 1, 1)                  |
|stepEnd        | steps(1, end)                             |
|stepStart      | steps(1, start)                           | 

### Utilities

#### random()

<img src="./docs/resources/random-demonstration.gif" />

```javascript
// returns a number (including decimals) between 0 and 100
just.random(0, 100)

// returns 0px to 100px (only whole numbers)
just.random(0, 100, 'px', true)

// returns a whole number between 0 and 100
var start = 0;
var end = 100;
var unit = undefined;
var onlyWholeNumbers = true;
just.random(start, end, unit, onlyWholeNumbers);
```

#### shuffle()

<img src="./docs/resources/shuffle-demonstration.gif" />

```javascript
// randomly returns fadeIn, bounceIn, or zoomIn
just.shuffle(['fadeIn', 'bounceIn', 'zoomIn']);
```

#### splitText()

Splits the text of an element into words and characters so each word or character can be animated separately. Formatting should be preversed, but each character and word is wrapped in its own element.

<img src="./docs/resources/splittext-demonstration.gif" />

```javascript
var characterElements = just.splitText('#element1').characters;
var wordElements = just.splitText('#element1').words;
```

## Demos

- [All Mixins](http://codepen.io/notoriousb1t/full/vXZNvm/)
- [CodePen Demos](http://codepen.io/collection/ANzZxb/)

## Frameworks

Sometimes a little bit of framework integration can go a long way to making a project more livable. Just Animate has bindings for VueJS 2.0 that make it easy to use in HTML.  Read about it [here](./docs/vue.md)

#### JavaScript

```javascript
var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!'
  }
});
```

## License

Just Animate is licensed under the MIT license. (http://opensource.org/licenses/MIT)

## How can you contribute?

 - make awesome things with Just Animate.  If you make it on CodePen or otherwise, send me a link so I can add it to the demos here.
 - create issues if there is a bug or an unexpected behavior (if it isn't reported, it probably won't get fixed)
 - contribute code and help me make this library great!
 - help with documentation.  It takes four times as long at least to build out docs.  When you contribute docs, you are helping out everyone including me.
