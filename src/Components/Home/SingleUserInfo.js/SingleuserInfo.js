import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const SingleuserInfo = () => {
    const { id } = useParams();
    const [singleUser, setSingleUser] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/users/${id}`)
            .then(res => res.json())
            .then(data => setSingleUser(data))
    }, [id]);
    // console.log(singleUser);
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">Shoes!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default SingleuserInfo;