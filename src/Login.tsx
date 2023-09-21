import { Button, InputLabel, TextField } from '@mui/material';
import React, { useState, useEffect } from 'react';

const Login = () => {
    const [worker,setWorker] =useState(false);

return (
    <div className="new-login">
            <form>
            <h1 className='restaurent-name'>LAXMI SAI DHABA FAMILY RESTAURENT</h1>
           <h3>{worker == true ? 'WORKER  ' : 'OWNER  '}LOGIN</h3>

                <InputLabel className="Username" style={{color:'cyan'}}>UserName</InputLabel>
                <TextField className="textfield" placeholder="Enter Your Username" id="username"
                    style={{marginBottom:'10px'}}  />

                <InputLabel className="Username" style={{color:'cyan'}}>password</InputLabel>
                <TextField className="textfield" placeholder="Enter Your password" id="" style={{marginBottom:'10px'}}/>

                <Button style={{backgroundColor:'#000089',marginBottom:'15px'} }>Log In</Button>
                {worker == true 
                ? <span
                style={{
                  cursor: 'pointer',
                  fontFamily: 'Ambit',
                  textDecorationLine: 'underline',
                }}
                onClick={() => setWorker(false)}>
                <p>owner login...?</p>
              </span>
              : <span
              style={{
                cursor: 'pointer',
                fontFamily: 'Ambit',
                textDecorationLine: 'underline',
              }}
              onClick={() => setWorker(true)}>
              <p>worker login...?</p>
            </span> }
                
            </form>
    </div>
);
};

export default Login