import React, { useState, useEffect } from "react";
import { InputText } from "primereact/inputtext";
import { IconField } from 'primereact/iconfield';
import { InputIcon } from 'primereact/inputicon';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';
import { useNavigate } from "react-router-dom";
import { Carousel } from 'primereact/carousel';
import { Dialog } from 'primereact/dialog';
import { Timeline } from 'primereact/timeline';
import { Card } from 'primereact/card';
import './index.scss';

export default function Home2() {
    const [likedProducts, setLikedProducts] = useState({});
    const [value, setValue] = useState("");
    const [visible, setVisible] = useState(false);
    
    let navigate = useNavigate();
    const routeChange = () =>{
        let path = `../login`; 
        navigate(path, { replace: true })
    }

    const events = [
        { status: 'Chegada na Cidade', date: '1976', icon: 'pi pi-map-marker', color: '#20a7f9', image: '/images/png/eleicoes/img-1.jpg', description: "Nascido na capital de São Paulo, em junho de 1976, apareceu a oportunidade para eu trabalhar em Santa Isabel como supervisor de Controle de Qualidade na Karibe Indústria e Comércio, uma fábrica do setor têxtil especializada em fiação e tecelagem." },
        { status: 'Relacionamento', date: '1977', icon: 'pi pi-heart', color: '#88eb30', image: '/images/png/eleicoes/foto-pai-mae-2.jpg', description: "Em 1977, conheci Maria José(Zella), que viria a se tornar minha esposa. Desde o início, percebi que ela era especial, com seu jeito cativante e uma alegria contagiante. Nossa conexão foi imediata e profunda, e com o tempo, o carinho e o respeito que sentíamos um pelo outro se transformaram em amor verdadeiro." },
        { status: 'Criando Raízes', date: '1979', icon: 'pi pi-users', color: '#20a7f9', image: '/images/png/eleicoes/filha.jpeg', description: "Em 1979, fui abençoado com o nascimento da minha primeira filha, um momento que marcou o início da construção da minha família em Santa Isabel. Com a chegada dela, comecei a criar raízes nessa cidade que se tornou tão querida para mim." },
        { status: 'Trajetória Profissional', date: '1983', icon: 'pi pi-briefcase', color: '#88eb30', image: '/images/png/eleicoes/fabrica.jpeg', description: "A partir de 1983, minha trajetória profissional me levou por várias empresas. Comecei trabalhando em Diadema e, no início do ano seguinte, retornei à Karibe como supervisor de produção. Depois, passei também pela Santista e Paramount. Mais adiante, em 2007, voltei a Diadema para integrar a equipe da Jolitex Trenille, empresa de cobertores, o que me proporcionou a oportunidade de prestar serviços na Itália. Essa jornada foi marcada por diversas experiências que enriqueceram minha carreira e me permitiram crescer profissionalmente." },
        { status: 'Filhos', date: '2000', icon: 'pi pi-users', color: '#20a7f9', image: '/images/png/eleicoes/filhos.jpg', description: "Em 2000, fui abençoado com a chegada do meu terceiro filho, um momento que trouxe ainda mais alegria e completude para a nossa família. Com ele, nossa casa ficou ainda mais cheia de risos e energia, e percebi que estava construindo um legado de amor e união." },
        { status: 'Netos', date: '2008', icon: 'pi pi-users', color: '#88eb30', image: '/images/png/eleicoes/netos.jpg', description: "Em 2008, fui agraciado com a chegada da minha quarta neta, um presente que encheu nossa família de ainda mais amor e alegria. Ver a família crescer e acompanhar as novas gerações traz um sentimento indescritível de gratidão e orgulho. Cada neto representa uma nova esperança e uma continuação do legado que construímos ao longo dos anos." },
        { status: 'Igreja', date: '2009', icon: 'pi pi-building-columns', color: '#20a7f9', image: '/images/png/eleicoes/img-igreja.jpg', description: "Minha esposa sempre foi uma frequentadora assídua da igreja católica, dedicando-se com devoção. Em 2009, senti o desejo de acompanhá-la e, juntos, começamos a colaborar nas decorações de arte sacra para as celebrações especiais da igreja, como a Festa do Divino, a festa da padroeira Nossa Senhora Aparecida e o Natal. Desde então, temos encontrado na casa do Pai um lugar de paz e propósito, onde servimos a Deus com alegria e gratidão, fortalecendo nossa fé e união a cada dia." },
        { status: 'Paramount', date: '2015', icon: 'pi pi-briefcase', color: '#88eb30', image: '/images/png/eleicoes/paramount.png', description: "Durante todos os anos em que trabalhei na Paramount, construí laços profundos de amizade e gratidão com muitas pessoas que encontrei ao longo do caminho. O ambiente de trabalho se tornou mais do que apenas um lugar de ofício; foi um espaço onde compartilhei momentos significativos, desafios e conquistas ao lado de colegas que se tornaram verdadeiros amigos. Em 2015, tive a oportunidade de retornar à Paramount, onde permaneci até dezembro de 2023, consolidando ainda mais essas relações. Essa jornada me proporcionou não apenas crescimento profissional, mas também um legado de conexões humanas e lembranças que levarei comigo para sempre." },
        { status: 'Bisnetos', date: '2023', icon: 'pi pi-home', color: '#20a7f9', image: '/images/png/eleicoes/bisnetos.jpg', description: "Em 2023, fui abençoado com a chegada da minha bisneta Helena, somando agora dois bisnetos que enchem minha vida de alegria e orgulho. Ter bisnetos é uma experiência maravilhosa, que traz uma sensação de plenitude e renovação, enchendo nossa família de esperança e novos sonhos. Ver o crescimento da minha família e o futuro que se desenha à frente me inspira profundamente a buscar mudanças positivas, tanto para nossa cidade quanto para o bem-estar de todos. A responsabilidade de deixar um legado para as próximas gerações me motiva a contribuir para um futuro melhor, pensando sempre no que podemos fazer para tornar o mundo um lugar mais justo e próspero para o nosso povo e, especialmente, para minha família." },
    ];

    const customizedContent = (item) => {
        return (
            <Card title={item.status} subTitle={item.date}>
                { item.image && <img src={item.image} className={"shadow-1 "+item.status} style={{ maxHeight: "450px", objectFit: "cover" }} alt={item.name} width={"100%"} />}
                <p>{item.description}</p>
            </Card>
        );
    };

    const customizedMarker = (item) => {
        return (
            <span className="flex w-2rem h-2rem align-items-center justify-content-center text-white border-circle z-1 shadow-1" style={{ backgroundColor: item.color }}>
                <i className={item.icon}></i>
            </span>
        );
    };

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
            const offsetPosition = elementPosition - 80;

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
            date: 'Há 2 dias',
            image: 'pic-5.jpg'
        },
        {
            id: 2,
            name: 'Lucas Varanda',
            description: "O Mocha é maravilhoso! O sabor do chocolate combina perfeitamente com o café, e é super cremoso. É aquela bebida aconchegante que você não pode deixar de provar!",
            grade: 5,
            date: 'Há 5 dias',
            image: 'pic-1.jpg'
        },
        {
            id: 3,
            name: 'Eduardo Lima',
            description: "A torta de morango tem uma crosta crocante e um recheio bem equilibrado. Só gostaria que tivesse um pouco mais de morangos.",
            grade: 4,
            date: 'Há uma semana',
            image: 'pic-3.jpg'
        },
        {
            id: 4,
            name: 'Beatriz Santos',
            description: "Os churros recheados com doce de leite são maravilhosos! Crocantes por fora e macios por dentro, com a quantidade certa de recheio.",
            grade: 4,
            date: 'Há 3 dias',
            image: 'pic-6.jpg'
        },
        {
            id: 5,
            name: 'Fernanda Pereira',
            description: "O pudim é muito bom, com uma textura cremosa e um delicioso sabor de baunilha. Um clássico bem executado.",
            grade: 5,
            date: 'Há 4 dias',
            image: 'pic-7.jpg'
        },
        {
            id: 6,
            name: 'Gabriel Souza',
            description: "Os brownies têm um sabor intenso de chocolate e uma textura densa que derrete na boca. Ótima combinação com um café forte.",
            grade: 5,
            date: 'Há 6 dias',
            image: 'pic-2.jpg'
        },
        {
            id: 7,
            name: 'Helena Costa',
            description: "Os muffins de chocolate são macios e muito saborosos, com pedaços de chocolate em cada mordida.",
            grade: 5,
            date: 'Há 2 semanas',
            image: 'pic-8.jpg'
        },
        {
            id: 8,
            name: 'Mariana Ribeiro',
            description: "O expresso é simplesmente perfeito! Forte, encorpado e com um aroma rico que te desperta instantaneamente. Meu café favorito todas as manhãs.",
            grade: 5,
            date: 'Há 2 dias',
            image: 'pic-9.jpg'
        },
        {
            id: 9,
            name: 'Carlos Silva',
            description: "Os waffles de chocolate são sensacionais! O chocolate derrete na boca e os waffles têm uma leve crocância. Altamente recomendado!",
            grade: 4,
            date: 'Há 3 dias',
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
                        <li><a onClick={(e) => changeLocation(e, "#icons-container")}>VALORES</a></li>
                        <li><a onClick={(e) => changeLocation(e, "#beans-container")}>INTRODUÇÃO</a></li>
                        <li><a onClick={(e) => changeLocation(e, "#shop-container")}>HISTÓRIA</a></li>
                        <li><a onClick={(e) => changeLocation(e, "#join-container")}>APRESENTAÇÃO</a></li>
                        <li><a onClick={(e) => changeLocation(e, "#reviews-container")}>COMPARTILHE</a></li>
                    </ul>
                    <div className="close-button">
                        <i className="pi pi-times-circle" onClick={ () => toggleMenu() } style={{ fontSize: '24px', color: '#FFF' }}></i>
                    </div>
                </div>
            </div>
            
            <div id="navbar-container">
                <ul className="bebas-neue-regular top-menu-list">
                    <li><a onClick={(e) => changeLocation(e, "#image-container")}>INÍCIO</a></li>
                    <li><a onClick={(e) => changeLocation(e, "#icons-container")}>VALORES</a></li>
                    <li><a onClick={(e) => changeLocation(e, "#beans-container")}>INTRODUÇÃO</a></li>
                    <li><a onClick={(e) => changeLocation(e, "#shop-container")}>HISTÓRIA</a></li>
                    <li><a onClick={(e) => changeLocation(e, "#join-container")}>APRESENTAÇÃO</a></li>
                    <li><a onClick={(e) => changeLocation(e, "#reviews-container")}>COMPARTILHE</a></li>
                </ul>
                <i className="pi pi-bars menu-button" onClick={ () => toggleMenu() } style={{ fontSize: '18px', color: '#FFF' }}></i>
            </div>
            <div className="image-container" style={{backgroundImage: 'url("/images/png/eleicoes/bg-pedro.png")' }}>
                <div style={{ width: '68%', zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    {/* <img src="/images/png/coffee-beans-logo-light.png" style={{ width: '200px', filter: 'invert(100%) sepia(0%) saturate(7500%) hue-rotate(23deg) brightness(118%) contrast(118%)' }} ></img> */}
                    <div className="montserrat text-1" style={{ zIndex: 3, color: '#FFF', fontSize: '40px', textAlign: "center", fontWeight: "700" }}>Juntos por <br></br>uma Cidade Melhor</div>
                    <div className="montserrat text-2" style={{ zIndex: 3, color: '#FFF', fontSize: '75px', textAlign: 'center', margin: "10px 0px 10px 0px", fontWeight: "700" }}>PEDRO VARANDA</div>
                    <div style={{ marginBottom: '13px', display: 'flex', alignItems: 'center' }}>
                        <div style={{color: '#FFF', marginTop: '-15px' }}>______</div>
                        <img src="/images/png/eleicoes/vote-icon.png" style={{ width: '70px', filter: 'invert(100%) sepia(100%) saturate(0%) hue-rotate(288deg) brightness(102%) contrast(102%)', margin: '0px 15px' }} ></img>
                        <div style={{color: '#FFF', marginTop: '-15px' }}>______</div>
                    </div>
                    <div className="bebas-neue-regular text-3" style={{ zIndex: 3, color: '#FFF', fontSize: '100px', marginBottom: '30px', textAlign: 'center', fontWeight: "600", letterSpacing: '18px' }}>20700</div>

                    
                    <div className="custom-buttom" onClick={(e) => changeLocation(e, "#icons-container")}>CONHECER!</div>
                </div>
            </div>
            <div id="icons-container" className="lato-bold icons-container" style={{ display: 'flex', justifyContent: 'space-around', margin: '150px 0px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', color: "#13406c" }}>
                    <img style={{ filter: "invert(18%) sepia(33%) saturate(2898%) hue-rotate(186deg) brightness(91%) contrast(89%)" }} src="/images/png/eleicoes/honesto.png" width={70}></img>
                    <span style={{ textAlign: 'center' }}>Transparência e Honestidade</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', color: "#13406c" }}>
                    <img style={{ filter: "invert(18%) sepia(33%) saturate(2898%) hue-rotate(186deg) brightness(91%) contrast(89%)" }} src="/images/png/eleicoes/progresso.png" width={70}></img>
                    <span style={{ textAlign: 'center' }}>Inovação e Progresso</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', color: "#13406c" }}>
                    <img style={{ filter: "invert(18%) sepia(33%) saturate(2898%) hue-rotate(186deg) brightness(91%) contrast(89%)" }} src="/images/png/eleicoes/empatia.png" width={70}></img>
                    <span style={{ textAlign: 'center' }}>Empatia e Proximidade</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', color: "#13406c" }}>
                    <img style={{ filter: "invert(18%) sepia(33%) saturate(2898%) hue-rotate(186deg) brightness(91%) contrast(89%)" }} src="/images/png/eleicoes/lideranca.png" width={70}></img>
                    <span style={{ textAlign: 'center' }}>Liderança Participativa</span>
                </div>
            </div>
            <div className="main-content-container">
                <div id="beans-container">
                    <img className="hands-img" src="/images/png/eleicoes/icon-bar.png" width={62}></img>
                    <div className="content">
                        <div className="lato-black title-text">Seu voto faz a diferença com Pedro Varanda!</div>
                        <div className="lato-bold small-text" style={{ fontSize: '18px' }}>Pretendo focar em áreas essenciais como turismo, meio ambiente, estradas rurais, saúde, educação, cultura, esporte e lazer. Quero promover o desenvolvimento sustentável, melhorar a infraestrutura, e garantir que cada cidadão tenha acesso a serviços de qualidade. Juntos, podemos transformar nossa cidade em um lugar melhor para viver e crescer.<br></br><br></br> Com seu voto, faremos a diferença e construíremos um futuro mais promissor para todos.</div>
                        {/* <div className="buy-button lato-regular" style={{ borderRadius: '50px', marginTop: '30px' }}>COMPRAR</div> */}
                    </div>
                    <img className="coffee-portion-img" src="/images/png/eleicoes/icon-bar.png" width={62}></img>
                </div>
                <div id="shop-container">
                    <div className="lato-black title-text" style={{ fontSize: '26px', width: '100%', textAlign: 'center' }}>HISTÓRIA</div>
                    {/* <div className="whisper-regular" style={{ fontSize: '30px', width: '100%', textAlign: 'center' }}>História</div> */}
                    <div style={{ flexWrap: "wrap", display: "flex", alignItems: "center" }}>
                        <div className="lato-bold" style={{ width: "100%", fontSize: "20px", padding: "0px 20px", margin: "50px 0px" }}>
                            <Timeline value={events} align="alternate" className="customized-timeline" marker={customizedMarker} content={customizedContent} />
                        </div>
                    </div>
                    <img src="/images/png/eleicoes/Logo-podemos.png" className="podemos-logo" style={{ position: "absolute", bottom: "40px", left: "50px" }} width={200}></img>
                </div>

                <div id="join-container">
                    <img className="hands-img" src="/images/png/eleicoes/icon-bar.png" width={62}></img>
                    <div className="content">
                        <div className="lato-black main-title" style={{ fontSize: '40px', textAlign: 'center', marginBottom: "15px" }}><strong>CONTO COM O SEU VOTO!</strong> 20700!</div>
                        <video width={"70%"} controls autoPlay playsInline>
                            <source src="/images/png/eleicoes/video.mp4"></source>
                        </video>
                    </div>
                    <img className="coffee-portion-img" src="/images/png/eleicoes/icon-bar.png" width={62}></img>
                </div>
                
                <div id="reviews-container">
                    <div className="title">
                        <div className="whisper-regular" style={{ fontSize: '25px' }}>Compartilhe!</div>
                        {/* <div className="bebas-neue-regular" style={{ fontSize: '35px', letterSpacing: '2px', marginTop: '5px', textAlign: 'center' }}>NOSSOS&nbsp; CLIENTES&nbsp; SATISFEITOS</div> */}
                        <div className="lato-bold" style={{ width: "100%", display: "flex", justifyContent: "center", marginTop: "10px" }}>
                            <span style={{ width: "50%", textAlign: "center" }}>
                            Sua participação faz toda a diferença! Compartilhe nosso site sobre o candidato Pedro Varanda no WhatsApp. Assim, você ajuda a espalhar a história e os valores do Pedro para mais pessoas. Agradecemos muito o seu apoio!
                            </span>
                        </div>
                        <div style={{ display: "flex", width: "100%", justifyContent: "space-around", padding: "0px 50px", textAlign: "center", marginTop: "50px" }}>
                            {/* <div
                                className="montserrat"
                                style={{ display: "flex", width: "33%", flexDirection: "column", alignItems: "center" }}
                                onClick={() => window.open('https://www.instagram.com/p/C--dKtcpNeu/', '_blank')}
                            >
                                <i className="pi pi-instagram" style={{ fontSize: '50px', cursor: 'pointer' }}></i>
                                <span style={{ fontWeight: "700", marginTop: "10px" }}>Curta e compartilhe nossos<br></br> posts no Instagram!</span>
                            </div> */}
                            <div
                                className="montserrat"
                                style={{ display: "flex", width: "33%", flexDirection: "column", alignItems: "center" }}
                                onClick={() => window.open('https://api.whatsapp.com/send?text=Conheça%20Pedro%20Varanda!%20🌟%20Acesse%20o%20site%20e%20descubra%20mais%20de%20sua%20história%20e%20compromissos%20com%20nossa%20cidade.%20Vamos%20juntos%20fazer%20a%20diferença!%2020700!%20💪%20https://www.pedrovaranda.com', '_blank')}
                            >
                                <i className="pi pi-whatsapp" style={{ fontSize: '50px', cursor: 'pointer' }}></i>
                                <span style={{ fontWeight: "700", marginTop: "10px" }}>Clique aqui!</span>
                            </div>
                            {/* <div
                                className="montserrat"
                                style={{ display: "flex", width: "33%", flexDirection: "column", alignItems: "center" }}
                                onClick={() => window.open('https://www.facebook.com/photo/?fbid=8571338282878677&set=a.676783815667536&locale=pt_BR', '_blank')}
                            >
                                <i className="pi pi-facebook" style={{ fontSize: '50px', cursor: 'pointer' }}></i>
                                <span style={{ fontWeight: "700", marginTop: "10px" }}>Curta e compartilhe nossos<br></br> posts no Facebook!</span>
                            </div> */}
                        </div>
                        <div className="whisper-regular" style={{ fontSize: '25px', marginTop: '65px' }}>Muito Obrigado!</div>
                    </div>
                </div>

            </div>
            {/* <div className="footer-container">
                <img src="/images/png/coffee-beans-logo-light.png" width={120} style={{ height: '120px', filter: 'invert(100%) sepia(0%) saturate(7500%) hue-rotate(23deg) brightness(118%) contrast(118%)' }} ></img>
                <div style={{ color: '#FFF', letterSpacing: '1px' }}>
                    <div className="bebas-neue-regular" style={{ fontSize: '20px' }}>REDES SOCIAIS</div>
                    <div className="flex" style={{ gap: '10px' }}>
                        <div><i className="pi pi-instagram" style={{ fontSize: '15px', color: '#FFF', cursor: 'pointer' }}></i></div>
                        <div><i className="pi pi-facebook" style={{ fontSize: '15px', color: '#FFF', cursor: 'pointer' }}></i></div>
                        <div><i className="pi pi-twitter" style={{ fontSize: '15px', color: '#FFF', cursor: 'pointer' }}></i></div>
                        <div><i className="pi pi-tiktok" style={{ fontSize: '15px', color: '#FFF', cursor: 'pointer' }}></i></div>
                        <div><i className="pi pi-linkedin" style={{ fontSize: '15px', color: '#FFF', cursor: 'pointer' }}></i></div>
                    </div>
                </div>
            </div> */}
        </div>
    )
}