import React, { Component } from 'react'

import { Link } from 'react-router-dom'
import axios from 'axios'

const userEndPoint = 'http://localhost:5000/users'

const Users = props => (
    <tr>
        <td>{ props.user.username }</td>
        <td>
            <Link to={"/edit/" + props.user._id}>edit</Link> | 
            <a href="#" onClick={() => {
                props.deleteUser(props.user._id)
            }}> delete</a>
        </td>
    </tr>
)

export default class UsersList extends Component {
    constructor(props) {
        super(props)

        this.deleteUser = this.deleteUser.bind(this)
        
        this.state = {
            users: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:5000/users/')
            .then(response => {
                this.setState({
                    users: response.data
                })
            })
            .catch((error) => {
                console.log(error)
            })
    }

    deleteUser(id) {
        axios.delete(userEndPoint + id)
            .then(res => console.log(res.data))

            this.setState({
                users: this.state.users.filter(userList => userList._id !== id)
            })
    }

    userList() {
        return this.state.users.map(
            currentUser => {
                return <Users user={currentUser}
                                    deleteUser={ this.deleteUser } key={ currentUser._id } />
            }
        )
    }

    render() {
        return (
            <div>
                <div>List of Users</div>
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th>Username</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.userList() }
                    </tbody>
                </table>
            </div>
        )
    }
}