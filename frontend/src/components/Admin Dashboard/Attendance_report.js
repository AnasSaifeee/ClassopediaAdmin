import React from 'react'
import Navbar from "./Navbar.js"
import { Link } from "react-router-dom";
import "./sem.css"
import "../Admin/Admin Dashboard/Register/registermultiple.css"

function Attendance_report() {
    return (
        <div className='height100vh'>
        <div className='page'>
            <Navbar />
            <div class="album py-5  text-center">
                <div class="container">
                    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-2 g-3">
                        <Link to='/admindashboard/attendance/Sem-1'><div class="col">
                            <div class="card-body">
                                <h3>Sem 1</h3>
                            </div>
                        </div>
                        </Link>
                        <Link to="/admindashboard/attendance/Sem-2"><div class="col">

                            <div class="card-body">
                                <h3>Sem 2</h3>
                            </div>
                        </div>
                        </Link>
                        <Link to="/admindashboard/attendance/Sem-3"> <div class="col">
                            <div class="card-body">
                                <h3>Sem 3</h3>
                            </div>
                        </div>
                        </Link>
                        <Link to="/admindashboard/attendance/Sem-4">
                            <div class="col">
                                <div class="card-body">
                                    <h3>Sem 4</h3>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Attendance_report