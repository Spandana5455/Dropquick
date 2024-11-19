import React, { useEffect, useState } from 'react';
import './VerifyAccount.css'; 
import img from '../images/otpimg.png';
import Navbar from '../Navbar';
import Footer from '../Footer';
import { useLocation, useNavigate } from 'react-router-dom';

export default function VerifyAccount() { 
  const [code, setCode] = useState(new Array(6).fill(''));
  const [message, setMessage] = useState('');
  const navigate = useNavigate();
  const data = useLocation();
  const status = data.state;

  useEffect(() => {
    if (!status?.data?.otp) {
      navigate('/forgetpassword');
    }
  }, [status, navigate]);

  const handleChange = (element, index) => {
    const value = element.value.replace(/[^0-9]/g, ''); // Only allow digits
    if (value) {
      const newCode = [...code];
      newCode[index] = value;
      setCode(newCode);

      // Focus next input
      if (index < 5) {
        document.getElementById(`input-${index + 1}`).focus();
      }
    }
  };
  console.log(status.data.otp)
  const handleSubmit = async () => {
    const verificationCode = code.join('');
    if (verificationCode.length < 6) {
      setMessage('Please enter the complete 6-digit code.');
      return;
    }

    try {
     
      if(verificationCode===status.data.otp){
        navigate('/updatepassword',{state:{status:'true'}})
      }
 
    } catch (error) {
      setMessage('Error verifying code. Please try again.');
    }
  };

  return (
    <>
      <Navbar />
      <div className='verify-account-main'>
        <div className="verify-account">
          <img src={img} alt="Verify Account" className="verify-image" />
          <h2>Please Verify Account</h2>
          <p>Enter the six-digit code we sent to your email address to change the password</p>
          <div className="code-inputs">
            {code.map((digit, index) => (
              <input
                key={index}
                type="text"
                maxLength="1"
                id={`input-${index}`}
                value={digit}
                onChange={(e) => handleChange(e.target, index)}
                onKeyUp={(e) => {
                  if (e.key === 'Backspace' && index > 0) {
                    document.getElementById(`input-${index - 1}`).focus();
                  }
                }}
              />
            ))}
          </div>
          <button onClick={handleSubmit} className="submit-button-in-otp">Enter</button>
          <div>
            <button className="cancel-button-in-otp" onClick={() => setCode(new Array(6).fill(''))}>Cancel</button>
          </div>
          {message && <p className="message-in-otp">{message}</p>}
        </div>
      </div>
      <Footer />
    </>
  );
}
