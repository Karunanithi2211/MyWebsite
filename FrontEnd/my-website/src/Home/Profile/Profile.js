import React, {useEffect, useState} from 'react'
import Navbar from '../Navbar'
import api from '../../api/axiosConfig'
import './Profile.css'

const Profile = () => {

    const [user, setUser] = useState();

    let userId
    function checkCookies(){
        const userId = document.cookie.split("; ")
            .find(row => row.startsWith('userId='))
            .split("=")[1];
            return userId
    }

    try {
        userId = checkCookies()
    } catch (error) {
        console.log(error)
        window.location.href='http://localhost:8080/?lif';
    }

    const getUserData = async (userId) => {
        try {
        const response = await api.get(`/api/v1/website/user/${userId}`);
        const singleDetail = response.data;
        setUser(singleDetail)
        } catch (error) {
        console.log(error);
        window.location.href='http://localhost:8080/?lif';
        }
    };

    useEffect(() => {
        getUserData(userId);
        console.log(user)
    }, [userId]);


    const [orderdetail, setOrderdetails] = useState()

    const getOrdersData = async (userId) => {
        try {
        const response = await api.get(`/api/v1/website/orders/${userId}`);
        const orderDetails = response.data;
        setOrderdetails(orderDetails)
        } catch (error) {
        console.log(error);
        window.location.href='http://localhost:8080/?lif';
        }
    };

    useEffect(() => {
        getOrdersData(userId);
        console.log(orderdetail)
    }, [userId]);

    return (
        <div>
            <Navbar/>
            <div className='profile-container'>
                <h1 className='profile-name'>Profile</h1>
                <hr/>
                <div className='profile-detail'>
                    <label className='form-label'>UserName:</label>
                    <h4>{user?.firstname} {user?.lastname}</h4>
                </div>
                <div className='profile-detail'>
                    <label className='form-label'>Age:</label>
                    <h4>{user?.age}</h4>
                </div>
                <div className='profile-detail'>
                    <label className='form-label'>Email:</label>
                    <h4>{user?.email}</h4>
                </div>
                <hr/>
                <div className='profile-detail-order'>
                    <label className='form-label'>Orders:</label>
                    <div>
                        {orderdetail?.length > 0 ? ( // Check if dataList has data
                            <table className='order-details'>
                            <thead>
                                <tr>
                                    <th>Product</th>
                                    <th>Colour</th> 
                                    <th>Variant</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    <th>Total Amount</th>
                                </tr>
                            </thead>
                            <tbody>
                                {orderdetail?.map((orders) => (
                                <tr key={orders.id} style={{borderBottom:'1px dotted white'}}>
                                    <td>{orders.productname}</td>
                                    <td>{orders.color}</td>
                                    <td>{orders.variant}</td>
                                    <td>{orders.productprice}</td>
                                    <td>{orders.quantity}</td>
                                    <td>{orders.totalamount}</td>
                                </tr>
                                ))}
                            </tbody>
                            </table>
                        ) : (
                            <center>
                            <p>No Orders yet</p>
                            </center>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile