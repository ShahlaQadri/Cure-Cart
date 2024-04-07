import React, { useMemo } from 'react'
import { useTable, usePagination } from 'react-table' 
import MOCK_DATA from './MOCK_DATA.json'
import { COLUMNS } from './Columns'

const Table = () => {

    const columns = useMemo(() => COLUMNS, [])
    const data = useMemo(() => MOCK_DATA, [])

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        page,
        nextPage,
        previousPage,
        canNextPage,
        canPreviousPage,
        pageOptions,
        state,
        prepareRow,
    }=useTable(
        {
        columns,
        data,
        initialState: { pageIndex: 0, pageSize: 5 }
    },
       usePagination
       )

       const { pageIndex } = state

  return (
    <>
    <table {...getTableProps()} className="table-auto border-collapse border w-[90%] mt-6 mx-10">
        <thead className="">
                {headerGroups.map((headerGroup) => (
           <tr {...headerGroup.getHeaderGroupProps()}>
            {
               headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}  className="p-2 text-left">{column.render('Header')}</th>
               ))}
           </tr>
                ))}
        </thead>

        <tbody {...getTableBodyProps()}>
            {
                page.map(row =>{
                    prepareRow(row)
                    return(
                        <tr {...row.getRowProps()} className="border-t">
                            {
                                row.cells.map(cell => {
                                    return  <td {...cell.getCellProps()} className="p-2"> {cell.render('Cell')}</td>
                                })}
                       
                    </tr>

                    )
                })}
           
        </tbody>
      
    </table>
    <div className='flex justify-center items-center gap-2 mt-2'>
               <span>
                    Page{' '}
                    <strong>
                        {pageIndex + 1} of {pageOptions.length}
                    </strong>{' '}
                </span>
        <button className='border border-black' onClick={() => previousPage()} disabled={!canPreviousPage} >Previous</button>
        <button className='border border-black' onClick={() => nextPage()} disabled={!canNextPage}>Next</button>
    </div>
    </>
  )
}

export default Table
