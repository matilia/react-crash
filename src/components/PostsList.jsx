import Post from "./Post";
import classes from './PostsList.module.css';
import NewPost from "./NewPost";
import Modal from "./Modal.jsx";
import {useState} from "react";


function PostsList({isPosting, onStopPosting}) {
    const [posts, setPosts] = useState([]);

    function addPostHandler(postData) {
        // adding more post to the existing ones
        setPosts((existingPosts) => [postData, ...existingPosts]);
    }

    return (
        <div>
            {isPosting && (<Modal onClose={onStopPosting}>
                <NewPost
                    onCancel={onStopPosting}
                    onAddPost={addPostHandler}
                />
            </Modal>)}
            <ul className={classes.posts}>
                {posts.map((post, index) => (
                    <li key={index}>
                        <Post author={post.author} body={post.body}/>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default PostsList;
