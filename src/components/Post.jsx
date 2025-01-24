import classes from './Post.module.css';

function Post({author, text}) {
    return (
        <div className={classes.post}>
            <p className={classes.author}>{author}</p>
            <p className={classes.text}>{text}</p>
        </div>
    );
}

export default Post;
