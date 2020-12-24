import React from 'react';
import p from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
   return (
      <div>
         <div>
            <img src='https://freehtmlthemes.ru/assets/images/articles/css-fon.jpg'></img>
         </div>

         <div>
            ava + descr
         </div>
         <MyPosts/>
      </div>
   );
}

export default Profile;