import React from 'react'
import '../css/register.css'
import {useFormik} from 'formik'
import { registerShemas } from '../shemas/RegisterFormShemas';
function registrationForm() {

  const submit = (values,action)=>{
    setTimeout(()=>{
      action.resetForm()
    },2000)
  }

  const {errors,values, handleChange, handleSubmit} = useFormik({
    initialValues: {
      email: '',
      age: '',
      password: '',
      confirmpassword: '',
      term: ''
    },
    validationSchema: registerShemas,
    onSubmit: submit
  });
  console.log(errors)
  return (
    <div className=''>
      <form onSubmit={handleSubmit} action="">
        <div className='input'>
        <label>Email</label>
        <input value={values.email} onChange={handleChange} type="text" id='email' placeholder='Email daxil edin:'/>
        {errors.email && <p className='error'>{errors.email}</p>}
        </div>

        <div className='input'>
        <label>Age</label>
        <input value={values.age} onChange={handleChange} type="number" id='age' placeholder='Yashinizi daxil edin:'/>
        {errors.age && <p className='error'>{errors.age}</p>}
        </div>

        <div className='input'>
        <label>Password</label>
        <input value={values.password} onChange={handleChange} type="password" id='password' placeholder='Password daxil edin'/>
        {errors.password && <p className='error'>{errors.password}</p>}
        </div>

        <div className='input'>
        <label>Confirm Password</label>
        <input value={values.confirmpassword} onChange={handleChange} type="password" id='confirmpassword' placeholder='Password yeniden daxil edin'/>
        {errors.confirmpassword && <p className='error'>{errors.confirmpassword}</p>}
        </div>

        <div className='input' style={{width:'480px',display:'flex', flexDirection:'column'}}>
          <div style={{display:'flex'}}>
            <input value={values.term} onChange={handleChange} type="checkbox" id='term' style={{width:'20px'}}/>
            <label>Şərtləri qəbul edirəm</label>
          </div>
          <div>
            {errors.term && <p className='error'>{errors.term}</p>}
          </div>
        </div>
        <button type='submit'>Register</button>
      </form>
    </div>
  )
}

export default registrationForm
