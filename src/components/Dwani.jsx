import React, { Component } from 'react';
import InputBoxes from './InputBoxes'

export default class Dwani extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            noBoxes: 4,
            perBox: 4
        }
    }

    handleChange = e => {
        this.setState({ [e.target.name] : e.target.value })
    }
    
    render() {
        return (
            <>
                <div className="center">
                    <div className="input_wrapper">
                        <label htmlFor="noBoxes"> Number of Input Boxes</label>    
                        <input type="tel" name="noBoxes" defaultValue="4" maxLength="1" onChange={this.handleChange} />
                    </div>
                    <div className="input_wrapper">
                        <label htmlFor="perBox">Characters Per Box</label>    
                        <input type="tel" name="perBox" defaultValue="4" maxLength="1" onChange={this.handleChange} />
                    </div>
                </div>
                <InputBoxes dimensions={this.state} />
            </>
        )   
    }
}
