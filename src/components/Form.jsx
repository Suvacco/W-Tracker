'use client'

import axios from "axios"

export default function Form() {

    function handleSubmit(e) {
        e.preventDefault()

        const weightValue = e.target.weight.value

        axios.post('/api', {weightValue})
    }
    
    return (
        <>

            <form onSubmit={handleSubmit}>

                <label htmlFor="weightInput">Insert your weight: </label>
                <input type="text" name="weight" id="weightInput" />

                <button type="submit">Submit</button>
            </form>
        </>
    )
}