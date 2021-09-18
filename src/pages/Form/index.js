import { useState, useEffect } from "react";
import { addUser, getUsers } from "../../utils/firebase";

import './form.scss';

const UserForm = () => {
    const [name, setName] = useState("");
    const [born, setBorn] = useState();
    const [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers()
            .then(data => {
                setUsers(data);
                console.log(data)
            })

    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault();
        addUser(name, born);

        getUsers()
            .then(data => {
                setUsers(data);
            })
    }

    return (
        <div className="form_wrapper" onSubmit={(e) => handleSubmit(e)} >
            <form>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} /> <br />
                <input type="number" value={born} onChange={(e) => setBorn(e.target.value)} /> <br />
                <button>Submit</button>
            </form>

            <ul>
                <li>asdass</li>
                {
                    users.map((usr, index) => (
                        <li key={index}>{usr.data().first}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default UserForm;