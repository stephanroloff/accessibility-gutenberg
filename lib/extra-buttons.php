<?php
/**
* Block styles.
*/

function accessibility_plugin_register_block_styles() {

    register_block_style(
        'core/button',
        array(
            'name'         => 'button-download',
            'label'        => __( 'Button Download', 'textdomain' ),
            'is_default'   => false,
        )
    );
    register_block_style(
        'core/button',
        array(
            'name'         => 'button-pdf',
            'label'        => __( 'Button PDF', 'textdomain' ),
            'is_default'   => false,
        )
    ); 
    register_block_style(
        'core/button',
        array(
            'name'         => 'button-new-tab',
            'label'        => __( 'Button New Tab', 'textdomain' ),
            'is_default'   => false,
        )
    ); 
    register_block_style(
        'core/file',
        array(
            'name'         => 'download-icon',
            'label'        => __( 'Download Icon', 'textdomain' ),
            'is_default'   => false,
        )
    );
}
add_action( 'init', 'accessibility_plugin_register_block_styles' );