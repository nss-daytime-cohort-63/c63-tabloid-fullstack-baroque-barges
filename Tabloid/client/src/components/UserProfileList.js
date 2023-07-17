import React, { useState, useEffect } from "react";
import { UserProfile } from "./UserProfile";




export const UserProfileList = () => {
    const baseUrl = '/api/UserProfile/'
    const [userProfiles, setUserProfiles] = useState([])



    useEffect(() => {
        fetch(baseUrl).then(res => (res.json())).then(userProfiles => setUserProfiles(userProfiles));

    }
        , []
    )
    // return getToken().then((token) => {
    //     return fetch(baseUrl, {
    //         method: "GET",
    //         headers: {
    //             Authorization: `Bearer ${token}`,
    //         },
    //     }).then((resp) => {
    //         if (resp.ok) {
    //             return resp.json();
    //         } else {
    //             throw new Error(
    //                 "An unknown error occurred while trying to get users."
    //             );
    //         }
    //     })
    //

    return (
        <div>
            {userProfiles.map((userProfile) => (<UserProfile userProfile={userProfile} key={userProfile.id} />))}
        </div>
    )
}

export default UserProfileList