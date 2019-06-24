import React, { Component } from 'react';

class EventPractice extends Component {
    render() {
        return (
            <div>
                <h1>이벤트 연습을 시작해 봅시다</h1>
                <input 
                    type="text" 
                    name="message" 
                    placeholder="입력"
                    onChange={
                        (e) => { console.log(e.target.value); }
                    }
                />
            </div>
        );
    }
}

export default EventPractice;