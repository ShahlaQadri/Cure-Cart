import React, { useMemo } from 'react'
import { useTable } from 'react-table' 
import MOCK_DATA from './MOCK_DATA.json'
import { COLUMNS } from './Columns'

const Table = () => {

    const columns = useMemo(() => COLUMNS, [])
    const data = useMemo(() => MOCK_DATA, [])

    const tableInstance = useTable({
        columns,
        data
    })

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    }=tableInstance

  return (
    <table {...getTableProps()} className="table-auto border-collapse border w-[90%] mt-6 mx-10">
        <thead className="bg-green-300">
                {headerGroups.map((headerGroup) => (
           <tr {...headerGroup.getHeaderGroupProps()}>
            {
               headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}  className="p-3 text-left">{column.render('Header')}</th>
               ))}
           </tr>
                ))}
        </thead>

        <tbody {...getTableBodyProps()}>
            {
                rows.map(row =>{
                    prepareRow(row)
                    return(
                        <tr {...row.getRowProps()} className="border-t">
                            {
                                row.cells.map(cell => {
                                    return  <td {...cell.getCellProps()} className="p-3"> {cell.render('Cell')}</td>
                                })}
                       
                    </tr>

                    )
                })}
           
        </tbody>
      
    </table>
  )
}

export default Table
