import React, { useState, useEffect } from "react";
import { InputText } from "primereact/inputtext";
import { IconField } from 'primereact/iconfield';
import { InputIcon } from 'primereact/inputicon';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';
import { useNavigate } from "react-router-dom";
import { Carousel } from 'primereact/carousel';
import { Dialog } from 'primereact/dialog';
import './index.scss';

export default function Home() {
    const [likedProducts, setLikedProducts] = useState({});
    const [value, setValue] = useState("");
    const [visible, setVisible] = useState(false);
    
    let navigate = useNavigate();
    const routeChange = () =>{
        let path = `../login`; 
        navigate(path, { replace: true })
    }

    useEffect(() => {
        let debounceTimer;
        let lastScrollTop = 0;

        const handleScroll = () => {
            const navbar = document.getElementById('navbar-container');
            const currentScrollTop = window.scrollY;

            clearTimeout(debounceTimer);

            if (currentScrollTop > lastScrollTop && currentScrollTop > 0) {
                navbar.classList.add('scrolled');
                navbar.classList.remove('text-hidden');
            } else if (currentScrollTop < lastScrollTop && currentScrollTop > 0) {
                navbar.classList.remove('scrolled');
                navbar.classList.add('text-hidden');
            } else {
                navbar.classList.remove('text-hidden');
                if (currentScrollTop > 0) {
                    navbar.classList.add('scrolled');
                } else {
                    navbar.classList.remove('scrolled');
                }
            }

            debounceTimer = setTimeout(() => {
                if (currentScrollTop > 100) {
                    navbar.classList.remove('scrolled');
                    navbar.classList.add('text-hidden');
                }
            }, 3000);

            lastScrollTop = currentScrollTop;
        };

        window.addEventListener('scroll', handleScroll);

        // Cleanup
        return () => {
            window.removeEventListener('scroll', handleScroll);
            clearTimeout(debounceTimer);
        };
    }, []);

    const toggleMenu = () => {
        const menu = document.querySelector(".menu-lateral");
        if(menu.classList.contains("expanded-menu")) {
            menu.classList.add('collapsed-menu');
            menu.classList.remove('expanded-menu');
        } else {
            menu.classList.add('expanded-menu');
            menu.classList.remove('collapsed-menu');
        }
    };

    const toggleLike = (productId) => {
        setLikedProducts((prevLikedProducts) => ({
            ...prevLikedProducts,
            [productId]: !prevLikedProducts[productId],
        }));
    };

    const changeLocation = (e, targetId) => {
        e.preventDefault();
        const targetElement = document.querySelector(targetId);
        
        if(targetId == "#image-container") {
            return window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }


        if (targetElement) {
            const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY;
            const offsetPosition = elementPosition - 60;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    const responsiveOptions = [
        {
            breakpoint: '1950px',
            numVisible: 4,
            numScroll: 1
        },
        {
            breakpoint: '1600px',
            numVisible: 3,
            numScroll: 1
        },
        {
            breakpoint: '1300px',
            numVisible: 2,
            numScroll: 1
        },
        {
            breakpoint: '880px',
            numVisible: 1,
            numScroll: 1
        }
    ];

    const reviewsResponsiveOptions = [
        {
            breakpoint: '1950px',
            numVisible: 3,
            numScroll: 1
        },
        {
            breakpoint: '1500px',
            numVisible: 2,
            numScroll: 1
        },
        {
            breakpoint: '1200px',
            numVisible: 1,
            numScroll: 1
        }
    ];

    const products = [
        {
            id: 1,
            name: 'Café Latte',
            description: "Expresso com leite vaporizado e leve espuma.",
            price: "15,00",
            image: 'op-1-latte.jpg'
        },
        {
            id: 2,
            name: 'Café Gelado',
            description: "Café resfriado com gelo, frequentemente adoçado.",
            price: "18,00",
            image: 'op-2-iced.jpg'
        },
        {
            id: 3,
            name: 'Mocha',
            description: "Expresso com chocolate e leite vaporizado.",
            price: "12,00",
            image: 'op-3-mocha.jpg'
        },
        {
            id: 4,
            name: 'Café Filtrado',
            description: "Preparado com água quente passando pelos grãos.",
            price: "15,00",
            image: 'op-4-filtered.jpg'
        },
        {
            id: 5,
            name: 'Café Preto',
            description: "Café simples, sem leite ou açúcar.",
            price: "10,00",
            image: 'op-5-black.jpg'
        },
        {
            id: 6,
            name: 'Café Batido',
            description: "Café batido com açúcar até uma textura cremosa antes de preparar.",
            price: "16,00",
            image: 'op-6-beaten.jpg'
        }
    ];

    const foods = [
        {
            id: 7,
            name: 'Bolo de Sorvete',
            description: "Uma sobremesa em camadas combinando bolo e sorvete.",
            price: "18,00",
            image: 'cmd-6.jpg'
        },
        {
            id: 8,
            name: 'Churros',
            description: "Massa frita, geralmente polvilhada com açúcar.",
            price: "15,00",
            image: 'cmd-7.jpg'
        },
        {
            id: 9,
            name: 'Torta de Morango',
            description: "Uma torta recheada com morangos frescos e doces.",
            price: "12,00",
            image: 'cmd-3.jpg'
        },
        {
            id: 10,
            name: 'Waffles de Chocolate',
            description: "Waffles com infusão de chocolate, servidos quentes.",
            price: "10,00",
            image: 'cmd-4.jpg'
        },
        {
            id: 11,
            name: 'Pudim',
            description: "Uma sobremesa cremosa, com sabor de baunilha ou chocolate.",
            price: "8,00",
            image: 'cmd-2.jpg'
        },
        {
            id: 12,
            name: 'Brownies',
            description: "Quadrados densos de chocolate com uma textura macia.",
            price: "5,00",
            image: 'cmd-1.jpg'
        },
        {
            id: 13,
            name: 'Muffins de Chocolate',
            description: "Muffins macios com sabor intenso de chocolate.",
            price: "5,00",
            image: 'cmd-5.jpg'
        }
    ];

    const reviews = [
        {
            id: 1,
            name: 'Alice Martins',
            description: "O cappuccino aqui é incrível! Cremoso, com uma espuma leve e saborosa. Perfeito para começar o dia.",
            grade: 5,
            date: '2 days ago',
            image: 'pic-5.jpg'
        },
        {
            id: 2,
            name: 'Lucas Varanda',
            description: "O Mocha é maravilhoso! O sabor do chocolate combina perfeitamente com o café, e é super cremoso. É aquela bebida aconchegante que você não pode deixar de provar!",
            grade: 5,
            date: '5 days ago',
            image: 'pic-1.jpg'
        },
        {
            id: 3,
            name: 'Eduardo Lima',
            description: "A torta de morango tem uma crosta crocante e um recheio bem equilibrado. Só gostaria que tivesse um pouco mais de morangos.",
            grade: 4,
            date: '1 week ago',
            image: 'pic-3.jpg'
        },
        {
            id: 4,
            name: 'Beatriz Santos',
            description: "Os churros recheados com doce de leite são maravilhosos! Crocantes por fora e macios por dentro, com a quantidade certa de recheio.",
            grade: 4,
            date: '3 days ago',
            image: 'pic-6.jpg'
        },
        {
            id: 5,
            name: 'Fernanda Pereira',
            description: "O pudim é muito bom, com uma textura cremosa e um delicioso sabor de baunilha. Um clássico bem executado.",
            grade: 5,
            date: '4 days ago',
            image: 'pic-7.jpg'
        },
        {
            id: 6,
            name: 'Gabriel Souza',
            description: "Os brownies têm um sabor intenso de chocolate e uma textura densa que derrete na boca. Ótima combinação com um café forte.",
            grade: 5,
            date: '6 days ago',
            image: 'pic-2.jpg'
        },
        {
            id: 7,
            name: 'Helena Costa',
            description: "Os muffins de chocolate são macios e muito saborosos, com pedaços de chocolate em cada mordida.",
            grade: 5,
            date: '1 week ago',
            image: 'pic-8.jpg'
        },
        {
            id: 8,
            name: 'Mariana Ribeiro',
            description: "O expresso é simplesmente perfeito! Forte, encorpado e com um aroma rico que te desperta instantaneamente. Meu café favorito todas as manhãs.",
            grade: 5,
            date: '2 days ago',
            image: 'pic-9.jpg'
        },
        {
            id: 9,
            name: 'Carlos Silva',
            description: "Os waffles de chocolate são sensacionais! O chocolate derrete na boca e os waffles têm uma leve crocância. Altamente recomendado!",
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
                    <div className="lato-regular" style={{ fontSize: '16px', textAlign: 'start', minHeight: '38px', maxHeight: '38px' }}>{product.description}</div>
                    <div className="mt-3 flex flex-wrap gap-2 align-items-center justify-content-between">
                        <div className="lato-black">R${product.price}</div>
                        <div className="buy-button lato-regular">COMPRAR</div>
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
            <div style={{ width: '90%' }} className="surface-border border-round m-2 py-5 px-3 h-full flex flex-column justify-content-between review-card shadow-2">
                <div className="mb-3 flex align-items-center" style={{ height: '30%' }}>
                    <img src={`/images/png/${product.image}`} alt={product.name} style={{ width: '70px', height: '70px', objectFit: 'cover', borderRadius: '100%' }} className="shadow-2" />
                    <div style={{ marginLeft: '10px' }}>
                        <div className="lato-bold" style={{ fontSize: '18px', textAlign: 'start' }}>{product.name}</div>
                        <div className="lato-bold" style={{ fontSize: '12px', textAlign: 'start' }}>{product.date}</div>
                    </div>
                    <div style={{ marginLeft: 'auto', marginBottom: '40px', display: 'flex', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center' }}>{renderStars(product.grade)}</div>
                </div>
                <div style={{ height: '70%', display: 'flex', justifyContent: 'center' }}><span style={{ width: '98%' }}>{product.description}</span></div>
            </div>
        );
    };
    
    return (
        <div id="main-screen" className="w-full h-full flex flex-column align-items-center">
            <Dialog header="Referência" visible={visible} onHide={() => {if (!visible) return; setVisible(false); }}
                style={{ width: '50vw' }} breakpoints={{ '960px': '75vw', '641px': '100vw' }}>
                <p className="m-0" style={{ color: '#2b2527' }}>
                    Essa é uma landing-page sem fins comerciais, desenvolvida como parte de um estudo de reprodução de layout. A inspiração para o design foi tirada do trabalho do UI/UX designer <a href="https://www.behance.net/nirmalkumar_uidesign" target="_blank" style={{ textDecoration: 'none', color: '#2b2527', fontWeight: 'bolder' }}>Nirmal Kumar</a>.<br></br><br></br>
                    O objetivo do projeto não era criar uma réplica exata, mas sim capturar a essência do layout original, mantendo uma certa liberdade criativa para adaptações e melhorias.<br></br><br></br>
                    O desenvolvimento foi realizado utilizando React.js e SASS, com o auxílio do UI Suite PrimeReact. No entanto, a maior parte dos estilos foi elaborada manualmente com HTML e CSS básicos.
                </p>
                <img src="/images/png/ref-1.png" width={"100%"} style={{ marginTop: '20px' }}></img>
                <img src="/images/png/ref-2.png" width={"100%"} style={{ marginTop: '20px' }}></img>
                <img src="/images/png/ref-3.png" width={"100%"} style={{ marginTop: '20px' }}></img>
            </Dialog>
            <div className="menu-lateral">
                <div className="container">
                    <ul className="bebas-neue-regular side-menu-list">
                        <li><a onClick={(e) => changeLocation(e, "#image-container")}>INÍCIO</a></li>
                        <li><a onClick={(e) => changeLocation(e, "#shop-container")}>LOJA</a></li>
                        <li><a onClick={(e) => changeLocation(e, "#beans-container")}>GRÃOS</a></li>
                        <li><a onClick={(e) => changeLocation(e, "#reviews-container")}>AVALIAÇÕES</a></li>
                        <li><a onClick={(e) => changeLocation(e, "#join-container")}>REGISTRE-SE</a></li>
                        <li><a onClick={(e) => { toggleMenu(); setVisible(true);}}>REFERÊNCIA</a></li>
                        <li><a onClick={(e) => routeChange()}>LOGIN</a></li>
                    </ul>
                    <div className="close-button">
                        <i className="pi pi-times-circle" onClick={ () => toggleMenu() } style={{ fontSize: '24px', color: '#2b2527' }}></i>
                    </div>
                </div>
            </div>
            
            <div id="navbar-container">
                <ul className="bebas-neue-regular top-menu-list">
                    <li><a onClick={(e) => changeLocation(e, "#image-container")}>INÍCIO</a></li>
                    <li><a onClick={(e) => changeLocation(e, "#shop-container")}>LOJA</a></li>
                    <li><a onClick={(e) => changeLocation(e, "#beans-container")}>GRÃOS</a></li>
                    <li><a onClick={(e) => changeLocation(e, "#reviews-container")}>AVALIAÇÕES</a></li>
                    <li><a onClick={(e) => changeLocation(e, "#join-container")}>REGISTRE-SE</a></li>
                    <li><a onClick={(e) => setVisible(true)}>REFERÊNCIA</a></li>
                    <li><a onClick={(e) => routeChange()}>LOGIN</a></li>
                </ul>
                <i className="pi pi-bars menu-button" onClick={ () => toggleMenu() } style={{ fontSize: '18px', color: '#FFF' }}></i>
                <i className="pi pi-search search-button" style={{ fontSize: '22px', color: '#FFF' }}></i>
            </div>
            <div className="image-container" style={{backgroundImage: 'url("/images/png/home-background-2.jpeg")' }}>
                <div style={{ width: '60%', zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <img src="/images/png/coffee-beans-logo-light.png" style={{ width: '200px', filter: 'invert(100%) sepia(0%) saturate(7500%) hue-rotate(23deg) brightness(118%) contrast(118%)' }} ></img>
                    <div className="montserrat" style={{ zIndex: 3, color: '#FFF', fontSize: '30px' }}>Bem-vindo ao</div>
                    <div className="bebas-neue-regular" style={{ zIndex: 3, color: '#FFF', fontSize: '75px', textAlign: 'center', letterSpacing: '8px' }}>ARTISAN COFFE</div>
                    <div style={{ marginBottom: '13px', display: 'flex', alignItems: 'center' }}>
                        <div style={{color: '#FFF', marginTop: '-15px' }}>______</div>
                        <img src="/images/png/coffee-beans-ic.png" style={{ width: '25px', filter: 'invert(100%) sepia(0%) saturate(7500%) hue-rotate(23deg) brightness(118%) contrast(118%)', margin: '0px 15px' }} ></img>
                        <div style={{color: '#FFF', marginTop: '-15px' }}>______</div>
                    </div>
                    <div className="montserrat" style={{ zIndex: 3, color: '#FFF', fontSize: '30px', marginBottom: '30px', textAlign: 'center' }}>Servimos o café mais rico<br></br>  da cidade!</div>

                    
                    <div className="custom-buttom" onClick={(e) => changeLocation(e, "#shop-container")}>PEÇA AGORA</div>
                </div>
            </div>
            <div className="lato-bold icons-container" style={{ display: 'flex', justifyContent: 'space-around', margin: '150px 0px', opacity: '0.7' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <img src="/images/png/coffee-ic.png" width={70}></img>
                    <span style={{ textAlign: 'center' }}>Coado à Perfeição</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <img src="/images/png/delivery-ic.png" width={70}></img>
                    <span style={{ textAlign: 'center' }}>Pegue e Leve</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <img src="/images/png/stores-ic.png" width={70}></img>
                    <span style={{ textAlign: 'center' }}>Oásis da Cafeteria</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <img src="/images/png/cake-ic.png" width={70}></img>
                    <span style={{ textAlign: 'center' }}>Doces Delícias</span>
                </div>
            </div>
            <div className="main-content-container">
                <div id="shop-container">
                    <div className="bebas-neue-regular" style={{ fontSize: '26px', width: '100%', textAlign: 'center' }}>NOSSOS CAFÉS ESPECIAIS</div>
                    <Carousel value={products} numVisible={4} numScroll={4} responsiveOptions={responsiveOptions} className="custom-carousel" circular
                    itemTemplate={productTemplate} />
                    <div className="bebas-neue-regular" style={{ fontSize: '26px', width: '100%', textAlign: 'center', marginTop: '50px' }}>NOSSAS SOBREMESAS ESPECIAIS</div>
                    <Carousel value={foods} numVisible={4} numScroll={4} responsiveOptions={responsiveOptions} className="custom-carousel" circular
                    itemTemplate={productTemplate} />
                </div>

                <div id="beans-container">
                    <img className="hands-img" src="/images/png/coffee-wave.png" width={550}></img>
                    <div className="content">
                        <div className="lato-black title-text">Confira nossos melhores grãos de café, cuidadosamente selecionados para o preparo perfeito.</div>
                        <div className="lato-bold small-text" style={{ fontSize: '16px' }}>Descubra nossa melhor seleção de grãos de café, cuidadosamente escolhidos e torrados com maestria para realçar os sabores mais ricos.<br></br> Presenteie-se com a melhor experiência de café com nossos grãos premium, perfeitos para todo amante de café.</div>
                        <div className="buy-button lato-regular" style={{ borderRadius: '50px', marginTop: '30px' }}>COMPRAR</div>
                    </div>
                    <img className="coffee-portion-img" src="/images/png/coffee-and-beans.png" width={350}></img>
                </div>
                
                <div id="reviews-container">
                    <div className="title">
                        <div className="whisper-regular" style={{ fontSize: '25px', marginTop: '65px' }}>Junte-se a Nós</div>
                        <div className="bebas-neue-regular" style={{ fontSize: '35px', letterSpacing: '2px', marginTop: '5px', textAlign: 'center' }}>NOSSOS&nbsp; CLIENTES&nbsp; SATISFEITOS</div>
                    </div>
                    <Carousel value={reviews} numVisible={3} numScroll={3} responsiveOptions={reviewsResponsiveOptions} className="custom-carousel-review" circular
                    itemTemplate={reviewTemplate} />
                </div>

                <div id="join-container">
                    <img className="hands-img" src="/images/png/border-coffee.png" width={500}></img>
                    <div className="content">
                        <div className="lato-black main-title" style={{ fontSize: '40px', textAlign: 'center' }}>Registre-se e ganhe 15% de desconto!</div>
                        <div className="lato-bold hide-text-full" style={{ fontSize: '16px', textAlign: 'center', margin: '10px 0px 20px 0px' }}>Inscreva-se na nossa newsletter e seja o primeiro a saber sobre ofertas exclusivas, novos produtos e promoções especiais.<br></br><span className="hide-text">Não perca a chance de aproveitar 15% de desconto na sua primeira compra!</span></div>
                        <div className="email-input-container" style={{ display: 'flex' }}>
                            <IconField iconPosition="left" className="email-input" style={{ width: '75%' }}>
                                <InputIcon className="pi pi-envelope w-full" style={{ marginLeft: '5px' }}> </InputIcon>
                                <InputText className="round-input w-full" style={{ paddingLeft: '38px' }} value={value} onChange={(e) => setValue(e.target.value)} />
                            </IconField>
                            <div className="buy-button lato-regular" style={{ borderRadius: '50px', marginLeft: '5px' }}>SUBSCRIBE</div>
                        </div>
                    </div>
                    <img className="coffee-portion-img" src="/images/png/border-coffee.png" width={500}></img>
                </div>
            </div>
            <div className="footer-container">
                <img src="/images/png/coffee-beans-logo-light.png" width={120} style={{ height: '120px', filter: 'invert(100%) sepia(0%) saturate(7500%) hue-rotate(23deg) brightness(118%) contrast(118%)' }} ></img>
                <div style={{ color: '#FFF', letterSpacing: '1px' }}>
                    <div className="bebas-neue-regular" style={{ fontSize: '20px' }}>SOCIAL MEDIA</div>
                    <div className="flex" style={{ gap: '10px' }}>
                        <div><i className="pi pi-instagram" style={{ fontSize: '15px', color: '#FFF', cursor: 'pointer' }}></i></div>
                        <div><i className="pi pi-facebook" style={{ fontSize: '15px', color: '#FFF', cursor: 'pointer' }}></i></div>
                        <div><i className="pi pi-twitter" style={{ fontSize: '15px', color: '#FFF', cursor: 'pointer' }}></i></div>
                        <div><i className="pi pi-tiktok" style={{ fontSize: '15px', color: '#FFF', cursor: 'pointer' }}></i></div>
                        <div><i className="pi pi-linkedin" style={{ fontSize: '15px', color: '#FFF', cursor: 'pointer' }}></i></div>
                    </div>
                </div>
            </div>
        </div>
    )
}