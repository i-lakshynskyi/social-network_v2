import React from "react";
import style from "./my_posts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
   let postElements = props.posts.map((post) => <Post id={post.id} postText={post.postContent} likes={post.likes} key={post.id} />);
   postElements.reverse();

   let onPostChange = (e) => {
      let currentText = e.target.value;
      props.updateNewPostText(currentText);
   };

   let addPost = () => {
      props.addNewPost();
   };

   return (
      <div>
         <div className={style.postContainer}>
            <div className={style.textarea}>
               <textarea value={props.newPostText} onChange={onPostChange} placeholder={"Add post"}/>
            </div>
            <div className={style.button}>
               <button onClick={addPost}>Add post</button>
            </div>
         </div>
         <div className={style.posts}>{postElements}</div>
      </div>
   );
};

export default MyPosts;
