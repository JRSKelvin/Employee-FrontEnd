import React, { useState, useEffect } from 'react'
// import ClipLoader from "react-spinners/ClipLoader";
import Swal from 'sweetalert2'

export default function Attendance({ Attendance }) {
   const submitHandlerAttendence = () => {
      // e.preventDefault();

      Attendance();
   }

   const [CurrentDate, setCurrentDate] = useState('')

   useEffect(() => {
      var date = new Date().getDate()
      var month = new Date().getMonth() + 1;
      var year = new Date().getFullYear()
      var hours = new Date().getHours()
      var min = new Date().getMinutes()
      var sec = new Date().getSeconds()

      setCurrentDate(
         date + '/' + month + '/' + year + ' ' + hours + ':' + min + ':' + sec
      )
      return () => {

      }
   }, [])

   const attendanceConfirmation = e => {
      e.preventDefault();
      Swal.fire({
         title: 'Absensi',
         text: "Apakah anda yakin ingin absen hari ini?",
         icon: 'question',
         showCancelButton: true,
         confirmButtonColor: '#3085d6',
         cancelButtonColor: '#d33',
         confirmButtonText: 'Iya',
         cancelButtonText: 'Tidak'
      }).then((result) => {
         if (result.isConfirmed) {
            submitHandlerAttendence()
         }
      })
   }
   require('./style.css')


   return (

      <div>
         <div style={{ position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)", textAlign: "center" }}>
            <h3>Tanggal: {CurrentDate}</h3>
            <br />
            <form onSubmit={attendanceConfirmation}>
               <button type="submit">Absen Hari Ini</button>

            </form>
            {/* <ClipLoader color={color} loading={loading} css={override} size={150} /> */}
         </div>
      </div>
   )
}