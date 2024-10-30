import { Link, useNavigate } from "react-router-dom";
const Post = ({post}) => {

    const navigate = useNavigate()
    const handleDetails = () => {
        navigate(`/posts/${post.id}`)
    }
    return (
        <div className="border-2 p-10 rounded-xl">
            <h1 className="text-2xl font-bold mb-5">{post.title}</h1>
            <p>{post.body}</p>
            <Link to={`/posts/${post.id}`}><button className="btn">Post Details</button></Link>
            <button onClick={handleDetails} className="btn">Click to see details</button>
        </div>
    );
};

export default Post;