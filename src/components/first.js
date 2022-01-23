import React from "react";
import '../Component.css';


const First = (props) => {
    const addData = () => {
        const dataNew = prompt('Please enter new data');
        if (!dataNew) {
            alert('Data cannot be empty');
            return
        }
        props.onAdd('1', dataNew)

    }
    const updateData = () => {
        const dataNew = prompt('Please enter updated data');
        if (!dataNew) {
            alert('Data cannot be empty');
            return
        }
        props.onUpdate('1', dataNew, props.id)

    }
    return (
        <div className="box">
            <div>{props.data}</div>
            <button className="add-button button" onClick={addData} >Add</button>
            <button className="update-button button" onClick={updateData} >Update</button>
        </div>



    )
}
export default First;