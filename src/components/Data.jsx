import { TableCell, TableRow } from "@mui/material";
import dateFormat from 'dateformat';

export default function Data({ weight, date }) {

    const parsedDate = dateFormat(date, 'dd/mm/yy')
    
    const parsedWeight = weight.toLocaleString("en", {useGrouping: false, minimumFractionDigits: 1})

    return (
        <TableRow>
            <TableCell>{parsedDate}</TableCell>
            <TableCell>{parsedWeight}</TableCell>
        </TableRow>
    )
}