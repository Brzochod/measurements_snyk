import React from 'react';
import styles from './table.module.scss';
import { Table, TableHead, TableRow, TableBody, TableCell, Modal } from '@material-ui/core';
import { getDetail } from './fetch';

type Data = {
    id: string,
    time: string,
    t1: number,
    t2: number
}

const handleRowClick = async (id: string) => {
    const detailData = await getDetail(id);
    console.log(`Opening modal with this data`, detailData);    
}

const BestTable = ({data}: {data: Data[]}) => {
    return <div className={styles['best-table']}>
        {renderModal()}
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell>Time</TableCell>
                    <TableCell>T1</TableCell>
                    <TableCell>T2</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {data.map(item => (
                    <TableRow key={item.id} onClick={() => handleRowClick(item.id)}>
                        <TableCell>{item.id}</TableCell>
                        <TableCell>{item.time}</TableCell>
                        <TableCell>{item.t1}</TableCell>
                        <TableCell>{item.t2}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    </div>;
}

export default BestTable;