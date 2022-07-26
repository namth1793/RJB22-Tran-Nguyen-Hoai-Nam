import Link from 'next/link';
import { useForm } from 'react-hook-form';



const ERROR_EMAIL = {
    required: "Email address is required",
    pattern:"Please include an '@' in the email address",
}

function SignIn() {
    
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm();

    const onSubmit = (data, e) => {
        e.preventDefault();
        console.log(data);
    };
    return (
        <div className='block'>
            <div className='nav_bar'>
      <div className='nav_bar_left'>
        <ul>
            <li id='hov'><Link href="/">
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
        <form className='block-child' onSubmit={handleSubmit(onSubmit)}>
                <h1>Log In</h1>
                <p>Please fill in this form to access your account</p>
                <div>
                    <input type="email" placeholder="Email" {...register("email", {
            required: ERROR_EMAIL ?.required,
            pattern: /[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$/,
        })}/>
                </div>
                <div>
                    <input type="password" placeholder="Password" {...register("password", {
                        required:true
                    })}/>
                </div>
                <input id='check' type="checkbox" /> Remember me<br/>
                <button id='submit' type="submit">Log in</button>
            </form>
    </div>
    )
}
export default SignIn;