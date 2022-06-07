import React from 'react';

const Home = () => {
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
          <tr className="hover">
            <th>1</th>
            <td>Cy Ganderton</td>
            <td>Quality</td>
            <td>Blue</td>
            <td>Blue</td>
            <td>Blue</td>
          </tr>
          
        </tbody>
      </table>
    </div>
  );
};

export default Home;