import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import { IconField } from 'primereact/iconfield';
import { InputIcon } from 'primereact/inputicon';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';
import { useNavigate } from "react-router-dom";
import { Carousel } from 'primereact/carousel';
import './index.scss';

export default function Home() {
    const [likedProducts, setLikedProducts] = useState({});
    const [value, setValue] = useState("");

    const toggleLike = (productId) => {
        setLikedProducts((prevLikedProducts) => ({
            ...prevLikedProducts,
            [productId]: !prevLikedProducts[productId],
        }));
    };

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
            id: 1,
            name: 'Latte Coffee',
            description: "Espresso with steamed milk and light foam.",
            price: 100,
            image: 'op-1-latte.jpg'
        },
        {
            id: 2,
            name: 'Iced Coffee',
            description: "Chilled coffee over ice, often sweetened.",
            price: 100,
            image: 'op-2-iced.jpg'
        },
        {
            id: 3,
            name: 'Mocha',
            description: "Espresso with chocolate and steamed milk.",
            price: 100,
            image: 'op-3-mocha.jpg'
        },
        {
            id: 4,
            name: 'Filtered Coffee',
            description: "Brewed with hot water passing through grounds.",
            price: 100,
            image: 'op-4-filtered.jpg'
        },
        {
            id: 5,
            name: 'Black Coffee',
            description: "Plain coffee without any milk or sugar.",
            price: 100,
            image: 'op-5-black.jpg'
        },
        {
            id: 6,
            name: 'Beaten Coffee',
            description: "Whipped with sugar to creamy texture before brewing.",
            price: 100,
            image: 'op-6-beaten.jpg'
        }
    ];

    const foods = [
        {
            id: 7,
            name: 'Ice Cream Cake',
            description: "A layered dessert combining cake and ice cream.",
            price: 100,
            image: 'cmd-6.jpg'
        },
        {
            id: 8,
            name: 'Churros',
            description: "Fried dough pastries, typically dusted with sugar.",
            price: 100,
            image: 'cmd-7.jpg'
        },
        {
            id: 9,
            name: 'Strawberry Pie',
            description: "A pie filled with sweet, fresh strawberries.",
            price: 100,
            image: 'cmd-3.jpg'
        },
        {
            id: 10,
            name: 'Chocolate Waffles',
            description: "Waffles infused with chocolate, served warm.",
            price: 100,
            image: 'cmd-4.jpg'
        },
        {
            id: 11,
            name: 'Pudding',
            description: "A creamy dessert, often flavored with vanilla or chocolate.",
            price: 100,
            image: 'cmd-2.jpg'
        },
        {
            id: 12,
            name: 'Brownies',
            description: "Dense, chocolate squares with a chewy texture.",
            price: 100,
            image: 'cmd-1.jpg'
        },
        {
            id: 13,
            name: 'Chocolate Muffins',
            description: "Soft muffins with rich chocolate flavor.",
            price: 100,
            image: 'cmd-5.jpg'
        }
    ];

    const reviews = [
        {
            id: 1,
            name: 'Alice Martins',
            description: "The cappuccino here is amazing! Creamy with a light and flavorful foam. Perfect way to start the day.",
            grade: 5,
            date: '2 days ago',
            image: 'pic-5.jpg'
        },
        {
            id: 2,
            name: 'Lucas Varanda',
            description: "The chocolate waffles are sensational! The chocolate melts in your mouth, and the waffles have a slight crunch. Highly recommended!",
            grade: 5,
            date: '5 days ago',
            image: 'pic-1.jpg'
        },
        {
            id: 3,
            name: 'Eduardo Lima',
            description: "The strawberry pie has a crispy crust and a well-balanced filling. I just wish it had a bit more strawberries.",
            grade: 4,
            date: '1 week ago',
            image: 'pic-3.jpg'
        },
        {
            id: 4,
            name: 'Beatriz Santos',
            description: "The churros filled with dulce de leche are wonderful! Crispy on the outside and soft on the inside, with just the right amount of filling.",
            grade: 4,
            date: '3 days ago',
            image: 'pic-6.jpg'
        },
        {
            id: 5,
            name: 'Fernanda Pereira',
            description: "The pudding is very good, with a creamy texture and a delicious vanilla flavor. A well-executed classic.",
            grade: 5,
            date: '4 days ago',
            image: 'pic-7.jpg'
        },
        {
            id: 6,
            name: 'Gabriel Souza',
            description: "The brownies have an intense chocolate flavor and a dense texture that melts in your mouth. Great pairing with a strong coffee.",
            grade: 5,
            date: '6 days ago',
            image: 'pic-2.jpg'
        },
        {
            id: 7,
            name: 'Helena Costa',
            description: "The chocolate muffins are soft and very flavorful, with chocolate chunks in every bite.",
            grade: 5,
            date: '1 week ago',
            image: 'pic-8.jpg'
        },
        {
            id: 8,
            name: 'Mariana Ribeiro',
            description: "The espresso is just perfect! Strong, bold, and with a rich aroma that wakes you up instantly. My go-to coffee every morning.",
            grade: 5,
            date: '2 days ago',
            image: 'pic-9.jpg'
        },
        {
            id: 9,
            name: 'Carlos Silva',
            description: "The lemon tart is refreshing and tangy, with a perfect balance of sweetness. The crust is buttery and complements the filling nicely.",
            grade: 4,
            date: '3 days ago',
            image: 'pic-4.jpg'
        }
    ];    

    const productTemplate = (product) => {
        const isLiked = likedProducts[product.id];

        return (
            <div key={product.id} className="surface-border border-round m-2 text-center py-5 px-3 h-full flex flex-column justify-content-between">
                <div className="mb-3" style={{ height: '80%', position: 'relative' }}>
                    <div onClick={() => toggleLike(product.id)} style={{ cursor: 'pointer' }}>
                        {isLiked ? (
                            <i className="pi pi-heart-fill" style={{ fontSize: '20px', color: '#ff5e5e', position: 'absolute', right: '15px', top: '15px' }}></i>
                        ) : (
                            <i className="pi pi-heart" style={{ fontSize: '20px', color: '#FFF', position: 'absolute', right: '15px', top: '15px' }}></i>
                        )}
                    </div>
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

    const renderStars = (grade) => {
        const stars = [];
    
        for (let i = 1; i <= 5; i++) {
            if (i <= grade) {
                stars.push(
                    <i key={i} className="pi pi-star-fill" style={{ fontSize: '20px', color: '#f9ab5d', marginLeft: i > 1 ? '3px' : '0px' }}></i>
                );
            } else {
                stars.push(
                    <i key={i} className="pi pi-star" style={{ fontSize: '20px', color: '#f9ab5d', marginLeft: i > 1 ? '3px' : '0px' }}></i>
                );
            }
        }
    
        return stars;
    };
    
    const reviewTemplate = (product) => {
        return (
            <div className="surface-border border-round m-2 py-5 px-3 h-full flex flex-column justify-content-between review-card shadow-2">
                <div className="mb-3 flex align-items-center" style={{ height: '30%' }}>
                    <img src={`/images/png/${product.image}`} alt={product.name} style={{ width: '70px', height: '70px', objectFit: 'cover', borderRadius: '100%' }} className="shadow-2" />
                    <div style={{ marginLeft: '10px' }}>
                        <div className="lato-bold" style={{ fontSize: '18px', textAlign: 'start' }}>{product.name}</div>
                        <div className="lato-bold" style={{ fontSize: '12px', textAlign: 'start' }}>{product.date}</div>
                    </div>
                    <div style={{ marginLeft: 'auto', marginBottom: '40px' }}>{renderStars(product.grade)}</div>
                </div>
                <div style={{ height: '70%' }}>{product.description}</div>
            </div>
        );
    };
    
    return (
        <div id="main-screen" className="w-full h-full flex flex-column align-items-center">
            <div id="navbar-container">
                <span className="title lato-black">Coffee</span>
                <ul>
                    <li className="bebas-neue-regular"><a href="#home">Home</a></li>
                    <li className="bebas-neue-regular"><a href="#shop">Shop</a></li>
                    <li className="bebas-neue-regular"><a href="#about">Beans</a></li>
                    <li className="bebas-neue-regular"><a href="#about">Reviews</a></li>
                    <li className="bebas-neue-regular"><a href="#about">Subscribe</a></li>
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
            <div style={{ width: '80%' }}>
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
                
                <div className="reviews-container">
                    <div className="title">
                        <div className="whisper-regular" style={{ fontSize: '25px', marginTop: '65px' }}>Come and join</div>
                        <div className="bebas-neue-regular" style={{ fontSize: '35px', letterSpacing: '2px', marginTop: '5px' }}>OUR&nbsp; HAPPY&nbsp; CUSTOMERS</div>
                    </div>
                    <Carousel value={reviews} numVisible={3} numScroll={3} responsiveOptions={responsiveOptions} className="custom-carousel-review" circular
                    itemTemplate={reviewTemplate} />
                </div>

                <div className="join-container">
                    <img className="hands-img" src="/images/png/border-coffee.png" width={500}></img>
                    <div className="content">
                        <div className="lato-black" style={{ fontSize: '40px' }}>Join in and get 15% Off!</div>
                        <div className="lato-bold" style={{ fontSize: '16px', textAlign: 'center', margin: '10px 0px 20px 0px' }}>Subscribe to our newsletter and be the first to know about exclusive deals, new arrivals, and special offers.<br></br> Don’t miss out on your chance to enjoy a 15% discount on your first purchase!</div>
                        <div style={{ display: 'flex', width: '70%' }}>
                            <IconField iconPosition="left" style={{ width: '75%' }}>
                                <InputIcon className="pi pi-envelope w-full" style={{ marginLeft: '5px' }}> </InputIcon>
                                <InputText className="round-input w-full" style={{ paddingLeft: '38px' }} value={value} onChange={(e) => setValue(e.target.value)} />
                            </IconField>
                            <div className="buy-button lato-regular" style={{ borderRadius: '50px', width: '25%', marginLeft: '5px' }}>SUBSCRIBE</div>
                        </div>
                    </div>
                    <img className="coffee-portion-img" src="/images/png/border-coffee.png" width={500}></img>
                </div>
            </div>
            <div className="footer-container">
                <img src="/images/png/coffee-beans-logo-light.png" width={120} style={{ height: '120px', filter: 'invert(100%) sepia(0%) saturate(7500%) hue-rotate(23deg) brightness(118%) contrast(118%)' }} ></img>
                <div className="flex" style={{ color: '#FFF', letterSpacing: '1px', gap: '15px' }}>
                    <div className="bebas-neue-regular" style={{ fontSize: '20px' }}>HOME</div>
                    <div className="bebas-neue-regular" style={{ fontSize: '20px' }}>CONTACT</div>
                    <div className="bebas-neue-regular" style={{ fontSize: '20px' }}>ABOUT</div>
                    <div className="bebas-neue-regular" style={{ fontSize: '20px' }}>LOCATION</div>
                </div>
                <div style={{ color: '#FFF', letterSpacing: '1px' }}>
                    <div className="bebas-neue-regular" style={{ fontSize: '20px' }}>SOCIAL MEDIA</div>
                    <div className="flex" style={{ gap: '10px' }}>
                        <div><i className="pi pi-instagram" style={{ fontSize: '15px', color: '#FFF' }}></i></div>
                        <div><i className="pi pi-facebook" style={{ fontSize: '15px', color: '#FFF' }}></i></div>
                        <div><i className="pi pi-twitter" style={{ fontSize: '15px', color: '#FFF' }}></i></div>
                        <div><i className="pi pi-tiktok" style={{ fontSize: '15px', color: '#FFF' }}></i></div>
                        <div><i className="pi pi-linkedin" style={{ fontSize: '15px', color: '#FFF' }}></i></div>
                    </div>
                </div>
            </div>
        </div>
    )
}