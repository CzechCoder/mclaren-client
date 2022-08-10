// import React, { useState } from "react";
// import { useDispatch } from "react-redux";
// import { useSelector } from "react-redux";
// import { register } from "../features/auth/authSlice"

// import { RootState } from '../state/store';


const Register = () => {
  
}
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//     password2: "",
//   });
  
//   const { name, email, password, password2 } = formData;
  
//   const dispatch = useDispatch()

//   const {user, isLoading, isSuccess, message} = useSelector((state: RootState) => state.auth)

//   const onSubmit = (e: React.FormEvent) => {
//       e.preventDefault()

//       if(password !== password2) {
//         alert("Hello! I am an alert box!");
//       } else {
//           const userData = {
//               name,
//               email,
//               password
//           }
          
//       }

//   }

//   return (
//     <>
//       <div
//         className="respCont"
//         style={{ backgroundColor: "pink"}}
//       >
//         <h1>Register form for {user}</h1>
//         <section className="form">
//           <form onSubmit={onSubmit}>
//             <div className="form-group">
//               <input
//                 type="text"
//                 className="form-control"
//                 id="name"
//                 name="name"
//                 value={name}
//                 onChange={(e) => setFormData}
//                 placeholder="Enter name"
//               />
//             </div>
//             <div className="form-group">
//               <input
//                 type="email"
//                 className="form-control"
//                 id="email"
//                 name="email"
//                 value={email}
//                 onChange={(e) => setFormData}
//                 placeholder="Enter email"
//               />
//             </div>
//             <div className="form-group">
//               <input
//                 type="password"
//                 className="form-control"
//                 id="password"
//                 name="password"
//                 value={password}
//                 onChange={(e) => setFormData}
//                 placeholder="Enter password"
//               />
//             </div>
//             <div className="form-group">
//               <input
//                 type="password2"
//                 className="form-control"
//                 id="password2"
//                 name="password2"
//                 value={password2}
//                 onChange={(e) => setFormData}
//                 placeholder="Confirm password"
//               />
//             </div>
//             <div className="form-group">
//                 <button className="btn btn-block">Submit</button>
//             </div>
//           </form>
//         </section>
//       </div>
//     </>
//   );
// };

export default Register;
