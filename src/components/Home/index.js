import React, { useState } from "react";
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';
import { useNavigate } from "react-router-dom";
import './index.scss';

export default function Home() {
    return (
        <div id="main-screen" className="w-full h-full flex flex-column align-items-center justify-content-center">
            <div style={{
                width: '100%',
                height: '660px',
                minHeight: '660px',
                position: 'relative',
                display: 'flex',
                justifyContent: 'flex-end',
                alignItems: 'center',
                flexDirection: 'column',
                backgroundColor: '#14040059'
            }}>
                <img src="/images/png/coffe-ia-2.png" style={{ position: 'absolute', width: '100%', height: '660px', objectFit: 'cover', objectPosition: '30% 70%' }}></img>
                <div style={{ width: '60%', zIndex: 2, marginBottom: '110px' }}>
                    <div className="montserrat" style={{ zIndex: 3, color: '#FFF', fontSize: '25px' }}>Welcome!</div>
                    <div className="montserrat-bold" style={{ zIndex: 3, color: '#FFF', fontSize: '40px', marginBottom: '10px' }}>We serve the richest coffee<br></br>in the city!</div>
                    <Button label="Order Now" className="order-now-button lato-bold" rounded />
                </div>
            </div>
            <div id="navbar-container">
                <span className="title lato-black-italic">Coffee</span>
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
            <div className="lato-bold" style={{ width: '60%', display: 'flex', justifyContent: 'space-around', margin: '50px 0px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <img src="/images/png/coffee-ic-1.png" width={70}></img>
                    <span style={{ textAlign: 'center' }}>Grab & Go</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <img src="/images/png/coffee-ic-5.png" width={70}></img>
                    <span style={{ textAlign: 'center' }}>Brewed to Perfection</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <img src="/images/png/coffee-ic-6.png" width={70}></img>
                    <span style={{ textAlign: 'center' }}>Order Your Blend</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <img src="/images/png/coffee-ic-3.png" width={70}></img>
                    <span style={{ textAlign: 'center' }}>Premium Beans</span>
                </div>
            </div>
            <div style={{ backgroundColor: '#FFF', minHeight: '600px', width: '80%', padding: '30px' }}>
                <div className="bebas-neue-regular" style={{ fontSize: '26px', width: '100%', textAlign: 'center' }}>OUR SPECIAL COFFEE</div>
            </div>
        </div>
    )
}