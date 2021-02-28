import React from 'react';
import style from './discription.module.css';

const Description = (props) => {
	return <div className={style.description}>
		<div>{props.profile.fullName}</div>
		<div>{props.profile.userId}</div>
		<div>{props.profile.aboutMe}</div>
		<div>{props.profile.lookingForAJobDescription}</div>
	</div>
}

export default Description;