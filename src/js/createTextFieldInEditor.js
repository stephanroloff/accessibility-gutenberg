//Paso 2
//Crear Text Field en el Editor
const { createHigherOrderComponent } = wp.compose;
const { InspectorControls } = wp.blockEditor;
const { PanelBody, TextControl, SelectControl } = wp.components;
import { __experimentalNumberControl as NumberControl } from '@wordpress/components';
import {optionsRole} from './listOptionsAriaRole';

const withMyPluginControls = createHigherOrderComponent( ( BlockEdit ) => {
    return ( props ) => {
        const { name, attributes, setAttributes } = props;

        if (name !== 'core/button' && 
            name !== 'core/group' && 
            name !== 'core/paragraph'
        ) {
            return <BlockEdit {...props} />;
        }

        return (
            <>
                <BlockEdit { ...props } />
                <InspectorControls>
                    <PanelBody title="Barrierefreiheit" initialOpen={ false }>
                        <TextControl
                            label="ARIA Label"
                            value={ attributes.ariaLabel } 
                            onChange={ ( newValue ) => setAttributes( { ariaLabel: newValue } ) } 
                            // placeholder=" Enter aria-label"
                        />
                        <SelectControl
                            label="Role"
                            value={ attributes.role } 
                            onChange={ ( newValue ) => setAttributes( { role: newValue } ) } 
                            options={ optionsRole }
                        />
                        <p style={{ color: 'gray' }}>If you add a role, the ARIA label will not be read by the screen reader.</p>
                        <p style={{ color: 'gray' }}>Some HTML markup have implicit ARIA semantics. Explicitly assigning these in markup is NOT RECOMMENDED.</p>
                        
                        <NumberControl
                            label="Tabindex"
                            isShiftStepEnabled={ true }
                            onChange={ ( newValue ) => setAttributes( { tabindex: newValue } ) } 
                            shiftStep={ 1 }
                            value={ attributes.tabindex }
                            min={0}
                        />

                    </PanelBody>
                </InspectorControls>
            </>
        );
    };
}, 'withMyPluginControls' );

wp.hooks.addFilter(
    'editor.BlockEdit',
    'accessibility-plugin/with-inspector-controls',
    withMyPluginControls
);
