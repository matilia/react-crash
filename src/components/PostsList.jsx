import Post from "./Post";
import classes from './PostsList.module.css';
import NewPost from "./NewPost";
import {useState} from "react";
import Modal from "./Modal.jsx";


function PostsList() {
    const [enteredBody, setEnteredBody] = useState('');
    const [enteredAuthor, setEnteredAuthor] = useState('');
    const [modalIsVisible, setModalIsVisible] = useState(true);

    function changeBodyHandler(event) {
        setEnteredBody(event.target.value);
    }

    function authorChangeHandler(event) {
        setEnteredAuthor(event.target.value);
    }

    function hideModalHandler(){
        setModalIsVisible(false)
    }

    return (
        <div>
            <Modal onClose={hideModalHandler}>
                <NewPost
                    onBodyChange={changeBodyHandler}
                    onAuthorChange={authorChangeHandler}
                />
            </Modal>
            <ul className={classes.posts}>
                <li>
                    <Post
                        author={enteredAuthor}
                        text={enteredBody}
                    />
                </li>
                <li>
                    <Post author="Maximus" text="Nextjs is a great tool to build full-stack React Applications"/>
                </li>
            </ul>
        </div>
    );
}

export default PostsList;
