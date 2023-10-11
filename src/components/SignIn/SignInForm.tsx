
import { useState, } from 'react';
import { useDispatch } from 'react-redux';
import { Input } from '../Input';
import { SignIn, signUp } from '../redux/action-creators';

const SignInForm = () => { 

const [userName, setUserName] = useState(""); 
const [password, setPassword] = useState(""); 
const [email, setEmail] = useState(""); 

const dispatch = useDispatch() 

const handleEmale = (ev: any) => { 
    { 
    setEmail(ev.target.value); 
    } 
}; 
const handlePassword = (ev: any) => { 
    { 
    setPassword(ev.target.value); 
    } 
}; 

const handleConfirmed = () => {  
    dispatch(SignIn({ 
        password, 
        email, 
    })) 
}; 

return ( 
    <div>  
    <Input 
        title="Email" 
        type="text" 
        placeholder="Enter your email" 
        onChange={handleEmale} 
    /> 
    <Input  
        title="Password" 
        type="password" 
        placeholder="Your password" 
        onChange={handlePassword} 
    /> 
    <button onClick={handleConfirmed}> 
        Sign In 
    </button> 
    </div> 
); 
};
export { SignInForm }