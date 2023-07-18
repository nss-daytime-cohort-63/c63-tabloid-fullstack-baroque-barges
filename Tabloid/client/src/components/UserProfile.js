export const UserProfile = ({ userProfile }) => {
    return (
        <div>
            <p>Name: {userProfile.fullName}</p>
            <p>Display Name: {userProfile.displayName}</p>
            <p>User Type: {userProfile.userType.name}</p>
        </div>
    )
}