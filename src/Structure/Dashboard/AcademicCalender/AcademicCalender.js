import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import profile from "../../images/profile/profile.png";

const AcademicCalender = () => {
   const navigate = useNavigate();
   const [inputDate, setInputDate] = useState('')
   const [topic, setTopic] = useState('')
   const [calender, setcalender] = useState([])
   const [show, setShow] = useState(true)
   const [add, setAdd] = useState(false)
   const [reset, setReset] = useState(0)
   const [school_name, setSchoolName] = useState(localStorage.getItem("school_name"));
   const [user_code, setUser_code] = useState(localStorage.getItem("admin_code"));
   const [first_name, setFirst_code] = useState(localStorage.getItem("first_name"));
   const [school_id, setschool_code] = useState(localStorage.getItem("school_id"));
   const [last_name, setLast_code] = useState(localStorage.getItem("last_name"));
   const [id, setId] = useState('')
   const [showModal, setShowModal] = useState(false);
   const handleClose = () => setShowModal(false);
   const handleShow = () => setShowModal(true);
   const [access_token, setAccess_token] = useState(
      localStorage.getItem("access_token"));
   const checkLoggedIn = () => {
      if (localStorage.getItem("user_type") != 4) {
         navigate("/login");
      }
   };
   useEffect(() => {
      checkLoggedIn();
   }, []);

   const handleDate = e => {
      setInputDate(e.target.value)
      console.log(e.target.value)
      e.preventDefault()
   }

   const handleTopic = e => {
      setTopic(e.target.value)
      console.log(e.target.value)
   }

   useEffect(() => {
      axios.get(`${process.env.REACT_APP_NODE_API}/api/calender/teacher?school_info_id=${school_id}`,
         {
            headers: {
               authorization: "bearer " + localStorage.getItem("access_token"),
            },
         }
      ).then((response) => {
         setcalender(response.data);
      });
   }, [topic, reset]);

   const handleSubmit = () => {
      fetch(`${process.env.REACT_APP_NODE_API}/api/calender`,
         {
            method: "POST",
            headers: {
               "Content-Type": "application/json",
               authorization: "bearer " + localStorage.getItem("access_token"),
            },

            body: JSON.stringify({
               school_info_id: school_id,
               date: inputDate,
               topics: topic,
               id: id
            }),
         })
         .then((res) => res.json())
         .then((json) => {
            setReset(reset + 1)
            if (id === '') {
               toast('Academic Calendar saved successfully')
            } else {
               toast('Academic Calendar updated successfully')
            }
            console.log("ok");
         });

      setInputDate('')
      setTopic('')

   };
   const deleteCalender = async (id) => {
      const check = window.confirm('Are you sure to delete?');
      if (check) {
         axios.defaults.headers.common['authorization'] = "bearer " + localStorage.getItem("access_token")
         const result = await axios.post(`${process.env.REACT_APP_NODE_API}/api/calender/delete?id=${id}`)
         if (result) {
            toast("Academic Calendar deleted successfully");
            setTopic(' ')
            setReset(reset + 1)
         }
      }
   }
   const editAcademic = (info) => {
      setAdd(true);
      setInputDate(info.date)
      setTopic(info.topics)
      setId(info.id)

   }
   const handleUpdate = () => {
      fetch(`${process.env.REACT_APP_NODE_API}/api/calender/update?id=${id}`, {
         method: "POST",
         headers: {
            "Content-Type": "application/json",
            authorization: "bearer " + localStorage.getItem("access_token"),
         },
         body: JSON.stringify({
            date: inputDate,
            topics: topic

         }),

      })
         .then((res) => res.json())
         .then((json) => {

            alert("Calender updated successfully!!")

         });
      setTopic('')
      setInputDate('')
   };

   return (
      <>
         <div style={{ height: "80px" }} className="bg-primary">
            <div
               style={{ display: "flex", justifyContent: "space-between" }}
               className="container"
            >
               <div>
                  <img
                     style={{ width: "50px" }}
                     className="pt-3"
                     src={profile}
                     alt=""
                  />
               </div>

               <div>
                  <h3
                     className=""
                     style={{
                        color: "white",
                        fontSize: "25px",
                        fontWeight: "bold",
                     }}
                  >
                     Name : {first_name} ({last_name})
                  </h3>
                  <h4
                     className=""
                     style={{
                        color: "white",
                        fontSize: "25px",
                        fontWeight: "bold",
                     }}
                  >
                     Admin Id: {user_code}
                  </h4>
               </div>
            </div>
         </div>

         <div className='container pt-4'>
            <div className='row'>
               <div className='col-md-12'>
                  <div className="card card-dark collapsed-card">
                     <div className="card-header">
                        <div className='d-flex justify-content-between px-4'>
                           <div>
                              <h3 style={{ color: 'LightSeaGreen', fontSize: '25px', fontWeight: 'bold' }} class="card-title pt-2">Academic Calender</h3>
                           </div>
                           <div className="card-tools">
                              <button onClick={() => {
                                 setAdd(true)
                              }} id="w-change-close" type="button" className="btn btn-tool" data-card-widget="collapse"><i className="fas fa-plus icons" /> Add Calender
                              </button>
                              {/* onClick={handlelist} */}
                              {/* active */}
                           </div>
                        </div>
                     </div>

                     <div className='card-body' >
                        {/* id='list' */}

                        {add ? (
                           <div className='row'>
                              <div class={"col-sm-4 p-2 mx-auto"}>
                                 <div class="form-group">
                                    <label className='pb-2' for="exampleInputEmail1">Schedule Type : </label>
                                    <input onChange={handleTopic} type="text" class="form-control" value={topic} />
                                 </div>
                              </div>
                              <div class={"col-sm-4 p-2 mx-auto"}>
                                 <div class="form-group">
                                    <label className='pb-2' for="exampleInputEmail1">Schedule Date : </label>
                                    <input onChange={handleDate} type="text" value={inputDate} class="form-control" />
                                 </div>
                              </div>
                              <div class={"col-sm-2 p-2 mx-auto"}>
                                 <div className='pt-2 mx-auto'>
                                    <button onClick={handleSubmit} style={{ color: 'white', fontSize: '20px' }} type="button" class="btn bg-secondary bg-gradient px-5">Submit</button>
                                 </div>
                              </div>
                           </div>) : null
                        }






                     </div>

                  </div>
               </div>
            </div>


            {
               show ? (
                  <section className='py-5'>
                     <h2 style={{ color: 'white', fontSize: '30px', fontWeight: 'bold' }} className='px-3 py-2 bg-info bg-gradient'>Organization Information</h2>

                     <table class="table table-striped">
                        <thead>
                           <tr style={{ textAlign: 'center' }}>
                              <th scope="col">Schedule Type</th>
                              <th scope="col">Schedule Date</th>
                              <th scope="col">Edit</th>

                              <th scope="col">delete</th>
                           </tr>
                        </thead>
                        <tbody>
                           {
                              calender.sort((a, b) => {
                                 return b.id - a.id;
                              }).map((info) => {


                                 return (
                                    <tr key={info.id}>
                                       <td style={{ textAlign: 'center' }}>{info.topics}</td>
                                       <td style={{ textAlign: 'center' }}>{info.date}</td>
                                       <td style={{ textAlign: 'center' }}>
                                          <button
                                             style={{ color: "white" }}
                                             className="bg-success"
                                             onClick={() => {
                                                handleShow()
                                                editAcademic(info)
                                             }}
                                          >
                                             Edit
                                          </button>
                                       </td>
                                       <td style={{ textAlign: 'center' }}>
                                          <button
                                             style={{ color: "white" }}
                                             className="bg-danger"
                                             onClick={() => deleteCalender(info.id)}
                                          >
                                             Delete
                                          </button>
                                       </td>
                                    </tr>
                                 )
                              })
                           }
                        </tbody>
                     </table>
                  </section>
               ) : null
            }

         </div>
         {showModal && <div className="tw-fixed tw-inset-0 tw-z-50 tw-grid tw-place-items-center tw-bg-slate-950/40 tw-p-4 tw-backdrop-blur-sm" role="dialog" aria-modal="true" aria-labelledby="calendar-modal-title">
            <button className="tw-absolute tw-inset-0 tw-cursor-default tw-border-0 tw-bg-transparent" onClick={handleClose} aria-label="Close modal" />
            <div className="tw-relative tw-z-10 tw-w-full tw-max-w-lg tw-rounded-3xl tw-bg-white tw-p-6 tw-shadow-2xl">
               <div className="tw-mb-6">
                  <p className="tw-m-0 tw-text-xs tw-font-bold tw-uppercase tw-tracking-[0.18em] tw-text-indigo-600">Academic calendar</p>
                  <h2 id="calendar-modal-title" className="tw-mb-0 tw-mt-1 tw-font-['Manrope'] tw-text-2xl tw-font-extrabold tw-text-slate-900">Update schedule</h2>
               </div>
               <div className="tw-mb-4">
                  <label htmlFor="calendar-topic">Schedule type</label>
                  <input id="calendar-topic" className="form-control" type="text" value={topic} onChange={handleTopic} />
               </div>
               <div className="tw-mb-6">
                  <label htmlFor="calendar-date">Schedule date</label>
                  <input id="calendar-date" className="form-control" type="text" value={inputDate} onChange={handleDate} />
               </div>
               <div className="tw-flex tw-justify-end tw-gap-3">
                  <button className="btn btn-light" onClick={handleClose}>Cancel</button>
                  <button className="btn btn-primary" onClick={() => {
                  handleClose()
                  handleUpdate()
               }}>
                     Save changes
                  </button>
               </div>
            </div>
         </div>}
      </>

   )
}

export default AcademicCalender
