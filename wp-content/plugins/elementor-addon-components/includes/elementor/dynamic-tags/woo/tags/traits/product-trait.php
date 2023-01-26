<?php

namespace EACCustomWidgets\Includes\Elementor\DynamicTags\Woo\Tags\Traits;

trait Eac_Product_Dynamic_Woo {
	public function register_product_id_control() {
		$this->add_control('product_id',
			[
				'label' => esc_html__("Sélectionner un titre", 'eac-components'),
				'type' => 'eac-select2',
				'object_type' => 'product',
				'default' => false,
			]
		);
	}
	
	public function register_product_taxonomy_control() {
		$this->add_control('product_taxo',
			[
				'label' => esc_html__("Sélectionner la taxonomie", 'eac-components'),
				'type' => 'eac-select2',
				'object_type' => 'product',
				'query_type' => 'taxonomy',
				'default' => false,
			]
		);
	}
}