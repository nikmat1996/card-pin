import React from 'react';


const elemRefs = []

const Input = (props) => {
    const ref = React.createRef();
    elemRefs.push(ref);
    return (
        <input
        className="block"
        name={props.index}
        ref={ref}
        onChange={""}
        placeholder={props.index}
        />
    );
};

const InputBoxes = ({ dimensions }) => new Array(Number(dimensions.noBoxes)).fill("").map((item, index) => <Input key={index} index={index} handleChange={""} />)

export default InputBoxes