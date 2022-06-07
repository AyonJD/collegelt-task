import React from 'react';
import { useNavigate } from 'react-router-dom';
import useUsers from '../Hooks/useUsers';
import SingleUserRow from './SingleUserRow';

const Home = () => {
  const [users, setUsers] = useUsers();
  const navigate = useNavigate();
  
  const handleUserClick = (id) => {
    navigate(`/${id}`);
  }
  return (
    <div className="overflow-x-auto container mx-auto">
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
            users?.results?.map((user, index) => <SingleUserRow handleUserClick={handleUserClick} user={user} key={index} serial={index} />)
          }

        </tbody>
      </table>
    </div>
  );
};

export default Home;