import React, { Component } from 'react';
import InputBoxes from './InputBoxes'

export default class Dwani extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            numBoxes: 4,
            perBox: 4, 
        }
    }

    handleChange = e => this.setState({ [e.target.name] : e.target.value ? Number(e.target.value) : e.target.value })
    
    render() {
        const { numBoxes, perBox } = this.state
        return (
            <>
                <div className="center">
                    <div className="input_wrapper">
                        <label htmlFor="numBoxes"> Number of Input Boxes</label>    
                        <input type="tel" name="numBoxes"  value={numBoxes} maxLength="1" onChange={this.handleChange} />
                    </div>
                    <div className="input_wrapper">
                        <label htmlFor="perBox">Characters Per Box</label>    
                        <input type="tel" name="perBox"  value={perBox} maxLength="1" onChange={this.handleChange} />
                    </div>
                </div>
                {
                    numBoxes && perBox ?             
                    <div className="input_container">
                        <InputBoxes dimensions={this.state} />
                    </div> : <div className="input_container"></div>
                }
            </>
        )   
    }
}
