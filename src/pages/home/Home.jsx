import React from 'react';
import MyCarousel from '../../components/carousel/Carousel';
import './Home.css';
import { IoIosNotifications } from 'react-icons/io';
import { GoLocation } from 'react-icons/go';
import { MdAddShoppingCart, MdOutlineSendToMobile, MdMessage } from 'react-icons/md';
import { BsSearch, BsFillMicFill, BsNewspaper } from 'react-icons/bs';
import { FiMonitor } from 'react-icons/fi';
import { FaRupeeSign, FaBullhorn } from 'react-icons/fa';
import { SiBloglovin } from 'react-icons/si';
import { GiDiscussion } from 'react-icons/gi';
import FCard from '../../components/featureCard/FCard';


const Home = () => {

    const cardData = [{ title: 'Mobile Recharge', icon: <MdOutlineSendToMobile className='myIcon' /> }, { title: 'Dth Recharge', icon: <FiMonitor className='myIcon' /> }, { title: 'Loans', icon: <FaRupeeSign className='myIcon' /> }, { title: 'Promotions', icon: <FaBullhorn className='myIcon' /> }, { title: 'News', icon: <BsNewspaper className='myIcon' /> }, { title: 'Blog', icon: <SiBloglovin className='myIcon' /> }, { title: 'Confession', icon: <GiDiscussion className='myIcon' />}, { title: 'Feedback', icon: <MdMessage className='myIcon' />}]

    return (
        <div className='homeContainer'>
            <div className="header section-padding">
                <div className="nav1">
                    <GoLocation className='bigIcon' />
                    <div className="address">17- Rose Villa</div>
                    <IoIosNotifications className='icon' />
                    <MdAddShoppingCart className='icon' />
                </div>
                <div className="nav2">
                    <div className="searchBar">
                        <BsSearch className='searchIcon' />
                        <input type="text" placeholder='Search for Products' />
                    </div>
                    <BsFillMicFill className="bigIcon" />
                </div>
            </div>

            <div className="imgCarousel section-padding">
                <MyCarousel />
            </div>

            <div className="featureCards section-padding">
                { cardData.map((item, id) => (
                    <FCard key={id} item={item} />
                ))}
            </div>

            <div className="services section-padding">
                <div className="service">Popular Service Products</div>
                <div className="service">All Popular Service Providers</div>
                <div className="service">Services We Provide</div>
            </div>
        </div>
    )
}

export default Home