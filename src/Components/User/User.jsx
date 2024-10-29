import { BsFillPersonFill } from "react-icons/bs";
import { FaFlag } from "react-icons/fa";
const User = ({user}) => {
    const {image,name,country,role,battingType,bowlingType,biddingPrice} = user
    return (
        <div className="card shadow-md rounded-md">
        <figure className="px-3 pt-3 bg-center bg-cover">
          <img
            src={image}
            alt="Images"
            className="rounded-md h-52  md:h-52 w-full object-cover" />
        </figure>
        <div className="items-center px-3 py-2 space-y-2">
          <h2 className="flex items-center text-lg font-semibold gap-3"><span><BsFillPersonFill /></span>{name}</h2>
          <p className=" flex justify-between items-center">
            <span className="flex items-center gap-3 text-gray-400"><FaFlag></FaFlag>{country}</span>
            <span className="bg-slate-100 text-gray-600 px-3 py-1 rounded-md">{role}</span>
          </p>
          <hr className="my-3"/>
          <p className="flex justify-between items-center">
            <span className="font-semibold">{battingType}</span>
            <span className="font-semibold">{bowlingType}</span>
          </p>
            <div className="flex justify-between items-center">
                <p className="font-semibold">Price: ${biddingPrice}</p>
                <button  className="px-4 py-[5px] hover:bg-[#E7FE29] rounded-lg border-2 border-gray-100">Choose player</button>
            </div> 
          
        </div>
      </div>
    );
};

export default User;

