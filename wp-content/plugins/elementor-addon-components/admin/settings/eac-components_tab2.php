<form action="" method="POST" id="eac-form-features" name="eac-form-features">
	<div id="tab-3" style="display: none;">
		<div class="eac-settings-tabs">
			<table class="eac-features-table eac-all-features">
				<tbody>
					<tr>
						<th><?php esc_html_e('Active/Désactive tous les composants', 'eac-components'); ?></th>
						<td>
							<label class="switch">
								<input type="checkbox" class="ios-switch bigswitch" id="all-features-advanced" name="all-features-advanced" <?php checked(1, $this->features_keys['all-features-advanced'], true) ?>>
								<div><div></div></div>
							</label>
						</td>
					</tr>
				</tbody>
			</table>
			<table class="eac-features-table advanced">
				<tbody>
					<tr>
						<th><?php esc_html_e("ACF balises dynamiques", 'eac-components'); ?><a href="https://elementor-addon-components.com/how-to-integrate-and-use-acf-fields-with-elementor/" target="_blank" rel="noopener noreferrer"><span class="eac-admin-help"></span></a></th>
						<td>
							<label class="switch">
								<input type="checkbox" class="ios-switch bigswitch" id="acf-dynamic-tag" name="acf-dynamic-tag" <?php checked(1, $this->features_keys['acf-dynamic-tag'], true) ?>>
								<div><div></div></div>
							</label>
						</td>
						<th><?php esc_html_e("ACF JSON", 'eac-components'); ?><a href="#"><span class="eac-admin-help acf-json"></span></a></th>
						<td>
							<label class="switch">
								<input type="checkbox" class="ios-switch bigswitch" id="acf-json" name="acf-json" <?php checked(1, $this->features_keys['acf-json'], true) ?>>
								<div><div></div></div>
							</label>
						</td>
						<th><?php esc_html_e("ACF page d'options", 'eac-components'); ?><a href="https://elementor-addon-components.com/add-options-page-for-the-free-version-of-acf/" target="_blank" rel="noopener noreferrer"><span class="eac-admin-help"></span></a></th>
						<td>
							<label class="switch">
								<input type="checkbox" class="ios-switch bigswitch" id="acf-option-page" name="acf-option-page" <?php checked(1, $this->features_keys['acf-option-page'], true) ?>>
								<div><div></div></div>
							</label>
						</td>
						<th><?php esc_html_e("ALT attribut", 'eac-components'); ?><a href="https://elementor-addon-components.com/add-external-image-for-elementor/#improve-your-seo-with-the-dynamic-tag-external-image" target="_blank" rel="noopener noreferrer"><span class="eac-admin-help"></span></a></th>
						<td>
							<label class="switch">
								<input type="checkbox" class="ios-switch bigswitch" id="alt-attribute" name="alt-attribute" <?php checked(1, $this->features_keys['alt-attribute'], true) ?>>
								<div><div></div></div>
							</label>
						</td>
					</tr>
					
					<tr>
						<th><?php esc_html_e("Attributs personnalisés", 'eac-components'); ?><a href="https://elementor-addon-components.com/add-your-custom-attributes-with-elementor/" target="_blank" rel="noopener noreferrer"><span class="eac-admin-help"></span></a></th>
						<td>
							<label class="switch">
								<input type="checkbox" class="ios-switch bigswitch" id="custom-attribute" name="custom-attribute" <?php checked(1, $this->features_keys['custom-attribute'], true) ?>>
								<div><div></div></div>
							</label>
						</td>
						<th><?php esc_html_e("CSS personnalisé", 'eac-components'); ?><a href="https://elementor-addon-components.com/elementor-custom-css/" target="_blank" rel="noopener noreferrer"><span class="eac-admin-help"></span></a></th>
						<td>
							<label class="switch">
								<input type="checkbox" class="ios-switch bigswitch" id="custom-css" name="custom-css" <?php checked(1, $this->features_keys['custom-css'], true) ?>>
								<div><div></div></div>
							</label>
						</td>
						<th><?php esc_html_e("Balises dynamiques", 'eac-components'); ?><a href="https://elementor-addon-components.com/elementor-dynamic-tags/" target="_blank" rel="noopener noreferrer"><span class="eac-admin-help"></span></a></th>
						<td>
							<label class="switch">
								<input type="checkbox" class="ios-switch bigswitch" id="dynamic-tag" name="dynamic-tag" <?php checked(1, $this->features_keys['dynamic-tag'], true) ?>>
								<div><div></div></div>
							</label>
						</td>
						<th><?php esc_html_e("Lien élément", 'eac-components'); ?><a href="https://elementor-addon-components.com/add-link-to-a-section-column-using-elementor/" target="_blank" rel="noopener noreferrer"><span class="eac-admin-help"></span></a></th>
						<td>
							<label class="switch">
								<input type="checkbox" class="ios-switch bigswitch" id="element-link" name="element-link" <?php checked(1, $this->features_keys['element-link'], true) ?>>
								<div><div></div></div>
							</label>
						</td>
					</tr>
					
					<tr>
						<th><?php esc_html_e("Lottie arrière-plan", 'eac-components'); ?><a href="https://elementor-addon-components.com/add-lottie-animation-in-elementor/#use-lottie-animations-in-the-background-of-an-element" target="_blank" rel="noopener noreferrer"><span class="eac-admin-help"></span></a></th>
						<td>
							<label class="switch">
								<input type="checkbox" class="ios-switch bigswitch" id="lottie-background" name="lottie-background" <?php checked(1, $this->features_keys['lottie-background'], true) ?>>
								<div><div></div></div>
							</label>
						</td>
						<th><?php esc_html_e("Effets de mouvement", 'eac-components'); ?><a href="https://elementor-addon-components.com/create-animation-effects-elementor/" target="_blank" rel="noopener noreferrer"><span class="eac-admin-help"></span></a></th>
						<td>
							<label class="switch">
								<input type="checkbox" class="ios-switch bigswitch" id="motion-effects" name="motion-effects" <?php checked(1, $this->features_keys['motion-effects'], true) ?>>
								<div><div></div></div>
							</label>
						</td>
						<th><?php esc_html_e("Sticky élément", 'eac-components'); ?><a href="https://elementor-addon-components.com/use-sticky-scrolling-effect-with-elementor/" target="_blank" rel="noopener noreferrer"><span class="eac-admin-help"></span></a></th>
						<td>
							<label class="switch">
								<input type="checkbox" class="ios-switch bigswitch" id="element-sticky" name="element-sticky" <?php checked(1, $this->features_keys['element-sticky'], true) ?>>
								<div><div></div></div>
							</label>
						</td>
						<th class="eac-promotion-new"><?php esc_html_e("WC balises dynamiques", 'eac-components'); ?><a href="https://elementor-addon-components.com/dynamic-woocommerce-tags-for-elementor/" target="_blank" rel="noopener noreferrer"><span class="eac-admin-help"></span></a></th>
						<td>
							<label class="switch">
								<input type="checkbox" class="ios-switch bigswitch" id="woo-dynamic-tag" name="woo-dynamic-tag" <?php checked(1, $this->features_keys['woo-dynamic-tag'], true) ?>>
								<div><div></div></div>
							</label>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
	<div id="tab-4" style="display: none;">
		<div class="eac-settings-tabs">
			<table class="eac-features-table eac-all-features">
				<tbody>
					<tr>
						<th><?php esc_html_e('Active/Désactive tous les composants', 'eac-components'); ?></th>
						<td>
							<label class="switch">
								<input type="checkbox" class="ios-switch bigswitch" id="all-features-common" name="all-features-common" <?php checked(1, $this->features_keys['all-features-common'], true) ?>>
								<div><div></div></div>
							</label>
						</td>
					</tr>
				</tbody>
			</table>
			<table class="eac-features-table common">
				<tbody>
					<tr style="display: table-cell;">
						<th><?php esc_html_e("Personnaliser le menu de navigation", 'eac-components'); ?><a href="https://elementor-addon-components.com/customize-wordpress-navigation-menus/" target="_blank" rel="noopener noreferrer"><span class="eac-admin-help"></span></a></th>
						<td>
							<label class="switch">
								<input type="checkbox" class="ios-switch bigswitch" id="custom-nav-menu" name="custom-nav-menu" <?php checked(1, $this->features_keys['custom-nav-menu'], true) ?>>
								<div><div></div></div>
							</label>
						</td>
						<th><?php esc_html_e("Accès page d'options", 'eac-components'); ?><a href="#"><span class="eac-admin-help grant-option-page"></span></a></th>
						<td>
							<label class="switch">
								<input type="checkbox" class="ios-switch bigswitch" id="grant-option-page" name="grant-option-page" <?php checked(1, $this->features_keys['grant-option-page'], true) ?>>
								<div><div></div></div>
							</label>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
	<div class="eac-saving-box">
		<input id="eac-sumit" type="submit" value="<?php esc_html_e('Enregistrer les modifications', 'eac-components'); ?>">
		<div id="eac-features-saved"></div>
		<div id="eac-features-notsaved"></div>
	</div>
</form>