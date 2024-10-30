import { useLoaderData } from "react-router-dom";

const UserDetails = () => {
    const user = useLoaderData();
    return (
        <div className="card shadow-md rounded-md">
        <div className="items-center px-3 py-2 space-y-2">
          <h2 className="flex items-center text-lg font-semibold gap-3">{user.name}</h2>
          <p className=" flex justify-between items-center">
            <span className="flex items-center gap-3 text-gray-400">{user.address.city}</span>
            <span className="bg-slate-100 text-gray-600 px-3 py-1 rounded-md">{user.username}</span>
          </p>
          <hr className="my-3"/>
          <p className="flex justify-between items-center">
            <span className="font-semibold">{user.email}</span>
            <span className="font-semibold">{user.address.street}</span>
          </p>
           
          
        </div>
      </div>
    );
};

export default UserDetails;