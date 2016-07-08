//requires utilLayer.js

(function($){
	$.tile = function(classSelector){
		var tiles = $.selectAll(classSelector);
		for(var i = 0; i < tiles.length; i++){
			$.select('.favorite', tiles[i]).addEventListener('click', toggleFavorite);
			$.select('header',tiles[i]).addEventListener('mouseenter', contentHover);
			$.select('header',tiles[i]).addEventListener('mouseleave', contentExit);
		}

		function toggleFavorite(e){
			e.target.favorited = e.target.favorited ? false : true;
			if(e.target.favorited){
				$.addClass(e.target.parentNode.parentNode, 'favorited');
				TweenMax.fromTo(e.target,0.2,	{scale:0.88},
										{scale:1});

				TweenMax.fromTo(e.target, 0.3, {
				    boxShadow: "0px 0px 0px 0px rgba(235,34,38,1)"
				}, {
				    boxShadow: "0px 0px 5px 10px rgba(235,34,38,0)",
				    repeat: 0,
				    ease: Linear.easeNone
				});
			}
			else
				$.removeClass(e.target.parentNode.parentNode, 'favorited');
		}

		function contentHover(e){
			TweenMax.to($.select('.favorite', e.target.parentNode), 0.4, {autoAlpha: 1});
		}

		function contentExit(e){
			if(!$.hasClass(e.target.parentNode, 'favorited'))
				TweenMax.to($.select('.favorite', e.target.parentNode), 0.4, {autoAlpha: 0});
		}
	};
})(window.util);