//   PRISM JS pour afficher code HTML
	(function () {

	if (typeof self === 'undefined' || !self.Prism || !self.document || !Prism.languages.markup) {
		return;
	}

	Prism.plugins.UnescapedMarkup = true;

	Prism.hooks.add('before-highlightall', function (env) {
		env.selector += ", .lang-markup script[type='text/plain'], .language-markup script[type='text/plain']" +
		                ", script[type='text/plain'].lang-markup, script[type='text/plain'].language-markup";
	});

	Prism.hooks.add('before-sanity-check', function (env) {
		if (env.language != "markup") {
			return;
		}

		if (env.element.matches("script[type='text/plain']")) {
			var code = document.createElement("code");
			var pre = document.createElement("pre");

			pre.className = code.className = env.element.className;

			env.code = env.code.replace(/&lt;\/script(>|&gt;)/gi, "</scri" + "pt>");
			code.textContent = env.code;

			pre.appendChild(code);
			env.element.parentNode.replaceChild(pre, env.element);
			env.element = code;
			return;
		}

		var pre = env.element.parentNode;
		if (!env.code && pre && pre.nodeName.toLowerCase() == 'pre' &&
				env.element.childNodes.length && env.element.childNodes[0].nodeName == "#comment") {
			env.element.textContent = env.code = env.element.childNodes[0].textContent;
		}
	});
}());

$(document).ready(function() {

			//intro, scroll et mousewheel

			$('.js-scrollTo').on('click', function() {
				var page = $(this).attr('href');
				var speed = 750;
					$('html, body').animate( { scrollTop: $('#intro').offset().top }, 750 );
					$('#audioHistory1, #attribut, #videoHistory1, #formats_Illust, #frameworks, #fluxJS_Illust, #api, #conclusion').css({"transform":"translateX(-110%)"});
					$('#audioHistory2, #attribut_Illust, #videoHistory2, #formats, #frameworks_Illust, #fluxJS, #api_Illust').css({"transform":"translateX(110%)"});
					return false;
			});

			$('#intro').on('mousewheel', function(){
				if (event.deltaY < 0) {
					console.log("up");
				}
				else {
						$('html, body').animate( { scrollTop: $("#videoHistory1").offset().top }, 750);
						$('#videoHistory1').css({"transform":"translateX(0)"});
						$('#videoHistory2').css({"transform":"translateX(-0)"});
						return false;
				}
			});
	// 1er bloc  scrolls
				$('.js-scrollTo2').on('click', function() {
					var page = $(this).attr('href');
					var speed = 750;
					$('html, body').animate( { scrollTop: $(page).offset().top }, speed );
					$('#audioHistory1, #attribut, #formats_Illust, #frameworks, #fluxJS_Illust, #api, #conclusion').css({"transform":"translateX(-110%)"});
					$('#audioHistory2, #attribut_Illust, #formats, #frameworks_Illust, #fluxJS, #api_Illust').css({"transform":"translateX(110%)"});
					$('#videoHistory1').css({"transform":"translateX(0)"});
					$('#videoHistory2').css({"transform":"translateX(-0)"});
					return false;
			});

			// 1er bloc mousewheel
     });
		 $('#videoHistory2, #videoHistory1').on('mousewheel', function(){
 			if (event.deltaY < 0) {
 				$('html, body').animate( { scrollTop: $("#intro").offset().top }, 750);
 				$('#videoHistory1').css({"transform":"translateX(-110%)"});
 				$('#videoHistory2').css({"transform":"translateX(110%)"});
 				return false;
 			}
 			else {
 					$('html, body').animate( { scrollTop: $("#audioHistory1").offset().top }, 750);
 					$('#videoHistory1').css({"transform":"translateX(-110%)"});
 					$('#videoHistory2').css({"transform":"translateX(110%)"});
 					$('#audioHistory1').css({"transform":"translateX(0)"});
 					$('#audioHistory2').css({"transform":"translateX(-0)"});
 					return false;
 			}
 		});
		 //2ème bloc  scrolls
		 $('.js-scrollTo3').on('click', function() {
			 var page = $(this).attr('href');
			 var speed = 750;
			 $('html, body').animate( { scrollTop: $(page).offset().top }, speed );
					$('#attribut, #videoHistory1, #formats_Illust, #frameworks, #fluxJS_Illust, #api, #conclusion').css({"transform":"translateX(-110%)"});
					$('#attribut_Illust, #videoHistory2, #formats, #frameworks_Illust, #fluxJS, #api_Illust').css({"transform":"translateX(110%)"});
					$('#audioHistory1').css({"transform":"translateX(0)"});
					$('#audioHistory2').css({"transform":"translateX(0)"});
					return false;
				});

			//2éme bloc mousecheel
			$('#audioHistory1, #audioHistory2').on('mousewheel', function(){
			 if (event.deltaY < 0) {
				 $('html, body').animate( { scrollTop: $("#videoHistory1").offset().top }, 750);
				 $('#audioHistory1').css({"transform":"translateX(-110%)"});
				 $('#audioHistory2').css({"transform":"translateX(110%)"});
				 $('#videoHistory1').css({"transform":"translateX(0)"});
				 $('#videoHistory2').css({"transform":"translateX(0)"});
				 return false;
			 }
			 else {
					 $('html, body').animate( { scrollTop: $("#attribut").offset().top }, 750);
					 $('#audioHistory1').css({"transform":"translateX(-110%)"});
					 $('#audioHistory2').css({"transform":"translateX(110%)"});
					 $('#attribut').css({"transform":"translateX(0)"});
					 $('#attribut_Illust').css({"transform":"translateX(-0)"});
					 return false;
			 }
		 });

		 	// 3 ème bloc, scroll
				$('.js-scrollTo4').on('click', function() {
					var page = $(this).attr('href');
					var speed = 750;
					$('html, body').animate( { scrollTop: $(page).offset().top }, speed );
					$('#audioHistory1, #videoHistory1, #formats_Illust, #frameworks, #fluxJS_Illust, #api, #conclusion').css({"transform":"translateX(-110%)"});
					$('#audioHistory2, #videoHistory2, #formats,#frameworks_Illust, #fluxJS, #api_Illust').css({"transform":"translateX(110%)"});
					$('#attribut').css({"transform":"translateX(0)"});
					$('#attribut_Illust').css({"transform":"translateX(-0)"});

					return false;
				});

			// 3 éme block, mousewheel

			$('#attribut, #attribut_Illust').on('mousewheel', function(){
			 if (event.deltaY < 0) {
				 $('html, body').animate( { scrollTop: $("#audioHistory1").offset().top }, 750);
				 $('#attribut').css({"transform":"translateX(-110%)"});
				 $('#attribut_Illust').css({"transform":"translateX(110%)"});
				 $('#audioHistory1').css({"transform":"translateX(0)"});
				 $('#audioHistory2').css({"transform":"translateX(0)"});
				 return false;
			 }
			 else {
					 $('html, body').animate( { scrollTop: $("#formats_Illust").offset().top }, 750);
					 $('#attribut').css({"transform":"translateX(-110%)"});
					 $('#attribut_Illust').css({"transform":"translateX(110%)"});
					 $('#formats').css({"transform":"translateX(0)"});
					 $('#formats_Illust').css({"transform":"translateX(-0)"});
					 return false;
			 }
		 });
		 	// 4 ème block, scrolls
				$('.js-scrollTo5').on('click', function() {
					var page = $(this).attr('href');
					var speed = 750;
					$('html, body').animate( { scrollTop: $(page).offset().top }, speed );
					$('#audioHistory1, #attribut, #videoHistory1, #frameworks, #fluxJS_Illust, #api, #conclusion').css({"transform":"translateX(-110%)"});
					$('#audioHistory2, #attribut_Illust, #videoHistory2, #frameworks_Illust, #fluxJS, #api_Illust').css({"transform":"translateX(110%)"});
					$('#formats').css({"transform":"translateX(0)"});
					$('#formats_Illust').css({"transform":"translateX(0)"});

					return false;
				});
			// 4éme block , mousewheel
			$('#formats, #formats_Illust').on('mousewheel', function(){
			 if (event.deltaY < 0) {
				 $('html, body').animate( { scrollTop: $("#attribut").offset().top }, 750);
				 $('#formats').css({"transform":"translateX(110%)"});
				 $('#formats_Illust').css({"transform":"translateX(-110%)"});
				 $('#attribut').css({"transform":"translateX(0)"});
				 $('#attribut_Illust').css({"transform":"translateX(0)"});
				 return false;
			 }
			 else {
					 $('html, body').animate( { scrollTop: $("#frameworks").offset().top }, 750);
					 $('#formats_Illust').css({"transform":"translateX(-110%)"});
					 $('#formats').css({"transform":"translateX(110%)"});
					 $('#frameworks').css({"transform":"translateX(0)"});
					 $('#frameworks_Illust').css({"transform":"translateX(-0)"});
					 return false;
			 }
		 });
		 	// 5éme block, scrolls
				$('.js-scrollTo6').on('click', function() {
					var page = $(this).attr('href');
					var speed = 750;
					$('html, body').animate( { scrollTop: $(page).offset().top }, speed );
					$('#audioHistory1, #attribut, #videoHistory1, #formats_Illust, #fluxJS_Illust, #api, #conclusion').css({"transform":"translateX(-110%)"});
					$('#audioHistory2, #attribut_Illust, #videoHistory2, #formats, #fluxJS ,#api_Illust').css({"transform":"translateX(110%)"});
					$('#frameworks').css({"transform":"translateX(0)"});
					$('#frameworks_Illust').css({"transform":"translateX(0)"});

					return false;
				});

				// 5ème bloc, mousewheel

				$('#frameworks, #frameworks_Illust').on('mousewheel', function(){
				 if (event.deltaY < 0) {
					 $('html, body').animate( { scrollTop: $("#formats").offset().top }, 750);
					 $('#frameworks_Illust').css({"transform":"translateX(110%)"});
					 $('#frameworks').css({"transform":"translateX(-110%)"});
					 $('#formats').css({"transform":"translateX(0)"});
					 $('#formats_Illust').css({"transform":"translateX(0)"});
					 return false;
				 }
				 else {
						 $('html, body').animate( { scrollTop: $("#fluxJS_Illust").offset().top }, 750);
						 $('#frameworks').css({"transform":"translateX(-110%)"});
						 $('#frameworks_Illust').css({"transform":"translateX(110%)"});
						 $('#fluxJS_Illust').css({"transform":"translateX(0)"});
						 $('#fluxJS').css({"transform":"translateX(-0)"});
						 return false;
				 }
			 });

			 // 6ème block scrolls
				$('.js-scrollTo7').on('click', function() {
					var page = $(this).attr('href');
					var speed = 750;
					$('html, body').animate( { scrollTop: $(page).offset().top }, speed );
					$('#audioHistory1, #attribut, #videoHistory1, #formats_Illust, #frameworks, #api, #conclusion').css({"transform":"translateX(-110%)"});
					$('#audioHistory2, #attribut_Illust, #videoHistory2, #formats, #frameworks_Illust, #api_Illust').css({"transform":"translateX(110%)"});
					$('#fluxJS_Illust').css({"transform":"translateX(0)"});
					$('#fluxJS').css({"transform":"translateX(-0)"});

					return false;
				});
			// 6ème bloc, mousewheel

							$('#fluxJS_Illust, #fluxJS').on('mousewheel', function(){
							 if (event.deltaY < 0) {
								 $('html, body').animate( { scrollTop: $("#frameworks").offset().top }, 750);
								 $('#fluxJS').css({"transform":"translateX(110%)"});
								 $('#fluxJS_Illust').css({"transform":"translateX(-110%)"});
								 $('#frameworks').css({"transform":"translateX(0)"});
								 $('#frameworks_Illust').css({"transform":"translateX(0)"});
								 return false;
							 }
							 else {
									 $('html, body').animate( { scrollTop: $("#api").offset().top }, 750);
									 $('#fluxJS_Illust').css({"transform":"translateX(-110%)"});
									 $('#fluxJS').css({"transform":"translateX(110%)"});
									 $('#api').css({"transform":"translateX(0)"});
									 $('#api_Illust').css({"transform":"translateX(-0)"});
									 return false;
							 }
						 });
				// 7ème bloc api, scrolls

				$('.js-scrollTo8').on('click', function() {
					var page = $(this).attr('href');
					var speed = 750;
					$('html, body').animate( { scrollTop: $(page).offset().top }, speed );
					$('#audioHistory1, #attribut, #videoHistory1, #formats_Illust, #frameworks, #fluxJS_Illust, #conclusion').css({"transform":"translateX(-110%)"});
					$('#audioHistory2, #attribut_Illust, #videoHistory2, #formats, #frameworks_Illust, #fluxJS').css({"transform":"translateX(110%)"});
					$('#api').css({"transform":"translateX(0)"});
					$('#api_Illust').css({"transform":"translateX(-0)"});
					return false;
				});
				// 7ème bloc api, mousewheel
				$('#api, #api_Illust').on('mousewheel', function(){
				 if (event.deltaY < 0) {
					 $('html, body').animate( { scrollTop: $("#fluxJS").offset().top }, 750);
					 $('#api_Illust').css({"transform":"translateX(110%)"});
					 $('#api').css({"transform":"translateX(-110%)"});
					 $('#fluxJS_Illust').css({"transform":"translateX(0)"});
					 $('#fluxJS').css({"transform":"translateX(0)"});
					 return false;
				 }
				 else {
						 $('html, body').animate( { scrollTop: $("#conclusion").offset().top }, 750);
						 $('#api').css({"transform":"translateX(-110%)"});
						 $('#api_Illust').css({"transform":"translateX(110%)"});
						 $('#conclusion').css({"transform":"translateX(0)"});

						 return false;
				 }
			 });

			 //conclusion scrolls
				$('.js-scrollTo9').on('click', function() {
					var page = $(this).attr('href');
					var speed = 750;
					$('html, body').animate( { scrollTop: $(page).offset().top }, speed );
					$('#audioHistory1, #attribut, #videoHistory1, #formats_Illust, #frameworks, #fluxJS_Illust, #api').css({"transform":"translateX(-110%)"});
					$('#audioHistory2, #attribut_Illust, #videoHistory2, #formats, #frameworks_Illust, #fluxJS, #api_Illust').css({"transform":"translateX(110%)"});
					$('#conclusion').css({"transform":"translateX(0)"});

					return false;
				});
			//conclusion mousewheel

			$('#conclusion').on('mousewheel', function(){
			 if (event.deltaY < 0) {
				 $('html, body').animate( { scrollTop: $("#api").offset().top }, 750);
				 $('#api_Illust').css({"transform":"translateX(0)"});
				 $('#api').css({"transform":"translateX(-0)"});
				 $('#conclusion').css({"transform":"translateX(-110%)"});

				 return false;
			 }
			 else {


			 }
		 });
