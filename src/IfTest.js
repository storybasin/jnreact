import React, { Component } from 'react';

class IfTest extends Component {
    
    render() {
        const boolean = true;

        return (
            <div>
                <h1>{boolean ? '참' : '거짓'}</h1>
                <h1>{boolean && '거짓' }</h1>
            </div>
        );
    }
}

export default IfTest;