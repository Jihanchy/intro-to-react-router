import { useLoaderData, useLocation, useNavigate, useParams } from "react-router-dom";

const PostDetails = () => {
    const post = useLoaderData()
    const location = useLocation()
    console.log(location)
    const {userId} = useParams()
    console.log(userId)

    const navigate  = useNavigate()
    const handleGoBack = () => {
        navigate(-1)
    }
    return (
        <div className="w-50 border-2 rounded-xl p-10">
            <h1>{post.title}</h1>
            <p>{post.body}</p>
            <button className="btn-primary btn" onClick={handleGoBack}>Go back</button>
        </div>
    );
};

export default PostDetails;