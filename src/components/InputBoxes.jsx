import React from 'react';


const handleChange = (e, dimensions) => {
    let { name, value } = e.target;
    const { perBox, numBoxes } = dimensions; 
    let focusElem = null;

    if(value.length === perBox && name !== elemRefs.length - 1) focusElem = elemRefs[Number(name) + 1]
    if(value.length === 0      && name !== 0)                   focusElem = elemRefs[Number(name) - 1]
    
    if(value.length > perBox){
        var remainingVal = ""
        for(let i = name ; i < numBoxes ; i++){
            remainingVal += elemRefs[i].current.value
        }
        
        let dummy = ""
        for(let char of remainingVal){
            dummy += char
            if(dummy.length === perBox){
                elemRefs[name].current.value = dummy
                dummy = ""
                name++
            }
            if(name === numBoxes)  break;
        }
        if(dummy) elemRefs[name].current.value = dummy
        
        focusElem = elemRefs[name] || elemRefs[name - 1]
    }

    if(focusElem) focusElem.current.focus()
}

const elemRefs = []

const Input = props => {
    const ref = React.createRef(), { index, dimensions, handleChange } = props;
    const { perBox, numBoxes } = dimensions;
    if(index === 0) elemRefs.length = 0
    elemRefs.push(ref);
    return  <input name={index} ref={ref} onChange={ e => handleChange(e, dimensions) } maxLength={elemRefs.length === numBoxes ? perBox : null} />
};

const InputBoxes = ({ dimensions }) => new Array(Number(dimensions.numBoxes)).fill("").map((item, index) => 
    <Input key={index} index={index} dimensions={dimensions} handleChange={handleChange} />)


export default InputBoxes