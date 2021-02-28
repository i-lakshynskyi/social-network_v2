import React from 'react';
import style from "./post.module.css";

const Post = (props) => {
	return <div className={style.item}>
		<div>
			<img src="https://i.pinimg.com/564x/4b/e1/d1/4be1d1b6dc762600fb63b45dcc6e720a.jpg" alt=""/>
			{props.postText}
		</div>
		<div><span className={style.like}>&#10086;</span>{props.likes}</div>
	</div>
}

export default Post;