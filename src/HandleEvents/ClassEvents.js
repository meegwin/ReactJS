import React, { Component } from 'react'

export default class ClassEvents extends Component {
    handleFocus = () => {
        console.log("da focus roi nha");
    }
    handleFocusParams = (message) => {
        console.log(message);
    }
    render() {
        return (
            <div>
                <h2>Class Event</h2>
                <input type="text" placeholder="focus" 
                    onFocus={this.handleFocus}
                    />
                <input type="text" placeholder="focus" 
                    onFocus={ () =>this.handleFocusParams("Quang dep trai ")}
                />
            </div>
        )
    }
}
