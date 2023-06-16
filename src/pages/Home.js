import React from 'react';
import { AiOutlineCloseCircle } from "react-icons/ai";
import { BiHeartCircle } from "react-icons/bi";

function Home() {
    function Buttons() {
        return (
            <>
                <AiOutlineCloseCircle />
                <BiHeartCircle />
            </>
        )
    }

    function OtherUserInfo() {
        return (
            <>
                <span className="otherUserName">Kai, 2</span>
                <span className="otherUserLoc">Vancouver, 1km</span>
                <span className>Bio</span>
                <span className>Hey my name is Kai, and I am a super enegetic dog!</span>
            </>
        )
    }

    function Card() {
        return (
            <>
                <img className="otherUserPhoto" src={require("../images/kai_photo.png")} alt="user photo" />
                <div className="otherUserInfo">
                    <OtherUserInfo />
                </div>
                <div className="like-or-dislike">
                    <Buttons />
                </div>
            </>
        )
    }

    return (
        <>
            <h2 className="logo">PawPair</h2>
            <div className="home-container">
                <h1>Pets Nearby</h1>
                <div className='card-container'>
                    <Card/>
                </div>
            </div>
        </>
    );
}

export default Home;