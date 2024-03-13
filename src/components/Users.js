import "../App.css";
import { useEffect, useState } from "react";
import List from "./List";
import Details from "./Details";
import createRequest from "../api/createRequest";

const URL = "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data";

function Users() {
    const [isListLoading, setIsListLoading] = useState(true);
    const [isDetailsLoading, setisDetailsLoading] = useState(true);
    const [users, setUsers] = useState([]);
    const [user, setUser] = useState(null);
    const [userId, setUserId] = useState(null);

    const fetchListData = async () => {
        const response = await createRequest(URL, "/users.json");

        if (response) {
            setIsListLoading(false);
            setUsers(response);
        }
    }

    const fetchUserData = async (id) => {
        setisDetailsLoading(true);
        const response = await createRequest(URL, `/${id}.json`);

        if (response) {
            setisDetailsLoading(false);
            setUser(response);
        }
    }

    useEffect(() => {
        users.length === 0 && fetchListData();

        userId && fetchUserData(userId);
    }, [userId, users]);

    const handleUser = (id) => {
        setUserId(id);
    };

    return (
        <div className="container">
            <section className="list-details">
                {isListLoading ? <span className="loader">Loading...</span> : <List items={users} handleUser={handleUser} userId={userId} />}
                {(userId && isDetailsLoading) ? <span className="loader">Loading...</span> : (user && !isDetailsLoading) ? <Details info={user} /> : <></>}
            </section>
        </div>
    );
}

export default Users;
