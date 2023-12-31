import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import {CSVLink} from 'react-csv'
const List2 = ({student}) => {
  return (
   <>
    {student&&student.map((stu)=>{
        const {date,name,attendanceStatus,subject}=stu;
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
              {attendanceStatus}
            </td>
          </tr>
            </>
        )
     })}
   </>
  )
}

export default List2