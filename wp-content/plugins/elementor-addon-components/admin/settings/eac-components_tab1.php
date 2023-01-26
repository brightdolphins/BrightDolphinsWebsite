<form action="" method="POST" id="eac-form-settings" name="eac-form-settings">
	<div id="tab-1" style="display: none;">
		<div class="eac-settings-tabs">
			<table class="eac-elements-table eac-all-settings">
				<tbody>
					<tr>
						<th><?php esc_html_e('Active/Désactive tous les composants', 'eac-components'); ?></th>
						<td>
							<label class="switch">
								<input type="checkbox" class="ios-switch bigswitch" id="all-advanced" name="all-advanced" <?php checked(1, $this->widgets_keys['all-advanced'], true) ?>>
								<div><div></div></div>
							</label>
						</td>
					</tr>
				</tbody>
			</table>
			<table class="eac-elements-table advanced">
				<tbody>
					<tr>
						<th><?php esc_html_e("ACF relationship", 'eac-components'); ?><a href="https://elementor-addon-components.com/how-to-display-acf-relationship-posts-in-a-grid/" target="_blank" rel="noopener noreferrer" rel="noopener noreferrer"><span class="eac-admin-help"></span></a></th>
						<td>
							<label class="switch">
								<input type="checkbox" class="ios-switch bigswitch" id="acf-relationship" name="acf-relationship" <?php checked(1, $this->widgets_keys['acf-relationship'], true) ?>>
								<div><div></div></div>
							</label>
						</td>
						<th><?php esc_html_e("Boîte auteur", 'eac-components'); ?><a href="https://elementor-addon-components.com/author-info-box/" target="_blank" rel="noopener noreferrer"><span class="eac-admin-help"></span></a></th>
						<td>
							<label class="switch">
								<input type="checkbox" class="ios-switch bigswitch" id="author-infobox" name="author-infobox" <?php checked(1, $this->widgets_keys['author-infobox'], true) ?>>
								<div><div></div></div>
							</label>
						</td>
						<th><?php esc_html_e('Diagrammes', 'eac-components'); ?></th>
						<td>
							<label class="switch">
								<input type="checkbox" class="ios-switch bigswitch" id="chart" name="chart" <?php checked(1, $this->widgets_keys['chart'], true) ?>>
								<div><div></div></div>
							</label>
						</td>
						<th><?php esc_html_e('HTML sitemap', 'eac-components'); ?><a href="https://elementor-addon-components.com/how-do-i-make-a-html-sitemap-with-elementor/" target="_blank" rel="noopener noreferrer"><span class="eac-admin-help"></span></a></th>
						<td>
							<label class="switch">
								<input type="checkbox" class="ios-switch bigswitch" id="html-sitemap" name="html-sitemap" <?php checked(1, $this->widgets_keys['html-sitemap'], true) ?>>
								<div><div></div></div>
							</label>
						</td>
					</tr>
					
					<tr>
						<th><?php esc_html_e("Galerie d'images", 'eac-components'); ?><a href="https://elementor-addon-components.com/create-amazing-image-gallery-using-elementor/" target="_blank" rel="noopener noreferrer"><span class="eac-admin-help"></span></a></th>
						<td>
							<label class="switch">
								<input type="checkbox" class="ios-switch bigswitch" id="image-galerie" name="image-galerie" <?php checked(1, $this->widgets_keys['image-galerie'], true) ?> />
								<div><div></div></div>
							</label>
						</td>
						<th><?php esc_html_e('Image réactive', 'eac-components'); ?><a href="https://elementor-addon-components.com/image-hotspots/" target="_blank" rel="noopener noreferrer"><span class="eac-admin-help"></span></a></th>
						<td>
							<label class="switch">
								<input type="checkbox" class="ios-switch bigswitch" id="image-hotspots" name="image-hotspots" <?php checked(1, $this->widgets_keys['image-hotspots'], true) ?>>
								<div><div></div></div>
							</label>
						</td>
						<th><?php esc_html_e('Lottie animation', 'eac-components'); ?><a href="https://elementor-addon-components.com/lottie-animation/" target="_blank" rel="noopener noreferrer"><span class="eac-admin-help"></span></a></th>
						<td>
							<label class="switch">
								<input type="checkbox" class="ios-switch bigswitch" id="lottie-animations" name="lottie-animations" <?php checked(1, $this->widgets_keys['lottie-animations'], true) ?>>
								<div><div></div></div>
							</label>
						</td>
						<th><?php esc_html_e('Boîte modale', 'eac-components'); ?><a href="https://elementor-addon-components.com/elementor-modal-box-doc/" target="_blank" rel="noopener noreferrer"><span class="eac-admin-help"></span></a></th>
						<td>
							<label class="switch">
								<input type="checkbox" class="ios-switch bigswitch" id="modal-box" name="modal-box" <?php checked(1, $this->widgets_keys['modal-box'], true) ?>>
								<div><div></div></div>
							</label>
						</td>
					</tr>
					
					<tr>
						<th><?php esc_html_e("Fil d'actualité", 'eac-components'); ?><a href="https://elementor-addon-components.com/news-ticker/" target="_blank" rel="noopener noreferrer"><span class="eac-admin-help"></span></a></th>
						<td>
							<label class="switch">
								<input type="checkbox" class="ios-switch bigswitch" id="news-ticker" name="news-ticker" <?php checked(1, $this->widgets_keys['news-ticker'], true) ?>>
								<div><div></div></div>
							</label>
						</td>
						<th><?php esc_html_e('Barre latérale', 'eac-components'); ?><a href="https://elementor-addon-components.com/off-canvas-menu/" target="_blank" rel="noopener noreferrer"><span class="eac-admin-help"></span></a></th>
						<td>
							<label class="switch">
								<input type="checkbox" class="ios-switch bigswitch" id="off-canvas" name="off-canvas" <?php checked(1, $this->widgets_keys['off-canvas'], true) ?>>
								<div><div></div></div>
							</label>
						</td>
						<th><?php esc_html_e('OpenStreetMap', 'eac-components'); ?><a href="https://elementor-addon-components.com/openstreetmap/" target="_blank" rel="noopener noreferrer"><span class="eac-admin-help"></span></a></th>
						<td>
							<label class="switch">
								<input type="checkbox" class="ios-switch bigswitch" id="open-streetmap" name="open-streetmap" <?php checked(1, $this->widgets_keys['open-streetmap'], true) ?>>
								<div><div></div></div>
							</label>
						</td>
						<th><?php esc_html_e("Visionneuse PDF", 'eac-components'); ?><a href="https://elementor-addon-components.com/add-a-pdf-viewer-to-elementor/" target="_blank" rel="noopener noreferrer"><span class="eac-admin-help"></span></a></th>
						<td>
							<label class="switch">
								<input type="checkbox" class="ios-switch bigswitch" id="pdf-viewer" name="pdf-viewer" <?php checked(1, $this->widgets_keys['pdf-viewer'], true) ?>>
								<div><div></div></div>
							</label>
						</td>
					</tr>
					
					<tr>
						<th><?php esc_html_e("Grille d'articles", 'eac-components'); ?><a href="https://elementor-addon-components.com/how-to-create-advanced-queries-for-the-component-post-grid/" target="_blank" rel="noopener noreferrer"><span class="eac-admin-help"></span></a></th>
						<td>
							<label class="switch">
								<input type="checkbox" class="ios-switch bigswitch" id="articles-liste" name="articles-liste" <?php checked(1, $this->widgets_keys['articles-liste'], true) ?>>
								<div><div></div></div>
							</label>
						</td>
						<th><?php esc_html_e('Lecteur RSS', 'eac-components'); ?><a href="https://elementor-addon-components.com/rss-feed/#display-and-share-your-favorite-rss-feeds/" target="_blank" rel="noopener noreferrer"><span class="eac-admin-help"></span></a></th>
						<td>
							<label class="switch">
								<input type="checkbox" class="ios-switch bigswitch" id="lecteur-rss" name="lecteur-rss" <?php checked(1, $this->widgets_keys['lecteur-rss'], true) ?>>
								<div><div></div></div>
							</label>
						</td>
						<th><?php esc_html_e('Coloration syntaxique', 'eac-components'); ?><a href="https://elementor-addon-components.com/syntax-highlighter/" target="_blank" rel="noopener noreferrer"><span class="eac-admin-help"></span></a></th>
						<td>
							<label class="switch">
								<input type="checkbox" class="ios-switch bigswitch" id="syntax-highlight" name="syntax-highlight" <?php checked(1, $this->widgets_keys['syntax-highlight'], true) ?>>
								<div><div></div></div>
							</label>
						</td>
						<th><?php esc_html_e('Table des matières', 'eac-components'); ?><a href="https://elementor-addon-components.com/create-and-display-the-table-of-contents-of-your-posts/" target="_blank" rel="noopener noreferrer"><span class="eac-admin-help"></span></a></th>
						<td>
							<label class="switch">
								<input type="checkbox" class="ios-switch bigswitch" id="table-content" name="table-content" <?php checked(1, $this->widgets_keys['table-content'], true) ?>>
								<div><div></div></div>
							</label>
						</td>
					</tr>
					
					<tr>
						<th><?php esc_html_e("Membres de l'équipe", 'eac-components'); ?><a href="https://elementor-addon-components.com/team-members/" target="_blank" rel="noopener noreferrer"><span class="eac-admin-help"></span></a></th>
						<td>
							<label class="switch">
								<input type="checkbox" class="ios-switch bigswitch" id="team-members" name="team-members" <?php checked(1, $this->widgets_keys['team-members'], true) ?>>
								<div><div></div></div>
							</label>
						</td>
						<th class="eac-promotion-new"><?php esc_html_e("WC Grille de produits", 'eac-components'); ?><a href="https://elementor-addon-components.com/woocommerce-product-grid-for-elementor/" target="_blank" rel="noopener noreferrer"><span class="eac-admin-help"></span></a></th>
						<td colspan="6">
							<label class="switch">
								<input type="checkbox" class="ios-switch bigswitch" id="woo-product-grid" name="woo-product-grid" <?php checked(1, $this->widgets_keys['woo-product-grid'], true) ?>>
								<div><div></div></div>
							</label>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
	<div id="tab-2" style="display: none;">
		<div class="eac-settings-tabs">
			<table class="eac-elements-table eac-all-settings">
				<tbody>
					<tr>
						<th><?php esc_html_e('Active/Désactive tous les composants', 'eac-components'); ?></th>
						<td>
							<label class="switch">
								<input type="checkbox" class="ios-switch bigswitch" id="all-components" name="all-components" <?php checked(1, $this->widgets_keys['all-components'], true) ?>>
								<div><div></div></div>
							</label>
						</td>
					</tr>
				</tbody>
			</table>
			<table class="eac-elements-table common">
				<tbody>
					<tr>
						<th><?php esc_html_e("Diaporama d'arrière-plan", 'eac-components'); ?></th>
						<td>
							<label class="switch">
								<input type="checkbox" class="ios-switch bigswitch" id="image-diaporama" name="image-diaporama" <?php checked(1, $this->widgets_keys['image-diaporama'], true) ?>>
								<div><div></div></div>
							</label>
						</td>
						<th><?php esc_html_e("Comparaison d'images", 'eac-components'); ?></th>
						<td>
							<label class="switch">
								<input type="checkbox" class="ios-switch bigswitch" id="images-comparison" name="images-comparison" <?php checked(1, $this->widgets_keys['images-comparison'], true) ?>>
								<div><div></div></div>
							</label>
						</td>
						<th><?php esc_html_e("Effets d'images", 'eac-components'); ?></th>
						<td>
							<label class="switch">
								<input type="checkbox" class="ios-switch bigswitch" id="image-effects" name="image-effects" <?php checked(1, $this->widgets_keys['image-effects'], true) ?> />
								<div><div></div></div>
							</label>
						</td>
						<th><?php esc_html_e('Carrousel Ken Burn', 'eac-components'); ?></th>
						<td>
							<label class="switch">
								<input type="checkbox" class="ios-switch bigswitch" id="kenburn-slider" name="kenburn-slider" <?php checked(1, $this->widgets_keys['kenburn-slider'], true) ?>>
								<div><div></div></div>
							</label>
						</td>
					</tr>
					
					<tr>
						<th><?php esc_html_e('Flux Pinterest', 'eac-components'); ?></th>
						<td>
							<label class="switch">
								<input type="checkbox" class="ios-switch bigswitch" id="pinterest-rss" name="pinterest-rss" <?php checked(1, $this->widgets_keys['pinterest-rss'], true) ?>>
								<div><div></div></div>
							</label>
						</td>
						<th><?php esc_html_e('Promotion de produit', 'eac-components'); ?></th>
						<td>
							<label class="switch">
								<input type="checkbox" class="ios-switch bigswitch" id="image-promotion" name="image-promotion" <?php checked(1, $this->widgets_keys['image-promotion'], true) ?>>
								<div><div></div></div>
							</label>
						</td>
						<th><?php esc_html_e('Miniature de site', 'eac-components'); ?><a href="https://elementor-addon-components.com/add-website-thumbnail-like-a-screenshot/" target="_blank" rel="noopener noreferrer"><span class="eac-admin-help"></span></a></th>
						<td>
							<label class="switch">
								<input type="checkbox" class="ios-switch bigswitch" id="site-thumbnail" name="site-thumbnail" <?php checked(1, $this->widgets_keys['site-thumbnail'], true) ?>>
								<div><div></div></div>
							</label>
						</td>
						<th><?php esc_html_e('Flux webradio', 'eac-components'); ?></th>
						<td>
							<label class="switch">
								<input type="checkbox" class="ios-switch bigswitch" id="lecteur-audio" name="lecteur-audio" <?php checked(1, $this->widgets_keys['lecteur-audio'], true) ?>>
								<div><div></div></div>
							</label>
						</td>
					</tr>
					
					<tr>
						<th><?php esc_html_e('Partager un article', 'eac-components'); ?></th>
						<td colspan="8">
							<label class="switch">
								<input type="checkbox" class="ios-switch bigswitch" id="reseaux-sociaux" name="reseaux-sociaux" <?php checked(1, $this->widgets_keys['reseaux-sociaux'], true) ?>>
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
		<div id="eac-elements-saved"></div>
		<div id="eac-elements-notsaved"></div>
	</div>
</form>