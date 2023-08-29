
/**
 * Description: Cette méthode est déclenchée lorsque les sections 'eac-addon-articles-liste' ou 'eac-addon-product-grid' sont chargées dans la page
 *
 * @param {selector} $scope. Le contenu de la section
 * @since 1.0.0
 * @since 2.1.1 L'affichage du filtre est décalé
 */
; (function ($, elementor) {

	'use strict';

	var EacAddonsArticlesListe = {

		init: function () {
			elementor.hooks.addAction('frontend/element_ready/eac-addon-articles-liste.default', EacAddonsArticlesListe.widgetArticlesListe);
			elementor.hooks.addAction('frontend/element_ready/eac-addon-product-grid.default', EacAddonsArticlesListe.widgetArticlesListe);
		},

		widgetArticlesListe: function widgetArticlesListe($scope) {
			var $targetInstance = $scope.find('.eac-articles-liste'),
				$targetWrapper = $targetInstance.find('.al-posts__wrapper'),
				$imagesInstance = $targetWrapper.find('img'),
				settings = $targetWrapper.data('settings') || {},
				$targetId = $('#' + settings.data_id),
				$paginationId = $('#' + settings.data_pagination_id),
				targetStatus = '#' + settings.data_pagination_id + ' .al-page-load-status',
				targetButton = '#' + settings.data_pagination_id + ' button',
				setIntervalGrid = null,
				isotopeOptions = {
					itemSelector: '.al-post__wrapper',
					percentPosition: true,
					masonry: {
						columnWidth: '.al-posts__wrapper-sizer',
					},
					fitRows: {
						equalheight: true,
					},
					layoutMode: settings.data_layout,
					sortBy: 'original-order',
					visibleStyle: { transform: 'scale(1)', opacity: 1 }, // Transition
				},
				has_swiper = settings.data_sw_swiper || false;

			if ($().isotope === undefined || $targetId.length === 0) {
				return;
			}

			/** @since 1.9.7 Activation et controle de la lib Swipper */
			if (has_swiper) {
				var swiper = null,
					$swiperNext = $targetInstance.find('.swiper-button-next') || {},
					$swiperPrev = $targetInstance.find('.swiper-button-prev') || {},
					swiperOptions = {
						touchEventsTarget: 'wrapper',
						watchOverflow: true,
						autoplay: {
							enabled: settings.data_sw_autoplay,
							delay: settings.data_sw_delay,
							disableOnInteraction: false,
							pauseOnMouseEnter: true,
							reverseDirection: settings.data_sw_rtl
						},
						direction: settings.data_sw_dir,
						loop: settings.data_sw_loop,
						speed: 1000,
						grabCursor: true,
						watchSlidesProgress: true,
						slidesPerView: settings.data_sw_imgs,
						centeredSlides: settings.data_sw_centered,
						loopedSlides: settings.data_sw_imgs === 'auto' ? 2 : null,
						effect: settings.data_sw_effect,
						freeMode: {
							enabled: settings.data_sw_free,
							momentumRatio: 1,
						},
						coverflowEffect: {
							rotate: 45,
							slideShadows: true,
						},
						creativeEffect: {
							prev: {
								//shadow: true,
								translate: [0, 0, 0],
							},
							next: {
								translate: ["100%", 0, 0],
							},
						},
						navigation: {
							prevEl: '.swiper-button-prev',
							nextEl: '.swiper-button-next',
						},
						pagination: {
							el: '.swiper-pagination-bullet',
							type: 'bullets',
							clickable: settings.data_sw_pagination_click,
						},
						scrollbar: {
							el: '.swiper-scrollbar',
						},
						breakpoints: {
							// when window width is >= 0px
							0: {
								slidesPerView: 1,
							},
							// when window width is >= 460px
							460: {
								slidesPerView: settings.data_sw_imgs === 'auto' ? 'auto' : parseInt(settings.data_sw_imgs, 10) > 2 ? settings.data_sw_imgs - 2 : settings.data_sw_imgs,
							},
							// when window width is >= 767px
							767: {
								slidesPerView: settings.data_sw_imgs === 'auto' ? 'auto' : parseInt(settings.data_sw_imgs, 10) > 1 ? settings.data_sw_imgs - 1 : settings.data_sw_imgs,
							},
							// when window width is >= 1024px
							1024: {
								slidesPerView: settings.data_sw_imgs === 'auto' ? 'auto' : parseInt(settings.data_sw_imgs, 10) > 1 ? settings.data_sw_imgs - 1 : settings.data_sw_imgs,
							},
							// when window width is >= 1200px
							1200: {
								slidesPerView: settings.data_sw_imgs,
							}
						},
					},
					fancyboxOptions = {
						smallBtn: true,
						wheel: false,
						arrows: false,
						infobar: false,
						keyboard: true,
						backFocus: false,
						protect: true,
						animationEffect: "zoom",
						animationDuration: 366,
						clickContent: false,
						clickSlide: false,
						touch: {
							vertical: false,
						},
						afterLoad: function () {
							if (swiper.params.autoplay.enabled === true) {
								swiper.autoplay.pause();
							}
						},
						afterClose: function () {
							if (swiper.params.autoplay.enabled === true) {
								swiper.autoplay.paused = false;
								swiper.autoplay.run();
							}
						}
					};

				/** Instance Swiper */
				swiper = new Swiper($targetInstance[0], swiperOptions);

				if (swiper.enabled) {
					var $swiperBullets = $targetInstance.find('.swiper-pagination-clickable span.swiper-pagination-bullet') || {};

					/**
					 * @since 1.9.7 La Fancybox est active
					 * Boucle sur toutes les images du slider
					 * Même les images dupliquées avec loop = true
					 * Gère l'événement 'click' pour chaque image
					 */
					if (settings.data_fancybox) {
						var $targetImagesFancybox = $targetInstance.find('.swiper-slide .al-post__image-loaded') || {};

						// La boucle
						$targetImagesFancybox.each(function (index) {
							$(this).css('cursor', 'pointer');
							$(this).on('click', function (evt) {
								evt.preventDefault();

								var options = { caption: $(this).attr('alt'), };
								$.extend(options, fancyboxOptions);

								$.fancybox.open({
									type: 'image',
									src: $(this).attr('src'),
									opts: options,
								});
							});
						});
					}

					/**
					 * Event 'touchend' sur les contrôles de navigation/pagination pour relancer l'autoplay
					 * Fonctionnement normal marche pas avec les mobiles.
					 * Comprends rien à toutes les options
					 */
					$swiperNext.on('touchend', function (evt) {
						evt.preventDefault();
						swiper.slideNext();
					});

					$swiperPrev.on('touchend', function (evt) {
						evt.preventDefault();
						swiper.slidePrev();
					});

					$swiperBullets.each(function (index, bullet) {
						$(this).on('touchend', { slidenum: index }, function (evt) {
							evt.preventDefault();

							if (swiper.params.loop === true) {
								swiper.slideToLoop(evt.data.slidenum);
							} else {
								swiper.slideTo(evt.data.slidenum);
							}

							if (swiper.params.autoplay.enabled === true && swiper.autoplay.paused === true) {
								swiper.autoplay.paused = false;
								swiper.autoplay.run();
							}
						});
					});
				}
				return;
			}

			// Init Isotope, charge les images et redessine le layout
			$targetId.isotope(isotopeOptions);

			// Get Isotope instance 
			var isotopeInstance = $targetId.data('isotope');

			// Charge les images
			$targetId.imagesLoaded().progress(function (instance, image) {
				//console.dir(image.img);
				$targetId.isotope('layout');
			}).done(function () {
				$targetId.isotope('layout');
				for (var i = 1; i < 4; i++) {
					window.setTimeout(function () {
						$targetId.isotope('layout');
					}, i * 3000);
				}
			});
			/*.fail(function () {
				console.log('Post Grid::Imagesloaded::All images loaded, at least one is broken');
			});*/

			/**
			 * Les filtres sont affichés
			 *
			 * @since 1.9.8 Ajout de l'argument 'filter' dans l'URL lorsque la page est ouverte d'une page produit avec le breadcrumb
			 * si l'option est activée dans le control 'al_product_breadcrumb' du widget 'wc-product-grid.php'
			 */
			if (settings.data_filtre) {
				var queryString = window.location.search;
				var urlParams = new URLSearchParams(queryString);
				var filter = urlParams.has('filter') ? decodeURIComponent(urlParams.get('filter')) : false;
				var domInterval = 0;
				if (filter) {
					var domProgress = window.setInterval(function () {
						if (domInterval < 5) {
							var $data_filter = $("#al-filters__wrapper a[data-filter='." + filter + "']", $targetInstance);
							var $data_select = $('#al-filters__wrapper-select .al-filters__select', $targetInstance);
							if ($data_filter.length === 1 && $data_select.length === 1) {
								window.clearInterval(domProgress);
								domProgress = null;
								$data_filter.trigger('click');
								$data_select.val('.' + filter);
								$data_select.trigger('change');
							} else {
								domInterval++;
							}
						} else {
							window.clearInterval(domProgress);
							domProgress = null;
						}
					}, 100);
				}

				// Événement click sur les filtres par défaut
				$('.al-filters__wrapper a', $targetInstance).on('click', function (e) {
					var $this = $(this);
					// L'item du filtre est déjà sélectionné
					if ($this.parents('.al-filters__item').hasClass('al-active')) {
						return false;
					}

					var $optionSet = $this.parents('.al-filters__wrapper');
					$optionSet.find('.al-active').removeClass('al-active');
					$this.parents('.al-filters__item').addClass('al-active');
					// Applique le filtre
					var selector = $this.attr('data-filter');
					$targetId.isotope({ filter: selector }); // Applique le filtre
					return false;
				});

				// @since 1.6.0 Lier les filtres select/option de la liste à l'événement 'change'
				$('.al-filters__select', $targetInstance).on('change', function () {
					// Récupère la valeur du filtre avec l'option sélectionnée
					var filterValue = this.value;
					// Applique le filtre
					$targetId.isotope({ filter: filterValue });
					return false;
				});
			}

			// La div status est affichée
			if ($paginationId.length > 0) {
				// Initialisation infiniteScroll
				$targetId.infiniteScroll({
					path: function () { return location.pathname.replace(/\/?$/, '/') + "page/" + parseInt(this.pageIndex + 1); },
					debug: false,
					button: targetButton,	// load pages on button click
					scrollThreshold: false,	// enable loading on scroll @since 1.4.6. false for disabling loading on scroll
					status: targetStatus,
					history: false,
					horizontalOrder: false,
				});

				// get infiniteScroll instance
				var infScroll = $targetId.data('infiniteScroll');

				// Les nouveaux articles sont chargés
				$targetId.on('load.infiniteScroll', function (event, response, path) {
					var selectedItems = '.' + settings.data_article + '.al-post__wrapper';
					//console.log("load.infiniteScroll: " + path + "::Class: " + selectedItems + "::height: " + window.innerHeight / 2);

					// Recherche les nouveaux items
					var $items = $(response).find(selectedItems);
					//console.info($items);
					$targetId.append($items).isotope('appended', $items);
					$targetId.imagesLoaded(function () { $targetId.isotope('layout'); });

					// On teste l'égalité entre le nombre de page totale et celles chargées dans infiniteScroll
					// lorsque le pagging s'applique sur une 'static page' ou 'front page'
					if (parseInt(infScroll.pageIndex) >= parseInt(settings.data_max_pages)) {
						$targetId.infiniteScroll('destroy'); // Destroy de l'instance
						$paginationId.remove(); // Supprime la div status
					} else {
						$('.al-more-button-paged', $targetInstance).text(infScroll.pageIndex); // modifie l'index courant du bouton 'MORE'
					}
				});
			}
		},
	};


	/**
	* Description: Cette méthode est déclenchée lorsque le frontend Elementor est initialisé
	*
	* @return (object) Initialise l'objet EacAddonsArticlesListe
	* @since 0.0.9
	*/
	$(window).on('elementor/frontend/init', EacAddonsArticlesListe.init);

}(jQuery, window.elementorFrontend));