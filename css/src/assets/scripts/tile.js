//requires utilLayer.js

(function($){
	$.tile = function(classSelector){
		var tiles = $.selectAll(classSelector);
		for(var i = 0; i < tiles.length; i++){
			$.select('.tile-button--favorite', tiles[i]).addEventListener('click', toggleFavorite);
			$.select('.tile-header',tiles[i]).addEventListener('mouseenter', contentHover);
			$.select('.tile-header',tiles[i]).addEventListener('mouseleave', contentExit);
		}

		function toggleFavorite(e){
			e.target.favorited = e.target.favorited ? false : true;
			if(e.target.favorited){
				$.addClass(e.target.parentNode.parentNode, 'tile--favorited');
			} else {
				$.removeClass(e.target.parentNode.parentNode, 'tile--favorited');
			}
		}

		function contentHover(e){
			$.addClass(e.target.parentNode, 'tile--hovered');
		}

		function contentExit(e){
			if(!$.hasClass(e.target.parentNode, 'tile--favorited'))
				$.removeClass(e.target.parentNode, 'tile--hovered');
		}
	};
})(window.util);