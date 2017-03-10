# Quick Start

## Download

First of all you need to get the library file.


## Add it

Once you've got the file, add it to your HTML page with a script tag.
```html
<script src="pathToLib/drawLib.js"></script>
```

You'll also need to add a canvas that'll be drawn into.
```html
<canvas id="myScene"></canvas>
```

## Use it

You can now start to use the library.


### Scene

The first thing to make is a scene. It'll define the size of the drawing and the global options.
It need a reference to your canvas and optionally some options.
```js
var canvas = document.getElementById("myScene");
var scene = new Scene(canvas);
scene.startAnimation();
```


### Shape

Then, you can add some shape to your scene. The full list and options is available at [the documentation](https://github.com/GMartigny/drawLib/blob/master/DOCUMENTATION.md).
```js
var circleCenter = scene.center();
var radius = 200;
var circle = new Circle(circleCenter, radius);
scene.add(circle);
```


### Animation

Any shape can have an animation. You can either define one yourself or use the premade one.
```js
var swirlRadius = 20;
var swirlSpeed = 0.1;
var swirlAnimation = new Animation.Swirl(swirlRadius, swirlSpeed);
circle.animateWith(swirlAnimation);
```


### Background

Shapes and scenes can have background, there's a number of way to define a background, let's see some.
```js
// define a fill color when constructing
var circle = new Circle(center, radius, {
    fillColor: "blue"
});
```
```js
// Add a background later
circle.background("red");
```
```js
// Use advanced backgrounds
var background = new LinearGradient(0, {
    0: "red",
    100: "blue"
});
circle.background(background);
```


## Hints

 - Options defined into the scene will be applied to all shapes inside it.
 - Shapes can be used as position. In this case, it'll use the center of the shape.
 - Scenes can swap between them.
 - When adding a shape, you can define a z-index to manage the drawing order.
 - Backgrounds can be animated too, just like shapes.
