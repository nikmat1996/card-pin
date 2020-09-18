import React from 'react';


const handleChange = (e, perBox) => {
    const { name, value } = e.target;
    // console.log(name, value, perBox, elemRefs, name)
    let elem = null;
    if(value.length === perBox && name !== elemRefs.length - 1) elem = elemRefs[Number(name) + 1]
    if(value.length === 0      && name !== 0)                   elem = elemRefs[Number(name) - 1]
    if(elem) elem.current.focus()
}

const elemRefs = []

const Input = props => {
    const ref = React.createRef(), { index, perBox, handleChange } = props;
    elemRefs.push(ref);
    return  <input name={index} ref={ref} onChange={e => handleChange(e,perBox)} placeholder={index} maxLength={perBox} />
};

const InputBoxes = ({ dimensions }) => new Array(Number(dimensions.noBoxes)).fill("").map((item, index) => 
    <Input key={index} index={index} perBox={Number(dimensions.perBox)} handleChange={handleChange} />)


export default InputBoxes