<?php

function scripts_and_styles_for_plugin() {
    wp_enqueue_script('main_js_accessibility', MY_PLUGIN_PATH_ACCESSIBILITY . 'build/index.js', array('jquery','wp-element', 'wp-editor', 'wp-blocks'), '1.0', true);
    wp_enqueue_style('main_style_accessibility', MY_PLUGIN_PATH_ACCESSIBILITY . 'build/index.css', array(), '1.0', 'all');
 }
 
 // Añadimos la función al hook adecuado para cargar en el front-end
 add_action('wp_enqueue_scripts', 'scripts_and_styles_for_plugin');
 

function scripts_and_styles_editor_for_plugin(){   
//    wp_enqueue_style('main_style', get_theme_file_uri('/build/editor.scss.css'));
}


//******************************************************************/
 
//Just Frontend
// add_action('wp_enqueue_scripts', 'scripts_and_styles');

//Frontend & Editor
add_action('enqueue_block_assets', 'scripts_and_styles_for_plugin');

//Just Editor
// add_action('enqueue_block_editor_assets', 'scripts_and_styles_editor');