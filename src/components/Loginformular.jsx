import { useFormik } from 'formik';
import {  Link } from "react-router-dom"
import { useAuth } from '../Context/authcontext';
import { useState } from 'react';

function Loginformular() {

    const {login} = useAuth()
    const [error, setError] = useState('')
     const [success, setSuccess] = useState('')

  const form = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    onSubmit: async (values) => {
      console.log(values);
      const {error , success} = await login(values)
      if(error) {
        setError(error)
      }
      if(success) {
        setSuccess(success)
      }
    },
  });

  return (
    <form onSubmit={form.handleSubmit} method="post" className='register-form'>
      <div className='form-align-register'>
        <div className="form-info--">
          <p className="title-register">Login in your account</p>
        </div>

        <div className="form-info--">
          <label htmlFor="email">E-mail*</label>
          <input
            type="text"
            id="email"
            name="email"
            onChange={form.handleChange}
            onBlur={form.handleBlur}
            value={form.values.email}
            placeholder='E-mail'
          />
          {form.touched.email && form.errors.email && <div>{form.errors.email}</div>}

          <label htmlFor="password">Password*</label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={form.handleChange}
            onBlur={form.handleBlur}
            value={form.values.password}
            placeholder='password'
          />
          {form.touched.password && form.errors.password && <div>{form.errors.password}</div>}

        </div>

        <div className="form-info--">
          <button type="submit" className="register-btn">
            Login
          </button>
          { error && <p className="error-register">{error}</p>}
          { success && <p className="success-register">{success}</p>}
        </div>
        <div className="form-info">
        <p className="Skapa-Konto" >Not a mamber? <Link className="link-skapa-konto" to="/authleyout/Registerform/Registerformular">Create an account here</Link> </p>
        </div>
        
      </div>
    </form>
  );
}

export default Loginformular;