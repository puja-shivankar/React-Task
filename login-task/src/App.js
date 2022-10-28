import logo from './logo.svg';
import './App.css';
import PasswordStrengthMeter from './components/PasswordStrengthMeter';
import { useState } from 'react';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {

  const [email, setEmail ] = useState('');
  const [password, setPassword] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();

    if(localStorage.length > 0) {
      const userEmail = JSON.parse(localStorage.getItem("Email"));
    const userPassword = JSON.parse(localStorage.getItem("Password"));

  

    if (
      userEmail === email &&
      userPassword === password
    ) {
      toast.success("Logged in successfully....");
    } else  {
      toast.error("Invalid Credentials");
    }
    }else {
    localStorage.setItem('Email', JSON.stringify(email));
    localStorage.setItem('Password', JSON.stringify(password));
    }
    
  }

  return (
    <>
      <div className='container mx-auto'>
        <div className='card shadow-lg p-3 mb-5 bg-body rounded'>
          <div className='row p-3'>
            <div className='col-md-6 col-sm-12 col-12 col-lg-6'>
              <img src='data:image/png;base64,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' width="100%" height="70%" />
            </div>

            <div className='col-md-6 col-md-12 col-12 col-lg-6'>
              <h3 className='mb-0 text-center'>Welcome</h3>
              <span className='text-muted ms-5'>Log in to your account to continue</span>
              <form className='mt-4'>
  <div className="form-group mb-4">
    <input type="email" 
      className="form-control shadow-none"  
      placeholder="Enter email" 
      onChange={e => setEmail(e.target.value) }
      />
  </div>
  <div className="form-group mb-0">
    <input type="password" 
      className="form-control shadow-none"  
      placeholder="Password" 
      onChange={e => setPassword(e.target.value) }
      />
    <PasswordStrengthMeter password={password} />
  </div>
  
  <button type="submit" onClick={submitHandler} className="btn btn-primary ">Submit</button>
</form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
