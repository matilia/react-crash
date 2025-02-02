import Post from "./Post";
import classes from './PostsList.module.css';
import {useLoaderData} from 'react-router-dom'


function PostsList() {
    const posts = useLoaderData();
    return (
        <div>
            {posts.length > 0 && (
                <ul className={classes.posts}>
                    {posts.map((post, index) => (
                        <li key={index}>
                            <Post author={post.author} id={post.id} body={post.body}/>
                        </li>
                    ))}
                </ul>
            )}

            {posts.length === 0 && (
                <div style={{textAlign: 'center', color: 'white'}}>
                    <h2>There is no posts yet.</h2>
                    <p>Start Adding some</p>
                </div>
            )}
        </div>
    );
}

export default PostsList;
