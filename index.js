
const ESC = '\u001b[';
const cursor_left = ESC + '1000D';
const cursor_up = ESC + '1A';
const cursor_erase_line = ESC + 'K';


function ScreenRenderer( _renderer ) {
  var renderer = _renderer;
  var line_count = 0;
  var params = {};

  var render = function() {
    function rewind( ) {
      var clear = cursor_left + cursor_erase_line;

      for (var i = 0; i < line_count; i++) {
        clear += cursor_up + cursor_erase_line;
      }

      process.stdout.write( clear );
      line_count = 0;
    }

    function out( ) {
      var body = [].join.call( arguments , ' ' );
      process.stdout.write( body );
      line_count += body.split( '\n' ).length - 1;
    }

    rewind();
    renderer( out , params );
  }

  ScreenRenderer.prototype.update = function( _params , _render ) {
    if ( _params ) {
      for( var k in _params ) {
        params[ k ] = _params[ k ];
      }
    }

    if( _render === undefined || _render ) ) {
      render();
    }
  }

  ScreenRenderer.prototype.reset = function( ) {
    params = {};
    line_count = 0;
  }

  return this;
}

module.exports = ScreenRenderer;
