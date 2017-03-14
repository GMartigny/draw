## Classes

<dl>
<dt><a href="#Animation">Animation</a></dt>
<dd></dd>
<dt><a href="#Background">Background</a></dt>
<dd></dd>
<dt><a href="#BackgroundImage">BackgroundImage</a> ⇐ <code><a href="#Background">Background</a></code></dt>
<dd></dd>
<dt><a href="#LinearGradient">LinearGradient</a> ⇐ <code><a href="#Background">Background</a></code></dt>
<dd></dd>
<dt><a href="#RadialGradient">RadialGradient</a> ⇐ <code><a href="#Background">Background</a></code></dt>
<dd></dd>
<dt><a href="#Position">Position</a></dt>
<dd></dd>
<dt><a href="#Scene">Scene</a></dt>
<dd></dd>
<dt><a href="#Shape">Shape</a></dt>
<dd></dd>
<dt><a href="#Arc">Arc</a> ⇐ <code><a href="#Shape">Shape</a></code></dt>
<dd></dd>
<dt><a href="#Circle">Circle</a> ⇐ <code><a href="#Arc">Arc</a></code></dt>
<dd></dd>
<dt><a href="#Point">Point</a> ⇐ <code><a href="#Shape">Shape</a></code></dt>
<dd></dd>
<dt><a href="#Polygon">Polygon</a> ⇐ <code><a href="#Shape">Shape</a></code></dt>
<dd></dd>
<dt><a href="#Blob">Blob</a> ⇐ <code><a href="#Polygon">Polygon</a></code></dt>
<dd></dd>
<dt><a href="#Line">Line</a> ⇐ <code><a href="#Polygon">Polygon</a></code></dt>
<dd></dd>
<dt><a href="#Rectangle">Rectangle</a> ⇐ <code><a href="#Polygon">Polygon</a></code></dt>
<dd></dd>
<dt><a href="#Square">Square</a> ⇐ <code><a href="#Rectangle">Rectangle</a></code></dt>
<dd></dd>
<dt><a href="#Star">Star</a> ⇐ <code><a href="#Polygon">Polygon</a></code></dt>
<dd></dd>
<dt><a href="#Triangle">Triangle</a> ⇐ <code><a href="#Polygon">Polygon</a></code></dt>
<dd></dd>
<dt><a href="#Text">Text</a> ⇐ <code><a href="#Shape">Shape</a></code></dt>
<dd></dd>
</dl>

## Functions

<dl>
<dt><a href="#run">run(position, ctx)</a></dt>
<dd><p>Apply this animation function to a position</p>
</dd>
<dt><a href="#restart">restart(position)</a></dt>
<dd><p>Restart this animation</p>
</dd>
<dt><a href="#animateWith">animateWith(animation)</a></dt>
<dd><p>Add an animation to this background</p>
</dd>
<dt><a href="#getX">getX()</a> ⇒ <code>Number</code></dt>
<dd><p>Get the x value</p>
</dd>
<dt><a href="#getY">getY()</a> ⇒ <code>Number</code></dt>
<dd><p>Get the y value</p>
</dd>
<dt><a href="#setX">setX([x])</a> ⇒ <code><a href="#Position">Position</a></code></dt>
<dd><p>Set a new value for x and move linked positions</p>
</dd>
<dt><a href="#setY">setY([y])</a> ⇒ <code><a href="#Position">Position</a></code></dt>
<dd><p>Set a new value for y and move linked positions</p>
</dd>
<dt><a href="#setTo">setTo([x], [y])</a> ⇒ <code>*</code> | <code><a href="#Position">Position</a></code></dt>
<dd><p>Move this to a new position</p>
</dd>
<dt><a href="#addX">addX([diff], [override])</a> ⇒ <code><a href="#Position">Position</a></code></dt>
<dd><p>Add to the x value</p>
</dd>
<dt><a href="#addY">addY([diff], [override])</a> ⇒ <code><a href="#Position">Position</a></code></dt>
<dd><p>Add to the y value</p>
</dd>
<dt><a href="#move">move([diffX], [diffY], [override])</a> ⇒ <code><a href="#Position">Position</a></code></dt>
<dd><p>Move the position by some x and y</p>
</dd>
<dt><a href="#setOrigin">setOrigin(x, y)</a> ⇒ <code><a href="#Position">Position</a></code></dt>
<dd><p>Define the origin of the position</p>
</dd>
<dt><a href="#reset">reset()</a> ⇒ <code><a href="#Position">Position</a></code></dt>
<dd><p>Return a position to its origin</p>
</dd>
<dt><a href="#animateWith">animateWith(animation)</a> ⇒ <code><a href="#Position">Position</a></code></dt>
<dd><p>Define an animation to apply to this position</p>
</dd>
<dt><a href="#animate">animate(ctx)</a> ⇒ <code><a href="#Position">Position</a></code></dt>
<dd><p>Run the animation of this position</p>
</dd>
<dt><a href="#addLink">addLink(position)</a></dt>
<dd><p>Link a position to this one</p>
</dd>
</dl>

## Typedefs

<dl>
<dt><a href="#GradientParams">GradientParams</a> : <code>Object</code></dt>
<dd></dd>
<dt><a href="#SceneOptions">SceneOptions</a> : <code>Object</code></dt>
<dd></dd>
<dt><a href="#ShapeOptions">ShapeOptions</a> : <code>Object</code></dt>
<dd></dd>
<dt><a href="#TextOptions">TextOptions</a> : <code>Object</code></dt>
<dd></dd>
</dl>

<a name="Animation"></a>

## Animation
**Kind**: global class  

* [Animation](#Animation)
    * [new Animation(func)](#new_Animation_new)
    * [.Swirl(radius, [speed], [counterClockWise])](#Animation.Swirl) ⇒ <code>[Animation](#Animation)</code>
    * [.Rotate([speed], [counterClockWise])](#Animation.Rotate) ⇒ <code>[Animation](#Animation)</code>
    * [.Gravity([ground], [bounce])](#Animation.Gravity) ⇒ <code>[Animation](#Animation)</code>

<a name="new_Animation_new"></a>

### new Animation(func)
Modify a position with a constant function


| Param | Type | Description |
| --- | --- | --- |
| func | <code>function</code> | A function to call for each iteration |

<a name="Animation.Swirl"></a>

### Animation.Swirl(radius, [speed], [counterClockWise]) ⇒ <code>[Animation](#Animation)</code>
Give an animation for swirling

**Kind**: static method of <code>[Animation](#Animation)</code>  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| radius | <code>Number</code> |  | Radius of the swirling |
| [speed] | <code>Number</code> | <code>0.1</code> | Speed ratio of the animation |
| [counterClockWise] | <code>Boolean</code> | <code>false</code> | Swirl counter clockwise |

<a name="Animation.Rotate"></a>

### Animation.Rotate([speed], [counterClockWise]) ⇒ <code>[Animation](#Animation)</code>
Give an animation for rotation

**Kind**: static method of <code>[Animation](#Animation)</code>  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [speed] | <code>Number</code> | <code>0.1</code> | Speed ratio of the animation |
| [counterClockWise] | <code>Boolean</code> | <code>false</code> | Rotate counter clockwise |

<a name="Animation.Gravity"></a>

### Animation.Gravity([ground], [bounce]) ⇒ <code>[Animation](#Animation)</code>
Give an animation of gravity simulation

**Kind**: static method of <code>[Animation](#Animation)</code>  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [ground] | <code>Number</code> |  | Value where position bounce |
| [bounce] | <code>Number</code> | <code>0.3</code> | Vertical restitution of bounce (0 = no bounce, 1 = infinite bounce) |

<a name="Background"></a>

## Background
**Kind**: global class  

* [Background](#Background)
    * [new Background(color)](#new_Background_new)
    * [.getStyle()](#Background+getStyle) ⇒ <code>String</code>
    * [.getCSS()](#Background+getCSS) ⇒ <code>String</code>

<a name="new_Background_new"></a>

### new Background(color)
A generic background class


| Param | Type | Description |
| --- | --- | --- |
| color | <code>String</code> | Any color string |

<a name="Background+getStyle"></a>

### background.getStyle() ⇒ <code>String</code>
Return the current style of this background

**Kind**: instance method of <code>[Background](#Background)</code>  
<a name="Background+getCSS"></a>

### background.getCSS() ⇒ <code>String</code>
Get CSS string for this background

**Kind**: instance method of <code>[Background](#Background)</code>  
<a name="BackgroundImage"></a>

## BackgroundImage ⇐ <code>[Background](#Background)</code>
**Kind**: global class  
**Extends**: <code>[Background](#Background)</code>  

* [BackgroundImage](#BackgroundImage) ⇐ <code>[Background](#Background)</code>
    * [new BackgroundImage(url, fill)](#new_BackgroundImage_new)
    * _instance_
        * [.getStyle(ctx, shape)](#BackgroundImage+getStyle) ⇒ <code>CanvasPattern</code>
        * [.getCSS()](#Background+getCSS) ⇒ <code>String</code>
    * _static_
        * [.fillType](#BackgroundImage.fillType) : <code>enum</code>

<a name="new_BackgroundImage_new"></a>

### new BackgroundImage(url, fill)

| Param | Type | Description |
| --- | --- | --- |
| url | <code>String</code> | - |
| fill | <code>String</code> | - |

<a name="BackgroundImage+getStyle"></a>

### backgroundImage.getStyle(ctx, shape) ⇒ <code>CanvasPattern</code>
Build the pattern

**Kind**: instance method of <code>[BackgroundImage](#BackgroundImage)</code>  
**Overrides**: <code>[getStyle](#Background+getStyle)</code>  
**Returns**: <code>CanvasPattern</code> - The pattern or null if the image is not loaded  

| Param | Type | Description |
| --- | --- | --- |
| ctx | <code>CanvasRenderingContext2D</code> | A drawing context |
| shape | <code>[Shape](#Shape)</code> | The holding shape |

<a name="Background+getCSS"></a>

### backgroundImage.getCSS() ⇒ <code>String</code>
Get CSS string for this background

**Kind**: instance method of <code>[BackgroundImage](#BackgroundImage)</code>  
<a name="BackgroundImage.fillType"></a>

### BackgroundImage.fillType : <code>enum</code>
**Kind**: static enum of <code>[BackgroundImage](#BackgroundImage)</code>  
**Read only**: true  
**Properties**

| Name | Type | Default |
| --- | --- | --- |
| noRepeat | <code>String</code> | <code>no-repeat</code> | 
| repeat | <code>String</code> | <code>repeat</code> | 
| repeatX | <code>String</code> | <code>repeat-x</code> | 
| repeatY | <code>String</code> | <code>repeat-y</code> | 
| stretch | <code>String</code> | <code>stretch</code> | 

<a name="LinearGradient"></a>

## LinearGradient ⇐ <code>[Background](#Background)</code>
**Kind**: global class  
**Extends**: <code>[Background](#Background)</code>  

* [LinearGradient](#LinearGradient) ⇐ <code>[Background](#Background)</code>
    * [new LinearGradient([angle], params)](#new_LinearGradient_new)
    * _instance_
        * [.getStyle(ctx, shape)](#LinearGradient+getStyle) ⇒ <code>CanvasGradient</code>
        * [.getCSS()](#LinearGradient+getCSS) ⇒ <code>string</code>
    * _static_
        * [.orientation](#LinearGradient.orientation) : <code>enum</code>

<a name="new_LinearGradient_new"></a>

### new LinearGradient([angle], params)
A linear gradient background


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [angle] | <code>Number</code> | <code>0</code> | The gradient orientation |
| params | <code>[GradientParams](#GradientParams)</code> |  | The gradient definition |

<a name="LinearGradient+getStyle"></a>

### linearGradient.getStyle(ctx, shape) ⇒ <code>CanvasGradient</code>
Build the gradient

**Kind**: instance method of <code>[LinearGradient](#LinearGradient)</code>  
**Overrides**: <code>[getStyle](#Background+getStyle)</code>  

| Param | Type | Description |
| --- | --- | --- |
| ctx | <code>CanvasRenderingContext2D</code> | A drawing context |
| shape | <code>[Shape](#Shape)</code> | The holding shape |

<a name="LinearGradient+getCSS"></a>

### linearGradient.getCSS() ⇒ <code>string</code>
Get CSS string for this background

**Kind**: instance method of <code>[LinearGradient](#LinearGradient)</code>  
**Overrides**: <code>[getCSS](#Background+getCSS)</code>  
<a name="LinearGradient.orientation"></a>

### LinearGradient.orientation : <code>enum</code>
Enum for linear gradient orientation

**Kind**: static enum of <code>[LinearGradient](#LinearGradient)</code>  
**Read only**: true  
**Properties**

| Name | Type | Default |
| --- | --- | --- |
| toRight | <code>Number</code> | <code>0</code> | 
| toBottomRight | <code>Number</code> | <code>45</code> | 
| toBottom | <code>Number</code> | <code>90</code> | 
| toBottomLeft | <code>Number</code> | <code>135</code> | 
| toLeft | <code>Number</code> | <code>180</code> | 
| toTopRight | <code>Number</code> | <code>-45</code> | 
| toTop | <code>Number</code> | <code>-90</code> | 
| toTopLeft | <code>Number</code> | <code>-135</code> | 

<a name="RadialGradient"></a>

## RadialGradient ⇐ <code>[Background](#Background)</code>
**Kind**: global class  
**Extends**: <code>[Background](#Background)</code>  

* [RadialGradient](#RadialGradient) ⇐ <code>[Background](#Background)</code>
    * [new RadialGradient(center, params)](#new_RadialGradient_new)
    * [.getStyle(ctx, shape)](#RadialGradient+getStyle) ⇒ <code>CanvasGradient</code>
    * [.getCSS()](#RadialGradient+getCSS) ⇒ <code>string</code>

<a name="new_RadialGradient_new"></a>

### new RadialGradient(center, params)
A radial gradient background


| Param | Type | Description |
| --- | --- | --- |
| center | <code>[Position](#Position)</code> &#124; <code>[Shape](#Shape)</code> | The gradient center |
| params | <code>[GradientParams](#GradientParams)</code> | The gradient definition |

<a name="RadialGradient+getStyle"></a>

### radialGradient.getStyle(ctx, shape) ⇒ <code>CanvasGradient</code>
Build the gradient

**Kind**: instance method of <code>[RadialGradient](#RadialGradient)</code>  
**Overrides**: <code>[getStyle](#Background+getStyle)</code>  

| Param | Type | Description |
| --- | --- | --- |
| ctx | <code>CanvasRenderingContext2D</code> | A drawing context |
| shape | <code>[Shape](#Shape)</code> | The holding shape |

<a name="RadialGradient+getCSS"></a>

### radialGradient.getCSS() ⇒ <code>string</code>
Get CSS string for this background

**Kind**: instance method of <code>[RadialGradient](#RadialGradient)</code>  
**Overrides**: <code>[getCSS](#Background+getCSS)</code>  
<a name="Position"></a>

## Position
**Kind**: global class  

* [Position](#Position)
    * [new Position(x, y, [animation])](#new_Position_new)
    * [.createFrom(other)](#Position.createFrom) ⇒ <code>[Position](#Position)</code>

<a name="new_Position_new"></a>

### new Position(x, y, [animation])
A couple of number for positioning


| Param | Type | Description |
| --- | --- | --- |
| x | <code>Number</code> | The x value |
| y | <code>Number</code> | The y value |
| [animation] | <code>[Animation](#Animation)</code> | The position animation |

<a name="Position.createFrom"></a>

### Position.createFrom(other) ⇒ <code>[Position](#Position)</code>
Return a new position from a shape or a position

**Kind**: static method of <code>[Position](#Position)</code>  

| Param | Type | Description |
| --- | --- | --- |
| other | <code>[Position](#Position)</code> &#124; <code>[Shape](#Shape)</code> | A reference for a new position, automatically linked |

<a name="Scene"></a>

## Scene
**Kind**: global class  

* [Scene](#Scene)
    * [new Scene(canvas, [options])](#new_Scene_new)
    * [.startAnimation()](#Scene+startAnimation)
    * [.stopAnimation()](#Scene+stopAnimation)
    * [.render()](#Scene+render)
    * [.add(shape, [zIndex])](#Scene+add)
    * [.background(background)](#Scene+background)
    * [.clear()](#Scene+clear)
    * [.center()](#Scene+center) ⇒ <code>[Position](#Position)</code>
    * [.randomPosition()](#Scene+randomPosition) ⇒ <code>[Position](#Position)</code>
    * [.width()](#Scene+width) ⇒ <code>Number</code>
    * [.height()](#Scene+height) ⇒ <code>Number</code>

<a name="new_Scene_new"></a>

### new Scene(canvas, [options])
Represent a display, can be fill with different shape and image


| Param | Type | Description |
| --- | --- | --- |
| canvas | <code>HTMLCanvasElement</code> | The canvas element for drawing |
| [options] | <code>[ShapeOptions](#ShapeOptions)</code> | Global options for the scene, will serves as default for all shapes |

<a name="Scene+startAnimation"></a>

### scene.startAnimation()
Start all animations

**Kind**: instance method of <code>[Scene](#Scene)</code>  
<a name="Scene+stopAnimation"></a>

### scene.stopAnimation()
Stop all animations

**Kind**: instance method of <code>[Scene](#Scene)</code>  
<a name="Scene+render"></a>

### scene.render()
Draw the scene once

**Kind**: instance method of <code>[Scene](#Scene)</code>  
<a name="Scene+add"></a>

### scene.add(shape, [zIndex])
Add a shape to the scene

**Kind**: instance method of <code>[Scene](#Scene)</code>  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| shape | <code>[Shape](#Shape)</code> |  | Any shape |
| [zIndex] | <code>Number</code> | <code>0</code> | Used to define a drawing order, should be a positive integer |

<a name="Scene+background"></a>

### scene.background(background)
Add a background color to the scene

**Kind**: instance method of <code>[Scene](#Scene)</code>  

| Param | Type | Description |
| --- | --- | --- |
| background | <code>String</code> &#124; <code>[Background](#Background)</code> | Any color string or background |

<a name="Scene+clear"></a>

### scene.clear()
Remove all shape from scene

**Kind**: instance method of <code>[Scene](#Scene)</code>  
<a name="Scene+center"></a>

### scene.center() ⇒ <code>[Position](#Position)</code>
Return the center of the scene

**Kind**: instance method of <code>[Scene](#Scene)</code>  
<a name="Scene+randomPosition"></a>

### scene.randomPosition() ⇒ <code>[Position](#Position)</code>
Return a random position within the scnee

**Kind**: instance method of <code>[Scene](#Scene)</code>  
<a name="Scene+width"></a>

### scene.width() ⇒ <code>Number</code>
Get the width of the scene

**Kind**: instance method of <code>[Scene](#Scene)</code>  
<a name="Scene+height"></a>

### scene.height() ⇒ <code>Number</code>
Get the height of the scene

**Kind**: instance method of <code>[Scene](#Scene)</code>  
<a name="Shape"></a>

## Shape
**Kind**: global class  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| This | <code>[Position](#Position)</code> | shape's position, it point at the center of the shape (with some exceptions) |


* [Shape](#Shape)
    * [new Shape(position, [options])](#new_Shape_new)
    * [.render(ctx)](#Shape+render)
    * [.draw(ctx)](#Shape+draw)
    * [.background(background)](#Shape+background)
    * [.fill(ctx)](#Shape+fill)
    * [.stroke(ctx)](#Shape+stroke)
    * [.animateWith(animation)](#Shape+animateWith)
    * [.completeOptions(moreOptions)](#Shape+completeOptions)

<a name="new_Shape_new"></a>

### new Shape(position, [options])
A generic shape


| Param | Type | Description |
| --- | --- | --- |
| position | <code>[Position](#Position)</code> &#124; <code>[Shape](#Shape)</code> | Its position on the scene |
| [options] | <code>[ShapeOptions](#ShapeOptions)</code> | Specific options for this shape |

<a name="Shape+render"></a>

### shape.render(ctx)
Move and draw the shape

**Kind**: instance method of <code>[Shape](#Shape)</code>  

| Param | Type | Description |
| --- | --- | --- |
| ctx | <code>CanvasRenderingContext2D</code> | A drawing context |

<a name="Shape+draw"></a>

### shape.draw(ctx)
Draw the shape into the context

**Kind**: instance method of <code>[Shape](#Shape)</code>  

| Param | Type | Description |
| --- | --- | --- |
| ctx | <code>CanvasRenderingContext2D</code> | A drawing context |

<a name="Shape+background"></a>

### shape.background(background)
Add a background for the shape

**Kind**: instance method of <code>[Shape](#Shape)</code>  

| Param | Type |
| --- | --- |
| background | <code>String</code> &#124; <code>[Background](#Background)</code> | 

<a name="Shape+fill"></a>

### shape.fill(ctx)
Fill the shape with its color

**Kind**: instance method of <code>[Shape](#Shape)</code>  

| Param | Type | Description |
| --- | --- | --- |
| ctx | <code>CanvasRenderingContext2D</code> | A drawing context |

<a name="Shape+stroke"></a>

### shape.stroke(ctx)
Stroke the contour of the shape

**Kind**: instance method of <code>[Shape](#Shape)</code>  

| Param | Type | Description |
| --- | --- | --- |
| ctx | <code>CanvasRenderingContext2D</code> | A drawing context |

<a name="Shape+animateWith"></a>

### shape.animateWith(animation)
Animate this shape position with an animation

**Kind**: instance method of <code>[Shape](#Shape)</code>  

| Param | Type | Description |
| --- | --- | --- |
| animation | <code>[Animation](#Animation)</code> | Any animation |

<a name="Shape+completeOptions"></a>

### shape.completeOptions(moreOptions)
Add options to the shape without override

**Kind**: instance method of <code>[Shape](#Shape)</code>  

| Param | Type | Description |
| --- | --- | --- |
| moreOptions | <code>[ShapeOptions](#ShapeOptions)</code> | A map like object |

<a name="Arc"></a>

## Arc ⇐ <code>[Shape](#Shape)</code>
**Kind**: global class  
**Extends**: <code>[Shape](#Shape)</code>  

* [Arc](#Arc) ⇐ <code>[Shape](#Shape)</code>
    * [new Arc(position, radius, [startAngle], [endAngle], [clockwise], [options])](#new_Arc_new)
    * [.trace(ctx)](#Arc+trace)
    * [.render(ctx)](#Shape+render)
    * [.draw(ctx)](#Shape+draw)
    * [.background(background)](#Shape+background)
    * [.fill(ctx)](#Shape+fill)
    * [.stroke(ctx)](#Shape+stroke)
    * [.animateWith(animation)](#Shape+animateWith)
    * [.completeOptions(moreOptions)](#Shape+completeOptions)

<a name="new_Arc_new"></a>

### new Arc(position, radius, [startAngle], [endAngle], [clockwise], [options])
An arc shape between two points


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| position | <code>[Position](#Position)</code> &#124; <code>[Shape](#Shape)</code> |  | Its position on the scene |
| radius | <code>Number</code> |  | The radius of the arc (in pixel) |
| [startAngle] | <code>Number</code> | <code>0</code> | The angle from to start the arc (in radian, 0 is north) |
| [endAngle] | <code>Number</code> | <code>PI</code> | The angle where to end the arc (in radian, 0 is north) |
| [clockwise] | <code>Boolean</code> | <code>false</code> | The direction of rotation is clockwise (false for anti-clockwise) |
| [options] | <code>[ShapeOptions](#ShapeOptions)</code> |  | Specific options for this shape |

<a name="Arc+trace"></a>

### arc.trace(ctx)
Trace the arc

**Kind**: instance method of <code>[Arc](#Arc)</code>  

| Param | Type | Description |
| --- | --- | --- |
| ctx | <code>CanvasRenderingContext2D</code> | A drawing context |

<a name="Shape+render"></a>

### arc.render(ctx)
Move and draw the shape

**Kind**: instance method of <code>[Arc](#Arc)</code>  

| Param | Type | Description |
| --- | --- | --- |
| ctx | <code>CanvasRenderingContext2D</code> | A drawing context |

<a name="Shape+draw"></a>

### arc.draw(ctx)
Draw the shape into the context

**Kind**: instance method of <code>[Arc](#Arc)</code>  

| Param | Type | Description |
| --- | --- | --- |
| ctx | <code>CanvasRenderingContext2D</code> | A drawing context |

<a name="Shape+background"></a>

### arc.background(background)
Add a background for the shape

**Kind**: instance method of <code>[Arc](#Arc)</code>  

| Param | Type |
| --- | --- |
| background | <code>String</code> &#124; <code>[Background](#Background)</code> | 

<a name="Shape+fill"></a>

### arc.fill(ctx)
Fill the shape with its color

**Kind**: instance method of <code>[Arc](#Arc)</code>  

| Param | Type | Description |
| --- | --- | --- |
| ctx | <code>CanvasRenderingContext2D</code> | A drawing context |

<a name="Shape+stroke"></a>

### arc.stroke(ctx)
Stroke the contour of the shape

**Kind**: instance method of <code>[Arc](#Arc)</code>  

| Param | Type | Description |
| --- | --- | --- |
| ctx | <code>CanvasRenderingContext2D</code> | A drawing context |

<a name="Shape+animateWith"></a>

### arc.animateWith(animation)
Animate this shape position with an animation

**Kind**: instance method of <code>[Arc](#Arc)</code>  

| Param | Type | Description |
| --- | --- | --- |
| animation | <code>[Animation](#Animation)</code> | Any animation |

<a name="Shape+completeOptions"></a>

### arc.completeOptions(moreOptions)
Add options to the shape without override

**Kind**: instance method of <code>[Arc](#Arc)</code>  

| Param | Type | Description |
| --- | --- | --- |
| moreOptions | <code>[ShapeOptions](#ShapeOptions)</code> | A map like object |

<a name="Circle"></a>

## Circle ⇐ <code>[Arc](#Arc)</code>
**Kind**: global class  
**Extends**: <code>[Arc](#Arc)</code>  

* [Circle](#Circle) ⇐ <code>[Arc](#Arc)</code>
    * [new Circle(position, radius, [options])](#new_Circle_new)
    * [.width()](#Circle+width) ⇒ <code>Number</code>
    * [.height()](#Circle+height) ⇒ <code>Number</code>
    * [.trace(ctx)](#Arc+trace)
    * [.render(ctx)](#Shape+render)
    * [.draw(ctx)](#Shape+draw)
    * [.background(background)](#Shape+background)
    * [.fill(ctx)](#Shape+fill)
    * [.stroke(ctx)](#Shape+stroke)
    * [.animateWith(animation)](#Shape+animateWith)
    * [.completeOptions(moreOptions)](#Shape+completeOptions)

<a name="new_Circle_new"></a>

### new Circle(position, radius, [options])
A circle shape


| Param | Type | Description |
| --- | --- | --- |
| position | <code>[Position](#Position)</code> &#124; <code>[Shape](#Shape)</code> | Its position on the scene |
| radius | <code>Number</code> | The radius of the circle (in pixel) |
| [options] | <code>[ShapeOptions](#ShapeOptions)</code> | Specific options for this shape |

<a name="Circle+width"></a>

### circle.width() ⇒ <code>Number</code>
Get this circle's width

**Kind**: instance method of <code>[Circle](#Circle)</code>  
<a name="Circle+height"></a>

### circle.height() ⇒ <code>Number</code>
Get this circle's height

**Kind**: instance method of <code>[Circle](#Circle)</code>  
<a name="Arc+trace"></a>

### circle.trace(ctx)
Trace the arc

**Kind**: instance method of <code>[Circle](#Circle)</code>  

| Param | Type | Description |
| --- | --- | --- |
| ctx | <code>CanvasRenderingContext2D</code> | A drawing context |

<a name="Shape+render"></a>

### circle.render(ctx)
Move and draw the shape

**Kind**: instance method of <code>[Circle](#Circle)</code>  

| Param | Type | Description |
| --- | --- | --- |
| ctx | <code>CanvasRenderingContext2D</code> | A drawing context |

<a name="Shape+draw"></a>

### circle.draw(ctx)
Draw the shape into the context

**Kind**: instance method of <code>[Circle](#Circle)</code>  

| Param | Type | Description |
| --- | --- | --- |
| ctx | <code>CanvasRenderingContext2D</code> | A drawing context |

<a name="Shape+background"></a>

### circle.background(background)
Add a background for the shape

**Kind**: instance method of <code>[Circle](#Circle)</code>  

| Param | Type |
| --- | --- |
| background | <code>String</code> &#124; <code>[Background](#Background)</code> | 

<a name="Shape+fill"></a>

### circle.fill(ctx)
Fill the shape with its color

**Kind**: instance method of <code>[Circle](#Circle)</code>  

| Param | Type | Description |
| --- | --- | --- |
| ctx | <code>CanvasRenderingContext2D</code> | A drawing context |

<a name="Shape+stroke"></a>

### circle.stroke(ctx)
Stroke the contour of the shape

**Kind**: instance method of <code>[Circle](#Circle)</code>  

| Param | Type | Description |
| --- | --- | --- |
| ctx | <code>CanvasRenderingContext2D</code> | A drawing context |

<a name="Shape+animateWith"></a>

### circle.animateWith(animation)
Animate this shape position with an animation

**Kind**: instance method of <code>[Circle](#Circle)</code>  

| Param | Type | Description |
| --- | --- | --- |
| animation | <code>[Animation](#Animation)</code> | Any animation |

<a name="Shape+completeOptions"></a>

### circle.completeOptions(moreOptions)
Add options to the shape without override

**Kind**: instance method of <code>[Circle](#Circle)</code>  

| Param | Type | Description |
| --- | --- | --- |
| moreOptions | <code>[ShapeOptions](#ShapeOptions)</code> | A map like object |

<a name="Point"></a>

## Point ⇐ <code>[Shape](#Shape)</code>
**Kind**: global class  
**Extends**: <code>[Shape](#Shape)</code>  

* [Point](#Point) ⇐ <code>[Shape](#Shape)</code>
    * [new Point(position, [options])](#new_Point_new)
    * [.trace](#Point+trace)
    * [.stroke](#Point+stroke)
    * [.width()](#Point+width) ⇒ <code>Number</code>
    * [.height()](#Point+height) ⇒ <code>Number</code>
    * [.render(ctx)](#Shape+render)
    * [.draw(ctx)](#Shape+draw)
    * [.background(background)](#Shape+background)
    * [.fill(ctx)](#Shape+fill)
    * [.animateWith(animation)](#Shape+animateWith)
    * [.completeOptions(moreOptions)](#Shape+completeOptions)

<a name="new_Point_new"></a>

### new Point(position, [options])
A single point in space


| Param | Type | Description |
| --- | --- | --- |
| position | <code>[Position](#Position)</code> | The position of the point |
| [options] | <code>[ShapeOptions](#ShapeOptions)</code> | Specific options for this shape |

<a name="Point+trace"></a>

### point.trace
One can't trace a point

**Kind**: instance property of <code>[Point](#Point)</code>  
<a name="Point+stroke"></a>

### point.stroke
One can't stroke a point

**Kind**: instance property of <code>[Point](#Point)</code>  
**Overrides**: <code>[stroke](#Shape+stroke)</code>  
<a name="Point+width"></a>

### point.width() ⇒ <code>Number</code>
Get point width

**Kind**: instance method of <code>[Point](#Point)</code>  
<a name="Point+height"></a>

### point.height() ⇒ <code>Number</code>
Get point height

**Kind**: instance method of <code>[Point](#Point)</code>  
<a name="Shape+render"></a>

### point.render(ctx)
Move and draw the shape

**Kind**: instance method of <code>[Point](#Point)</code>  

| Param | Type | Description |
| --- | --- | --- |
| ctx | <code>CanvasRenderingContext2D</code> | A drawing context |

<a name="Shape+draw"></a>

### point.draw(ctx)
Draw the shape into the context

**Kind**: instance method of <code>[Point](#Point)</code>  

| Param | Type | Description |
| --- | --- | --- |
| ctx | <code>CanvasRenderingContext2D</code> | A drawing context |

<a name="Shape+background"></a>

### point.background(background)
Add a background for the shape

**Kind**: instance method of <code>[Point](#Point)</code>  

| Param | Type |
| --- | --- |
| background | <code>String</code> &#124; <code>[Background](#Background)</code> | 

<a name="Shape+fill"></a>

### point.fill(ctx)
Fill the shape with its color

**Kind**: instance method of <code>[Point](#Point)</code>  

| Param | Type | Description |
| --- | --- | --- |
| ctx | <code>CanvasRenderingContext2D</code> | A drawing context |

<a name="Shape+animateWith"></a>

### point.animateWith(animation)
Animate this shape position with an animation

**Kind**: instance method of <code>[Point](#Point)</code>  

| Param | Type | Description |
| --- | --- | --- |
| animation | <code>[Animation](#Animation)</code> | Any animation |

<a name="Shape+completeOptions"></a>

### point.completeOptions(moreOptions)
Add options to the shape without override

**Kind**: instance method of <code>[Point](#Point)</code>  

| Param | Type | Description |
| --- | --- | --- |
| moreOptions | <code>[ShapeOptions](#ShapeOptions)</code> | A map like object |

<a name="Polygon"></a>

## Polygon ⇐ <code>[Shape](#Shape)</code>
**Kind**: global class  
**Extends**: <code>[Shape](#Shape)</code>  

* [Polygon](#Polygon) ⇐ <code>[Shape](#Shape)</code>
    * [new Polygon(points, [options])](#new_Polygon_new)
    * [.trace(ctx)](#Polygon+trace)
    * [.animateWith(animation)](#Polygon+animateWith)
    * [.width()](#Polygon+width) ⇒ <code>Number</code>
    * [.height()](#Polygon+height) ⇒ <code>Number</code>
    * [.render(ctx)](#Shape+render)
    * [.draw(ctx)](#Shape+draw)
    * [.background(background)](#Shape+background)
    * [.fill(ctx)](#Shape+fill)
    * [.stroke(ctx)](#Shape+stroke)
    * [.completeOptions(moreOptions)](#Shape+completeOptions)

<a name="new_Polygon_new"></a>

### new Polygon(points, [options])
A shape from multiple point


| Param | Type | Description |
| --- | --- | --- |
| points | <code>Array.&lt;(Position\|Shape)&gt;</code> | A list of points |
| [options] | <code>[ShapeOptions](#ShapeOptions)</code> | Specific options for this shape |

<a name="Polygon+trace"></a>

### polygon.trace(ctx)
Trace the polygon

**Kind**: instance method of <code>[Polygon](#Polygon)</code>  

| Param | Type | Description |
| --- | --- | --- |
| ctx | <code>CanvasRenderingContext2D</code> | A drawing context |

<a name="Polygon+animateWith"></a>

### polygon.animateWith(animation)
Check if polygon can be animated

**Kind**: instance method of <code>[Polygon](#Polygon)</code>  
**Overrides**: <code>[animateWith](#Shape+animateWith)</code>  

| Param | Type | Description |
| --- | --- | --- |
| animation | <code>[Animation](#Animation)</code> | Any animation |

<a name="Polygon+width"></a>

### polygon.width() ⇒ <code>Number</code>
Get this shape's width

**Kind**: instance method of <code>[Polygon](#Polygon)</code>  
<a name="Polygon+height"></a>

### polygon.height() ⇒ <code>Number</code>
Get this shape's height

**Kind**: instance method of <code>[Polygon](#Polygon)</code>  
<a name="Shape+render"></a>

### polygon.render(ctx)
Move and draw the shape

**Kind**: instance method of <code>[Polygon](#Polygon)</code>  

| Param | Type | Description |
| --- | --- | --- |
| ctx | <code>CanvasRenderingContext2D</code> | A drawing context |

<a name="Shape+draw"></a>

### polygon.draw(ctx)
Draw the shape into the context

**Kind**: instance method of <code>[Polygon](#Polygon)</code>  

| Param | Type | Description |
| --- | --- | --- |
| ctx | <code>CanvasRenderingContext2D</code> | A drawing context |

<a name="Shape+background"></a>

### polygon.background(background)
Add a background for the shape

**Kind**: instance method of <code>[Polygon](#Polygon)</code>  

| Param | Type |
| --- | --- |
| background | <code>String</code> &#124; <code>[Background](#Background)</code> | 

<a name="Shape+fill"></a>

### polygon.fill(ctx)
Fill the shape with its color

**Kind**: instance method of <code>[Polygon](#Polygon)</code>  

| Param | Type | Description |
| --- | --- | --- |
| ctx | <code>CanvasRenderingContext2D</code> | A drawing context |

<a name="Shape+stroke"></a>

### polygon.stroke(ctx)
Stroke the contour of the shape

**Kind**: instance method of <code>[Polygon](#Polygon)</code>  

| Param | Type | Description |
| --- | --- | --- |
| ctx | <code>CanvasRenderingContext2D</code> | A drawing context |

<a name="Shape+completeOptions"></a>

### polygon.completeOptions(moreOptions)
Add options to the shape without override

**Kind**: instance method of <code>[Polygon](#Polygon)</code>  

| Param | Type | Description |
| --- | --- | --- |
| moreOptions | <code>[ShapeOptions](#ShapeOptions)</code> | A map like object |

<a name="Blob"></a>

## Blob ⇐ <code>[Polygon](#Polygon)</code>
**Kind**: global class  
**Extends**: <code>[Polygon](#Polygon)</code>  

* [Blob](#Blob) ⇐ <code>[Polygon](#Polygon)</code>
    * [new Blob(points, [tension], [options])](#new_Blob_new)
    * [.trace(ctx)](#Blob+trace)
    * [.animateWith(animation)](#Polygon+animateWith)
    * [.width()](#Polygon+width) ⇒ <code>Number</code>
    * [.height()](#Polygon+height) ⇒ <code>Number</code>
    * [.render(ctx)](#Shape+render)
    * [.draw(ctx)](#Shape+draw)
    * [.background(background)](#Shape+background)
    * [.fill(ctx)](#Shape+fill)
    * [.stroke(ctx)](#Shape+stroke)
    * [.completeOptions(moreOptions)](#Shape+completeOptions)

<a name="new_Blob_new"></a>

### new Blob(points, [tension], [options])
A shape from multiple point with rounded angle


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| points | <code>Array.&lt;(Position\|Shape)&gt;</code> |  | A list of points |
| [tension] | <code>Number</code> | <code>0.5</code> | Define the roundness of the blob |
| [options] | <code>[ShapeOptions](#ShapeOptions)</code> |  | Specific options for this shape |

<a name="Blob+trace"></a>

### blob.trace(ctx)
Trace the blob

**Kind**: instance method of <code>[Blob](#Blob)</code>  
**Overrides**: <code>[trace](#Polygon+trace)</code>  

| Param | Type | Description |
| --- | --- | --- |
| ctx | <code>CanvasRenderingContext2D</code> | A drawing context |

<a name="Polygon+animateWith"></a>

### blob.animateWith(animation)
Check if polygon can be animated

**Kind**: instance method of <code>[Blob](#Blob)</code>  

| Param | Type | Description |
| --- | --- | --- |
| animation | <code>[Animation](#Animation)</code> | Any animation |

<a name="Polygon+width"></a>

### blob.width() ⇒ <code>Number</code>
Get this shape's width

**Kind**: instance method of <code>[Blob](#Blob)</code>  
<a name="Polygon+height"></a>

### blob.height() ⇒ <code>Number</code>
Get this shape's height

**Kind**: instance method of <code>[Blob](#Blob)</code>  
<a name="Shape+render"></a>

### blob.render(ctx)
Move and draw the shape

**Kind**: instance method of <code>[Blob](#Blob)</code>  

| Param | Type | Description |
| --- | --- | --- |
| ctx | <code>CanvasRenderingContext2D</code> | A drawing context |

<a name="Shape+draw"></a>

### blob.draw(ctx)
Draw the shape into the context

**Kind**: instance method of <code>[Blob](#Blob)</code>  

| Param | Type | Description |
| --- | --- | --- |
| ctx | <code>CanvasRenderingContext2D</code> | A drawing context |

<a name="Shape+background"></a>

### blob.background(background)
Add a background for the shape

**Kind**: instance method of <code>[Blob](#Blob)</code>  

| Param | Type |
| --- | --- |
| background | <code>String</code> &#124; <code>[Background](#Background)</code> | 

<a name="Shape+fill"></a>

### blob.fill(ctx)
Fill the shape with its color

**Kind**: instance method of <code>[Blob](#Blob)</code>  

| Param | Type | Description |
| --- | --- | --- |
| ctx | <code>CanvasRenderingContext2D</code> | A drawing context |

<a name="Shape+stroke"></a>

### blob.stroke(ctx)
Stroke the contour of the shape

**Kind**: instance method of <code>[Blob](#Blob)</code>  

| Param | Type | Description |
| --- | --- | --- |
| ctx | <code>CanvasRenderingContext2D</code> | A drawing context |

<a name="Shape+completeOptions"></a>

### blob.completeOptions(moreOptions)
Add options to the shape without override

**Kind**: instance method of <code>[Blob](#Blob)</code>  

| Param | Type | Description |
| --- | --- | --- |
| moreOptions | <code>[ShapeOptions](#ShapeOptions)</code> | A map like object |

<a name="Line"></a>

## Line ⇐ <code>[Polygon](#Polygon)</code>
**Kind**: global class  
**Extends**: <code>[Polygon](#Polygon)</code>  

* [Line](#Line) ⇐ <code>[Polygon](#Polygon)</code>
    * [new Line(startPoint, endPoint, [options])](#new_Line_new)
    * [.fill](#Line+fill)
    * [.width()](#Line+width) ⇒ <code>Number</code>
    * [.height()](#Line+height) ⇒ <code>Number</code>
    * [.trace(ctx)](#Polygon+trace)
    * [.animateWith(animation)](#Polygon+animateWith)
    * [.render(ctx)](#Shape+render)
    * [.draw(ctx)](#Shape+draw)
    * [.background(background)](#Shape+background)
    * [.stroke(ctx)](#Shape+stroke)
    * [.completeOptions(moreOptions)](#Shape+completeOptions)

<a name="new_Line_new"></a>

### new Line(startPoint, endPoint, [options])
A line between two point


| Param | Type | Description |
| --- | --- | --- |
| startPoint | <code>[Position](#Position)</code> &#124; <code>[Shape](#Shape)</code> | Its origin point or shape |
| endPoint | <code>[Position](#Position)</code> &#124; <code>[Shape](#Shape)</code> | Its arrival point or shape |
| [options] | <code>[ShapeOptions](#ShapeOptions)</code> | Specific options for this line |

<a name="Line+fill"></a>

### line.fill
One can't fill a line

**Kind**: instance property of <code>[Line](#Line)</code>  
**Overrides**: <code>[fill](#Shape+fill)</code>  
<a name="Line+width"></a>

### line.width() ⇒ <code>Number</code>
Get the line x length

**Kind**: instance method of <code>[Line](#Line)</code>  
**Overrides**: <code>[width](#Polygon+width)</code>  
<a name="Line+height"></a>

### line.height() ⇒ <code>Number</code>
Get the line y length

**Kind**: instance method of <code>[Line](#Line)</code>  
**Overrides**: <code>[height](#Polygon+height)</code>  
<a name="Polygon+trace"></a>

### line.trace(ctx)
Trace the polygon

**Kind**: instance method of <code>[Line](#Line)</code>  

| Param | Type | Description |
| --- | --- | --- |
| ctx | <code>CanvasRenderingContext2D</code> | A drawing context |

<a name="Polygon+animateWith"></a>

### line.animateWith(animation)
Check if polygon can be animated

**Kind**: instance method of <code>[Line](#Line)</code>  

| Param | Type | Description |
| --- | --- | --- |
| animation | <code>[Animation](#Animation)</code> | Any animation |

<a name="Shape+render"></a>

### line.render(ctx)
Move and draw the shape

**Kind**: instance method of <code>[Line](#Line)</code>  

| Param | Type | Description |
| --- | --- | --- |
| ctx | <code>CanvasRenderingContext2D</code> | A drawing context |

<a name="Shape+draw"></a>

### line.draw(ctx)
Draw the shape into the context

**Kind**: instance method of <code>[Line](#Line)</code>  

| Param | Type | Description |
| --- | --- | --- |
| ctx | <code>CanvasRenderingContext2D</code> | A drawing context |

<a name="Shape+background"></a>

### line.background(background)
Add a background for the shape

**Kind**: instance method of <code>[Line](#Line)</code>  

| Param | Type |
| --- | --- |
| background | <code>String</code> &#124; <code>[Background](#Background)</code> | 

<a name="Shape+stroke"></a>

### line.stroke(ctx)
Stroke the contour of the shape

**Kind**: instance method of <code>[Line](#Line)</code>  

| Param | Type | Description |
| --- | --- | --- |
| ctx | <code>CanvasRenderingContext2D</code> | A drawing context |

<a name="Shape+completeOptions"></a>

### line.completeOptions(moreOptions)
Add options to the shape without override

**Kind**: instance method of <code>[Line](#Line)</code>  

| Param | Type | Description |
| --- | --- | --- |
| moreOptions | <code>[ShapeOptions](#ShapeOptions)</code> | A map like object |

<a name="Rectangle"></a>

## Rectangle ⇐ <code>[Polygon](#Polygon)</code>
**Kind**: global class  
**Extends**: <code>[Polygon](#Polygon)</code>  

* [Rectangle](#Rectangle) ⇐ <code>[Polygon](#Polygon)</code>
    * [new Rectangle(startPoint, width, height, [options])](#new_Rectangle_new)
    * _instance_
        * [.trace(ctx)](#Rectangle+trace)
        * [.setWidth(value)](#Rectangle+setWidth) ⇒ <code>[Rectangle](#Rectangle)</code>
        * [.setHeight(value)](#Rectangle+setHeight) ⇒ <code>[Rectangle](#Rectangle)</code>
        * [.width()](#Rectangle+width) ⇒ <code>Number</code>
        * [.height()](#Rectangle+height) ⇒ <code>Number</code>
        * [.animateWith(animation)](#Polygon+animateWith)
        * [.render(ctx)](#Shape+render)
        * [.draw(ctx)](#Shape+draw)
        * [.background(background)](#Shape+background)
        * [.fill(ctx)](#Shape+fill)
        * [.stroke(ctx)](#Shape+stroke)
        * [.completeOptions(moreOptions)](#Shape+completeOptions)
    * _static_
        * [.fromPointToPoint(from, to, [options])](#Rectangle.fromPointToPoint) ⇒ <code>[Rectangle](#Rectangle)</code>

<a name="new_Rectangle_new"></a>

### new Rectangle(startPoint, width, height, [options])
A rectangular shape


| Param | Type | Description |
| --- | --- | --- |
| startPoint | <code>[Position](#Position)</code> &#124; <code>[Shape](#Shape)</code> | Position of the upper-left corner |
| width | <code>Number</code> | Width of the rectangle |
| height | <code>Number</code> | Height of the rectangle |
| [options] | <code>[ShapeOptions](#ShapeOptions)</code> | Specific options for this shape |

<a name="Rectangle+trace"></a>

### rectangle.trace(ctx)
Trace the rectangle

**Kind**: instance method of <code>[Rectangle](#Rectangle)</code>  
**Overrides**: <code>[trace](#Polygon+trace)</code>  

| Param | Type | Description |
| --- | --- | --- |
| ctx | <code>CanvasRenderingContext2D</code> | A drawing context |

<a name="Rectangle+setWidth"></a>

### rectangle.setWidth(value) ⇒ <code>[Rectangle](#Rectangle)</code>
Set the rectangle's width

**Kind**: instance method of <code>[Rectangle](#Rectangle)</code>  
**Returns**: <code>[Rectangle](#Rectangle)</code> - Itself  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>Number</code> | Any value |

<a name="Rectangle+setHeight"></a>

### rectangle.setHeight(value) ⇒ <code>[Rectangle](#Rectangle)</code>
Set the rectangle's height

**Kind**: instance method of <code>[Rectangle](#Rectangle)</code>  
**Returns**: <code>[Rectangle](#Rectangle)</code> - Itself  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>Number</code> | Any value |

<a name="Rectangle+width"></a>

### rectangle.width() ⇒ <code>Number</code>
Get this rectangle's width

**Kind**: instance method of <code>[Rectangle](#Rectangle)</code>  
**Overrides**: <code>[width](#Polygon+width)</code>  
<a name="Rectangle+height"></a>

### rectangle.height() ⇒ <code>Number</code>
Get this rectangle's height

**Kind**: instance method of <code>[Rectangle](#Rectangle)</code>  
**Overrides**: <code>[height](#Polygon+height)</code>  
<a name="Polygon+animateWith"></a>

### rectangle.animateWith(animation)
Check if polygon can be animated

**Kind**: instance method of <code>[Rectangle](#Rectangle)</code>  

| Param | Type | Description |
| --- | --- | --- |
| animation | <code>[Animation](#Animation)</code> | Any animation |

<a name="Shape+render"></a>

### rectangle.render(ctx)
Move and draw the shape

**Kind**: instance method of <code>[Rectangle](#Rectangle)</code>  

| Param | Type | Description |
| --- | --- | --- |
| ctx | <code>CanvasRenderingContext2D</code> | A drawing context |

<a name="Shape+draw"></a>

### rectangle.draw(ctx)
Draw the shape into the context

**Kind**: instance method of <code>[Rectangle](#Rectangle)</code>  

| Param | Type | Description |
| --- | --- | --- |
| ctx | <code>CanvasRenderingContext2D</code> | A drawing context |

<a name="Shape+background"></a>

### rectangle.background(background)
Add a background for the shape

**Kind**: instance method of <code>[Rectangle](#Rectangle)</code>  

| Param | Type |
| --- | --- |
| background | <code>String</code> &#124; <code>[Background](#Background)</code> | 

<a name="Shape+fill"></a>

### rectangle.fill(ctx)
Fill the shape with its color

**Kind**: instance method of <code>[Rectangle](#Rectangle)</code>  

| Param | Type | Description |
| --- | --- | --- |
| ctx | <code>CanvasRenderingContext2D</code> | A drawing context |

<a name="Shape+stroke"></a>

### rectangle.stroke(ctx)
Stroke the contour of the shape

**Kind**: instance method of <code>[Rectangle](#Rectangle)</code>  

| Param | Type | Description |
| --- | --- | --- |
| ctx | <code>CanvasRenderingContext2D</code> | A drawing context |

<a name="Shape+completeOptions"></a>

### rectangle.completeOptions(moreOptions)
Add options to the shape without override

**Kind**: instance method of <code>[Rectangle](#Rectangle)</code>  

| Param | Type | Description |
| --- | --- | --- |
| moreOptions | <code>[ShapeOptions](#ShapeOptions)</code> | A map like object |

<a name="Rectangle.fromPointToPoint"></a>

### Rectangle.fromPointToPoint(from, to, [options]) ⇒ <code>[Rectangle](#Rectangle)</code>
Create a rectangle between two point

**Kind**: static method of <code>[Rectangle](#Rectangle)</code>  

| Param | Type | Description |
| --- | --- | --- |
| from | <code>[Position](#Position)</code> &#124; <code>[Shape](#Shape)</code> | Top-left point |
| to | <code>[Position](#Position)</code> &#124; <code>[Shape](#Shape)</code> | Bottom-right point |
| [options] | <code>[ShapeOptions](#ShapeOptions)</code> | Specific options for this shape |

<a name="Square"></a>

## Square ⇐ <code>[Rectangle](#Rectangle)</code>
**Kind**: global class  
**Extends**: <code>[Rectangle](#Rectangle)</code>  

* [Square](#Square) ⇐ <code>[Rectangle](#Rectangle)</code>
    * [new Square(startPoint, size, [options])](#new_Square_new)
    * [.trace(ctx)](#Rectangle+trace)
    * [.setWidth(value)](#Rectangle+setWidth) ⇒ <code>[Rectangle](#Rectangle)</code>
    * [.setHeight(value)](#Rectangle+setHeight) ⇒ <code>[Rectangle](#Rectangle)</code>
    * [.width()](#Rectangle+width) ⇒ <code>Number</code>
    * [.height()](#Rectangle+height) ⇒ <code>Number</code>
    * [.animateWith(animation)](#Polygon+animateWith)
    * [.render(ctx)](#Shape+render)
    * [.draw(ctx)](#Shape+draw)
    * [.background(background)](#Shape+background)
    * [.fill(ctx)](#Shape+fill)
    * [.stroke(ctx)](#Shape+stroke)
    * [.completeOptions(moreOptions)](#Shape+completeOptions)

<a name="new_Square_new"></a>

### new Square(startPoint, size, [options])
A regular (all side the same length) Rectangle


| Param | Type | Description |
| --- | --- | --- |
| startPoint | <code>[Position](#Position)</code> &#124; <code>[Shape](#Shape)</code> | Position of the upper-left corner |
| size | <code>Number</code> | Length of the sides |
| [options] | <code>[ShapeOptions](#ShapeOptions)</code> | Specific options for this shape |

<a name="Rectangle+trace"></a>

### square.trace(ctx)
Trace the rectangle

**Kind**: instance method of <code>[Square](#Square)</code>  

| Param | Type | Description |
| --- | --- | --- |
| ctx | <code>CanvasRenderingContext2D</code> | A drawing context |

<a name="Rectangle+setWidth"></a>

### square.setWidth(value) ⇒ <code>[Rectangle](#Rectangle)</code>
Set the rectangle's width

**Kind**: instance method of <code>[Square](#Square)</code>  
**Returns**: <code>[Rectangle](#Rectangle)</code> - Itself  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>Number</code> | Any value |

<a name="Rectangle+setHeight"></a>

### square.setHeight(value) ⇒ <code>[Rectangle](#Rectangle)</code>
Set the rectangle's height

**Kind**: instance method of <code>[Square](#Square)</code>  
**Returns**: <code>[Rectangle](#Rectangle)</code> - Itself  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>Number</code> | Any value |

<a name="Rectangle+width"></a>

### square.width() ⇒ <code>Number</code>
Get this rectangle's width

**Kind**: instance method of <code>[Square](#Square)</code>  
<a name="Rectangle+height"></a>

### square.height() ⇒ <code>Number</code>
Get this rectangle's height

**Kind**: instance method of <code>[Square](#Square)</code>  
<a name="Polygon+animateWith"></a>

### square.animateWith(animation)
Check if polygon can be animated

**Kind**: instance method of <code>[Square](#Square)</code>  

| Param | Type | Description |
| --- | --- | --- |
| animation | <code>[Animation](#Animation)</code> | Any animation |

<a name="Shape+render"></a>

### square.render(ctx)
Move and draw the shape

**Kind**: instance method of <code>[Square](#Square)</code>  

| Param | Type | Description |
| --- | --- | --- |
| ctx | <code>CanvasRenderingContext2D</code> | A drawing context |

<a name="Shape+draw"></a>

### square.draw(ctx)
Draw the shape into the context

**Kind**: instance method of <code>[Square](#Square)</code>  

| Param | Type | Description |
| --- | --- | --- |
| ctx | <code>CanvasRenderingContext2D</code> | A drawing context |

<a name="Shape+background"></a>

### square.background(background)
Add a background for the shape

**Kind**: instance method of <code>[Square](#Square)</code>  

| Param | Type |
| --- | --- |
| background | <code>String</code> &#124; <code>[Background](#Background)</code> | 

<a name="Shape+fill"></a>

### square.fill(ctx)
Fill the shape with its color

**Kind**: instance method of <code>[Square](#Square)</code>  

| Param | Type | Description |
| --- | --- | --- |
| ctx | <code>CanvasRenderingContext2D</code> | A drawing context |

<a name="Shape+stroke"></a>

### square.stroke(ctx)
Stroke the contour of the shape

**Kind**: instance method of <code>[Square](#Square)</code>  

| Param | Type | Description |
| --- | --- | --- |
| ctx | <code>CanvasRenderingContext2D</code> | A drawing context |

<a name="Shape+completeOptions"></a>

### square.completeOptions(moreOptions)
Add options to the shape without override

**Kind**: instance method of <code>[Square](#Square)</code>  

| Param | Type | Description |
| --- | --- | --- |
| moreOptions | <code>[ShapeOptions](#ShapeOptions)</code> | A map like object |

<a name="Star"></a>

## Star ⇐ <code>[Polygon](#Polygon)</code>
**Kind**: global class  
**Extends**: <code>[Polygon](#Polygon)</code>  

* [Star](#Star) ⇐ <code>[Polygon](#Polygon)</code>
    * [new Star(center, radius, nbBranch, [dropRatio], [options])](#new_Star_new)
    * [.width()](#Star+width) ⇒ <code>Number</code>
    * [.height()](#Star+height) ⇒ <code>Number</code>
    * [.trace(ctx)](#Polygon+trace)
    * [.animateWith(animation)](#Polygon+animateWith)
    * [.render(ctx)](#Shape+render)
    * [.draw(ctx)](#Shape+draw)
    * [.background(background)](#Shape+background)
    * [.fill(ctx)](#Shape+fill)
    * [.stroke(ctx)](#Shape+stroke)
    * [.completeOptions(moreOptions)](#Shape+completeOptions)

<a name="new_Star_new"></a>

### new Star(center, radius, nbBranch, [dropRatio], [options])
A shape with some branches around a point


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| center | <code>[Position](#Position)</code> &#124; <code>[Shape](#Shape)</code> |  | The center of the shape |
| radius | <code>Number</code> |  | The distance between the center and any branch tip |
| nbBranch | <code>Number</code> |  | The number of branches of the shape, can't be less than 3 |
| [dropRatio] | <code>Number</code> | <code>0.5</code> | The ratio between branches length and drops between them |
| [options] | <code>[ShapeOptions](#ShapeOptions)</code> |  | Specific options for this shape |

<a name="Star+width"></a>

### star.width() ⇒ <code>Number</code>
Get the star's width

**Kind**: instance method of <code>[Star](#Star)</code>  
**Overrides**: <code>[width](#Polygon+width)</code>  
<a name="Star+height"></a>

### star.height() ⇒ <code>Number</code>
Get the star's height

**Kind**: instance method of <code>[Star](#Star)</code>  
**Overrides**: <code>[height](#Polygon+height)</code>  
<a name="Polygon+trace"></a>

### star.trace(ctx)
Trace the polygon

**Kind**: instance method of <code>[Star](#Star)</code>  

| Param | Type | Description |
| --- | --- | --- |
| ctx | <code>CanvasRenderingContext2D</code> | A drawing context |

<a name="Polygon+animateWith"></a>

### star.animateWith(animation)
Check if polygon can be animated

**Kind**: instance method of <code>[Star](#Star)</code>  

| Param | Type | Description |
| --- | --- | --- |
| animation | <code>[Animation](#Animation)</code> | Any animation |

<a name="Shape+render"></a>

### star.render(ctx)
Move and draw the shape

**Kind**: instance method of <code>[Star](#Star)</code>  

| Param | Type | Description |
| --- | --- | --- |
| ctx | <code>CanvasRenderingContext2D</code> | A drawing context |

<a name="Shape+draw"></a>

### star.draw(ctx)
Draw the shape into the context

**Kind**: instance method of <code>[Star](#Star)</code>  

| Param | Type | Description |
| --- | --- | --- |
| ctx | <code>CanvasRenderingContext2D</code> | A drawing context |

<a name="Shape+background"></a>

### star.background(background)
Add a background for the shape

**Kind**: instance method of <code>[Star](#Star)</code>  

| Param | Type |
| --- | --- |
| background | <code>String</code> &#124; <code>[Background](#Background)</code> | 

<a name="Shape+fill"></a>

### star.fill(ctx)
Fill the shape with its color

**Kind**: instance method of <code>[Star](#Star)</code>  

| Param | Type | Description |
| --- | --- | --- |
| ctx | <code>CanvasRenderingContext2D</code> | A drawing context |

<a name="Shape+stroke"></a>

### star.stroke(ctx)
Stroke the contour of the shape

**Kind**: instance method of <code>[Star](#Star)</code>  

| Param | Type | Description |
| --- | --- | --- |
| ctx | <code>CanvasRenderingContext2D</code> | A drawing context |

<a name="Shape+completeOptions"></a>

### star.completeOptions(moreOptions)
Add options to the shape without override

**Kind**: instance method of <code>[Star](#Star)</code>  

| Param | Type | Description |
| --- | --- | --- |
| moreOptions | <code>[ShapeOptions](#ShapeOptions)</code> | A map like object |

<a name="Triangle"></a>

## Triangle ⇐ <code>[Polygon](#Polygon)</code>
**Kind**: global class  
**Extends**: <code>[Polygon](#Polygon)</code>  

* [Triangle](#Triangle) ⇐ <code>[Polygon](#Polygon)</code>
    * [new Triangle(firstPoint, secondPoint, thirdPoint, [options])](#new_Triangle_new)
    * [.trace(ctx)](#Polygon+trace)
    * [.animateWith(animation)](#Polygon+animateWith)
    * [.width()](#Polygon+width) ⇒ <code>Number</code>
    * [.height()](#Polygon+height) ⇒ <code>Number</code>
    * [.render(ctx)](#Shape+render)
    * [.draw(ctx)](#Shape+draw)
    * [.background(background)](#Shape+background)
    * [.fill(ctx)](#Shape+fill)
    * [.stroke(ctx)](#Shape+stroke)
    * [.completeOptions(moreOptions)](#Shape+completeOptions)

<a name="new_Triangle_new"></a>

### new Triangle(firstPoint, secondPoint, thirdPoint, [options])
A three point shape


| Param | Type | Description |
| --- | --- | --- |
| firstPoint | <code>[Position](#Position)</code> &#124; <code>[Shape](#Shape)</code> | The first summit of the triangle |
| secondPoint | <code>[Position](#Position)</code> &#124; <code>[Shape](#Shape)</code> | The second summit of the triangle |
| thirdPoint | <code>[Position](#Position)</code> &#124; <code>[Shape](#Shape)</code> | The third summit of the triangle |
| [options] | <code>[ShapeOptions](#ShapeOptions)</code> | Specific options for this shape |

<a name="Polygon+trace"></a>

### triangle.trace(ctx)
Trace the polygon

**Kind**: instance method of <code>[Triangle](#Triangle)</code>  

| Param | Type | Description |
| --- | --- | --- |
| ctx | <code>CanvasRenderingContext2D</code> | A drawing context |

<a name="Polygon+animateWith"></a>

### triangle.animateWith(animation)
Check if polygon can be animated

**Kind**: instance method of <code>[Triangle](#Triangle)</code>  

| Param | Type | Description |
| --- | --- | --- |
| animation | <code>[Animation](#Animation)</code> | Any animation |

<a name="Polygon+width"></a>

### triangle.width() ⇒ <code>Number</code>
Get this shape's width

**Kind**: instance method of <code>[Triangle](#Triangle)</code>  
<a name="Polygon+height"></a>

### triangle.height() ⇒ <code>Number</code>
Get this shape's height

**Kind**: instance method of <code>[Triangle](#Triangle)</code>  
<a name="Shape+render"></a>

### triangle.render(ctx)
Move and draw the shape

**Kind**: instance method of <code>[Triangle](#Triangle)</code>  

| Param | Type | Description |
| --- | --- | --- |
| ctx | <code>CanvasRenderingContext2D</code> | A drawing context |

<a name="Shape+draw"></a>

### triangle.draw(ctx)
Draw the shape into the context

**Kind**: instance method of <code>[Triangle](#Triangle)</code>  

| Param | Type | Description |
| --- | --- | --- |
| ctx | <code>CanvasRenderingContext2D</code> | A drawing context |

<a name="Shape+background"></a>

### triangle.background(background)
Add a background for the shape

**Kind**: instance method of <code>[Triangle](#Triangle)</code>  

| Param | Type |
| --- | --- |
| background | <code>String</code> &#124; <code>[Background](#Background)</code> | 

<a name="Shape+fill"></a>

### triangle.fill(ctx)
Fill the shape with its color

**Kind**: instance method of <code>[Triangle](#Triangle)</code>  

| Param | Type | Description |
| --- | --- | --- |
| ctx | <code>CanvasRenderingContext2D</code> | A drawing context |

<a name="Shape+stroke"></a>

### triangle.stroke(ctx)
Stroke the contour of the shape

**Kind**: instance method of <code>[Triangle](#Triangle)</code>  

| Param | Type | Description |
| --- | --- | --- |
| ctx | <code>CanvasRenderingContext2D</code> | A drawing context |

<a name="Shape+completeOptions"></a>

### triangle.completeOptions(moreOptions)
Add options to the shape without override

**Kind**: instance method of <code>[Triangle](#Triangle)</code>  

| Param | Type | Description |
| --- | --- | --- |
| moreOptions | <code>[ShapeOptions](#ShapeOptions)</code> | A map like object |

<a name="Text"></a>

## Text ⇐ <code>[Shape](#Shape)</code>
**Kind**: global class  
**Extends**: <code>[Shape](#Shape)</code>  

* [Text](#Text) ⇐ <code>[Shape](#Shape)</code>
    * [new Text(text, position, [options])](#new_Text_new)
    * [.trace(ctx)](#Text+trace)
    * [.fill(ctx)](#Text+fill)
    * [.stroke(ctx)](#Text+stroke)
    * [.width(ctx)](#Text+width) ⇒ <code>Number</code>
    * [.height()](#Text+height) ⇒ <code>Number</code>
    * [.render(ctx)](#Shape+render)
    * [.draw(ctx)](#Shape+draw)
    * [.background(background)](#Shape+background)
    * [.animateWith(animation)](#Shape+animateWith)
    * [.completeOptions(moreOptions)](#Shape+completeOptions)

<a name="new_Text_new"></a>

### new Text(text, position, [options])
Draw a text


| Param | Type | Description |
| --- | --- | --- |
| text | <code>String</code> | Content of the text |
| position | <code>[Position](#Position)</code> &#124; <code>[Shape](#Shape)</code> | Position of the text |
| [options] | <code>[TextOptions](#TextOptions)</code> | Specific options for this shape |

<a name="Text+trace"></a>

### text.trace(ctx)
Trace the text

**Kind**: instance method of <code>[Text](#Text)</code>  

| Param | Type | Description |
| --- | --- | --- |
| ctx | <code>CanvasRenderingContext2D</code> | A drawing context |

<a name="Text+fill"></a>

### text.fill(ctx)
Fill the text

**Kind**: instance method of <code>[Text](#Text)</code>  
**Overrides**: <code>[fill](#Shape+fill)</code>  

| Param | Type | Description |
| --- | --- | --- |
| ctx | <code>CanvasRenderingContext2D</code> | A drawing context |

<a name="Text+stroke"></a>

### text.stroke(ctx)
Stroke the text outline

**Kind**: instance method of <code>[Text](#Text)</code>  
**Overrides**: <code>[stroke](#Shape+stroke)</code>  

| Param | Type | Description |
| --- | --- | --- |
| ctx | <code>CanvasRenderingContext2D</code> | A drawing context |

<a name="Text+width"></a>

### text.width(ctx) ⇒ <code>Number</code>
Get the text's width

**Kind**: instance method of <code>[Text](#Text)</code>  

| Param | Type | Description |
| --- | --- | --- |
| ctx | <code>CanvasRenderingContext2D</code> | A drawing context |

<a name="Text+height"></a>

### text.height() ⇒ <code>Number</code>
Get the text's height

**Kind**: instance method of <code>[Text](#Text)</code>  
<a name="Shape+render"></a>

### text.render(ctx)
Move and draw the shape

**Kind**: instance method of <code>[Text](#Text)</code>  

| Param | Type | Description |
| --- | --- | --- |
| ctx | <code>CanvasRenderingContext2D</code> | A drawing context |

<a name="Shape+draw"></a>

### text.draw(ctx)
Draw the shape into the context

**Kind**: instance method of <code>[Text](#Text)</code>  

| Param | Type | Description |
| --- | --- | --- |
| ctx | <code>CanvasRenderingContext2D</code> | A drawing context |

<a name="Shape+background"></a>

### text.background(background)
Add a background for the shape

**Kind**: instance method of <code>[Text](#Text)</code>  

| Param | Type |
| --- | --- |
| background | <code>String</code> &#124; <code>[Background](#Background)</code> | 

<a name="Shape+animateWith"></a>

### text.animateWith(animation)
Animate this shape position with an animation

**Kind**: instance method of <code>[Text](#Text)</code>  

| Param | Type | Description |
| --- | --- | --- |
| animation | <code>[Animation](#Animation)</code> | Any animation |

<a name="Shape+completeOptions"></a>

### text.completeOptions(moreOptions)
Add options to the shape without override

**Kind**: instance method of <code>[Text](#Text)</code>  

| Param | Type | Description |
| --- | --- | --- |
| moreOptions | <code>[ShapeOptions](#ShapeOptions)</code> | A map like object |

<a name="run"></a>

## run(position, ctx)
Apply this animation function to a position

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| position | <code>[Position](#Position)</code> | A position to move |
| ctx | <code>CanvasRenderingContext2D</code> | A drawing context |

<a name="restart"></a>

## restart(position)
Restart this animation

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| position | <code>[Position](#Position)</code> | A position to set |

<a name="animateWith"></a>

## animateWith(animation)
Add an animation to this background

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| animation | <code>[Animation](#Animation)</code> | Any animation |

<a name="getX"></a>

## getX() ⇒ <code>Number</code>
Get the x value

**Kind**: global function  
<a name="getY"></a>

## getY() ⇒ <code>Number</code>
Get the y value

**Kind**: global function  
<a name="setX"></a>

## setX([x]) ⇒ <code>[Position](#Position)</code>
Set a new value for x and move linked positions

**Kind**: global function  
**Returns**: <code>[Position](#Position)</code> - Itself  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [x] | <code>Number</code> | <code>0</code> | The new x value |

<a name="setY"></a>

## setY([y]) ⇒ <code>[Position](#Position)</code>
Set a new value for y and move linked positions

**Kind**: global function  
**Returns**: <code>[Position](#Position)</code> - Itself  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [y] | <code>Number</code> | <code>0</code> | The new y value |

<a name="setTo"></a>

## setTo([x], [y]) ⇒ <code>\*</code> &#124; <code>[Position](#Position)</code>
Move this to a new position

**Kind**: global function  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [x] | <code>Number</code> | <code>0</code> | New value for x |
| [y] | <code>Number</code> | <code>0</code> | New value for y |

<a name="addX"></a>

## addX([diff], [override]) ⇒ <code>[Position](#Position)</code>
Add to the x value

**Kind**: global function  
**Returns**: <code>[Position](#Position)</code> - Itself  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [diff] | <code>Number</code> | <code>0</code> | How much to add |
| [override] | <code>Boolean</code> | <code>false</code> | If true, will change the origin value |

<a name="addY"></a>

## addY([diff], [override]) ⇒ <code>[Position](#Position)</code>
Add to the y value

**Kind**: global function  
**Returns**: <code>[Position](#Position)</code> - Itself  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [diff] | <code>Number</code> | <code>0</code> | How much to add |
| [override] | <code>Boolean</code> | <code>false</code> | If true, will change the origin value |

<a name="move"></a>

## move([diffX], [diffY], [override]) ⇒ <code>[Position](#Position)</code>
Move the position by some x and y

**Kind**: global function  
**Returns**: <code>[Position](#Position)</code> - Itself  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [diffX] | <code>Number</code> | <code>0</code> | How much to move by x |
| [diffY] | <code>Number</code> | <code>0</code> | How much to move by y |
| [override] | <code>Boolean</code> | <code>false</code> | If true, will change the origin value |

<a name="setOrigin"></a>

## setOrigin(x, y) ⇒ <code>[Position](#Position)</code>
Define the origin of the position

**Kind**: global function  
**Returns**: <code>[Position](#Position)</code> - Itself  

| Param | Type | Description |
| --- | --- | --- |
| x | <code>Number</code> | A x value |
| y | <code>Number</code> | A y value |

<a name="reset"></a>

## reset() ⇒ <code>[Position](#Position)</code>
Return a position to its origin

**Kind**: global function  
**Returns**: <code>[Position](#Position)</code> - Itself  
<a name="animateWith"></a>

## animateWith(animation) ⇒ <code>[Position](#Position)</code>
Define an animation to apply to this position

**Kind**: global function  
**Returns**: <code>[Position](#Position)</code> - Itself  

| Param | Type | Description |
| --- | --- | --- |
| animation | <code>[Animation](#Animation)</code> | - |

<a name="animate"></a>

## animate(ctx) ⇒ <code>[Position](#Position)</code>
Run the animation of this position

**Kind**: global function  
**Returns**: <code>[Position](#Position)</code> - Itself  

| Param | Type | Description |
| --- | --- | --- |
| ctx | <code>CanvasRenderingContext2D</code> | The rendering context |

<a name="addLink"></a>

## addLink(position)
Link a position to this one

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| position | <code>[Position](#Position)</code> | Another position to link, will be moved alongside this position |

<a name="GradientParams"></a>

## GradientParams : <code>Object</code>
**Kind**: global typedef  

| Param | Type | Description |
| --- | --- | --- |
| [...0-100] | <code>Number</code> | A color stop, key for the position and value for the color |

**Example**  
```js
{ 0: "red", 50: "green", 100: "blue" }
```
<a name="SceneOptions"></a>

## SceneOptions : <code>Object</code>
**Kind**: global typedef  
**Extends**: <code>[ShapeOptions](#ShapeOptions)</code>  

| Param | Type | Description |
| --- | --- | --- |
| width | <code>Number</code> | The scene's width |
| height | <code>Number</code> | The scene's height |

<a name="ShapeOptions"></a>

## ShapeOptions : <code>Object</code>
**Kind**: global typedef  

| Param | Type | Description |
| --- | --- | --- |
| fillColor | <code>String</code> &#124; <code>[Background](#Background)</code> | A color string or a background to fill the shape |
| strokeColor | <code>String</code> | A color string for the shape's outlines |
| strokeWidth | <code>Number</code> | The width of the shape's outlines (need a strokeColor to take effect) |

<a name="TextOptions"></a>

## TextOptions : <code>Object</code>
**Kind**: global typedef  
**Extends**: <code>[ShapeOptions](#ShapeOptions)</code>  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [font] | <code>String</code> | <code>&quot;sans-serif&quot;</code> | The font's name |
| [fontSize] | <code>String</code> | <code>10</code> | The font's size |
| [bold] | <code>Boolean</code> | <code>false</code> | Is the text bold |
| [italic] | <code>Boolean</code> | <code>false</code> | Is the text italic |
| [align] | <code>String</code> | <code>&quot;left&quot;</code> | The text's vertical alignment |
| [baseline] | <code>String</code> | <code>&quot;alphabetic&quot;</code> | The text's baseline position |

