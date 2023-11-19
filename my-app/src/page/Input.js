import React, { useState } from "react";

const Input = () => {

    const [textTest, setTextTest] = useState("");

    const onChange = (e) => {
        setTextTest(e.target.value);
    }
    return(
        <div>
            <input type="text" onChange={onChange} value={textTest}/>
            <p>{textTest}</p>
       </div>
    );


}

export default Input;