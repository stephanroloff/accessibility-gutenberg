//Info:
//https://developer.wordpress.org/block-editor/reference-guides/filters/block-filters/
//https://css-tricks.com/a-crash-course-in-wordpress-block-filters/

//Paso 1
//Create Attribute
function addNewAttribute( settings, name ) {
    if (name === 'core/button' 
        || name === 'core/group'
        || name === 'core/paragraph'
    ) {
        settings.attributes = {
            ...settings.attributes,
            ariaLabel: {
                type: 'string',
                default: ''
            },
            role: {
                type: 'string',
                default: ''
            },
            tabindex: {
                type: 'string',
                default: ''
            }
        };
    }
    return settings;
}

wp.hooks.addFilter(
    'blocks.registerBlockType',
    'accessibility-plugin/add-new-attribute',
    addNewAttribute
);