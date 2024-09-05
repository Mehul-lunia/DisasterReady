import React from 'react'
import './ComponentTable.css';



function ComponentRow({row}) {
  
    function redirect(url)
    {
        window.location = url;
    }
    return (
    <>
        <tr>
          <td>{row.Date_Time}</td>
          <td>{row.Magnitude}</td>
          <td>{row.Region}</td>
          <td><button onClick={()=>{redirect(row.url)}}>Learn More</button></td>
        </tr>
    </>
  )
}

export default ComponentRow