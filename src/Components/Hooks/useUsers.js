import { useEffect, useState } from "react";

const useUsers = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch("https://randomuser.me/api/?results=10")
            .then(res => res.json())
            .then(data => setUsers(data));
    }, []);
    return [users, setUsers];
};

export default useUsers;