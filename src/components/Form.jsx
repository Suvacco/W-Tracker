'use client'

import axios from "axios"
import { useRouter } from "next/navigation"

export default function Form() {

    const router = useRouter()

    function handleSubmit(e) {
        e.preventDefault()

        const weightValue = e.target.weight.value

        axios.post('/api', {weightValue}).then(() => { router.refresh() })
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="weightInput">Insert your weight: </label>
            <input type="text" name="weight" id="weightInput" />

            <button type="submit">Submit</button>
        </form>
    )
}