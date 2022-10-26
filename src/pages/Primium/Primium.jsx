import React from 'react';
import { Input } from 'react-daisyui';
import { useLoaderData } from 'react-router-dom';
import { toast } from 'react-toastify';

const Primium = () => {
    const { id, course_name, course_outline, description, img, new_arival, price, Schedule, Starts } = useLoaderData();

    const handleSunmit = event => {
        event.preventDefault();
        event.target.reset();
        toast.success("Payment Sucessfully")
    }

    return (
        <div className="hero min-h-[70vh] mb-20" style={{ backgroundImage: `url("https://placeimg.com/1000/800/arch")` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-3xl">
                    <h1 className="mb-5 text-5xl font-bold">{course_name}</h1>

                    <p className="mb-5 text-xl"><span className='text-2xl font-semibold text-info'>Price: </span>{price} TK.</p>
                    <p className="mb-5 text-xl font-semibold">{Starts} TK.</p>
                    <form onSubmit={handleSunmit}>
                        <p>Enter Amount:</p>
                        <Input
                            type="text"
                            placeholder="amount"
                            className="input-bordered max-wd-md mt-2"
                        />
                        <br />
                        <input type="submit" value="Confirm Payment" className="btn btn-info mt-4"/>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Primium;