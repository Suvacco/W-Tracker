'use client'

import { Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';
import Data from './Data';

export default function DataTable({ data }) {
    return (
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Date</TableCell>
                    <TableCell>Weight</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                
                {data.map((record) => (
                    <Data key={record._id} weight={record.weight} date={record.date} />
                ))}
                
            </TableBody>
        </Table>
    )
}