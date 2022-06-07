import React from 'react';
import useUsers from '../Hooks/useUsers';
import SingleUserRow from './SingleUserRow';

const Home = () => {
  const [users, setUsers] = useUsers();
  // console.log(users.results);
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
            users?.results?.map((user, index) => <SingleUserRow user={user} key={index} serial={index} />)
          }

        </tbody>
      </table>
    </div>
  );
};

export default Home;