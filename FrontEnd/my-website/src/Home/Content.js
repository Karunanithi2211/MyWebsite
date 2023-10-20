import React, { useState } from 'react'
import './Content.css'
import api from '../api/axiosConfig'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faClose, faSearch } from '@fortawesome/free-solid-svg-icons'

const Content = ({details}) => {

    // function for search
    const [filter, setFilter] = useState('');
  
    const handleFilterChange = (e) => {
        setFilter(e.target.value.toLowerCase().replace(/\s/g, ''));
    };
    
      const removeSpacesAndLowerCase = (text) => {
        return text.replace(/\s/g, '').toLowerCase();
    };

    // function for menu
    const showBrand = (brandName) => {
         



        const productsdiv = {
            mobiles: document.getElementById("mobiles"),
            laptops: document.getElementById("laptops"),
            others: document.getElementById("others")
        };

        const brandsofmob = {
            apple: document.getElementById("apple"),
            poco: document.getElementById("poco"),
            oppo: document.getElementById("oppo"),
            redmi: document.getElementById("redmi"),
        };
        const brandsoflap = {
            apple: document.getElementById("applelap"),
            lenovo: document.getElementById("lenovolap"),
            hp: document.getElementById("hplap"),
        };

        const othersof ={
            redmi: document.getElementById("redmiother"),
            othertv: document.getElementById("othertv"),
            headphone: document.getElementById("headphone")
        }

        for (const product in productsdiv) {
            productsdiv[product].style.display = "block"
        }
    
        for (const brand in brandsofmob) {
            brandsofmob[brand].style.display = brand === brandName ? "block" : "none"
        }
    
        for (const brandlap in brandsoflap) {
            brandsoflap[brandlap].style.display = brandlap === brandName ? "block" : "none"
        }
        for (const other in othersof) {
            othersof[other].style.display = other === brandName ? "block" : "none"
        }
    }
    




    // function for dropdown
    const showBrandProducts = (brandName, productName) => {

        const productsdiv = {
            mobiles: document.getElementById("mobiles"),
            laptops: document.getElementById("laptops"),
            others: document.getElementById("others")
        };
    
        const brandsofmob = {
            apple: document.getElementById("apple"),
            poco: document.getElementById("poco"),
            oppo: document.getElementById("oppo"),
            redmi: document.getElementById("redmi")
        };
    
        const brandsoflap = {
            applelap: document.getElementById("applelap"),
            lenovolap: document.getElementById("lenovolap"),
            hplap: document.getElementById("hplap")
        };
    
        for (const product in productsdiv) {
            productsdiv[product].style.display = product === productName ? "block" : "none"
        }
    
        for (const brandmob in brandsofmob) {
            brandsofmob[brandmob].style.display = brandmob === brandName && productName === "mobiles" ? "block" : "none"
        }
    
        for (const brandlap in brandsoflap) {
            brandsoflap[brandlap].style.display = brandlap === brandName && productName === "laptops" ? "block" : "none"
        }
    }

    const showAllProducts= (productName)=>{
        const productsdiv = {
            mobiles: document.getElementById("mobiles"),
            laptops: document.getElementById("laptops"),
            others: document.getElementById("others")
        };
        const brandsofmob = {
            apple: document.getElementById("apple"),
            poco: document.getElementById("poco"),
            oppo: document.getElementById("oppo"),
            redmi: document.getElementById("redmi")
        };
    
        const brandsoflap = {
            applelap: document.getElementById("applelap"),
            lenovolap: document.getElementById("lenovolap"),
            hplap: document.getElementById("hplap")
        };
        for (const product in productsdiv) {
            productsdiv[product].style.display = product === productName ? "block" : "none"
            if(productName === "mobiles"){
                for (const brandmob in brandsofmob) {
                    brandsofmob[brandmob].style.display =  "block"
                }
            }
            else{
                for (const brandlap in brandsoflap) {
                    brandsoflap[brandlap].style.display = "block"
                }
            }
        }
    }

    //function for others
    const showOther = () =>{
        const mobiles= document.getElementById("mobiles")
        const laptops= document.getElementById("laptops")
        const others= document.getElementById("others")
        const redmitv= document.getElementById("redmiother")
        const othertv= document.getElementById("othertv")
        const headphone= document.getElementById("headphone")

        mobiles.style.display = "none"
        laptops.style.display = "none"
        others.style.display = "block"
        redmitv.style.display = "block"
        othertv.style.display = "block"
        headphone.style.display = "block"
    }
    


    return (
        <div className='content-products'>
            <div className='content-nav bg-dark'>
                <div>
                    <div className="bg-dark offcanvas" id="demo">
                        <div className="offcanvas-header">
                            <h1 className="offcanvas-title icon-menu-detail-header">Companies</h1>
                            <button type="button" className="icon-menu-detail-close" data-bs-dismiss="offcanvas"><FontAwesomeIcon icon={faClose}/></button>
                        </div>

                        {/* content for menu*/}
                        <div className="offcanvas-body">
                            <button className="icon-menu-detail-items" type="button" onClick={() => showBrand('apple')}>Apple</button>
                            <button className="icon-menu-detail-items" type="button" onClick={() => showBrand('poco')}>Poco</button>
                            <button className="icon-menu-detail-items" type="button" onClick={() => showBrand('oppo')}>Oppo</button>
                            <button className="icon-menu-detail-items" type="button" onClick={() => showBrand('redmi')}>Redmi</button>
                         </div>
                    </div>
                </div>
                <button class="icon-menu" type="button" data-bs-toggle="offcanvas" data-bs-target="#demo">
                    <FontAwesomeIcon icon={faBars}/>
                </button>
                <FontAwesomeIcon className='icon-search' icon={faSearch} />
                <input type='text' placeholder='Search for Products' className='search-bar' onChange={handleFilterChange}/>
                <div className='products'>
                    
                    {/* content for dropdown */}
                    <div class="btn-group">
                        <div class="btn-group">
                            <button type="button" class="product-button" data-bs-toggle="dropdown">Phone</button>
                            <ul class="dropdown-menu">
                                <li><button class="dropdown-item" onClick={()=>showAllProducts('mobiles')}>All</button></li>
                                <li><button class="dropdown-item" onClick={()=>showBrandProducts('apple','mobiles')}>Apple</button></li>
                                <li><button class="dropdown-item" onClick={()=>showBrandProducts('poco','mobiles')}>Poco</button></li>
                                <li><button class="dropdown-item" onClick={()=>showBrandProducts('oppo','mobiles')}>Oppo</button></li>
                                <li><button class="dropdown-item" onClick={()=>showBrandProducts('redmi','mobiles')}>Redmi</button></li>
                            </ul>
                        </div>
                        <div class="">
                            <button type="button" class="product-button" data-bs-toggle="dropdown">Laptop</button>
                            <ul class="dropdown-menu">
                                
                                <li><button class="dropdown-item" onClick={()=>showAllProducts('laptops')}>All</button></li>
                                <li><button class="dropdown-item" onClick={()=>showBrandProducts('applelap','laptops')}>Apple</button></li>
                                <li><button class="dropdown-item" onClick={()=>showBrandProducts('lenovolap','laptops')}>Lenovo</button></li>
                                <li><button class="dropdown-item" onClick={()=>showBrandProducts('hplap','laptops')}>HP</button></li>
                                
                            </ul>
                        </div>
                        <div class="btn-group">
                            <button type="button" class="product-button" onClick={showOther}>Others</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className='content-container'>
                
                {/* body for mobiles */}
                <div id='mobiles' className='productsof'>
                    <div id='product-phones'>

                        {/* apple mobiles */}
                        <div id='apple' className='companies'>
                            <h1 className='product-title'>Apple Mobiles</h1>
                            <div className='image-details'>
                                {
                                    details?.map((detail)=>{
                                        const itemName = removeSpacesAndLowerCase(detail?.name)
                                        const showItem = !filter || itemName.includes(filter);

                                        if((detail?.brand === 'apple')&&(detail?.type === "phone")){
                                            return(
                                                <div style={{ display: showItem ? 'block' : 'none'}}>
                                                    <div className='image-container'>
                                                        <Link to={`/detail/${detail.productid}`}>
                                                            <img src={api.defaults.baseURL + detail.imageurl[0]} alt={detail.name} className='rounded image-container-img'/>
                                                        </Link>
                                                    </div>
                                                    <div className='image-name'>
                                                        <h5>{detail.name}</h5>
                                                    </div>
                                                </div>
                                            )
                                        }
                                    })
                                }
                            </div>
                            <hr/>
                        </div>

                        {/* poco mobiles */}
                        <div id='poco' className='companies'>
                            <h1 className='product-title'>Poco Mobiles</h1>
                            <div className='image-details'>
                                {
                                    details?.map((detail)=>{
                                        const itemName = removeSpacesAndLowerCase(detail?.name)
                                        const showItem = !filter || itemName.includes(filter);
                                        if((detail?.brand === 'poco')&&(detail?.type === "phone")){
                                            return(
                                                <div style={{ display: showItem ? 'block' : 'none' }}>
                                                    <div className='image-container'>
                                                        <Link to={`/detail/${detail.productid}`}>
                                                            <img src={api.defaults.baseURL + detail.imageurl[0]} alt={detail.name} className='rounded image-container-img'/>
                                                        </Link>
                                                    </div>
                                                    <div className='image-name'>
                                                        <h5>{detail.name}</h5>
                                                    </div>
                                                </div>
                                            )
                                        }
                                    })
                                }
                            </div>
                            <hr/>
                        </div>

                        {/* oppo mobiles */}
                        <div id='oppo' className='companies'>
                            <h1 className='product-title'>Oppo Mobiles</h1>
                            <div className='image-details'>
                                {
                                    details?.map((detail)=>{
                                        const itemName = removeSpacesAndLowerCase(detail?.name)
                                        const showItem = !filter || itemName.includes(filter);
                                        if((detail?.brand === 'oppo')&&(detail?.type === "phone")){
                                            return(
                                                <div style={{ display: showItem ? 'block' : 'none'}}>
                                                    <div className='image-container'>
                                                        <Link to={`/detail/${detail.productid}`}>
                                                            <img src={api.defaults.baseURL + detail.imageurl[0]} alt={detail.name} className='rounded image-container-img'/>
                                                        </Link>
                                                    </div>
                                                    <div className='image-name'>
                                                        <h5>{detail.name}</h5>
                                                    </div>
                                                </div>
                                            )
                                        }
                                    })
                                }
                            </div>
                            <hr/>
                        </div>

                        {/* redmi mobiles */}
                        <div id='redmi' className='companies'>
                            <h1 className='product-title'>Redmi Mobiles</h1>
                            <div className='image-details'>
                                {
                                    details?.map((detail)=>{
                                        const itemName = removeSpacesAndLowerCase(detail?.name)
                                        const showItem = !filter || itemName.includes(filter);
                                        if((detail?.brand === 'redmi')&&(detail?.type === "phone")){
                                            return(
                                                <div style={{ display: showItem ? 'block' : 'none'}}>
                                                    <div className='image-container'>
                                                        <Link to={`/detail/${detail.productid}`}>
                                                            <img src={api.defaults.baseURL + detail.imageurl[0]} alt={detail.name} className='rounded image-container-img'/>
                                                        </Link>
                                                    </div>
                                                    <div className='image-name'>
                                                        <h5>{detail.name}</h5>
                                                    </div>
                                                </div>
                                            )
                                        }
                                    })
                                }
                            </div>
                            <hr/>
                        </div>


                    </div>
                </div>
            
            
                {/* body for laptop */}
                <div id='laptops' className='productsof'>
                    
                {/* apple Laptops */}
                <div id='applelap' className='companies'>
                    <h1 className='product-title'>Apple Laptops</h1>
                    <div className='image-details'>
                        {
                            details?.map((detail)=>{
                                const itemName = removeSpacesAndLowerCase(detail?.name)
                                const showItem = !filter || itemName.includes(filter);

                                if((detail?.brand === 'apple') && (detail?.type === "laptop")){
                                    return(
                                        <div style={{ display: showItem ? 'block' : 'none'}}>
                                            <div className='image-container'>
                                                <Link to={`/detail/${detail.productid}`}>
                                                    <img src={api.defaults.baseURL + detail.imageurl[0]} alt={detail.name} className='rounded image-container-img'/>
                                                </Link>
                                            </div>
                                            <div className='image-name'>
                                                <h5>{detail.name}</h5>
                                            </div>
                                        </div>
                                    )
                                }
                            })
                        }
                    </div>
                    <hr/>
                </div>

                {/* Lenovo Laptops */}
                <div id='lenovolap' className='companies'>
                    <h1 className='product-title'>Lenovo Laptops</h1>
                    <div className='image-details'>
                        {
                            details?.map((detail)=>{
                                const itemName = removeSpacesAndLowerCase(detail?.name)
                                const showItem = !filter || itemName.includes(filter);

                                if((detail?.brand === 'Lenovo') && (detail?.type === "laptop")){
                                    return(
                                        <div style={{ display: showItem ? 'block' : 'none'}}>
                                            <div className='image-container'>
                                                <Link to={`/detail/${detail.productid}`}>
                                                    <img src={api.defaults.baseURL + detail.imageurl[0]} alt={detail.name} className='rounded image-container-img'/>
                                                </Link>
                                            </div>
                                            <div className='image-name'>
                                                <h5>{detail.name}</h5>
                                            </div>
                                        </div>
                                    )
                                }
                            })
                        }
                    </div>
                    <hr/>
                </div>

                {/* Hp Laptops */}
                <div id='hplap' className='companies'>
                    <h1 className='product-title'>HP Laptops</h1>
                    <div className='image-details'>
                        {
                            details?.map((detail)=>{
                                const itemName = removeSpacesAndLowerCase(detail?.name)
                                const showItem = !filter || itemName.includes(filter);

                                if((detail?.brand === 'HP') && (detail?.type === "laptop")){
                                    return(
                                        <div style={{ display: showItem ? 'block' : 'none'}}>
                                            <div className='image-container'>
                                                <Link to={`/detail/${detail.productid}`}>
                                                    <img src={api.defaults.baseURL + detail.imageurl[0]} alt={detail.name} className='rounded image-container-img'/>
                                                </Link>
                                            </div>
                                            <div className='image-name'>
                                                <h5>{detail.name}</h5>
                                            </div>
                                        </div>
                                    )
                                }
                            })
                        }
                    </div>
                    <hr/>
                </div>

                   


                </div>


                {/* body for Others */}
                <div id='others' className='productsof'>
                    {/* Redmi Tv */}
                    <div id='redmiother' className='companies'>
                        <h1 className='product-title'>Tv</h1>
                        <div className='image-details'>
                            {
                                details?.map((detail)=>{
                                    const itemName = removeSpacesAndLowerCase(detail?.name)
                                    const showItem = !filter || itemName.includes(filter);

                                    if((detail?.brand === 'redmi') && (detail?.type === "tv")){
                                        return(
                                            <div style={{ display: showItem ? 'block' : 'none'}}>
                                                <div className='image-container'>
                                                    <Link to={`/detail/${detail.productid}`}>
                                                        <img src={api.defaults.baseURL + detail.imageurl[0]} alt={detail.name} className='rounded image-container-img'/>
                                                    </Link>
                                                </div>
                                                <div className='image-name'>
                                                    <h5>{detail.name}</h5>
                                                </div>
                                            </div>
                                        )
                                    }
                                })
                            }
                        </div>
                        <hr/>
                    </div>

                    {/* Other Tv */}
                    <div id='othertv' className='companies'>
                        <div className='image-details'>
                            {
                                details?.map((detail)=>{
                                    const itemName = removeSpacesAndLowerCase(detail?.name)
                                    const showItem = !filter || itemName.includes(filter);

                                    if((detail?.brand !== 'redmi') && (detail?.type === "tv")){
                                        return(
                                            <div style={{ display: showItem ? 'block' : 'none'}}>
                                                <div className='image-container'>
                                                    <Link to={`/detail/${detail.productid}`}>
                                                        <img src={api.defaults.baseURL + detail.imageurl[0]} alt={detail.name} className='rounded image-container-img'/>
                                                    </Link>
                                                </div>
                                                <div className='image-name'>
                                                    <h5>{detail.name}</h5>
                                                </div>
                                            </div>
                                        )
                                    }
                                })
                            }
                        </div>
                        <hr/>
                    </div>

                     {/* Headphones */}
                     <div id='headphone' className='companies'>
                     <h1 className='product-title'>Headphones</h1>
                        <div className='image-details'>
                            {
                                details?.map((detail)=>{
                                    const itemName = removeSpacesAndLowerCase(detail?.name)
                                    const showItem = !filter || itemName.includes(filter);

                                    if(detail?.type === "headphone"){
                                        return(
                                            <div style={{ display: showItem ? 'block' : 'none'}}>
                                                <div className='image-container'>
                                                    <Link to={`/detail/${detail.productid}`}>
                                                        <img src={api.defaults.baseURL + detail.imageurl[0]} alt={detail.name} className='rounded image-container-img'/>
                                                    </Link>
                                                </div>
                                                <div className='image-name'>
                                                    <h5>{detail.name}</h5>
                                                </div>
                                            </div>
                                        )
                                    }
                                })
                            }
                        </div>
                        <hr/>
                    </div>
                


                </div>
            </div>
        

        </div>
    )
}

export default Content