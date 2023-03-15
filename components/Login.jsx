import { Box, Button, TextField } from '@mui/material'
import { color } from '@mui/system'
import React, { useState } from 'react'
import { useFormInputValidation } from 'react-form-input-validation'

const Login = () => {
    // var [mail,setmail]=useState();
    // const mailclick=(e)=>{
    //     setmail(mail=(e.target.value))
    //     console.log(mail)
    // }
    const [fields,errors,form]=useFormInputValidation(
        {
        email_address:"",
        password:""
    },
    {
        email_address:"required|email",
        password:"required"
    }
    
    )
 
  return (
    
       <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div >
        <h3>Login Page</h3>
        <TextField 
          value={fields.email_address}
          onChange={form.handleChangeEvent}
          onBlur={form.handleBlurEvent}
          helperText={errors.email_address?errors.email_address:""}
          name='email_address'
          id="outlined-error"
          label="email"
          defaultValue=""
        
        />
        <br/>
        <TextField
        value={fields.password}
        onChange={form.handleChangeEvent}
        onBlur={form.handleBlurEvent}
        helperText={errors.password?errors.password:""}
          name='password'
          id="outlined-error-helper-text"
          label="Password"
          defaultValue=""
          type='password'
        /><br/>
      
        
      </div>
     
    </Box>
    
  )
}

export default Login
