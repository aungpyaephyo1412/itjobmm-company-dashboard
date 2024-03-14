"use client"
import { Table, TableBody, TableCell, TableColumn, TableHeader, TableRow} from "@nextui-org/react";
import React from "react";
import {Application} from "@/types/applications.types";

const ApplicationsTable = ({applications}:{applications:Application[]}) => {
    return (
        <>
            <Table className="w-full" aria-label="Example table with custom cells">
                <TableHeader>
                    <TableColumn align="start">Name</TableColumn>
                    <TableColumn align="start">Email</TableColumn>
                    <TableColumn align="start">Phone</TableColumn>
                    <TableColumn align="start">Role</TableColumn>
                    <TableColumn align="start">Address</TableColumn>
                </TableHeader>
                <TableBody items={applications} emptyContent={<div className="text-lg font-semibold">There is no jobs!</div>}>
                    {(item) => (
                        <TableRow key={item.email}>
                            <TableCell align="left">
                                {item.name}
                            </TableCell>
                            <TableCell align="left">
                                {item.email}
                            </TableCell>
                            <TableCell align="left">
                                {item.phone}
                            </TableCell>
                            <TableCell align="left">
                                {item.role}
                            </TableCell>
                            <TableCell align="left">
                                {item.address}
                            </TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </>
    );
};

export default ApplicationsTable;