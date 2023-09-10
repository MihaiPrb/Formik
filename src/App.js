import React from "react";
import { Formik, useFormik } from "formik";

function App() {
  const formik = useFormik({
    initialValues: {
      
      email: "",
      password: "",
    },

    onSubmit: (values) => {
      console.log(values);
    },

    validate: values =>{
      let errors ={};
      
      if(!values.email) {errors.email='REQUIRED'};
      if(!values.password) {errors.password="REQUIRED"};
    }
  });

  return (
    <form onSubmit={formik.handleSubmit}>
  
      <div>Email</div>
      <input
        id="emailField"
        name="email"
        type="text"
        value={formik.values.email}
        onChange={formik.handleChange}
        {...formik.errors.email ? <div id="emailError" style={{color:'red'}}>{formik.errors.email}</div> : null}
      />

      <div>Password</div>
      <input
        id="pswField"
        name="password"
        type="text"
        value={formik.values.password}
        onChange={formik.handleChange}
        {...formik.errors.password ? <div id="passwordError" style={{color:'red'}}>{formik.errors.password}</div> : null}
      />

      <button type="submit" id="submitBtn">Submit</button>
    </form>
  );
}

export default App;
