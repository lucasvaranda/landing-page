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

export default function Home2() {
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
            </div>
            <div className="image-container" style={{backgroundImage: 'url("/images/png/eleicoes/bg-pedro.png")' }}>
                <div style={{ width: '68%', zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    {/* <img src="/images/png/coffee-beans-logo-light.png" style={{ width: '200px', filter: 'invert(100%) sepia(0%) saturate(7500%) hue-rotate(23deg) brightness(118%) contrast(118%)' }} ></img> */}
                    <div className="montserrat" style={{ zIndex: 3, color: '#FFF', fontSize: '40px', textAlign: "center" }}>Juntos por <br></br>uma Cidade Melhor</div>
                    <div className="montserrat" style={{ zIndex: 3, color: '#FFF', fontSize: '75px', textAlign: 'center', textShadow: "rgb(114 169 251 / 84%) 0px 0px 15px", margin: "15px 0px" }}>PEDRO VARANDA</div>
                    <div style={{ marginBottom: '13px', display: 'flex', alignItems: 'center' }}>
                        <div style={{color: '#FFF', marginTop: '-15px' }}>______</div>
                        <img src="/images/png/eleicoes/vote-icon.png" style={{ width: '70px', filter: 'invert(100%) sepia(100%) saturate(0%) hue-rotate(288deg) brightness(102%) contrast(102%)', margin: '0px 15px' }} ></img>
                        <div style={{color: '#FFF', marginTop: '-15px' }}>______</div>
                    </div>
                    <div className="bebas-neue-regular" style={{ zIndex: 3, color: '#FFF', fontSize: '100px', marginBottom: '30px', textAlign: 'center', textShadow: "rgb(114 169 251 / 84%) 0px 0px 15px", fontWeight: "600", letterSpacing: '18px' }}>20700</div>

                    
                    <div className="custom-buttom" onClick={(e) => changeLocation(e, "#shop-container")}>SOBRE O CANDIDATO</div>
                </div>
            </div>
            <div className="lato-bold icons-container" style={{ display: 'flex', justifyContent: 'space-around', margin: '150px 0px' }}>
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
                        <div className="lato-bold" style={{ width: "70%", fontSize: "20px", padding: "0px 20px", marginBottom: "50px" }}>
                            Há muitos anos, Pedro chegou a Santa Isabel em busca de novas oportunidades. Aqui, ele encontrou um lugar acolhedor onde decidiu se estabelecer e construir sua vida. Com o tempo, formou sua família e criou raízes profundas na cidade.<br></br><br></br>Pedro sempre esteve presente, participando ativamente da vida local e contribuindo para o bem-estar de todos. Hoje, ele se orgulha de chamar esta cidade de lar e está comprometido em continuar trabalhando para o seu crescimento e prosperidade o seu crescimento e prosperidade.<br></br>Pedro  ativamente da vida local e contribuindo para o bem-estar de todos. Hoje, ele se orgulha de chamar esta cidade de lar e está comprometido em continuar trabalhando para o seu crescimento e prosperidade.<br></br><br></br>Pedro sempre esteve presente, participando ativamente da vida local e contribuindo para o bem-estar de todos. Hoje, ele se orgulha de chamar esta cidade de lar e está comprometido em continuar trabalhando.
                        </div>
                        <div style={{ width: "25%", display: "flex", justifyContent: "flex-end" }}>
                            <img src="/images/png/eleicoes/foto_1.png" style={{ boxShadow: "#31b44b 10px 10px 0px" }} width={300}></img>
                        </div>
                    </div>
                    <img src="/images/png/eleicoes/Logo-podemos.png" style={{ position: "absolute", bottom: "40px", left: "50px" }} width={200}></img>
                </div>

                <div id="join-container">
                    <img className="hands-img" src="/images/png/eleicoes/icon-bar.png" width={62}></img>
                    <div className="content">
                        <div className="lato-black main-title" style={{ fontSize: '40px', textAlign: 'center' }}>PROPOSTAS</div>
                        <div className="lato-bold hide-text-full propostas-list" style={{ fontSize: '16px', margin: '10px 0px 20px 0px', display: "flex" }}>
                            <ul>
                                <li>Melhoria na Infraestrutura das Estradas Rurais<span>Investir na pavimentação e manutenção das estradas rurais para facilitar o escoamento da produção agrícola e melhorar a mobilidade dos moradores</span></li>
                                <li>Incentivo ao Turismo Local<span>Desenvolver projetos que valorizem os pontos turísticos da cidade, promovendo eventos culturais e melhorando a infraestrutura turística</span></li>
                                <li>Fortalecimento da Educação Básica<span>Implementar programas de qualificação para professores, ampliar o acesso a materiais didáticos e melhorar a estrutura das escolas</span></li>
                                <li>Ampliação dos Serviços de Saúde<span>Aumentar o número de unidades de saúde, contratar mais profissionais e melhorar o atendimento, garantindo acesso rápido e de qualidade</span></li>
                                <li>Apoio ao Desenvolvimento Sustentável<span>Promover iniciativas que incentivem a preservação do meio ambiente, como programas de reflorestamento e uso de energias renováveis</span></li>
                            </ul>
                            <ul>
                                <li>Valorização da Cultura e Tradições Locais<span>Apoiar eventos culturais, festivais e feiras que celebrem as tradições e a história da cidade, fortalecendo a identidade local</span></li>
                                <li>Fomento ao Esporte e Lazer Comunitário<span>Construir e revitalizar espaços esportivos e de lazer, incentivando a prática de atividades físicas e promovendo a saúde da população</span></li>
                                <li>Criação de Programas de Reciclagem<span>Estabelecer um sistema eficiente de coleta seletiva e reciclagem, promovendo a conscientização ambiental e a redução de resíduos</span></li>
                                <li>Transparência e Participação Popular<span>Implementar canais de comunicação direta com a população, garantindo transparência nas decisões e maior participação nos processos políticos</span></li>
                                <li>Investimento em Segurança Pública<span>Reforçar a segurança pública com o aumento do efetivo policial, instalação de câmeras de vigilância e parcerias com a comunidade para a prevenção da criminalidade</span></li>
                            </ul>
                        </div>
                    </div>
                    <img className="coffee-portion-img" src="/images/png/eleicoes/icon-bar.png" width={62}></img>
                </div>
                
                <div id="reviews-container">
                    <div className="title">
                        <div className="whisper-regular" style={{ fontSize: '25px', marginTop: '65px' }}>Compartilhe!</div>
                        {/* <div className="bebas-neue-regular" style={{ fontSize: '35px', letterSpacing: '2px', marginTop: '5px', textAlign: 'center' }}>NOSSOS&nbsp; CLIENTES&nbsp; SATISFEITOS</div> */}
                        <div className="lato-bold" style={{ width: "100%", display: "flex", justifyContent: "center", marginTop: "10px" }}>
                            <span style={{ width: "50%", textAlign: "center" }}>
                                Sua participação faz toda a diferença! Curta, compartilhe e comente nossas<br></br> publicações para nos ajudar a alcançar mais pessoas. Cada curtida, cada compartilhamento, é um passo a mais para fortalecer nossa mensagem e mostrar que juntos podemos transformar nossa cidade!
                            </span>
                        </div>
                        <div style={{ display: "flex", width: "100%", justifyContent: "space-around", padding: "0px 50px", textAlign: "center", marginTop: "50px" }}>
                            <div
                                className="montserrat"
                                style={{ display: "flex", width: "33%", flexDirection: "column", alignItems: "center" }}
                                onClick={() => window.open('https://www.instagram.com/p/C--dKtcpNeu/', '_blank')}
                            >
                                <i className="pi pi-instagram" style={{ fontSize: '50px', cursor: 'pointer' }}></i>
                                <span style={{ fontWeight: "700", marginTop: "10px" }}>Curta e compartilhe nossos<br></br> posts no Instagram!</span>
                            </div>
                            <div
                                className="montserrat"
                                style={{ display: "flex", width: "33%", flexDirection: "column", alignItems: "center" }}
                                onClick={() => window.open('https://api.whatsapp.com/send?text=Conheça%20as%20propostas%20do%20Pedro%20Varanda%20para%20nossa%20cidade!%20Acesse%20o%20site:%20https://www.pedrovaranda.com', '_blank')}
                            >
                                <i className="pi pi-whatsapp" style={{ fontSize: '50px', cursor: 'pointer' }}></i>
                                <span style={{ fontWeight: "700", marginTop: "10px" }}>Compartilhe nosso site<br></br> no Whatsapp!</span>
                            </div>
                            <div
                                className="montserrat"
                                style={{ display: "flex", width: "33%", flexDirection: "column", alignItems: "center" }}
                                onClick={() => window.open('https://www.facebook.com/photo/?fbid=8571338282878677&set=a.676783815667536&locale=pt_BR', '_blank')}
                            >
                                <i className="pi pi-facebook" style={{ fontSize: '50px', cursor: 'pointer' }}></i>
                                <span style={{ fontWeight: "700", marginTop: "10px" }}>Curta e compartilhe nossos<br></br> posts no Facebook!</span>
                            </div>
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