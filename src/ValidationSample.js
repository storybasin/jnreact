import React, { Component } from 'react';
import './ValidationSample.css'

class ValidationSample extends Component {
    
    state = {
        pw : '',
        clicked : false,
        validated : false
    }
    
    handleChange = (e) => {
        this.setState({
            pw: e.target.value
        });
    }

    handleButtonClick = () => {
        this.setState({
            clicked : true,
            validated: this.state.pw === '0000'
        });
        this.aaa.focus();
    }


    render() {
        return (
            <div>
                {/* input */}
                <input 
                    type="password" 
                    value={this.state.pw} 
                    onChange={this.handleChange}
                    className={this.state.clicked ? (this.state.validated ? 'success' : 'failure') : ''}
                    ref={(ref) => this.aaa = ref}
                >
                </input>

                {/* button */}
                <button onClick={this.handleButtonClick}>검증하기</button>

            </div>
        );
    }
}

export default ValidationSample;