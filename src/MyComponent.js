import React, { Component } from 'react';
import PropTypes from 'prop-types'

class MyComponent extends Component {
    
    static defaultProps = {
        name: '기본이름'
    }

    static propType = {
        name: PropTypes.string,
        age: PropTypes.number.isRequired
    }

    state = {
        number: 0
    }

    render() {
        return (
            <div>
                <p>캐롯 손해보험 프로젝트 담당자의 이름은 {this.props.name} 입니다.</p>
                <p>저는 {this.props.age}살 입니다.</p>
                <p>숫자: {this.state.number}</p>
                <button onClick={() => {
                    this.setState({
                        number: this.state.number + 1
                    })
                }}>
                1 더하기 버튼
                </button>
            </div>
        );
    }
}

export default MyComponent;