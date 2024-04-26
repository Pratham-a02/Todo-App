import React, { useState } from 'react'

function TodoInput(props) {

    const[item,setItem] = useState('')

    return (
        <div className='input-container'>
            <input
                type='text'
                className='input-box-todo'
                placeholder='Enter the task'
                value={item}
                onChange={(e)=>{
                    setItem(e.target.value)
                }}
            />
            <button
            className='add-btn'
                onClick={()=>{
                    props.addItem(item)
                    setItem("")
                }}
            >+</button>
        </div>
    )
}

export default TodoInput