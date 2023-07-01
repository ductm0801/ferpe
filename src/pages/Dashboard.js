import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../styles/dashboard.css'
import { Button } from '@mui/material';

import { toast } from 'react-toastify';






const URL = "https://649911d179fbe9bcf83ea17c.mockapi.io/api/v1/staffManagement/";

const Dashboard = () => {

    const [staffs, setStaffs] = useState([])

    const getListStaff = async () => {
        const res = await axios.get(`${URL}`);
        if (res.status === 200) {
            setStaffs(res.data);
        }

    }
    useEffect(() => {
        getListStaff();
    }, []);

    const handleDelete = async (id) => {
        if (window.confirm(`Are you sure that you want to delelte a staff with ID: ${id}`)) {
            const res = await axios.delete(`${URL}/${id}`);
            if (res.status === 200) {
                getListStaff();
                toast.success("Delete Successfully");
            } else {
                toast.error("Delete: Error!");
            }

        }
    }
    return (
        <div className='staff-table'>
            <div className='btn-add'>
                <Link to={'/add/'}>
                    <button className='add-staff-btn'>ADD NEW STAFF</button>
                </Link>

            </div>
            <table>
                <thead>
                    <tr>
                        <td>ID</td>
                        <td>Name</td>
                        <td>Avatar</td>
                        <td>Age</td>
                        <td>Address</td>
                        <td>Created Date</td>
                        <td>Action</td>
                    </tr>
                </thead>
                <tbody>
                    {staffs && staffs.map((staff) =>
                        <tr key={staff.id}>
                            <td>{staff.id}</td>
                            <td>{staff.name}</td>
                            <td><img src={staff.avatar} alt={staff.id} /></td>
                            <td>{staff.age}</td>
                            <td>{staff.address}</td>
                            <td>{new Date(staff.createdAt * 1000).toLocaleDateString()}</td>
                            <td>
                                <Link to={`/update/${staff.id}`}><button>Edit</button></Link>
                                <button onClick={() => handleDelete(staff.id)}>Delete</button>
                            </td>
                        </tr>
                    )}

                </tbody>
            </table>
        </div>
    );
};

export default Dashboard;