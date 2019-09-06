import React, {Fragment} from 'react';
import UserItem from "../user-item";


const UserPage = ({userId}) => {
    return (
        <Fragment>
            <UserItem userId={userId}/>
        </Fragment>

    );
};

export default UserPage;