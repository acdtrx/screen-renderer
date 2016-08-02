# Introduction
This library was created to ease updating the screen for CLI tools that need to
show progress of their actions.

The concept is that only part of the information changes so the library stores
the state of the whole date and calls a user defined function to render the
screen when something changes.

# Usage

See `examples`

```
var ScreenRenderer = require( 'screen-renderer' );

var sr = new ScreenRenderer( <render function> );
```

The render function receives an 'out' function to use for output strings and
a params object that contains all the parameters received via the update
function incrementally.

```
function render( _out , _params ) {
  _out( 'Current Value:' , _params.param1 );
}
```

The update method allows you to update some or all the parameters used by
the render function for rendering the screen. By default it triggers a screen
update, but you can suppress that by sending a second parameter to false in
case you want to make multiple updates before rendering

```
sr.update( params , should_render )
```
* params - object of parameters used by the render function.
* should_render - bool, default true. should the update trigger a render of the
  screen
