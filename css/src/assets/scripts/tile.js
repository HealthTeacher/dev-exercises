
function tileInit(){
    var tiles = document.getElementsByClassName('tile__heart');
    function tileClick(){
        var tile = this;
        if( !tile.classList.contains('tile__heart--active') ) {
            tile.classList.add('tile__heart--animate', 'tile__heart--active');
            window.setTimeout( function(  ){
                tile.classList.remove('tile__heart--animate');
            }, 500);
        } else {
            tile.classList.remove('tile__heart--active');
        }
    }
    for (var i = 0; i < tiles.length; i++) {
        tiles[i].addEventListener('click', tileClick, false);
    }
}

tileInit();
