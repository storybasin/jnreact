import React, { Component } from 'react';

class LiterationSample extends Component {
    
    state = {
        names : ['김지남','이현희','오보미','빼애앰'],
        name : ''
    }

    inputChange = (e) => {
        this.setState({
            name: e.target.value
        });
    }

    clickInsert = (e) => {
        this.setState({
            names: this.state.names.concat(this.state.name),
            name: ''
        });
    }

    delete = (index) => {
        console.log(index);
        const {names} = this.state;
        this.setState({
            names: names.filter((i) => i !== index)
        });
    }

    render() {
        
        const nameList = this.state.names.map(
            (name, index) => 
                            (<li key={index} onDoubleClick={this.delete}>{name}</li>)
        );

        return (
            <>
                <ul>
                    {nameList}
                </ul>
                <input type="text" onChange={this.inputChange} value={this.state.name} />
                <button onClick={this.clickInsert}>추가하기</button>
            </>
        );
    }
}

export default LiterationSample;