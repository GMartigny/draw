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
<dt><a href="#Triangle">Triangle</a> ⇐ <code><a href="#Polygon">Polygon</a></code></dt>
<dd></dd>
<dt><a href="#Text">Text</a> ⇐ <code><a href="#Shape">Shape</a></code></dt>
<dd></dd>
</dl>

## Typedefs

<dl>
<dt><a href="#GradientParams">GradientParams</a> : <code>Object</code></dt>
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
    * _instance_
        * [.run(position, ctx)](#Animation+run)
        * [.restart(position)](#Animation+restart)
    * _static_
        * [.Swirl(radius, [speed], [counterClockWise])](#Animation.Swirl) ⇒ <code>[Animation](#Animation)</code>
        * [.Rotate([speed], [counterClockWise])](#Animation.Rotate) ⇒ <code>[Animation](#Animation)</code>
        * [.Gravity([ground], [bounce])](#Animation.Gravity) ⇒ <code>[Animation](#Animation)</code>

<a name="new_Animation_new"></a>

### new Animation(func)
Modify a position with a constant function


| Param | Type | Description |
| --- | --- | --- |
| func | <code>function</code> | A function to call for each iteration |

<a name="Animation+run"></a>

### animation.run(position, ctx)
Apply this animation function to a position

**Kind**: instance method of <code>[Animation](#Animation)</code>  

| Param | Type | Description |
| --- | --- | --- |
| position | <code>[Position](#Position)</code> | A position to move |
| ctx | <code>CanvasRenderingContext2D</code> | A drawing context |

<a name="Animation+restart"></a>

### animation.restart(position)
Restart this animation

**Kind**: instance method of <code>[Animation](#Animation)</code>  

| Param | Type | Description |
| --- | --- | --- |
| position | <code>[Position](#Position)</code> | A position to set |

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
    * [.animateWith(animation)](#Background+animateWith)

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
<a name="Background+animateWith"></a>

### background.animateWith(animation)
Add an animation to this background

**Kind**: instance method of <code>[Background](#Background)</code>  

| Param | Type | Description |
| --- | --- | --- |
| animation | <code>[Animation](#Animation)</code> | Any animation |

<a name="BackgroundImage"></a>

## BackgroundImage ⇐ <code>[Background](#Background)</code>
**Kind**: global class  
**Extends:** <code>[Background](#Background)</code>  

* [BackgroundImage](#BackgroundImage) ⇐ <code>[Background](#Background)</code>
    * [new BackgroundImage(url, fill)](#new_BackgroundImage_new)
    * _instance_
        * [.getStyle(ctx, shape)](#BackgroundImage+getStyle) ⇒ <code>CanvasPattern</code>
        * [.animateWith(animation)](#Background+animateWith)
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
**Overrides:** <code>[getStyle](#Background+getStyle)</code>  
**Returns**: <code>CanvasPattern</code> - The pattern or null if the image is not loaded  

| Param | Type | Description |
| --- | --- | --- |
| ctx | <code>CanvasRenderingContext2D</code> | A drawing context |
| shape | <code>[Shape](#Shape)</code> | The holding shape |

<a name="Background+animateWith"></a>

### backgroundImage.animateWith(animation)
Add an animation to this background

**Kind**: instance method of <code>[BackgroundImage](#BackgroundImage)</code>  

| Param | Type | Description |
| --- | --- | --- |
| animation | <code>[Animation](#Animation)</code> | Any animation |

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
**Extends:** <code>[Background](#Background)</code>  

* [LinearGradient](#LinearGradient) ⇐ <code>[Background](#Background)</code>
    * [new LinearGradient([angle], params)](#new_LinearGradient_new)
    * _instance_
        * [.getStyle(ctx, shape)](#LinearGradient+getStyle) ⇒ <code>CanvasGradient</code>
        * [.animateWith(animation)](#Background+animateWith)
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
**Overrides:** <code>[getStyle](#Background+getStyle)</code>  

| Param | Type | Description |
| --- | --- | --- |
| ctx | <code>CanvasRenderingContext2D</code> | A drawing context |
| shape | <code>[Shape](#Shape)</code> | The holding shape |

<a name="Background+animateWith"></a>

### linearGradient.animateWith(animation)
Add an animation to this background

**Kind**: instance method of <code>[LinearGradient](#LinearGradient)</code>  

| Param | Type | Description |
| --- | --- | --- |
| animation | <code>[Animation](#Animation)</code> | Any animation |

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
**Extends:** <code>[Background](#Background)</code>  

* [RadialGradient](#RadialGradient) ⇐ <code>[Background](#Background)</code>
    * [new RadialGradient(center, params)](#new_RadialGradient_new)
    * [.getStyle(ctx, shape)](#RadialGradient+getStyle) ⇒ <code>CanvasGradient</code>
    * [.animateWith(animation)](#Background+animateWith)

<a name="new_RadialGradient_new"></a>

### new RadialGradient(center, params)
A radial gradient background


| Param | Type | Description |
| --- | --- | --- |
| center | <code>[Position](#Position)</code> &#124; <code>[Shape](#Shape)</code> | - |
| params | <code>[GradientParams](#GradientParams)</code> | The gradient definition |

<a name="RadialGradient+getStyle"></a>

### radialGradient.getStyle(ctx, shape) ⇒ <code>CanvasGradient</code>
Build the gradient

**Kind**: instance method of <code>[RadialGradient](#RadialGradient)</code>  
**Overrides:** <code>[getStyle](#Background+getStyle)</code>  

| Param | Type | Description |
| --- | --- | --- |
| ctx | <code>CanvasRenderingContext2D</code> | A drawing context |
| shape | <code>[Shape](#Shape)</code> | The holding shape |

<a name="Background+animateWith"></a>

### radialGradient.animateWith(animation)
Add an animation to this background

**Kind**: instance method of <code>[RadialGradient](#RadialGradient)</code>  

| Param | Type | Description |
| --- | --- | --- |
| animation | <code>[Animation](#Animation)</code> | Any animation |

<a name="Position"></a>

## Position
**Kind**: global class  

* [Position](#Position)
    * [new Position(x, y, [animation])](#new_Position_new)
    * _instance_
        * [.getX()](#Position+getX) ⇒ <code>Number</code>
        * [.getY()](#Position+getY) ⇒ <code>Number</code>
        * [.setX(x)](#Position+setX) ⇒ <code>[Position](#Position)</code>
        * [.setY(y)](#Position+setY) ⇒ <code>[Position](#Position)</code>
        * [.addX(diff, [override])](#Position+addX) ⇒ <code>[Position](#Position)</code>
        * [.addY(diff, [override])](#Position+addY) ⇒ <code>[Position](#Position)</code>
        * [.setOrigin(x, y)](#Position+setOrigin) ⇒ <code>[Position](#Position)</code>
        * [.reset()](#Position+reset) ⇒ <code>[Position](#Position)</code>
        * [.animateWith(animation)](#Position+animateWith) ⇒ <code>[Position](#Position)</code>
        * [.animate(ctx)](#Position+animate) ⇒ <code>[Position](#Position)</code>
        * [.addLink(position)](#Position+addLink)
    * _static_
        * [.createFrom(other)](#Position.createFrom) ⇒ <code>[Position](#Position)</code>

<a name="new_Position_new"></a>

### new Position(x, y, [animation])
A couple of number for positioning


| Param | Type | Description |
| --- | --- | --- |
| x | <code>Number</code> | The x value |
| y | <code>Number</code> | The y value |
| [animation] | <code>[Animation](#Animation)</code> | The position animation |

<a name="Position+getX"></a>

### position.getX() ⇒ <code>Number</code>
Get the x value

**Kind**: instance method of <code>[Position](#Position)</code>  
<a name="Position+getY"></a>

### position.getY() ⇒ <code>Number</code>
Get the y value

**Kind**: instance method of <code>[Position](#Position)</code>  
<a name="Position+setX"></a>

### position.setX(x) ⇒ <code>[Position](#Position)</code>
Set a new value for x and move linked positions

**Kind**: instance method of <code>[Position](#Position)</code>  
**Returns**: <code>[Position](#Position)</code> - Itself  
**Call**: addX  

| Param | Type | Description |
| --- | --- | --- |
| x | <code>Number</code> | The new x value |

<a name="Position+setY"></a>

### position.setY(y) ⇒ <code>[Position](#Position)</code>
Set a new value for y and move linked positions

**Kind**: instance method of <code>[Position](#Position)</code>  
**Returns**: <code>[Position](#Position)</code> - Itself  
**Call**: addY  

| Param | Type | Description |
| --- | --- | --- |
| y | <code>Number</code> | The new y value |

<a name="Position+addX"></a>

### position.addX(diff, [override]) ⇒ <code>[Position](#Position)</code>
Add to the x value

**Kind**: instance method of <code>[Position](#Position)</code>  
**Returns**: <code>[Position](#Position)</code> - Itself  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| diff | <code>Number</code> |  | How much to add |
| [override] | <code>Boolean</code> | <code>false</code> | If true, will change the origin value |

<a name="Position+addY"></a>

### position.addY(diff, [override]) ⇒ <code>[Position](#Position)</code>
Add to the y value

**Kind**: instance method of <code>[Position](#Position)</code>  
**Returns**: <code>[Position](#Position)</code> - Itself  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| diff | <code>Number</code> |  | How much to add |
| [override] | <code>Boolean</code> | <code>false</code> | If true, will change the origin value |

<a name="Position+setOrigin"></a>

### position.setOrigin(x, y) ⇒ <code>[Position](#Position)</code>
Define the origin of the position

**Kind**: instance method of <code>[Position](#Position)</code>  
**Returns**: <code>[Position](#Position)</code> - Itself  

| Param | Type | Description |
| --- | --- | --- |
| x | <code>Number</code> | A x value |
| y | <code>Number</code> | A y value |

<a name="Position+reset"></a>

### position.reset() ⇒ <code>[Position](#Position)</code>
Return a position to its origin

**Kind**: instance method of <code>[Position](#Position)</code>  
**Returns**: <code>[Position](#Position)</code> - Itself  
<a name="Position+animateWith"></a>

### position.animateWith(animation) ⇒ <code>[Position](#Position)</code>
Define an animation to apply to this position

**Kind**: instance method of <code>[Position](#Position)</code>  
**Returns**: <code>[Position](#Position)</code> - Itself  

| Param | Type | Description |
| --- | --- | --- |
| animation | <code>[Animation](#Animation)</code> | - |

<a name="Position+animate"></a>

### position.animate(ctx) ⇒ <code>[Position](#Position)</code>
Run the animation of this position

**Kind**: instance method of <code>[Position](#Position)</code>  
**Returns**: <code>[Position](#Position)</code> - Itself  

| Param | Type | Description |
| --- | --- | --- |
| ctx | <code>CanvasRenderingContext2D</code> | The rendering context |

<a name="Position+addLink"></a>

### position.addLink(position)
Link a position to this one

**Kind**: instance method of <code>[Position](#Position)</code>  

| Param | Type | Description |
| --- | --- | --- |
| position | <code>[Position](#Position)</code> | Another position to link, will be moved alongside this position |

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
    * [.background(color)](#Scene+background)
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

### scene.background(color)
Add a background color to the scene

**Kind**: instance method of <code>[Scene](#Scene)</code>  

| Param | Type | Description |
| --- | --- | --- |
| color | <code>String</code> | Any color string |

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

* [Shape](#Shape)
    * [new Shape(position, options)](#new_Shape_new)
    * [.render(ctx)](#Shape+render)
    * [.draw(ctx)](#Shape+draw)
    * [.background(background)](#Shape+background)
    * [.fill(ctx)](#Shape+fill)
    * [.stroke(ctx)](#Shape+stroke)
    * [.animateWith(animation)](#Shape+animateWith)

<a name="new_Shape_new"></a>

### new Shape(position, options)
A generic shape


| Param | Type | Description |
| --- | --- | --- |
| position | <code>[Position](#Position)</code> &#124; <code>[Shape](#Shape)</code> | Its position on the scene |
| options | <code>[ShapeOptions](#ShapeOptions)</code> | Specific options for this shape |

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

<a name="Arc"></a>

## Arc ⇐ <code>[Shape](#Shape)</code>
**Kind**: global class  
**Extends:** <code>[Shape](#Shape)</code>  

* [Arc](#Arc) ⇐ <code>[Shape](#Shape)</code>
    * [new Arc(position, radius, [startAngle], [endAngle], [clockwise], [options])](#new_Arc_new)
    * [.trace(ctx)](#Arc+trace)
    * [.render(ctx)](#Shape+render)
    * [.draw(ctx)](#Shape+draw)
    * [.background(background)](#Shape+background)
    * [.fill(ctx)](#Shape+fill)
    * [.stroke(ctx)](#Shape+stroke)
    * [.animateWith(animation)](#Shape+animateWith)

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

<a name="Circle"></a>

## Circle ⇐ <code>[Arc](#Arc)</code>
**Kind**: global class  
**Extends:** <code>[Arc](#Arc)</code>  

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

<a name="Polygon"></a>

## Polygon ⇐ <code>[Shape](#Shape)</code>
**Kind**: global class  
**Extends:** <code>[Shape](#Shape)</code>  

* [Polygon](#Polygon) ⇐ <code>[Shape](#Shape)</code>
    * [new Polygon(points, options)](#new_Polygon_new)
    * [.trace(ctx)](#Polygon+trace)
    * [.width()](#Polygon+width) ⇒ <code>Number</code>
    * [.height()](#Polygon+height) ⇒ <code>Number</code>
    * [.render(ctx)](#Shape+render)
    * [.draw(ctx)](#Shape+draw)
    * [.background(background)](#Shape+background)
    * [.fill(ctx)](#Shape+fill)
    * [.stroke(ctx)](#Shape+stroke)
    * [.animateWith(animation)](#Shape+animateWith)

<a name="new_Polygon_new"></a>

### new Polygon(points, options)
A shape from multiple point


| Param | Type | Description |
| --- | --- | --- |
| points | <code>Array.&lt;(Position\|Shape)&gt;</code> | A list of points |
| options | <code>Object</code> | Specific options for this shape |

<a name="Polygon+trace"></a>

### polygon.trace(ctx)
Trace the polygon

**Kind**: instance method of <code>[Polygon](#Polygon)</code>  

| Param | Type | Description |
| --- | --- | --- |
| ctx | <code>CanvasRenderingContext2D</code> | A drawing context |

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

<a name="Shape+animateWith"></a>

### polygon.animateWith(animation)
Animate this shape position with an animation

**Kind**: instance method of <code>[Polygon](#Polygon)</code>  
**Overrides:** <code>[animateWith](#Shape+animateWith)</code>  

| Param | Type | Description |
| --- | --- | --- |
| animation | <code>[Animation](#Animation)</code> | Any animation |

<a name="Blob"></a>

## Blob ⇐ <code>[Polygon](#Polygon)</code>
**Kind**: global class  
**Extends:** <code>[Polygon](#Polygon)</code>  

* [Blob](#Blob) ⇐ <code>[Polygon](#Polygon)</code>
    * [new Blob(points, tension, options)](#new_Blob_new)
    * [.trace(ctx)](#Polygon+trace)
    * [.animateWith(animation)](#Shape+animateWith)
    * [.width()](#Polygon+width) ⇒ <code>Number</code>
    * [.height()](#Polygon+height) ⇒ <code>Number</code>
    * [.render(ctx)](#Shape+render)
    * [.draw(ctx)](#Shape+draw)
    * [.background(background)](#Shape+background)
    * [.fill(ctx)](#Shape+fill)
    * [.stroke(ctx)](#Shape+stroke)

<a name="new_Blob_new"></a>

### new Blob(points, tension, options)
A shape from multiple point with rounded angle


| Param | Type | Description |
| --- | --- | --- |
| points | <code>Array.&lt;(Position\|Shape)&gt;</code> | A list of points |
| tension | <code>Number</code> | Define the roundness of the blob |
| options | <code>Object</code> | Specific options for this shape |

<a name="Polygon+trace"></a>

### blob.trace(ctx)
Trace the polygon

**Kind**: instance method of <code>[Blob](#Blob)</code>  
**Overrides:** <code>[trace](#Polygon+trace)</code>  

| Param | Type | Description |
| --- | --- | --- |
| ctx | <code>CanvasRenderingContext2D</code> | A drawing context |

<a name="Shape+animateWith"></a>

### blob.animateWith(animation)
Animate this shape position with an animation

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

<a name="Line"></a>

## Line ⇐ <code>[Polygon](#Polygon)</code>
**Kind**: global class  
**Extends:** <code>[Polygon](#Polygon)</code>  

* [Line](#Line) ⇐ <code>[Polygon](#Polygon)</code>
    * [new Line(startPoint, endPoint, options)](#new_Line_new)
    * [.width()](#Line+width) ⇒ <code>Number</code>
    * [.height()](#Line+height) ⇒ <code>Number</code>
    * [.trace(ctx)](#Polygon+trace)
    * [.animateWith(animation)](#Shape+animateWith)
    * [.render(ctx)](#Shape+render)
    * [.draw(ctx)](#Shape+draw)
    * [.background(background)](#Shape+background)
    * [.fill(ctx)](#Shape+fill)
    * [.stroke(ctx)](#Shape+stroke)

<a name="new_Line_new"></a>

### new Line(startPoint, endPoint, options)
A line between two point


| Param | Type | Description |
| --- | --- | --- |
| startPoint | <code>[Position](#Position)</code> &#124; <code>[Shape](#Shape)</code> | Its origin point or shape |
| endPoint | <code>[Position](#Position)</code> &#124; <code>[Shape](#Shape)</code> | Its arrival point or shape |
| options | <code>Object</code> | Specific options for this line |

<a name="Line+width"></a>

### line.width() ⇒ <code>Number</code>
Get the line x length

**Kind**: instance method of <code>[Line](#Line)</code>  
**Overrides:** <code>[width](#Polygon+width)</code>  
<a name="Line+height"></a>

### line.height() ⇒ <code>Number</code>
Get the line y length

**Kind**: instance method of <code>[Line](#Line)</code>  
**Overrides:** <code>[height](#Polygon+height)</code>  
<a name="Polygon+trace"></a>

### line.trace(ctx)
Trace the polygon

**Kind**: instance method of <code>[Line](#Line)</code>  

| Param | Type | Description |
| --- | --- | --- |
| ctx | <code>CanvasRenderingContext2D</code> | A drawing context |

<a name="Shape+animateWith"></a>

### line.animateWith(animation)
Animate this shape position with an animation

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

<a name="Shape+fill"></a>

### line.fill(ctx)
Fill the shape with its color

**Kind**: instance method of <code>[Line](#Line)</code>  
**Overrides:** <code>[fill](#Shape+fill)</code>  

| Param | Type | Description |
| --- | --- | --- |
| ctx | <code>CanvasRenderingContext2D</code> | A drawing context |

<a name="Shape+stroke"></a>

### line.stroke(ctx)
Stroke the contour of the shape

**Kind**: instance method of <code>[Line](#Line)</code>  

| Param | Type | Description |
| --- | --- | --- |
| ctx | <code>CanvasRenderingContext2D</code> | A drawing context |

<a name="Rectangle"></a>

## Rectangle ⇐ <code>[Polygon](#Polygon)</code>
**Kind**: global class  
**Extends:** <code>[Polygon](#Polygon)</code>  

* [Rectangle](#Rectangle) ⇐ <code>[Polygon](#Polygon)</code>
    * [new Rectangle(startPoint, width, height, options)](#new_Rectangle_new)
    * _instance_
        * [.setWidth(value)](#Rectangle+setWidth) ⇒ <code>[Rectangle](#Rectangle)</code>
        * [.setHeight(value)](#Rectangle+setHeight) ⇒ <code>[Rectangle](#Rectangle)</code>
        * [.width()](#Rectangle+width) ⇒ <code>Number</code>
        * [.height()](#Rectangle+height) ⇒ <code>Number</code>
        * [.trace(ctx)](#Polygon+trace)
        * [.animateWith(animation)](#Shape+animateWith)
        * [.render(ctx)](#Shape+render)
        * [.draw(ctx)](#Shape+draw)
        * [.background(background)](#Shape+background)
        * [.fill(ctx)](#Shape+fill)
        * [.stroke(ctx)](#Shape+stroke)
    * _static_
        * [.fromPointToPoint(from, to, options)](#Rectangle.fromPointToPoint) ⇒ <code>[Rectangle](#Rectangle)</code>

<a name="new_Rectangle_new"></a>

### new Rectangle(startPoint, width, height, options)
A rectangular shape


| Param | Type | Description |
| --- | --- | --- |
| startPoint | <code>[Position](#Position)</code> &#124; <code>[Shape](#Shape)</code> | Position of the upper-left corner |
| width | <code>Number</code> | Width of the rectangle |
| height | <code>Number</code> | Height of the rectangle |
| options | <code>Object</code> | Specific options for this shape |

<a name="Rectangle+setWidth"></a>

### rectangle.setWidth(value) ⇒ <code>[Rectangle](#Rectangle)</code>
**Kind**: instance method of <code>[Rectangle](#Rectangle)</code>  
**Returns**: <code>[Rectangle](#Rectangle)</code> - Itself  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>Number</code> | - |

<a name="Rectangle+setHeight"></a>

### rectangle.setHeight(value) ⇒ <code>[Rectangle](#Rectangle)</code>
**Kind**: instance method of <code>[Rectangle](#Rectangle)</code>  
**Returns**: <code>[Rectangle](#Rectangle)</code> - Itself  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>Number</code> | - |

<a name="Rectangle+width"></a>

### rectangle.width() ⇒ <code>Number</code>
Get this rectangle's width

**Kind**: instance method of <code>[Rectangle](#Rectangle)</code>  
**Overrides:** <code>[width](#Polygon+width)</code>  
<a name="Rectangle+height"></a>

### rectangle.height() ⇒ <code>Number</code>
Get this rectangle's height

**Kind**: instance method of <code>[Rectangle](#Rectangle)</code>  
**Overrides:** <code>[height](#Polygon+height)</code>  
<a name="Polygon+trace"></a>

### rectangle.trace(ctx)
Trace the polygon

**Kind**: instance method of <code>[Rectangle](#Rectangle)</code>  
**Overrides:** <code>[trace](#Polygon+trace)</code>  

| Param | Type | Description |
| --- | --- | --- |
| ctx | <code>CanvasRenderingContext2D</code> | A drawing context |

<a name="Shape+animateWith"></a>

### rectangle.animateWith(animation)
Animate this shape position with an animation

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

<a name="Rectangle.fromPointToPoint"></a>

### Rectangle.fromPointToPoint(from, to, options) ⇒ <code>[Rectangle](#Rectangle)</code>
Create a rectangle between two point

**Kind**: static method of <code>[Rectangle](#Rectangle)</code>  

| Param | Type | Description |
| --- | --- | --- |
| from | <code>[Position](#Position)</code> &#124; <code>[Shape](#Shape)</code> | Top-left point |
| to | <code>[Position](#Position)</code> &#124; <code>[Shape](#Shape)</code> | Bottom-right point |
| options | <code>Object</code> | Specific options for this shape |

<a name="Square"></a>

## Square ⇐ <code>[Rectangle](#Rectangle)</code>
**Kind**: global class  
**Extends:** <code>[Rectangle](#Rectangle)</code>  

* [Square](#Square) ⇐ <code>[Rectangle](#Rectangle)</code>
    * [new Square(startPoint, size, [options])](#new_Square_new)
    * [.trace(ctx)](#Polygon+trace)
    * [.setWidth(value)](#Rectangle+setWidth) ⇒ <code>[Rectangle](#Rectangle)</code>
    * [.setHeight(value)](#Rectangle+setHeight) ⇒ <code>[Rectangle](#Rectangle)</code>
    * [.width()](#Rectangle+width) ⇒ <code>Number</code>
    * [.height()](#Rectangle+height) ⇒ <code>Number</code>
    * [.animateWith(animation)](#Shape+animateWith)
    * [.render(ctx)](#Shape+render)
    * [.draw(ctx)](#Shape+draw)
    * [.background(background)](#Shape+background)
    * [.fill(ctx)](#Shape+fill)
    * [.stroke(ctx)](#Shape+stroke)

<a name="new_Square_new"></a>

### new Square(startPoint, size, [options])
A regular (all side the same length) Rectangle


| Param | Type | Description |
| --- | --- | --- |
| startPoint | <code>[Position](#Position)</code> &#124; <code>[Shape](#Shape)</code> | Position of the upper-left corner |
| size | <code>Number</code> | Length of the sides (in pixels) |
| [options] | <code>[ShapeOptions](#ShapeOptions)</code> | Specific options for this shape |

<a name="Polygon+trace"></a>

### square.trace(ctx)
Trace the polygon

**Kind**: instance method of <code>[Square](#Square)</code>  

| Param | Type | Description |
| --- | --- | --- |
| ctx | <code>CanvasRenderingContext2D</code> | A drawing context |

<a name="Rectangle+setWidth"></a>

### square.setWidth(value) ⇒ <code>[Rectangle](#Rectangle)</code>
**Kind**: instance method of <code>[Square](#Square)</code>  
**Returns**: <code>[Rectangle](#Rectangle)</code> - Itself  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>Number</code> | - |

<a name="Rectangle+setHeight"></a>

### square.setHeight(value) ⇒ <code>[Rectangle](#Rectangle)</code>
**Kind**: instance method of <code>[Square](#Square)</code>  
**Returns**: <code>[Rectangle](#Rectangle)</code> - Itself  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>Number</code> | - |

<a name="Rectangle+width"></a>

### square.width() ⇒ <code>Number</code>
Get this rectangle's width

**Kind**: instance method of <code>[Square](#Square)</code>  
<a name="Rectangle+height"></a>

### square.height() ⇒ <code>Number</code>
Get this rectangle's height

**Kind**: instance method of <code>[Square](#Square)</code>  
<a name="Shape+animateWith"></a>

### square.animateWith(animation)
Animate this shape position with an animation

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

<a name="Triangle"></a>

## Triangle ⇐ <code>[Polygon](#Polygon)</code>
**Kind**: global class  
**Extends:** <code>[Polygon](#Polygon)</code>  

* [Triangle](#Triangle) ⇐ <code>[Polygon](#Polygon)</code>
    * [new Triangle(firstPoint, secondPoint, thirdPoint, options)](#new_Triangle_new)
    * [.trace(ctx)](#Polygon+trace)
    * [.animateWith(animation)](#Shape+animateWith)
    * [.width()](#Polygon+width) ⇒ <code>Number</code>
    * [.height()](#Polygon+height) ⇒ <code>Number</code>
    * [.render(ctx)](#Shape+render)
    * [.draw(ctx)](#Shape+draw)
    * [.background(background)](#Shape+background)
    * [.fill(ctx)](#Shape+fill)
    * [.stroke(ctx)](#Shape+stroke)

<a name="new_Triangle_new"></a>

### new Triangle(firstPoint, secondPoint, thirdPoint, options)
A three point shape


| Param | Type | Description |
| --- | --- | --- |
| firstPoint | <code>[Position](#Position)</code> &#124; <code>[Shape](#Shape)</code> | - |
| secondPoint | <code>[Position](#Position)</code> &#124; <code>[Shape](#Shape)</code> | - |
| thirdPoint | <code>[Position](#Position)</code> &#124; <code>[Shape](#Shape)</code> | - |
| options | <code>Object</code> | Specific options for this shape |

<a name="Polygon+trace"></a>

### triangle.trace(ctx)
Trace the polygon

**Kind**: instance method of <code>[Triangle](#Triangle)</code>  

| Param | Type | Description |
| --- | --- | --- |
| ctx | <code>CanvasRenderingContext2D</code> | A drawing context |

<a name="Shape+animateWith"></a>

### triangle.animateWith(animation)
Animate this shape position with an animation

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

<a name="Text"></a>

## Text ⇐ <code>[Shape](#Shape)</code>
**Kind**: global class  
**Extends:** <code>[Shape](#Shape)</code>  

* [Text](#Text) ⇐ <code>[Shape](#Shape)</code>
    * [new Text(text, position, options)](#new_Text_new)
    * [.trace(ctx)](#Text+trace)
    * [.fill(ctx)](#Text+fill)
    * [.stroke(ctx)](#Text+stroke)
    * [.render(ctx)](#Shape+render)
    * [.draw(ctx)](#Shape+draw)
    * [.background(background)](#Shape+background)
    * [.animateWith(animation)](#Shape+animateWith)

<a name="new_Text_new"></a>

### new Text(text, position, options)
Draw a text


| Param | Type | Description |
| --- | --- | --- |
| text | <code>String</code> | Content of the text |
| position | <code>[Position](#Position)</code> &#124; <code>[Shape](#Shape)</code> | Position of the text |
| options | <code>[TextOptions](#TextOptions)</code> | Specific options for this shape |

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
**Overrides:** <code>[fill](#Shape+fill)</code>  

| Param | Type | Description |
| --- | --- | --- |
| ctx | <code>CanvasRenderingContext2D</code> | A drawing context |

<a name="Text+stroke"></a>

### text.stroke(ctx)
Stroke the text outline

**Kind**: instance method of <code>[Text](#Text)</code>  
**Overrides:** <code>[stroke](#Shape+stroke)</code>  

| Param | Type | Description |
| --- | --- | --- |
| ctx | <code>CanvasRenderingContext2D</code> | A drawing context |

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
**Extends:** <code>[ShapeOptions](#ShapeOptions)</code>  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| font | <code>String</code> | <code>&quot;sans-serif&quot;}</code> | The font's name |
| [fontSize] | <code>String</code> | <code>10</code> | The font's size |
| [align] | <code>String</code> | <code>&quot;left&quot;</code> | The text's vertical alignment |
| [baseline] | <code>String</code> | <code>&quot;alphabetic&quot;</code> | The text's baseline position |

