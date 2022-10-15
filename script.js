'use strict';

const data = [
    {
        id: 'box',
        tag: 'div'
    },
    {
        id: '',
        tag: 'nav'        
    },
    {
        id: 'circle',
        tag: 'span'
    }
];

data.forEach(blockObj => {
    const block = document.createElement(blockObj.tag);

    if (!blockObj.id) throw '"id" is not defined.';

    block.setAttribute('id', blockObj.id);
    document.body.append(block);
});

