import React, { useState } from "react";
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';
import { useNavigate } from "react-router-dom";
import { Carousel } from 'primereact/carousel';
import './index.scss';

export default function Home() {

    const responsiveOptions = [
        {
            breakpoint: '1400px',
            numVisible: 2,
            numScroll: 1
        },
        {
            breakpoint: '1199px',
            numVisible: 3,
            numScroll: 1
        },
        {
            breakpoint: '767px',
            numVisible: 2,
            numScroll: 1
        },
        {
            breakpoint: '575px',
            numVisible: 1,
            numScroll: 1
        }
    ];

    const products = [
        {
            name: 'Latte Coffee',
            description: "Espresso with steamed milk and light foam.",
            price: 100,
            image: 'op-1-latte.jpg'
        },
        {
            name: 'Iced Coffee',
            description: "Chilled coffee over ice, often sweetened.",
            price: 100,
            image: 'op-2-iced.jpg'
        },
        {
            name: 'Mocha',
            description: "Espresso with chocolate and steamed milk.",
            price: 100,
            image: 'op-3-mocha.jpg'
        },
        {
            name: 'Filtered Coffee',
            description: "Brewed with hot water passing through grounds.",
            price: 100,
            image: 'op-4-filtered.jpg'
        },
        {
            name: 'Black Coffee',
            description: "Plain coffee without any milk or sugar.",
            price: 100,
            image: 'op-5-black.jpg'
        },
        {
            name: 'Beaten Coffee',
            description: "Whipped with sugar to creamy texture before brewing.",
            price: 100,
            image: 'op-6-beaten.jpg'
        }
    ];

    const foods = [
        {
            name: 'Ice Cream Cake',
            description: "A layered dessert combining cake and ice cream.",
            price: 100,
            image: 'cmd-6.jpg'
        },
        {
            name: 'Churros',
            description: "Fried dough pastries, typically dusted with sugar.",
            price: 100,
            image: 'cmd-7.jpg'
        },
        {
            name: 'Strawberry Pie',
            description: "A pie filled with sweet, fresh strawberries.",
            price: 100,
            image: 'cmd-3.jpg'
        },
        {
            name: 'Chocolate Waffles',
            description: "Waffles infused with chocolate, served warm.",
            price: 100,
            image: 'cmd-4.jpg'
        },
        {
            name: 'Pudding',
            description: "A creamy dessert, often flavored with vanilla or chocolate.",
            price: 100,
            image: 'cmd-2.jpg'
        },
        {
            name: 'Brownies',
            description: "Dense, chocolate squares with a chewy texture.",
            price: 100,
            image: 'cmd-1.jpg'
        },
        {
            name: 'Chocolate Muffins',
            description: "Soft muffins with rich chocolate flavor.",
            price: 100,
            image: 'cmd-5.jpg'
        }
    ];

    const productTemplate = (product) => {
        return (
            <div className="surface-border border-round m-2 text-center py-5 px-3 h-full flex flex-column justify-content-between">
                <div className="mb-3" style={{ height: '80%' }}>
                    <img src={`/images/png/${product.image}`} alt={product.name} style={{ width: '100%', height: '470px', objectFit: 'cover' }} className="shadow-2" />
                </div>
                <div style={{ height: '20%' }}>
                    <div className="bebas-neue-regular" style={{ fontSize: '24px', textAlign: 'start' }}>{product.name}</div>
                    <div className="lato-regular" style={{ fontSize: '16px', textAlign: 'start', minHeight: '38px' }}>{product.description}</div>
                    <div className="mt-3 flex flex-wrap gap-2 align-items-center justify-content-between">
                        <div className="lato-black">R${product.price}</div>
                        <div className="buy-button lato-regular">ORDER&nbsp; NOW</div>
                    </div>
                </div>
            </div>
        );
    };
    
    return (
        <div id="main-screen" className="w-full h-full flex flex-column align-items-center">
            <div id="navbar-container">
                <span className="title lato-black">Coffee</span>
                <ul>
                    <li className="bebas-neue-regular"><a href="#home">Home</a></li>
                    <li className="bebas-neue-regular"><a href="#coffee">Coffee</a></li>
                    <li className="bebas-neue-regular"><a href="#bakery">Bakery</a></li>
                    <li className="bebas-neue-regular"><a href="#shop">Shop</a></li>
                    <li className="bebas-neue-regular"><a href="#about">About</a></li>
                    <li className="bebas-neue-regular"><a href="#login">Login</a></li>
                </ul>
                <i className="pi pi-search" style={{ fontSize: '24px', color: '#FFF' }}></i>
            </div>
            <div className="image-container" style={{backgroundImage: 'url("/images/png/home-background-2.jpeg")' }}>
                <div style={{ width: '60%', zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <img src="/images/png/coffee-beans-logo-light.png" style={{ width: '200px', filter: 'invert(100%) sepia(0%) saturate(7500%) hue-rotate(23deg) brightness(118%) contrast(118%)' }} ></img>
                    <div className="montserrat" style={{ zIndex: 3, color: '#FFF', fontSize: '30px' }}>Welcome to</div>
                    <div className="bebas-neue-regular" style={{ zIndex: 3, color: '#FFF', fontSize: '75px', textAlign: 'center', letterSpacing: '8px' }}>ARTISAN COFFE</div>
                    <div style={{ marginBottom: '13px', display: 'flex', alignItems: 'center' }}>
                        <div style={{color: '#FFF', marginTop: '-15px' }}>______</div>
                        <img src="/images/png/coffee-beans-ic.png" style={{ width: '25px', filter: 'invert(100%) sepia(0%) saturate(7500%) hue-rotate(23deg) brightness(118%) contrast(118%)', margin: '0px 15px' }} ></img>
                        <div style={{color: '#FFF', marginTop: '-15px' }}>______</div>
                    </div>
                    <div className="montserrat" style={{ zIndex: 3, color: '#FFF', fontSize: '30px', marginBottom: '30px', textAlign: 'center' }}>We serve the richest coffee in<br></br> the city!</div>

                    
                    <div className="custom-buttom">ORDER NOW</div>
                </div>
            </div>
            <div className="lato-bold" style={{ width: '60%', display: 'flex', justifyContent: 'space-around', margin: '150px 0px', opacity: '0.7' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <img src="/images/png/coffee-ic.png" width={70}></img>
                    <span style={{ textAlign: 'center' }}>Brewed to Perfection</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <img src="/images/png/delivery-ic.png" width={70}></img>
                    <span style={{ textAlign: 'center' }}>Grab & Go</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <img src="/images/png/stores-ic.png" width={70}></img>
                    <span style={{ textAlign: 'center' }}>Coffee Shop Haven</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <img src="/images/png/cake-ic.png" width={70}></img>
                    <span style={{ textAlign: 'center' }}>Sweet Desserts</span>
                </div>
            </div>
            <div style={{ width: '80%', marginBottom: '50px' }}>
                <div className="shop-container">
                    <div className="bebas-neue-regular" style={{ fontSize: '26px', width: '100%', textAlign: 'center' }}>OUR SPECIAL COFFEE</div>
                    <Carousel value={products} numVisible={4} numScroll={4} responsiveOptions={responsiveOptions} className="custom-carousel" circular
                    itemTemplate={productTemplate} />
                    <div className="bebas-neue-regular" style={{ fontSize: '26px', width: '100%', textAlign: 'center', marginTop: '50px' }}>OUR SPECIAL DESSERT</div>
                    <Carousel value={foods} numVisible={4} numScroll={4} responsiveOptions={responsiveOptions} className="custom-carousel" circular
                    itemTemplate={productTemplate} />
                </div>
                <div className="beans-container">
                    <img className="hands-img" src="/images/png/coffee-wave.png" width={550}></img>
                    <div className="content">
                        <div className="lato-black" style={{ fontSize: '40px' }}>Check out our best coffee beans, carefully selected for the perfect brew.</div>
                        <div className="lato-bold" style={{ fontSize: '16px' }}>Discover our finest selection of coffee beans, carefully sourced and expertly roasted to bring out the richest flavors.<br></br> Treat yourself to the best coffee experience with our premium beans, perfect for every coffee lover.</div>
                        <div className="buy-button lato-regular" style={{ borderRadius: '50px', marginTop: '30px' }}>BUY</div>
                    </div>
                    <img className="coffee-portion-img" src="/images/png/coffee-and-beans.png" width={350}></img>
                </div>
            </div>
        </div>
    )
}