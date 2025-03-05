<?php

function a11y_scripts_and_styles(){
   wp_enqueue_style('a11y_main_style', MY_PLUGIN_PATH_ACCESSIBILITY . 'build/index.css', array(), '1.0', 'all');
   wp_enqueue_script('a11y_main_js', MY_PLUGIN_PATH_ACCESSIBILITY . 'build/index.js', array('jquery'), '1.0', true );
}

function a11y_scripts_and_styles_editor(){   
   wp_enqueue_style('a11y_main_style_editor', MY_PLUGIN_PATH_ACCESSIBILITY . 'build/editor.css');
   wp_enqueue_script('a11y_main_js_editor', MY_PLUGIN_PATH_ACCESSIBILITY . 'build/editor.js', array('jquery','wp-element', 'wp-editor', 'wp-blocks'), '1.0', true );
}

function a11y_scripts_and_styles_frontend(){   
   wp_enqueue_style('a11y_main_style_frontend', MY_PLUGIN_PATH_ACCESSIBILITY . 'build/frontend.css');
   wp_enqueue_script('a11y_main_js_frontend', MY_PLUGIN_PATH_ACCESSIBILITY . 'build/frontend.js', array('jquery'), '1.0', true );
}

//******************************************************************/
 
//Just Frontend
add_action('wp_enqueue_scripts', 'a11y_scripts_and_styles_frontend');

//Frontend & Editor
add_action('enqueue_block_assets', 'a11y_scripts_and_styles');

//Just Editor
add_action('enqueue_block_editor_assets', 'a11y_scripts_and_styles_editor');