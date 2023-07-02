'use client'

import { Button, TextField } from "@mui/material"
import axios from "axios"
import { useRouter } from "next/navigation"
import { useState } from "react"

export default function Form() {

    const router = useRouter()
    const [weightValue, setWeightValue] = useState(undefined)

    function handleSubmit(e) {
        e.preventDefault()

        axios.post('/api', {weight: parseFloat(weightValue).toFixed(1)}).then(() => { router.refresh() })
    }

    function handleChange(e) {
        const regex = /([0-9]*[\.]{0,1}[0-9]{0,2})/s;

        const currentValue = e.target.value

        setWeightValue(currentValue.match(regex)[0])
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <TextField id="weightInput" onChange={handleChange} value={weightValue} label="Current Weight" variant="outlined" required/>
            <Button type="submit" variant="contained">Submit</Button>
        </form>
    )
}