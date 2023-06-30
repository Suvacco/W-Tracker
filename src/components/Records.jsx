import Weight from "@/models/Weight"
import Data from "./Data"
import dateFormat from "dateformat"
import dbConnect from "@/lib/dbConnect"

async function getData() {
    await dbConnect()

    return await Weight.find()
}

export default async function Records() {
    const data = await getData()
    
    return (
        <table>
            <tbody>
                <tr>
                    <th>Data</th>
                    <th>Peso</th>
                </tr>

                {data.map((d) => (<Data key={d.id} weight={d.weight} date={dateFormat(d.date, 'dd/mm/yy')} />))}
            </tbody>
        </table>
    )
}