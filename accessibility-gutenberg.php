<?php
/**
 * Plugin Name:       Accessibility Gutenberg
 * Description:       Accessibility Plugin for Gutenberg Blocks.
 * Requires at least: 5.8
 * Requires PHP:      7.0
 * Version:           1.0.0
 * Author:            TW Werbeagenten Heidelberg GmbH
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       accessibility-gutenberg
 *
 * @package           create-block
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */

define('MY_PLUGIN_PATH_ACCESSIBILITY',plugin_dir_url(__FILE__));

require_once(__DIR__ . '/lib/add-html-attributes.php');  
require_once(__DIR__ . '/lib/enqueue-assets.php');  
require_once(__DIR__ . '/lib/extra-buttons.php');  
