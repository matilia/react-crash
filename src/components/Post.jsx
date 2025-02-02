import classes from './Post.module.css';
import {Link} from 'react-router-dom';

function Post({id, author, body}) {
    return (
        <Link to={id} >
            <div className={classes.post}>
                <p className={classes.author}>{author}</p>
                <p className={classes.text}>{body}</p>
            </div>
        </Link>
    );
}

export default Post;
