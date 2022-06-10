import React from 'react';
import { useNavigate } from 'react-router-dom';
import useUsers from '../Hooks/useUsers';
import SingleUserRow from './SingleUserRow';

const Home = () => {
  const [users, setUsers] = useUsers();
  const navigate = useNavigate();

  // console.log(users);

  // Handle dynamic route
  const handleUserClick = (id) => {
    navigate(`/${id}`);
  }
  return (
    <div className='bg-[#0F1729]'>
      <div className="overflow-x-auto container mx-auto pb-20">
        <h1 className='text-center text-white text-4xl mt-8 mb-5'>CollegeIt Users Info of {new Date().getFullYear()}</h1>
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
      </div>
    </div>
  );
};

export default Home;