import React from 'react';
import UserLoginServices from '../services/UserLoginService';
import {Navbar, Form,FormControl,Button}  from 'react-bootstrap';

class UserLoginComponents extends React.Component{

    constructor(props){
        super(props)
        this.state ={
            users:[]
        }
        
    }
    componentDidMount(){
        UserLoginServices.getUsers().then((Response) =>{
            this.setState({users:Response.data})
        });
    }
    render(){
        return(
            <div>
                <Navbar bg="dark" variant="dark">
                        <Form inline>
                            <FormControl type="text" placeholder="userId" className="mr-sm-2" />
                            <Button type="submit" variant="outline-info">Login</Button>
                        </Form>
                </Navbar>
                <h1 className = "text-center">User</h1>
                <table className = "table table-striped">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>email Id</th>
                            <th>User Id</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            this.state.users(
                                user =>
                                <tr key = {user.id}>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.id}</td>
                                </tr>
                            )
                            }
                    </tbody>
                </table>
            </div>
        )
    }
}
export default UserLoginComponents