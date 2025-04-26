import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { validateEmail } from '../../utils/helper';
import Input from '../../components/Inputs/Input';
import ProfilePhotoSelector from '../../components/Inputs/ProfilePhotoSelector';

const SignUp = ({ setCurrentPage }) => {
  const [profilePic, setProfilePic] = useState(null);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();

    let profileImageUrl = "";


    if(!fullName) {
      setError("Please enter full name.");
      return;
    }

    if(!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    if(!password) {
      setError("Please enter the password");
      retun;
    }

    setError("");

    // API
    try {
      
    } catch (error) {
      
    }
  }
  return (
    <div className="w-[60vw] md:w-[28vw] max-w-[450px] p-6 flex flex-col justify-center box-border">
      <h3 className="text-lg font-semibold text-black">Create an Account</h3>
      <p className="text-xs text-slate-700 mt-[5px] mb-6">
        Join us today by entering your details below.
      </p>

      <form onSubmit={handleSignUp}>

        <ProfilePhotoSelector image={profilePic} setImage={setProfilePic}/>
        <div className="grid grid-cols-1 md:grid-cols-1 gap-2">

          <Input
              value={fullName}
              onChange={({target}) => setFullName(target.value)}
              label="Full Name"
              placeholder="John"
              type="text"
            />

          <Input
            value={email}
            onChange={({target}) => setEmail(target.value)}
            label="Email Address"
            placeholder="john@example.com"
            type="text"
          />

          <Input
            value={password}
            onChange={({target}) => setPassword(target.value)}
            label="Password"
            placeholder="Min 8 characters"
            type="password"
          />
         {error && <p className='text-red-500 text-xs pb-2.5'>{error}</p> }

          <button className="btn-primary" type='submit'>
            Sign Up
          </button>

          <p className="text-[13px] text-slate-800 mt-3">
            Already an account?{" "}
            <button 
              type="button"
              className="font-medium text-primary underline cursor-pointer" 
              onClick={() => {setCurrentPage("login");}}>
                Login
            </button>

          </p>
        </div>

      </form>
      
    </div>
  )
}

export default SignUp
