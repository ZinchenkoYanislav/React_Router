import { useEffect, useState } from "react"
import { fetchUsers } from "../services/usersService"

export default function useUserList() {
    const [userList, setUserList] = useState([])
    useEffect(()=> {
        fetchUsers().then(({data}) => setUserList(data))
    }, []);
    return userList
}