import React, { useEffect } from 'react'
import { useState } from 'react'
import List from './/List'
import Navbar from './Navbar'

import "../Admin/Admin Dashboard/Register/registermultiple.css"


import "../Admin/Admin Dashboard/Register/registermultiple.css";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
const Classes_taken = () => {
  const [classes, setclasses] = useState([])
  const [professor, setprofessor] = useState("")
  const [teachername,setteachername]=useState("")
  const [teacherdata,setteacherdata]=useState([])
  const [visible,setVisible]=useState(false)
  const [string,setstring]=useState("")
  const[string2,setstring2]=useState("")
  const [loader,setloader]=useState(true)
  let data2;
  // if (professor == "Manish Shailani") {
  //   data2 = classes.filter((classes) => classes.name == professor)
  //   console.log(data2);
  // }
  // else if (professor == "Nitisha Aggarwal") {
  //   data2 = classes.filter((classes) => classes.name == professor)
  //   console.log(data2);
  // }
  // else if (professor == "Sanjeev Singh") {
  //   data2 = classes.filter((classes) => classes.name == professor)
  //   console.log(data2);
  // }
  // else if (professor == "Sunil Kumar") {
  //   data2 = classes.filter((classes) => classes.name == professor)
  //   console.log(data2);
  // }
  // else if (professor == "Unmesh Shukla") {
  //   data2 = classes.filter((classes) => classes.name == professor)
  //   console.log(data2);
  // }
   const fetchdata = async () => {
    setloader(true)
    const response = await fetch(`https://isd-b4ev.onrender.com/classestaken/${teachername}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      }
    })
    const json = await response.json()
    setclasses(json.data)
    setVisible(json.status)
    setloader(false)
    if(json.status)
    {
      setstring(`Total Classes taken by ${teachername}`)
    }
    if(!json.status)
    {
      setstring2(`${teachername} has not taken any class yet`)
    }
    console.log(json.data);
  }
   const fetchteacher = async () => {
    const response = await fetch("https://isd-b4ev.onrender.com/teacherdata", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      }
    })
    const json = await response.json()
    setteacherdata(json.data)
    console.log(json.data)
    if(json.success)
    {
      setteachername(json.data[0].name)
      fetchdata()
    }
  }
  useEffect(() => {
    fetchteacher()
  }, [])

  useEffect(()=>{
    fetchdata()
  },[teachername])
  return (
    <>
      <div className='height100vh'>
        <Navbar />

        <div className=" mb-3" >
          {/* <label className="form-label">Select Filter</label> */}
          <select
            type="text"
            className="form-control-8"
            id="filter"
            name="filter"
            value={teachername}
            onChange={(e) => setteachername(e.target.value)}
          >

            {
              teacherdata && teacherdata.map((x)=>{
                return(
                  <>
            <option value={x.name}>
              {x.name}
            </option>
                  </>
                )
              })
            }

            {/* <option>
              Select Professor
           
            <option value="Nitisha Aggarwal">
              Nitisha Aggarwal
            </option>
            <option value="Sanjeev Singh">
              Sanjeev Singh
            </option>
            <option value="Sunil Kumar">
              Sunil Kumar
            </option>
            <option value="Unmesh Shukla">
              Unmesh Shukla
            </option> */}
          </select>
        </div>
        {!visible&&<div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
        <h5>{string2}</h5>

            </div>}
        
        {visible && <> <div class="row overviewdatacontent" >
          <div className="col-lg-7 col-md-6 col-sm-12 datacontent flex" >

            <div className="classtkn">
              <h5>Total classes taken by {teachername}</h5>

            </div>
            <div className="classinfoval">
              <h5>{classes.length}</h5>

            </div>
          </div>
        </div> <div className='main overflowxauto'>
            <table className='table table-striped overflowxauto' id='mytable-5'>
              <thead className='heading_1'>
                <tr>
                  <th>Professor</th>
                  <th>Subject</th>
                  <th>Date</th>
                  <th>Semester</th>
                </tr>
              </thead>
              <tbody>
                <List classes={classes} />
              </tbody>
            </table>
          </div> </>}
      </div>
      {loader &&  <Backdrop
            sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open
          >
            <CircularProgress color="inherit" />
          </Backdrop>}
    </>
  )
}

export default Classes_taken
