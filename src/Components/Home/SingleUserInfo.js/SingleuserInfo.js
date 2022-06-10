import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Spinner from '../../Spinner/Spinner';
import CountDown from '../CountDown/CountDown';

const SingleuserInfo = () => {
    const { id } = useParams();
    const [singleUser, setSingleUser] = useState([]);
    const [loading, setLoading] = useState(false);
    const { name, picture, dob, phone } = singleUser;
    const navigate = useNavigate();

    useEffect(() => {
        setLoading(true);
        fetch(`https://blooming-reaches-06159.herokuapp.com/users/${id}`)
            .then(res => res.json())
            .then(data => {
                setSingleUser(data)
                setLoading(false);
            })

    }, [id]);

    // console.log(singleUser);
    return (
        <>
            {
                loading ? <Spinner /> :
                    <div className='flex items-center justify-center py-10 md:py-0 h-[100vh] bg-[#E0E5EC]'>
                        <div className="card w-96 text-center shadow--raised bg-[#E0E5EC]">
                            <figure className='pt-5'><img className='rounded-full p-2 image-shadow' src={picture?.large} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="text-xl font-semibold text-center">{name?.title} {name?.first} {name?.last}</h2>
                                <p><strong>Phone</strong>: {phone}</p>
                                <CountDown dob={dob}></CountDown>
                                <div className="mt-3 justify-end">
                                    <button onClick={() => navigate('/')} className="btn bg-[#212121] button-shadow hover:bg-transparent hover:text-[#212121]  text-white">Go Back to home</button>
                                </div>
                            </div>
                        </div>
                    </div>
            }
        </>
    );
};

export default SingleuserInfo;