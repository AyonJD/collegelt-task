import { useEffect, useState } from "react";

const useUsers = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch("https://blooming-reaches-06159.herokuapp.com/users")
            .then(res => res.json())
            .then(data => setUsers(data));
    }, []);
    return [users, setUsers];
};

export default useUsers;