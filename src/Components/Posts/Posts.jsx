import { useLoaderData } from "react-router-dom";
import Post from "../Post/Post";

const Posts = () => {
    const posts = useLoaderData()
    return (
        <div>
            <h1>Posts: {posts.length}</h1>
            <div className="grid grid-cols-4 gap-5">
                {
                    posts.map(post => <Post post={post}></Post>)
                }
            </div>
        </div>
    );
};

export default Posts;