import { BsFillPersonFill } from "react-icons/bs";
import { FaFlag } from "react-icons/fa";
import { Link } from "react-router-dom";
const User = ({user}) => {
    const {id,name,username,email,address} = user
    return (
        <div className="card shadow-md rounded-md">
        <div className="items-center px-3 py-2 space-y-2">
          <h2 className="flex items-center text-lg font-semibold gap-3"><span><BsFillPersonFill /></span>{name}</h2>
          <p className=" flex justify-between items-center">
            <span className="flex items-center gap-3 text-gray-400"><FaFlag></FaFlag>{address.city}</span>
            <span className="bg-slate-100 text-gray-600 px-3 py-1 rounded-md">{username}</span>
          </p>
          <hr className="my-3"/>
          <p className="flex justify-between items-center">
            <span className="font-semibold">{email}</span>
            <span className="font-semibold">{address.street}</span>
          </p>
            <div className="flex justify-between items-center">
                <Link to={`/user/${id}`}  className="px-4 py-[5px] hover:bg-[#E7FE29] rounded-lg border-2 border-gray-100">Choose player</Link>
            </div> 
          
        </div>
      </div>
    );
};

export default User;

