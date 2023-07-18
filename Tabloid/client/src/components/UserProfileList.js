import React, { useState, useEffect } from "react";
import { UserProfile } from "./UserProfile";




export const UserProfileList = ({ profile }) => {
    const baseUrl = '/api/UserProfile/'
    const [userProfiles, setUserProfiles] = useState([])



    useEffect(() => {
        fetch(baseUrl).then(res => (res.json())).then(userProfiles => setUserProfiles(userProfiles));

    }
        , []
    )
    console.log(profile)

    return (
        <div>
            {
                profile?.userTypeId === 1 ?
                    userProfiles.map((userProfile) => (<UserProfile userProfile={userProfile} key={userProfile.id} />))
                    : ""

            }

        </div>

    )
}

export default UserProfileList