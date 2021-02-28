import React from 'react';
import style from '../../Users/users.module.css';
import preloader from '../../../../assets/Dual Ball-0.4s-200px.svg';

const Preloader = (props) => {
   return (
      <div className={style.preloader}>
         <img src={preloader} />
      </div>
   );
};

export default Preloader;
