<?php

/*===============================================================================
* Class: Eac_Product_Terms
*
*
* @return affiche les terms par catégories du produit
* @since 1.9.8
*===============================================================================*/

namespace EACCustomWidgets\Includes\Elementor\DynamicTags\Woo\Tags;

use EACCustomWidgets\Includes\Elementor\DynamicTags\Woo\Tags\Traits\Eac_Product_Dynamic_Woo;
use EACCustomWidgets\Includes\Eac_Tools_Util;
use Elementor\Controls_Manager;
use Elementor\Core\DynamicTags\Tag;
use Elementor\Modules\DynamicTags\Module as TagsModule;

if (!defined('ABSPATH')) {
	exit; // Exit if accessed directly
}

class Eac_Product_Terms extends Tag {
	use Eac_Product_Dynamic_Woo;
	
	public function get_name() {
		return 'eac-addon-woo-terms';
	}

	public function get_title() {
		return esc_html__('Étiquettes du produit', 'eac-components');
	}

	public function get_group() {
		return 'eac-woo-groupe';
	}

	public function get_categories() {
		return [TagsModule::TEXT_CATEGORY];
	}
	
	protected function register_controls() {
		
		$this->register_product_id_control();
		
		$this->register_product_taxonomy_control();
	}
	
	public function render() {
		$product_id = $this->get_settings('product_id');
		$product_cat = $this->get_settings('product_taxo');
		$value = '';
		
		if(empty($product_id) || empty($product_cat)) return '';
		
		$product = wc_get_product($product_id);
		if(! $product) { return ''; }
		
		$value = get_the_term_list(absint($product_id), esc_attr($product_cat), '', ' | ');
		
		echo $value;
	}
}