import React, {useEffect, useState} from 'react'
import Navbar from '../Navbar'
import api from '../../api/axiosConfig'
import { useParams } from 'react-router-dom'
import './Buy.css'
import { Notification, toast } from '../Notification';
import Carousel from 'react-material-ui-carousel'


const Buy = () => {
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


    const params = useParams();
    const productid = params.productid;
    const [detail, setDetail] = useState();

    const getDetailsData = async (productid) => {
        try {
        const response = await api.get(`/api/v1/website/${productid}`);
        const singleDetail = response.data;
        setDetail(singleDetail);
        } catch (error) {
        console.log(error);
        }
    };
    useEffect(() => {
        getDetailsData(productid);
        console.log(detail)
    }, [productid]);

    

    function incrementValue() {
        var inputField = document.getElementById("quantity");
        var currentValue = parseInt(inputField.value, 10);
    
        if (currentValue < 100) {
            inputField.value = currentValue + 1;
            updateTotalPrice(currentValue + 1); // Update the total price
        }
    }
    
    function decrementValue() {
        var inputField = document.getElementById("quantity");
        var currentValue = parseInt(inputField.value, 10);
    
        if (currentValue > 0) {
            inputField.value = currentValue - 1;
            updateTotalPrice(currentValue - 1); // Update the total price
        }
    }

    function updateTotalPrice(value) {
        var priceofpro = detail?.price;
        var totalprice = document.getElementById("totalprice");
        totalprice.textContent = value * priceofpro;
    }

    const [user, setUser] = useState();
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

    const sendpurchaselist = async () => {
        try {
        var quantities = document.getElementById("quantity")
        var quantity = quantities.value
        var iduser = user?.id
        var variant= `${detail?.specs[1]},${detail?.specs[2]}`

        let dataList 
        if ((detail?.type === "phone") || (detail?.type === "laptop")){
            const dataLists = [{
            "userid": String(iduser),
            "email": user?.email,
            "productname": detail?.name,
            "color":detail?.specs[0],
            "variant":variant,
            "productprice": detail?.price,
            "quantity": quantity,
            "totalamount": detail?.price*quantity
            }]
            dataList = dataLists
            console.log(dataList)
        }
        else{
            const dataLists = [{
                "userid": String(iduser),
                "email": user?.email,
                "productname": detail?.name,
                "color":detail?.specs[0],
                "variant":"",
                "productprice": detail?.price,
                "quantity": quantity,
                "totalamount": detail?.price*quantity
                }]
                console.log(dataList)
            dataList = dataLists
        }
       
       
        

        const dataToSend = JSON.stringify(dataList);
        const config = {
            headers: {
                'Content-Type': 'application/json',
            },
        };

        await api.post('/api/v1/website/buyed',dataList);
        console.log("Data sent Successfully")
        showNotification("Ordered Successfully")
        } catch (error) {
        console.log(error);
        }
    };

    const showNotification = (message) => {
        toast.success(message, {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 2000,
            closeButton: false,
            hideProgressBar: true,
            className: 'notification-success',
            bodyClassName: "notification-body"
          });
          setTimeout(() => {
            window.location.href = "/";
          }, 3000);
      };


  return (
    <div className='detail-container'>
        <Navbar />
        <div className='detail-content'>
            <div className='carousel-container'>
              <Carousel>
                {
                  detail?.imageurl.map((images) => (
                  <div className='image-container-detail'>
                      <img src={api.defaults.baseURL + images} alt={detail?.name} className='rounded image-container-detail-img'/>
                  </div>
                ))}
              </Carousel>
            </div>
            <div className='detail-details'>
              <div className='detail-name'>
                  <h1>{detail?.name} ({detail?.specs[2]},{detail?.specs[0]})</h1>
                  <hr/>
              </div>
              <div className='save-amount'>
                  <p>Save ₹{detail?.specs[10]}</p>
              </div>
              <div className='detail-price'>
                  <p>₹{detail?.price}/- <span className='detail-original-price'>₹{detail?.specs[8]}</span>   <span className='detail-discount'>{detail?.specs[9]}%</span></p>
              </div>
              <div className='detail-description'>
                <p style={{width:"700px",marginTop:"-20px"}}>{detail?.description}</p>
              </div>
              <div className='pricelist-container'>
                <table className='buy-table'>
                    <tr>
                        <td>Price</td>
                        <td>{detail?.price}</td>
                    </tr>
                    <tr>
                        <td>Quantity</td>
                        <td>
                            <form id='myform' method='POST' class='quantity' action='#'>
                                <input type='button' value='-' className='qtyadjust' onClick={decrementValue}/>
                                <input type='text' id='quantity' value='1' className='qty' />
                                <input type='button' value='+' className='qtyadjust' onClick={incrementValue} />
                            </form>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td><hr/></td>
                    </tr>
                    <tr>
                        <td>Total Amount</td>
                        <td id='totalprice'>{detail?.price}</td>
                    </tr>
                </table>
            </div>
            </div>
            
            <div className='button'>
              <button className='button-purchase' onClick={sendpurchaselist}>Purchase</button>
            </div>
        </div>
        <Notification />
    </div>
  )
}

export default Buy