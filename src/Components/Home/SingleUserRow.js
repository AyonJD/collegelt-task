import React from 'react';

const SingleUserRow = ({ user, serial, handleUserClick }) => {
    const { name, gender, location, login } = user;
    // console.log(user);
    return (
        <tr onClick={() => handleUserClick(login?.uuid)} className="hover cursor-pointer">
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