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
                height: '100vh',
                position: 'fixed',
                top: '0px',
                left: '0px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'flex-end',
                flexDirection: 'column',
                backgroundColor: '#14040059'
            }}>
                <img src="/images/png/home-background-2.jpeg" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: '30% 70%', position: 'fixed', top: '0px', left: '0px' }}></img>
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