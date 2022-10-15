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

try {
    data.forEach((blockObj, i) => {
        const block = document.createElement(blockObj.tag);
    
        if (!blockObj.id) {
            throw new SyntaxError(`в данных под номером ${i + 1} отсутствует id.`);
        }
    
        block.setAttribute('id', blockObj.id);
        document.body.append(block);
    });
} catch(e) {
    console.error(e.name);
    console.log(e.message);
    console.log(e.stack);
}

// const err = new SyntaxError('gg');
// console.log(err.name);
// console.log(err.message);
// console.log(err.stack);