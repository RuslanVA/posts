import React, { Component } from 'react';

import { connect } from 'react-redux';

import { withService } from '../hoc';
import { fetchUsers } from '../../actions';
import { compose } from '../../utils';

import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';

import './user-item.css';

const UserItem = ({ users, userId }) => {
    return (
        <div>
            {
                users.map((user) => {
                    const { name, id, username, address, phone, website} = user;
                    if (id === Number(userId)) {
                        return (
                            <div key={user.id}>
                                <table className="table table-hover">
                                    <tbody>
                                    <tr className="table-primary">
                                        <th scope="row">Name</th>
                                        <td>{name}</td>
                                    </tr>
                                    <tr className="table-primary">
                                        <th scope="row">Username</th>
                                        <td>{username}</td>
                                    </tr>
                                    <tr className="table-primary">
                                        <th scope="row">Phone</th>
                                        <td>{phone}</td>
                                    </tr>
                                    <tr className="table-primary">
                                        <th scope="row">Website</th>
                                        <td>{website}</td>
                                    </tr>
                                    <tr className="table-primary">
                                        <th scope="row">City</th>
                                        <td>{address.city}</td>
                                    </tr>
                                    <tr className="table-primary">
                                        <th scope="row">Street</th>
                                        <td>{address.street}</td>
                                    </tr>
                                    <tr className="table-primary">
                                        <th scope="row">Suite</th>
                                        <td>{address.suite}</td>
                                    </tr>
                                    <tr className="table-primary">
                                        <th scope="row">Zipcode</th>
                                        <td>{address.zipcode}</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        );
                    } else return null
                })
            }
        </div>
    );
};

class UserItemContainer extends Component {

    componentDidMount() {
        this.props.fetchUsers();
    }

    render() {
        const { users, loading, error } = this.props;


        if (loading) {
            return <Spinner />;
        }

        if (error) {
            return <ErrorIndicator />;
        }
        return <UserItem users={users} userId={this.props.userId}/>;
    }
}

const mapStateToProps = ({ userList: { users, loading, error }}) => {
    return { users, loading, error };
};

const mapDispatchToProps = (dispatch, { postsService }) => {

    return {
        fetchUsers: fetchUsers(postsService, dispatch)
    };
};

export default compose(
    withService(),
    connect(mapStateToProps, mapDispatchToProps)
)(UserItemContainer);
