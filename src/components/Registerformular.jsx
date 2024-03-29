import { useFormik } from 'formik';
import {  Link } from "react-router-dom"
import { useAuth } from '../Context/authcontext';
import { useState } from 'react';

function Registerformular() {
     
  const {register} = useAuth();
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
      const {error , success} = await register(values)
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
          <p className="title-register">Please Register Your new Account</p>
        </div>

        <div className="form-info--">
          <label htmlFor="name">Name*</label>
          <input
            type="text"
            id="name"
            name="name"
            onChange={form.handleChange}
            onBlur={form.handleBlur}
            value={form.values.name}
            placeholder='Name'
          />
          {form.touched.name && form.errors.name && <div>{form.errors.name}</div>}

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

          <label htmlFor="confirmPassword">Confirm Password*</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            onChange={form.handleChange}
            onBlur={form.handleBlur}
            value={form.values.confirmPassword}
            placeholder='confirmPassword'
          />
          {form.touched.confirmPassword && form.errors.confirmPassword && (
            <div>{form.errors.confirmPassword}</div>
          )}
        </div>

        <div className="form-info--">
          <button type="submit" className="register-btn">
            Register
          </button>
          { error && <p className="error-register">{error}</p>}
          { success && <p className="success-register">{success}</p>}
        </div>
        <div className="form-info">
        <p className="Skapa-Konto" >Already a mamber <Link className="link-skapa-konto" to="/authleyout/Loginform/Loginformular">Login here!</Link> </p>
        </div>
      </div>
    </form>
  );
}

export default Registerformular;






