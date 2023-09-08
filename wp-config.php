<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'bd_test' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', 'root' );

/** Database hostname */
define( 'DB_HOST', 'localhost:8889' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'b,w~~cG8S}o|m%f$B`5y+vn_+XS,5l#UK<<oT4u#|*~@TPTt8w , B<3ZcihL T3' );
define( 'SECURE_AUTH_KEY',  'PiA0bq)-j_Y]i<Z^RaWGOaUltRl+;4Z`pll$k+_adl<T|Bf1dAE$l^/9z<Q3v(Yw' );
define( 'LOGGED_IN_KEY',    '<TrxC14<Z)k5#q_&jqnlBdDM5NoP-&>MdV_xM-8ud>V{>jY!80j0v-^g+UA|cHZa' );
define( 'NONCE_KEY',        ';L8X~_Co?H/<D@_Yj*S]j&L&knJytQ>[C~>H;kd7R^0qK8]b0m+IHvK(^gy<I1[h' );
define( 'AUTH_SALT',        'hAj OvGzUaw0Gl-,ECMv6c8-CCi_tK~qR|ow:3UR*FLrfMFP6ob$h`LCo%QB.J0O' );
define( 'SECURE_AUTH_SALT', '{4&JC#z4X)*q4b2./W17%Y${c8l~[uZ~;S2zs5nEzs}ktpA~!?Pm]<1/l?C@v(h[' );
define( 'LOGGED_IN_SALT',   '*9[ C-rA0 5EG?|rH@M[n1]ypXS~FVUccmp=9Q_`g!zmzgx:;v/8#R0uzg PG6q<' );
define( 'NONCE_SALT',       'h9o,(];;QG;)jus8G Ey(d3X?6{aVG%g?xvK7yB,pdl+]3;hOlkJPXeShxb;d8Kf' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';