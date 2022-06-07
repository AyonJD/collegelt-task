import React from 'react';

const SingleUserRow = ({ user, serial }) => {
    const { name, gender, location, } = user;
    // console.log(user);
    return (
        <tr className="hover">
            <th>{serial + 1}</th>
            <td className='col-span-2'>{name?.title} {name?.first} {name?.last}</td>
            <td>{gender}</td>
            <td>{location?.city}</td>
            <td>{location?.state}</td>
            <td>{location?.country}</td>
        </tr>
    );
};

export default SingleUserRow;