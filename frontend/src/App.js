import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Admin from './components/Admin/Admin Dashboard/login';
import Register_teacher from './components/Admin/Admin Dashboard/Register/registerteacher'
import Register_student from './components/Admin/Admin Dashboard/Register/registerstudent'
import Register_Mul_student from './components/Admin/Admin Dashboard/Register/registermultiplestudents'
import Attendance_report from './components/Admin Dashboard/Attendance_report';
import AdClasses_taken from './components/Admin Dashboard/Classes_taken';
import Home from './components/Admin Dashboard/Home';
import DeleteStudent from './components/Admin/Admin Dashboard/Delete/deletestudent';
import DeleteTeacher from './components/Admin/Admin Dashboard/Delete/deleteteacher';
import StudentUpdate from './components/Admin/Admin Dashboard/update/updatestudent';
import TeacherUpdate from './components/Admin/Admin Dashboard/update/updateteacher';
import AttendanceFilters from './components/Admin Dashboard/AttendanceFilters';


function App() {


  useEffect(() => {
    window.process = {
      ...window.process,
    };
  }, []);



  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* <Route path='/' exact element={<Homepage />} /> */}
          <Route path='/' exact element={<Admin />} />
          <Route path='/registerTeacher' element={<Register_teacher />} />
          <Route path='/deletestudent' element={<DeleteStudent />} />
          <Route path='/deleteteacher' element={<DeleteTeacher />} />
          <Route path='/updateteacher' element={<TeacherUpdate />} />
          <Route path='/updatestudent' element={<StudentUpdate />} />
          <Route path='/registerStudent' element={<Register_student />} />
          <Route path='/registerAllStudent' element={<Register_Mul_student />} />
          <Route path="/admindashboard/attendancereport" element={<Attendance_report />} />
          {/* <Route path="/admindashboard/Sem1/attendance" element={<AdminSem1Attendance />} />
          <Route path="/admindashboard/Sem2/attendance" element={<AdminSem2Attendance />} />
          <Route path="/admindashboard/Sem3/attendance" element={<AdminSem3Attendance />} />
          <Route path="/admindashboard/Sem4/attendance" element={<AdminSem4Attendance />} /> */}
          <Route path="/admindashboard/attendance/:semester" element={<AttendanceFilters />} />
          <Route path="/admindashboard/classestaken" element={<AdClasses_taken />} />
          <Route path="/admindashboard" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
