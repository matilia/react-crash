import Post from "./Post";
import classes from './PostsList.module.css';
import NewPost from "../routes/NewPost.jsx";
import Modal from "./Modal.jsx";
import {useEffect, useState} from "react";


function PostsList({isPosting, onStopPosting}) {
    const [posts, setPosts] = useState([]);
    const [isFetching, setIsFetching] = useState(false);

    useEffect(() => {
        setIsFetching(true);
        async function fetchPosts() {
            const response = await fetch("http://localhost:8085/posts")
            const responseData = await response.json();
            setPosts(responseData.posts)
            setIsFetching(false);
        }
        fetchPosts();
    }, [])

    function addPostHandler(postData) {
        fetch('http://localhost:8085/posts', {
            method: 'POST',
            body: JSON.stringify(postData),
            headers: {'Content-Type': 'application/json'}
        }).then(r => "");
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

            {!isFetching && posts.length > 0 && (
                <ul className={classes.posts}>
                    {posts.map((post, index) => (
                        <li key={index}>
                            <Post author={post.author} body={post.body}/>
                        </li>
                    ))}
                </ul>
            )}

            {!isFetching && posts.length === 0 && (
                <div style={{textAlign: 'center', color: 'white'}}>
                    <h2>There is no posts yet.</h2>
                    <p>Start Adding some</p>
                </div>
            )}

            {isFetching && (
                <div style={{textAlign: 'center', color: 'white'}}>
                    <p>Loading posts...</p>
                </div>
            )}
        </div>
    );
}

export default PostsList;
