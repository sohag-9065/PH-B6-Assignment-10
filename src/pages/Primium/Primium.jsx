import React, { useContext } from 'react';
import { Input } from 'react-daisyui';
import {  useLoaderData } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../Context/UserContext';
import Loading from '../../shared/Loading';

const Primium = () => {
    const { course_name, price, Starts } = useLoaderData();
    const { user, loadingUser } = useContext(AuthContext);

    if (loadingUser) {
        return <Loading></Loading>
    }

    const handleSunmit = event => {
        event.preventDefault();
        const input_value = event.target.amount.value;
        if (input_value === price) {
            event.target.reset();
            toast.success("Payment Sucessfully", { autoClose: 1000 }); 
        }
        else {
            toast.error("Wront Amount! Please Correct amount", { autoClose: 1000 });
        }
    }

    return (

        <div className="hero min-h-[70vh] pb-20 dark:bg-gray-800 dark:text-gray-100 py-10" >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-start text-neutral-content ">
                <div className="max-w-3xl">
                    <h1 className="mb-5 text-5xl font-bold">{course_name}</h1>
                    <h1 className='font-bold text-xl'>About you</h1>
                    <p>Please make sure that your contact information is accurate. All communication related to this course will be done to this email address and phone number.</p>
                   <div className='flex my-3 items-center'>
                   <div className="w-12 rounded-full ring ring-info ring-offset-base-100 ring-offset-6">
                        <img src={user?.photoURL} alt="" className='rounded-full'/>
                    </div>
                    <p className='ml-3 text-2xl text-indigo-500'>{user?.displayName}</p>
                   </div>
                     

                    <p className="mb-2 text-xl"><span className='text-2xl font-semibold text-info'>Price: </span>{price} TK.</p>
                    <p className=" text-xl font-semibold">{Starts}</p>
                    <form onSubmit={handleSunmit}>
                        <p>Enter Amount:</p>
                        <Input
                            type="text"
                            placeholder="amount"
                            name="amount"
                            className="input-bordered max-wd-md mt-2 text-black"
                        />
                        <br />
                        <input type="submit" value="Confirm Payment" className="btn btn-info mt-4" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Primium;