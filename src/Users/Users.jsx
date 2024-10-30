import { useLoaderData } from "react-router-dom";
import User from "../Components/User/user";

const Users = () => {
    const users = useLoaderData()
    console.log(users)
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {
                    users.map((user,index) => <User key={index} user={user}></User>)
                }
            </div>
        </div>
    );
};

export default Users;