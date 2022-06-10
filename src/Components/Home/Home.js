import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Spinner from '../Spinner/Spinner';
import SingleUserRow from './SingleUserRow';

const Home = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("https://blooming-reaches-06159.herokuapp.com/users")
      .then(res => res.json())
      .then(data => {
        setUsers(data);
        setLoading(false);
      });
  }, []);

  // Handle dynamic route
  const handleUserClick = (id) => {
    navigate(`/${id}`);
  }
  return (
    <div className='bg-[#bcc0c9]'>
      <div className="overflow-x-auto container mx-auto pb-20">
        <h1 className='text-center bg-white text-shadow text-2xl md:text-4xl mt-8 mb-5 px-2 md:px-0'>CollegeIt Users Info of {new Date().getFullYear()}</h1>
        {
          loading ? <Spinner /> :
            <table className="table w-full">
              {/* <!-- head --> */}
              <thead>
                <tr>
                  <th className='col-span-1'>Serial</th>
                  <th>Name</th>
                  <th>Gender</th>
                  <th>City</th>
                  <th>State</th>
                  <th>Country</th>
                </tr>
              </thead>
              <tbody>


                {
                  users?.map((user, index) => <SingleUserRow handleUserClick={handleUserClick} user={user} key={index} serial={index} />)
                }

              </tbody>
            </table>
        }
      </div>
    </div>
  );
};

export default Home;