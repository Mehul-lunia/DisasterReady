import React from 'react'
import {Pagination} from 'react-bootstrap'
import { useContext } from 'react'
import { DataContext,PageNoContext } from './StartPage'
import "./component_pagination.css"



function Component_pagination() {
    const arr = [];
    const data = useContext(DataContext);
    const {pageNo,setPageNo} = useContext(PageNoContext);

    let pages = Math.ceil(data.length / 5);
    function changePage(idx)
    {
        if(idx >= 1 & idx <= pages) setPageNo(idx);
    }  
    for(let i=1; i<=pages; i++)
        {
            arr.push(<Pagination.Item key={i} active={true}><button  className="no-style" onClick={()=>{changePage(i)}}>{i}</button></Pagination.Item>)
        }
  return (
    <>
    <div className=' w-25 d-flex justify-content-between'>
        <button className='btn btn-sm btn-primary' onClick={() => changePage(pageNo-1)}>back</button>
        <Pagination size='lg'>
            <Pagination.Item key={pageNo} active={true}>{pageNo}</Pagination.Item>
        </Pagination>
        <button className='btn btn-sm btn-primary' onClick={()=>changePage(pageNo+1)}>next</button>
    </div>
        <br/>
    </>
  )
}

export default Component_pagination