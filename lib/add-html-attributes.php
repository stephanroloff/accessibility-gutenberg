<?php
//Paso 3
// Add HTML attribute on the server side (PHP)
function add_html_attr_accessibility( $block_content, $block ) {
   if ( 'core/button' === $block['blockName'] || 
   'core/group' === $block['blockName'] ||
   'core/paragraph' === $block['blockName'] 
   ) {
      $processor = new WP_HTML_Tag_Processor( $block_content );
      
      if ( $processor->next_tag() ) {
         if(isset($block['attrs']['ariaLabel'])){
            $processor->set_attribute( 'aria-label', $block['attrs']['ariaLabel'] );
         }
         if(isset($block['attrs']['role'])){
            $processor->set_attribute( 'role', $block['attrs']['role'] );
         }
         if(isset($block['attrs']['tabindex'])){
            $processor->set_attribute( 'tabindex', $block['attrs']['tabindex'] );
         }
         // $processor->add_class( 'example-class' );
      }  
      return $processor->get_updated_html();
   }
   return $block_content;
}

add_filter( 'render_block', 'add_html_attr_accessibility', 10, 2 );