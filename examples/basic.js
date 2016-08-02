var SR = require( '../' );

var renderer = new SR( ( _out , _params ) => {
  _out( 'Count:' , _params.c , '\n' );
  _out( 'Time:' , _params.t );
} );

var c = 0;

renderer.update( { c: c++ , t: new Date().toString() } );

setInterval(() => {
  renderer.update( { c: c++ , t: new Date().toString() } , false );
} , 100 );

setInterval( () => {
  renderer.update();
} , 1000 );
