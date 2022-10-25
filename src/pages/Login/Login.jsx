import React, { useContext} from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/UserContext';

const Login = () => {

    const { register, formState: { errors }, reset, handleSubmit } = useForm();
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'

    const { signin  } = useContext(AuthContext)






    const onSubmit = data => {
        const { email, password } = data;
         

        // signin(email, password)
        //     .then(result => {
        //         // toast.success('Login Success!')
        //         navigate(from, { replace: true })
        //         console.log(result.user)
        //     })
        //     .catch(error => console.log(error.message))

        // console.log(data);
        reset();
    };
    return (
        <div className="hero min-h-[90vh] bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="card flex-shrink-0 w-full min-w-[400px] shadow-2xl bg-base-100">
                    <div className="card-body">
                        <form onSubmit={handleSubmit(onSubmit)} className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                className="input input-bordered mb-1 w-full"
                                placeholder='Email'
                                {...register("email",
                                    {
                                        required: "Email Address is required",
                                        pattern: {
                                            value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                            message: "Provide a valid email"
                                        }
                                    }
                                )}
                                aria-invalid={
                                    errors.email ? "true" : "false"
                                }
                            />
                            {errors.email?.type === 'required' && <p role="alert">{errors.email?.message}</p>}
                            {errors.email?.type === 'pattern' && <p role="alert">{errors.email?.message}</p>}

                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>

                            <input
                                type="password"
                                autoComplete='username'
                                className="input input-bordered mb-1"
                                placeholder='Password'
                                {...register("password", {
                                    required: "Password is required",
                                    minLength: {
                                        value: 6,
                                        message: "Must be 6 charecters or longer",
                                    }
                                }
                                )}
                            />

                            {errors.password?.type === 'required' && <p role="alert">{errors.password?.message}</p>}
                            {errors.password?.type === 'minLength' && <p role="alert">{errors.password?.message}</p>}


                            <input type="submit" className='btn mt-6' value="Login" />
                        </form>
                        <p className='text-xs'>New to Warehouse? <Link to="/sign-up" className=' text-secondary cursor-pointer'>Create new account</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;