/**
 * Description: Cette méthode est déclenchée lorsque le composant 'eac-addon-mega-menu' est chargé dans la page
 *
 * @param $element. Le contenu de la section/container
 * @since 2.1.0
 * @since 2.1.2 Nouvel element handler
 * Elementor 3.1.0 https://developers.elementor.com/a-new-method-for-attaching-a-js-handler-to-an-element/
 */
class widgetMegaMenu extends elementorModules.frontend.handlers.Base {
	getDefaultSettings() {
		return {
			selectors: {
				targetInstance: '.eac-mega-menu',
				parentElement: '.eac-mega-menu',
				target_nav: '.mega-menu_nav-wrapper',
				target_top_link: '.mega-menu_top-link',
				target_sub_link: '.mega-menu_sub-link',
				target_sub_menu: '.mega-menu_sub-menu',
				button_toggle_open: '.mega-menu_flyout-open',
				button_toggle_close: '.mega-menu_flyout-close',
				cart_quantity: '#menu-item-mini-cart span.badge-cart__quantity',
				icon_down: '.mega-menu_nav-menu .mega-menu_icon-down:not(.responsive)',
				icon_down_resp: '.mega-menu_nav-menu .mega-menu_icon-down.responsive',
				icon_up: '.mega-menu_nav-menu .mega-menu_icon-up:not(.responsive)',
				icon_up_resp: '.mega-menu_nav-menu .mega-menu_icon-up.responsive',
				icon_right: '.mega-menu_nav-menu .mega-menu_icon-right',
				mini_cart: '#menu-item-mini-cart',
				bodyCheckout: 'woocommerce-checkout',
				bodyCart: 'woocommerce-cart',
			},
		};
	}

	getDefaultElements() {
		const selectors = this.getSettings('selectors');
		const components = {
			$targetInstance: this.$element.find(selectors.targetInstance),
			$parentElement: this.$element.find(selectors.parentElement).parent(),
			$target_nav: this.$element.find(selectors.target_nav),
			$target_top_link: this.$element.find(selectors.target_top_link),
			$target_sub_link: this.$element.find(selectors.target_sub_link),
			$target_sub_menu: this.$element.find(selectors.target_sub_menu),
			$button_toggle_open: this.$element.find(selectors.button_toggle_open),
			$button_toggle_close: this.$element.find(selectors.button_toggle_close),
			$cart_quantity: this.$element.find(selectors.cart_quantity),
			$icon_down: this.$element.find(selectors.icon_down),
			$icon_down_resp: this.$element.find(selectors.icon_down_resp),
			$icon_up: this.$element.find(selectors.icon_up),
			$icon_up_resp: this.$element.find(selectors.icon_up_resp),
			$icon_right: this.$element.find(selectors.icon_right),
			$mini_cart: this.$element.find(selectors.mini_cart),
			hasBodyClassCheckout: jQuery('body').hasClass(selectors.bodyCheckout),
			hasBodyClassCart: jQuery('body').hasClass(selectors.bodyCart),
			breakpoint: this.$element.find(selectors.target_nav).data('breakpoint'),
			isSticky: this.$element.find(selectors.target_nav).data('enable-fixed'),
			mediaQuery: null,
			optionsObserve: {
				root: null,
				rootMargin: "-40px 0px 0px 0px",
				threshold: 0,
			},
			fixedClass: 'menu-fixed',
			isEditMode: elementorFrontend.isEditMode(),
			isPreviewMode: false,
			hasMiniCart: this.$element.find(selectors.target_nav).data('mini-cart'),
			hasMenuCache: this.$element.find(selectors.target_nav).data('menu-cache'),
			adminBar: document.getElementById('wpadminbar'),
		};

		components.mediaQuery = window.matchMedia(components.breakpoint);

		const queryString = window.location.search;
		const urlParams = new URLSearchParams(queryString);
		components.isPreviewMode = urlParams.has('preview') ? true : false;

		return components;
	}

	/**
	 * Créer la liste des événements et leurs callbacks
	 */
	bindEvents() {
		if (!this.elements.isEditMode && !this.elements.isPreviewMode && this.elements.hasMenuCache) {
			this.setMenuClass();
		}

		if (this.elements.mediaQuery.matches) {
			this.elements.$target_nav.addClass('breakpoint');
			this.widgetToggleOn();
		}
		this.elements.mediaQuery.addEventListener('change', this.onMediaQueryChange.bind(this));

		if (this.elements.hasMiniCart) {
			/** Supprime le mini cart lorsque la page panier est affichée */
			if ((this.elements.hasBodyClassCart || this.elements.hasBodyClassCheckout) && this.elements.$mini_cart.length) {
				this.elements.$mini_cart.remove();
			} else {
				jQuery(document.body).on('removed_from_cart', this.onRemovedFromCart.bind(this));
				jQuery(document.body).trigger('removed_from_cart');
			}
		}

		// L'API IntersectionObserver existe (mac <= 11.1.2)
		if (window.IntersectionObserver && 'yes' === this.elements.isSticky && !this.elements.isEditMode) {
			const intersectObserver = new IntersectionObserver(this.observeElementInViewport.bind(this), this.elements.optionsObserve);
			intersectObserver.observe(this.elements.$parentElement[0]);
		}
	}

	/**
	 * Ajoute les événements sur les boutons 'Menu & Close' ainsi que les top et sub link
	 * Reset l'état des boutons et des icones
	 * Cette méthode est appelée au chargement de la page et lors du changement d'état du device
	 */
	widgetToggleOn() {
		this.bindButtonsToggleEvents();

		this.elements.$button_toggle_open.css('display', 'block');
		this.elements.$button_toggle_open.attr('aria-expanded', 'false');
		this.elements.$button_toggle_close.css('display', 'none');
		this.elements.$button_toggle_close.attr('aria-expanded', 'false');

		this.elements.$icon_right.css('display', 'none');
		this.elements.$icon_down.css('display', 'inline-block');
		this.elements.$icon_down_resp.css('display', 'inline-block');
		this.elements.$icon_up.css('display', 'none');
		this.elements.$icon_up_resp.css('display', 'none');

		this.elements.$target_nav.css('display', 'none');

		this.elements.$target_top_link.nextAll('.mega-menu_sub-menu').css('display', 'none');
		this.elements.$target_top_link.nextAll('.mega-menu_sub-menu').css('visibility', 'visible');
		this.elements.$target_top_link.nextAll('.mega-menu_sub-menu').css('opacity', 1);

		this.elements.$target_sub_link.nextAll('.mega-menu_sub-menu').css('display', 'none');
		this.elements.$target_sub_link.nextAll('.mega-menu_sub-menu').css('visibility', 'visible');
		this.elements.$target_sub_link.nextAll('.mega-menu_sub-menu').css('opacity', 1);
	}

	/**
	 * Supprime les événements sur les boutons 'Menu & Close' ainsi que les top et sub link
	 * Reset l'état des boutons et des icones
	 * Cette méthode est appelée lors du changement d'état du device
	 */
	widgetToggleOff() {
		this.unbindButtonsToggleEvents();

		this.elements.$button_toggle_open.css('display', 'none');
		this.elements.$button_toggle_open.attr('aria-expanded', 'false');
		this.elements.$button_toggle_close.css('display', 'none');
		this.elements.$button_toggle_close.attr('aria-expanded', 'false');

		this.elements.$icon_right.css('display', 'inline-block');
		this.elements.$icon_down.css('display', 'inline-block');
		this.elements.$icon_down_resp.css('display', 'none');
		this.elements.$icon_up.css('display', 'none');
		this.elements.$icon_up_resp.css('display', 'none');

		this.elements.$target_nav.css('display', 'block');

		this.elements.$target_sub_menu.css('display', 'block');
		this.elements.$target_sub_menu.css('visibility', 'hidden');
		this.elements.$target_sub_menu.css('opacity', 0);
	}

	/**
	 * Ajout des événements sur les éléments concernés par le menu responsive
	 */
	bindButtonsToggleEvents() {
		this.elements.$button_toggle_open.on('click', this.onButtonToggleOpen.bind(this));
		this.elements.$button_toggle_close.on('click', this.onButtonToggleClose.bind(this));
		this.elements.$target_top_link.on('click', this.onTargetTopLink.bind(this));
		this.elements.$target_sub_link.on('click', this.onTargetSubLink.bind(this));
	}

	/**
	 * Suppression des événements sur les éléments concernés par le menu responsive
	 */
	unbindButtonsToggleEvents() {
		this.elements.$button_toggle_open.off('click');
		this.elements.$button_toggle_close.off('click');
		this.elements.$target_top_link.off('click');
		this.elements.$target_sub_link.off('click');
	}

	/**
	 * Ajouter les classes aux éléments du menu mis dans le cache
	 */
	setMenuClass() {
		this.elements.$targetInstance.find('.current-menu-ancestor, .current-menu-parent, .current_page_item, .current-menu-item').removeClass('current-menu-ancestor current-menu-parent current_page_item current-menu-item');
		this.elements.$targetInstance.find('a[aria-current="page"]').removeAttr('aria-current');

		const currentLocation = window.location.href.split(/\?|\#/g)[0];

		this.elements.$target_nav.find('li a').each(function () {
			if (currentLocation === jQuery(this).attr('href')) {
				var $nodeParent = jQuery(this).parents().closest('li').not('li#menu-item-mini-cart');
				jQuery(this).attr('aria-current', 'page');
				if ($nodeParent.length) {
					jQuery.fn.reverse = [].reverse;
					$nodeParent.reverse().each(function (index) {
						//console.log(index+"::"+jQuery(this).attr('id'));
						if (index === 0) { jQuery(this).addClass('current-menu-item'); }
						else if (index === 1) { jQuery(this).addClass('current-menu-parent'); }
						else { jQuery(this).addClass('current-menu-ancestor'); }
					});
				}
			}
		});
	}

	/**
	 * L'observateur des événements du viewport
	 * @param {*} entries L'élément observé
	 * @param {*} observer L'observateur
	 */
	observeElementInViewport(entries, observer) {
		const target = entries[0].target;

		// L'objet est complètement visible
		//console.log('intersecting:' + entries[0].isIntersecting + ':' + target.className + ':' + entries[0].intersectionRatio);
		if (entries[0].intersectionRatio > 0) {
			this.elements.$targetInstance[0].classList.remove(this.elements.fixedClass);
			this.elements.$targetInstance[0].style.top = '';
		} else {
			this.elements.$targetInstance[0].classList.add(this.elements.fixedClass);
			if (this.elements.adminBar) {
				this.elements.$targetInstance[0].style.top = this.elements.adminBar.clientHeight + 'px';
			}
		}
	}

	/**
	 * Un élément a été supprimé du panier, on met à jour l'infobulle de l'item panier du menu
	 */
	onRemovedFromCart() {
		var that = this.elements;

		jQuery.ajax({
			url: eacUpdateCounter.ajax_url,
			type: 'post',
			data: {
				action: eacUpdateCounter.ajax_action,
				nonce: eacUpdateCounter.ajax_nonce,
			},
		}).done(function (response) {
			if (response.success === true) {
				that.$cart_quantity.text(response.data);
			}
		});
	}

	/**
	 * Traite les événements de changement détat du device
	 */
	onMediaQueryChange() {
		if (window.matchMedia(this.elements.breakpoint).matches) {
			this.elements.$target_nav.addClass('breakpoint');
			this.widgetToggleOn();
		} else {
			this.elements.$target_nav.removeClass('breakpoint');
			this.widgetToggleOff();
		}
	}

	/**
	 * Événement sur le bouton open du menu responsive
	 * @param {*} evt 
	 */
	onButtonToggleOpen(evt) {
		evt.stopImmediatePropagation();

		this.elements.$button_toggle_open.css('display', 'none');
		this.elements.$button_toggle_open.attr('aria-expanded', 'true');

		this.elements.$button_toggle_close.css('display', 'block');
		this.elements.$button_toggle_close.attr('aria-expanded', 'true');
		this.elements.$target_nav.toggle();
	}

	/**
	 * Événement sur le bouton close du menu responsive
	 * @param {*} evt 
	 */
	onButtonToggleClose(evt) {
		evt.stopImmediatePropagation();

		this.elements.$button_toggle_close.css('display', 'none');
		this.elements.$button_toggle_close.attr('aria-expanded', 'false');

		this.elements.$button_toggle_open.css('display', 'block');
		this.elements.$button_toggle_open.attr('aria-expanded', 'false');
		this.elements.$target_nav.toggle();

		this.elements.$target_top_link.nextAll('.mega-menu_sub-menu').css('display', 'none');
		this.elements.$target_top_link.find('.mega-menu_icon-down').css('display', 'inline-block');
		this.elements.$target_top_link.find('.mega-menu_icon-up.responsive').css('display', 'none');

		this.elements.$target_sub_link.nextAll('.mega-menu_sub-menu').css('display', 'none');
		this.elements.$target_sub_link.find('.mega-menu_icon-down.responsive').css('display', 'inline-block');
		this.elements.$target_sub_link.find('.mega-menu_icon-up.responsive').css('display', 'none');
	}

	/**
	 * Événement sur les liens des top menu (niveau 0)
	 * @param {*} evt L'événement click
	 */
	onTargetTopLink(evt) {
		const $thisTopLink = jQuery(evt.currentTarget);
		// Liste des menus
		this.elements.$target_sub_menu.not($thisTopLink.nextAll('.mega-menu_sub-menu:first')).slideUp();
		this.elements.$target_top_link.not($thisTopLink).find('.mega-menu_icon-down').css('display', 'inline-block');
		this.elements.$target_top_link.not($thisTopLink).find('.mega-menu_icon-up.responsive').css('display', 'none');

		// liste des sous-menus
		this.elements.$target_sub_link.nextAll('.mega-menu_sub-menu:first').css('display', 'none');
		this.elements.$target_sub_link.find('.mega-menu_icon-down.responsive').css('display', 'inline-block');
		this.elements.$target_sub_link.find('.mega-menu_icon-up.responsive').css('display', 'none');

		// Le menu courant
		$thisTopLink.nextAll('.mega-menu_sub-menu:first').slideToggle();
		$thisTopLink.find('.mega-menu_icon-down').toggle();
		$thisTopLink.find('.mega-menu_icon-up.responsive').toggle();
	}

	/**
	 * Événement sur les liens des sous-menus
	 * @param {*} evt L'événement click
	 */
	onTargetSubLink(evt) {
		const $thisSubLink = jQuery(evt.currentTarget);
		$thisSubLink.nextAll('.mega-menu_sub-menu:first').slideToggle();
		$thisSubLink.find('.mega-menu_icon-down.responsive').toggle();
		$thisSubLink.find('.mega-menu_icon-up.responsive').toggle();

	}
}

/**
 * Description: La class est créer lorsque le composant 'eac-addon-mega-menu' est chargé dans la page
 *
 * @param $element (ex: $scope)
 * @since 2.1.0
 * @since 2.1.2 Nouvel element handler
 */
/*jQuery(window).on('elementor/frontend/init', () => {
	elementorFrontend.elementsHandler.attachHandler('eac-addon-mega-menu', widgetMegaMenu);
});*/

jQuery(window).on('elementor/frontend/init', () => {
	const EacAddonsMegaMenu = ($element) => {
		elementorFrontend.elementsHandler.addHandler(widgetMegaMenu, {
			$element,
		});
	};

	elementorFrontend.hooks.addAction('frontend/element_ready/eac-addon-mega-menu.default', EacAddonsMegaMenu);
});
