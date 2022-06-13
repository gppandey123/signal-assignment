import React, { useState } from 'react';
import  './style.css';

const Form = ({tableData, settableData}) => {
    const [inputData, setInputData] = useState({ name: "", location: "" });

    const handleChange = (event) => {
        setInputData({...inputData, [event.target.name] : event.target.value})
    }
    const handleOnClick = () => {
        settableData([...tableData, inputData]);
        setInputData({ name: "", location: "" });
    } 

    return (
        <div className="form">
            <input className="form-control" type="text" placeholder='Name' name="name" value={inputData.name} onChange={(event) => handleChange(event)} />
            <input className="form-control" type="text" placeholder='Location' name="location" value={inputData.location} onChange={(event) => handleChange(event)} />
            <button className='button' onClick={handleOnClick}>Add</button>
        </div>
    )
}

export default Form