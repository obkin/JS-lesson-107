'use strict';

const data = [
    {
        id: 'box',
        tag: 'div'
    },
    {
        id: 'someid',
        tag: 'nav'        
    },
    {
        id: 'circle',
        tag: ''
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
    if (e.name === 'SyntaxError') {
        console.error(e.message);
    } else {
        throw e;
    }
}

// const err = new SyntaxError('gg');
// console.log(err.name);
// console.log(err.message);
// console.log(err.stack);