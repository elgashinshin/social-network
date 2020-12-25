import React from 'react';
import p from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
    return (
        <div className={p.wrapper}>
            <div className={p.main}>
                <img className={p.avatar}
                     src='https://sun9-53.userapi.com/impg/dCtI58uKT7I19neimZoxidxW300yXN8l1rf4MA/vqlz_BPhlDs.jpg?size=735x736&quality=96&proxy=1&sign=acbcbc3c1392c90917f0bfb3ef082ba8&type=album'/>
                <div className={p.name}> Антон Елгашин</div>
            </div>

            <div className={p.descr}>
                <div className={p.contact}>
                    <div className={p.title}>Contact Information</div>
                    <div>E-mail: mainelgashin@gmail.com</div>
                    <div>Mobile: +79965574121</div>
                    <div>City: Kurgan, Russia</div>
                </div>
                <div className={p.social}>
                    <div className={p.title}>Websites and Social Links</div>
                    <div>Website: elgasocial.com</div>
                    <div>SocialLink: elgasocial.com/admin</div>
                </div>
                <div className={p.basic}>
                    <div className={p.title}>Basic Information</div>
                    <div>Birth Date: 10 October</div>
                    <div>Birth Year: 2000</div>
                    <div>Gender: Male</div>
                    <div>interested in: IT</div>
                    <div>language: Russian</div>
                </div>
            </div>
        </div>
    );
}

export default ProfileInfo;