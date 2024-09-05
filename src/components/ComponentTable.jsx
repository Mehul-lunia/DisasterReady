import React from 'react'
import ComponentRow from './ComponentRow';
import './ComponentTable.css';

function ComponentTable({data}) {
  return (
    <div style={{"display":"flex","justifyContent":"center"}}>

    <table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>DateTime</th>
          <th>Magnitude</th>
          <th>Region</th>
          <th>URL</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row,index)=>
            {
                return(<ComponentRow row={row}/>)
            })}
      </tbody>
    </table>
    </div>
  )
}

export default ComponentTable