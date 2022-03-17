import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';
import { Link } from 'react-router-dom';


class ListEmployeeComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            employees: []

        }
    }

    componentDidMount() {
        EmployeeService.getEmployees().then((res) => {
            this.setState({ employees: res.data });
        });
    }


    render() {
        return (
            <div>
                <h2 className="text-center">Employee List</h2>
                <div className='row'>
                    <div className='col-4'>

                        <Link className='btn btn-primary' to="/add-employee">Add Employee</Link>

                    </div>
                </div>
                <div className="row">
                    <table className='table table-striped table-bordered'>
                        <thead>
                            <tr>
                                <th> Employee First Name</th>
                                <th> Employee Last Name</th>
                                <th> Employee Email</th>
                                <th> Actions</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                this.state.employees.map(
                                    employee =>
                                        <tr key={employee.id}>
                                            <td>{employee.firstName}</td>
                                            <td>{employee.lastName}</td>
                                            <td>{employee.email}</td>

                                        </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }

}


export default ListEmployeeComponent;