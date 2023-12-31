import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import {CSVLink} from 'react-csv'
const List = ({classes}) => {
  return (
   <>
    {classes.map((data)=>{
        const {date,name,subject,semester}=data;
        return(
            <>
               <tr>
            <td>
              {name}
            </td>
            <td>
              {subject}
            </td>
            <td>
              {date}
            </td>
            <td>
                {semester}
            </td>
          </tr>
            </>
        )
     })}
   </>
  )
}

export default List