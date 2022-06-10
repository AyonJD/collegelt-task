import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CountDown from '../CountDown/CountDown';

const SingleuserInfo = () => {
    const { id } = useParams();
    const [singleUser, setSingleUser] = useState([]);
    const { name, picture, dob, phone } = singleUser;

    useEffect(() => {
        fetch(`https://blooming-reaches-06159.herokuapp.com/users/${id}`)
            .then(res => res.json())
            .then(data => setSingleUser(data))
    }, [id]);
    // console.log(singleUser);
    return (
        <div className='flex items-center justify-center h-full'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img className='rounded-full' src={picture?.large} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name?.title} {name?.first} {name?.last}</h2>
                    <p>Phone: {phone}</p>
                    <CountDown dob={dob}></CountDown>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleuserInfo;