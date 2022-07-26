import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { useState, useEffect } from 'react';

const ERROR_EMAIL = {
    required: "Email address is required",
    pattern:"Please include an '@' in the email address",
} 

export const handleSubmit = async (event) => {
    event.preventDefault();
    const newdata = {
        name: event.target.name.value,
        email: event.target.email.value,
        address: event.target.address.value,
        phone: event.target.phone.value,
    };
    const endpoint = "https://jsonplaceholder.typicode.com/users";
    const options = {
        method: "POST",
        Headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(newdata),
    }
    fetch(endpoint, options)
        .then((response) => response.json())
        .then(() => {
            alert(`new Customer is: 
            name: ${newdata.name},
            email: ${newdata.email},
            address: ${newdata.address},
            phone: ${newdata.phone}`);
        })
}
function SignIn() {
    const {
        register,
        formState: { errors },
    } = useForm();
    return (
        <div className='block'>
            <div className='nav_bar'>
                <div className='nav_bar_left'>
                    <ul>
                        <li id='hov' >
                            <Link href="/">
                                <a>Home</a>
                            </Link></li>
                        <li id='hov'>
                            <Link href='/Customers'>
                                <a>Customers</a>
                            </Link>
                        </li>
                        <li id='hov'>
                            <Link href='/Products'>
                                <a>Products</a>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className='nav_bar_right'>
                    <button id='signin'>
                        <Link href="/SignUp">
                            <a>Sign Up</a>
                        </Link>
                    </button>
                </div>
            </div>
        <form className='block-child' onSubmit={handleSubmit}>
                <h1>Sign Up</h1>
                <p>Please fill in this form to create new account</p>
                <div>
                    <div>
                        <input type="text" placeholder="Name" id='name' name='name'{...register("name", {
                            required:true
                        })}/>
                    </div>
                </div>
                <div>
                    <input type="email" placeholder="Email" id='email' name='email'{...register("email", {
            required: ERROR_EMAIL ?.required,
            pattern: /[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$/,
        })}/>
                </div>
                <div>
                    <input type="text" placeholder="Address" id='address' name='address' {...register("address", {
                        required:true
                    })}/>
                </div>
                <div>
                        <input type="tel" placeholder="Phone Number" id='phone' name='phone' {...register("phone", {
                            required: true
                        })}/>
                    </div>
                <input id='check' type="checkbox" required/> I accept the <span style={{color:"blue"}}>Terms of Use</span> & <span style={{color:"blue"}}>Privacy Policy</span><br/>
                <button id='submit' type="submit">Sign Up</button>
            </form>
            <p style={{ textAlign: "center" }}>Already have an account? <Link href="/LogIn">
                <a id='login'>Log in</a>
            </Link></p>
    </div>
    )
}
export default SignIn;