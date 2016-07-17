(function($){
	
	$.tile = function(classSelector){

		var	fallback = new animatedFallback(),
			tiles = $.selectAll(classSelector);

		for(var i = 0; i < tiles.length; i++){
			var header = $.select('.js-tile-header',tiles[i]),
				fave = $.select('.js-tile-favorite', tiles[i]),
				footer = $.select('.js-tile-footer', tiles[i]);
			
			fave.addEventListener('click', toggleFavorite);
			header.addEventListener('mouseenter', contentHover);
			header.addEventListener('mouseleave', contentExit);
			//add footer link hover listeners for ie9
			if(fallback.legacy){
				enableLegacyEvents(header, footer);
			}
		}

		function toggleFavorite(e){
			e.target.favorited = e.target.favorited ? false : true;
			if(e.target.favorited){
				$.addClass(e.target.parentNode.parentNode, 'tile--favorited');
				if(fallback.legacy)	fallback.animations.favorite(e.target);
			} else {
				$.removeClass(e.target.parentNode.parentNode, 'tile--favorited');
			}
		}

		function contentHover(e){
			$.addClass(e.target.parentNode, 'tile--hovered');
			if(fallback.legacy)	fallback.animations.fadeIn(e.target);
		}

		function contentExit(e){
			if(!$.hasClass(e.target.parentNode, 'tile--favorited')){
				$.removeClass(e.target.parentNode, 'tile--hovered');
				if(fallback.legacy)	fallback.animations.fadeOut(e.target);
			}
		}

		function enableLegacyEvents(header, footer){
			setTimeout(function(){
				if(typeof TweenMax !== 'undefined'){
					footer.addEventListener('mouseenter', fallback.animations.slideIn);
					footer.addEventListener('mouseleave', fallback.animations.slideOut);

					//run the animation on load to prevent fade pops
					fallback.animations.fadeIn(header);
					fallback.animations.fadeOut(header);
				} else enableLegacyEvents(header, footer);
			}, 500);
		}
	};

	var animatedFallback = function(){
		this.legacy = $.hasClass($.select('html'), 'ie9');
		this.init();
	};

	animatedFallback.prototype.init = function(){
		if(this.legacy){
			var fallback = this;
				gsap = document.createElement('script');
			gsap.type = 'text/javascript';
			gsap.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/1.18.5/TweenMax.min.js';
			$.addChild($.select('body'), gsap);
			
			setTimeout(function(){
				if(typeof TweenMax === 'undefined') {
				 	gsap.src = 'assets/js/vendor/TweenMax.min.js';
					$.addChild($.select('body'), gsap);        		
	    		}
				fallback.animations = fallback.getAnimations();
			}, 500);
		}
	};

	animatedFallback.prototype.getAnimations = function(){
		return{
			'fadeIn': function(target){
				TweenMax.to($.select('.js-tile-favorite', target.parentNode), 0.4, {autoAlpha: 1});
			},
			'fadeOut': function(target){
				TweenMax.to($.select('.js-tile-favorite', target.parentNode), 0.4, {autoAlpha: 0});
			},
			'slideIn': function(e){
				TweenMax.to($.select('.js-category', e.target), 0.6, {left: 95});
			},
			'slideOut': function(e){
				TweenMax.to($.select('.js-category', e.target), 0.3, {left: 0});
			},
			'favorite': function(target){
				TweenMax.fromTo(target,0.2, {scale:0.88}, {scale:1});
 				
 				TweenMax.fromTo(target, 0.3, {
 				    boxShadow: "0px 0px 0px 0px rgba(235,34,38,1)"
 				}, {
 			    	boxShadow: "0px 0px 5px 10px rgba(235,34,38,0)",
 				    repeat: 0,
 				    ease: Linear.easeNone
 				});
			}
		};
	};

})(window.util);