
/**
 * Object createTransition
 *
 * Object pour créer les transitions Titre et Texte du composant Slider-pro
 *
 * @return {object} Un objet au format JSON
 * @since 0.0.9
 */
var createTransition = function() {
	var self = this,
	position = {	// Les positions Titre/Texte en %
		Xhc:50, // X en haut/centre
		Yhc:20, // Y en haut/centre
		Xct:50, // X centre
		Yct:50, // Y centre
		Xbc:50, // X en bas/centre
		Ybc:80	// Y en bas/centre
	};

	// Repositionne le Titre à ses coordonnées en haut à gauche
	self.resetTransitionTitle = function($targetId, indice) {
		var transit = { x: 0, y: 0, opacity: 0 };
		return transit;
	};

	// Lance la transition du Titre en X et Y depuis le coin haut/gauche
	self.getTransitionTitle = function($targetId, indice, pos) {
		var $containerTitle = $targetId.find('.spro-slide-' + indice + ' .spro-slide-title');
		var $containerImg = $targetId.find('.spro-slide-' + indice);
		var currentImgWidth = $containerImg[0].offsetWidth;
		var currentImgHeight = $containerImg[0].offsetHeight;
		var currentTitleWidth = $containerTitle[0].offsetWidth;
		var currentTitleHeight = $containerTitle[0].offsetHeight;
		// Calcul des offset X et Y de placement
		var offsetTitleX = ((currentImgWidth * position['X'+pos]) / 100) - (currentTitleWidth / 2);
		var offsetTitleY = ((currentImgHeight * position['Y'+pos]) / 100) - (currentTitleHeight / 2);
		
		var transit = { x: offsetTitleX, y: offsetTitleY, opacity: 1, delay: 400 };
		return transit;
	};
	
	// Repositionne le Texte à gauche et à l'offset Y de la sélection 'position'
	self.resetTransitionDesc = function($targetId, indice, pos) {
		var $containerDesc = $targetId.find('.spro-slide-' + indice + ' .spro-slide-desc');
		var $containerTitle = $targetId.find('.spro-slide-' + indice + ' .spro-slide-title');
		var $containerImg = $targetId.find('.spro-slide-' + indice);
		var currentImgWidth = $containerImg[0].offsetWidth;
		var currentImgHeight = $containerImg[0].offsetHeight;
		// Le titre est affiché ou non - +30px de décalage
		var currentTitleHeight = $containerTitle.length ? $containerTitle[0].offsetHeight + 30 : 0;
		var currentDescWidth = $containerDesc[0].offsetWidth;
		var currentDescHeight = $containerDesc[0].offsetHeight;
		var offsetDescY = (((currentImgHeight * position['Y'+pos]) / 100) - currentDescHeight) + currentTitleHeight;
		
		var transit = { x: 0, y: offsetDescY, opacity: 0 };
		return transit;
	};
	
	// Lance la transition du Texte. Se déplace latéralement depuis la gauche
	self.getTransitionDesc = function($targetId, indice, pos) {
		var $containerDesc = $targetId.find('.spro-slide-' + indice + ' .spro-slide-desc');
		var $containerTitle = $targetId.find('.spro-slide-' + indice + ' .spro-slide-title');
		var $containerImg = $targetId.find('.spro-slide-' + indice);
		var currentImgWidth = $containerImg[0].offsetWidth;
		var currentImgHeight = $containerImg[0].offsetHeight;
		// Le titre est affiché ou non - +30px de décalage
		var currentTitleHeight = $containerTitle.length ? $containerTitle[0].offsetHeight + 30 : 0;
		var currentDescWidth = $containerDesc[0].offsetWidth;
		var currentDescHeight = $containerDesc[0].offsetHeight;
		var offsetDescX = ((currentImgWidth * position['X'+pos]) / 100) - (currentDescWidth / 2);
		
		var transit = { x: offsetDescX, opacity: 1, delay: 700 };
		return transit;
	};
};

/**
 * Description: Cette méthode est déclenchée lorsque la section 'eac-addon-slider-pro' est chargée dans la page
 *
 * @param {selector} $scope. Le contenu de la section
 * @since 0.0.9
 * @since 1.8.7	Implémente les custom breakpoints
 */
;(function($, elementor) {

	'use strict';

	var EacAddonsSliderPro = {

		init: function() {
			/**
			 * @since 1.8.7	Implémente les custom breakpoints
			 */
			var activeBreakpoints = elementor.config.responsive.activeBreakpoints;
			var windowWidthMob = 0,	windowWidthMobExtra = 0, windowWidthTab = 0, windowWidthTabExtra = 0, windowWidthLaptop = 0, windowWidthWidescreen = 0;
			
			// Il y a des activeBreakpoints
			if(Object.keys(activeBreakpoints).length > 0) {
				$.each(elementor.config.responsive.activeBreakpoints, function(device) {
					if(device === 'mobile') { windowWidthMob = activeBreakpoints.mobile.default_value; } // value
					else if(device === 'mobile_extra') { windowWidthMobExtra = activeBreakpoints.mobile_extra.default_value; }
					else if(device === 'tablet') { windowWidthTab = activeBreakpoints.tablet.default_value; }
					else if(device === 'tablet_extra') { windowWidthTabExtra = activeBreakpoints.tablet_extra.default_value; }
					else if(device === 'laptop') { windowWidthLaptop = activeBreakpoints.laptop.default_value; }
					else if(device === 'widescreen') { windowWidthWidescreen = activeBreakpoints.widescreen.default_value; }
				});
			}
			
			elementor.hooks.addAction('frontend/element_ready/eac-addon-slider-pro.default', EacAddonsSliderPro.widgetSliderPro);
		},
		
		widgetSliderPro: function widgetSliderPro($scope) {
			var $target = $scope.find('.slider-pro'),
				$imagesInstance = $target.find('img'),
				settingsAnime = $target.data('settingsanime') || {},
				instance = null,
				instanceTransition = {},
				$targetId,
				slideIndex = 0,
				defaultTexteAnimation,	// Animation Titre/Texte par défaut
				defaultSettings = {
					width: 600,
					height: 450,
					arrows: false,
					fadeArrows: true,
					buttons: true,
					waitForLayers: true,
					fade: false,
					autoplay: false,
					visibleSize: 'auto',
					forceSize: 'none',
					orientation: 'horizontal',
					thumbnailsPosition: 'bottom',
					thumbnailWidth: 120,
					thumbnailHeight: 80,
					thumbnailPointer: false,
					autoplayDelay: 5000,
					autoSlideSize: true,
					rightToLeft: false,
					//imageScaleMode: 'contain',
					slideDistance: 5,  // Défaut 10
					breakpoints: {
						1024: {
								//forceSize: 'none',
								//visibleSize: 'auto',
								thumbnailsPosition: 'bottom',
								thumbnailWidth: 120,
								thumbnailHeight: 80
						},
						767: {
								//forceSize: 'none',
								//visibleSize: 'auto',
								orientation: 'horizontal',
								thumbnailsPosition: 'bottom',
								thumbnailWidth: 80,
								thumbnailHeight: 50,
								thumbnailPointer: false
						}
					},
					init: function() {
						// Instance objet animation titre/texte
						instanceTransition = new createTransition();
						
						// On positionne l'animation Titre/Texte
						if($(window).width() <= EacAddonsSliderPro.windowWidthMob) { defaultTexteAnimation = settingsAnime.data_anmpos_mob; }
						else if($(window).width() <= EacAddonsSliderPro.windowWidthTab) { defaultTexteAnimation = settingsAnime.data_anmpos_tab; }
						else { defaultTexteAnimation = settingsAnime.data_anmpos; }
						
						// On charge les deux container Titre/Texte
						var $containerTitle = $targetId.find('.spro-slide-' + slideIndex + ' .spro-slide-title');
						var $containerDesc = $targetId.find('.spro-slide-' + slideIndex + ' .spro-slide-desc');
						
						// Ils existent, on lance le reset de la position et on lance l'animation pour le Titre/Texte
						if($containerTitle.length) {
							$containerTitle.transition(instanceTransition.resetTransitionTitle($targetId, slideIndex))
							.transition(instanceTransition.getTransitionTitle($targetId, slideIndex, defaultTexteAnimation), 700, 'cubic-bezier(0.175, 0.885, 0.32, 1.275)');
						}
						
						if($containerDesc.length) {
							$containerDesc.transition(instanceTransition.resetTransitionDesc($targetId, slideIndex, defaultTexteAnimation))
							.transition(instanceTransition.getTransitionDesc($targetId, slideIndex, defaultTexteAnimation), 1500, 'easeOutBack');
						}
					}
				},
				instanceSettings = $target.data('settings') || {},
				settings = $.extend(defaultSettings, instanceSettings);
			
			// L'ID cible
			$targetId = $('#' + settingsAnime.data_id);
			if($targetId.length === 0) {
				return; // Aucun item à charger
			}
			
			// Aucune image à charger
			if($imagesInstance.length === 0) {
				return;
			}
			
			// Force l'affichage des images pour contourner le lazyload
			$imagesInstance.each(function() {
				$(this).attr('src', $(this).data('src'));
				if($(this).complete) {
					$(this).load();
				}
			});
			
			// Chargement des images
			$target.imagesLoaded().progress(function(instance, image) {
				if(image.isLoaded) {
					if($(image.img).hasClass('sp-image')) {
						$(image.img).addClass('spro-image-loaded');
					}
				}
			}).done(function(instance) {
				$target.addClass('spro-slider-loaded');
				// Instance de sliderPro
				$targetId.sliderPro(settings);
			});
			
			// Intercepte l'événement début d'affichage du slide
			$targetId.on('gotoSlide', function(event) {
				slideIndex = event.index;					// L'index du slide courant
				var slideIndexPrec = event.previousIndex;	// L'index du slide précédent
				
				// Afficher le titre
				if(settingsAnime.data_titre) {
					var $containerTitle = $targetId.find('.spro-slide-' + slideIndex + ' .spro-slide-title');
					
					// Renvoie le titre du slide courant à ses coordonnées d'attente
					$containerTitle.transition(instanceTransition.resetTransitionTitle($targetId, slideIndex));
					
					// Renvoie le titre du slide précédent à ses coordonnées d'attente
					var $containerTitlePrec = $targetId.find('.spro-slide-' + slideIndexPrec + ' .spro-slide-title');
					$containerTitlePrec.transition(instanceTransition.resetTransitionTitle($targetId, slideIndexPrec));
				}
				// Afficher la description
				if(settingsAnime.data_desc) {
					var $containerDesc = $targetId.find('.spro-slide-' + slideIndex + ' .spro-slide-desc');
					
					// Renvoie le texte du slide courant à ses coordonnées d'attente
					$containerDesc.transition(instanceTransition.resetTransitionDesc($targetId, slideIndex, defaultTexteAnimation));
					
					// Renvoie le texte du slide précédent à ses coordonnées d'attente
					var $containerDescPrec = $targetId.find('.spro-slide-' + slideIndexPrec + ' .spro-slide-desc');
					$containerDescPrec.transition(instanceTransition.resetTransitionDesc($targetId, slideIndexPrec, defaultTexteAnimation));
				}
			});
			
			// Intercepte l'événement fin d'affichage du slide
			$targetId.on('gotoSlideComplete', function(event) {
				// Affiche le titre
				if(settingsAnime.data_titre) {
					var $containerTitle = $targetId.find('.spro-slide-' + slideIndex + ' .spro-slide-title');
					$containerTitle.transition(instanceTransition.getTransitionTitle($targetId, slideIndex, defaultTexteAnimation), 700, 'cubic-bezier(0.175, 0.885, 0.32, 1.275)');
				}
				
				// Affiche la description
				if(settingsAnime.data_desc) {
					var $containerDesc = $targetId.find('.spro-slide-' + slideIndex + ' .spro-slide-desc');
					$containerDesc.transition(instanceTransition.getTransitionDesc($targetId, slideIndex, defaultTexteAnimation), 1500, 'easeOutBack');
				}
			});
			
			// Intercepte l'événement resize du slider
			$targetId.on('sliderResize', function(event) {
				// On change la position de l'animation Titre/Texte
				if($(window).width() <= EacAddonsSliderPro.windowWidthMob) { defaultTexteAnimation = settingsAnime.data_anmpos_mob; }
				else if($(window).width() <= EacAddonsSliderPro.windowWidthTab) { defaultTexteAnimation = settingsAnime.data_anmpos_tab; }
				else { defaultTexteAnimation = settingsAnime.data_anmpos; }
			});
			
			// Intercepte les points de rupture et force les largeurs/hauteurs des images
			$targetId.on('breakpointReach', function(event) {
				if(event.size === EacAddonsSliderPro.windowWidthTab) { // Tablette
					event.settings.width = settingsAnime.data_width_tab;
					event.settings.height = settingsAnime.data_height_tab;
				} else if(event.size === EacAddonsSliderPro.windowWidthMob) { // Mobile
					event.settings.width = settingsAnime.data_width_mob;
					event.settings.height = settingsAnime.data_height_mob;
				}
				//console.log('Break-point reach::' + event.size + '::' + event.settings.width + '::' + event.settings.height);
			});
		},
	};
	
	
	/**
	* Description: Cette méthode est déclenchée lorsque le frontend Elementor est initialisé
	*
	* @return (object) Initialise l'objet EacAddonsSliderPro
	* @since 0.0.9
	*/
	$(window).on('elementor/frontend/init', EacAddonsSliderPro.init);
	
}(jQuery, window.elementorFrontend));