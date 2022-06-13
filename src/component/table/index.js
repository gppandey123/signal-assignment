import React from 'react';
import './style.css';

const Table = ({tableData, settableData }) => {

    const handleDelete = (index) => {
        tableData.splice(index, 1);
        settableData([...tableData]);
    }

    return (
        <div className='div'>
        <table class="table table-bordered">
            <thead class="thead-light">
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Location</th>
                    <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
                {
                 tableData.map((item, index) => {
                    return(
                        <tr key={index}>
                        <td>{item.name}</td>
                        <td>{item.location}</td>
                        <td  id="button" onClick={() => handleDelete(index)}>delete</td>
                    </tr>
                    )
                 })   
                }
               
            </tbody>
        </table>
        </div>
    )
}

export default Table