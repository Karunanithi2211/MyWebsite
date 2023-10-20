import React, {useEffect, useState} from 'react'
import Navbar from '../Navbar'
import { useParams } from 'react-router-dom'
import api from '../../api/axiosConfig'
import './Detail.css'
import Carousel from 'react-material-ui-carousel'

const Detail = () => {
    
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


  const movetobuy = () => {
    window.location.href = `/detail/buy/${productid}`
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
                  <p>Save ₹{detail?.specs[10]} </p>
              </div>
              <div className='detail-price'>
                  <p>₹{detail?.price}/- <span className='detail-original-price'>₹{detail?.specs[8]}</span>   <span className='detail-discount'>{detail?.specs[9]}%</span></p>
              </div>
              <div className='detail-description'>
                <p style={{width:"700px",marginTop:"-20px"}}>{detail?.description}</p>
              </div>
              <div className='detail-spec-div'>
                <span className='detail-spec-name'>Specification of {detail?.name}</span>
                {
                  detail?.type === "phone"?(
                    <ul className='detail-spec-list'>
                      <li>Ram:           <span className='detail-spec-list-items'>{detail?.specs[1]}</span></li>
                      <li>Rom:           <span className='detail-spec-list-items'>{detail?.specs[2]}</span></li>
                      <li>Porcessor:     <span className='detail-spec-list-items'>{detail?.specs[3]}</span></li>
                      <li>Rear Camera:   <span className='detail-spec-list-items'>{detail?.specs[6]}</span></li>
                      <li>Front Camera:  <span className='detail-spec-list-items'>{detail?.specs[7]}</span></li>
                      <li>Size:          <span className='detail-spec-list-items'>{detail?.specs[4]}</span></li>
                      <li>Battery:       <span className='detail-spec-list-items'>{detail?.specs[5]}</span></li>
                    </ul>
                  ):null
                }
                {
                  detail?.type === "laptop"?(
                    <ul className='detail-spec-list'>
                    <li>Ram:           <span className='detail-spec-list-items'>{detail?.specs[1]}</span></li>
                    <li>Rom:           <span className='detail-spec-list-items'>{detail?.specs[2]}</span></li>
                    <li>Porcessor:     <span className='detail-spec-list-items'>{detail?.specs[3]}</span></li>
                    <li>Type:   <span className='detail-spec-list-items'>{detail?.specs[6]}</span></li>
                    <li>Graphics Card:  <span className='detail-spec-list-items'>{detail?.specs[7]}</span></li>
                    <li>Size:          <span className='detail-spec-list-items'>{detail?.specs[4]}</span></li>
                    <li>Battery:       <span className='detail-spec-list-items'>{detail?.specs[5]}</span></li>
                    <li>Core:       <span className='detail-spec-list-items'>{detail?.specs[11]}</span></li>
                </ul>
                  ):null
                }
                {
                  ((detail?.type !== "phone") && (detail?.type !== "laptop" ))?(
                    <ul className='detail-spec-list'>
                    <li><span className='detail-spec-list-items'>{detail?.specs[1]}</span></li>
                    <li><span className='detail-spec-list-items'>{detail?.specs[2]}</span></li>
                    <li><span className='detail-spec-list-items'>{detail?.specs[3]}</span></li>
                    <li><span className='detail-spec-list-items'>{detail?.specs[6]}</span></li>
                    <li><span className='detail-spec-list-items'>{detail?.specs[7]}</span></li>
                    <li><span className='detail-spec-list-items'>{detail?.specs[4]}</span></li>
                    <li><span className='detail-spec-list-items'>{detail?.specs[5]}</span></li>
                    <li><span className='detail-spec-list-items'>{detail?.specs[11]}</span></li>
                </ul>
                  ):null
                }
              </div>
            </div>
            <div className='button'>
              <button onClick={movetobuy} className='button-buy'>Buy</button>
            </div>
        </div>
    </div>
  )
}

export default Detail