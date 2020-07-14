import React, { useState } from 'react'
import PropTypes from 'prop-types'

function AddTodo({ onCreate }) {
    const [value, setValue] = useState('')
    function sumbitHandler(event) {
        event.preventDefault()
            if (value.trim()) {
                onCreate(value)
                setValue('')
            }
        
    }
    return (
        <form style={{ marginBottom: '1rem' }} onSubmit={sumbitHandler}>
            <input value={value} onChange={event =>setValue(event.target.value)} />
            <button type="submit" style={{color:'white', backgroundColor:'green', borderRadius:'15%', marginLeft:'300px'}}>Додати в список</button>
        </form>
    )
    
}

AddTodo.propTypes = {
    onCreate: PropTypes.func.isRequired
}

export default AddTodo