import React, { useState } from "react";
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';
import { useNavigate } from "react-router-dom";
import { Dialog } from 'primereact/dialog';
import './index.scss';

export default function LoginScreen() {
    const [value, setValue] = useState('');
    const [visible, setVisible] = useState(false);

    let navigate = useNavigate();
    const routeChange = () =>{
        let path = `../home`; 
        navigate(path, { replace: true })
    }

    return (
        <div id="login-screen" className="w-full h-full flex flex-column align-items-center justify-content-center">
            <div style={{ position: 'absolute', bottom: "15px" }}>
                <Button icon="pi pi-info-circle" onClick={() => setVisible(true)} className="ref-button" rounded severity="secondary" aria-label="Search" tooltip="Referência" tooltipOptions={{ position: 'top', className: 'ref-tooltip' }} />
            </div>

            <Dialog header="Referência" visible={visible} onHide={() => {if (!visible) return; setVisible(false); }}
                style={{ width: '50vw' }} breakpoints={{ '960px': '75vw', '641px': '100vw' }}>
                <p className="m-0" style={{ color: '#2b2527' }}>
                Essa é uma tela de login sem fins comerciais, desenvolvida como parte de um estudo de reprodução de layout. A inspiração para o design foi tirada de um modelo disponível no <a href="https://www.freepik.com/free-vector/log-landing-page-with-gradient-geometric-shapes_5414245.htm#query=login%20page%20design&position=1&from_view=keyword&track=ais_user&uuid=af38cc5a-0545-450e-ba29-a836e51b8c8a" target="_blank" style={{ textDecoration: 'none', color: '#2b2527', fontWeight: 'bolder' }}>Freepik</a>.<br></br><br></br>
                    O objetivo do projeto não era criar uma réplica exata, mas sim capturar a essência do layout original, mantendo uma certa liberdade criativa para adaptações e melhorias.<br></br><br></br>
                    O desenvolvimento foi realizado utilizando React.js e SASS, com o auxílio do UI Suite PrimeReact. No entanto, a maior parte dos estilos foi elaborada manualmente com HTML e CSS básicos.
                </p>
                <img src="/images/png/ref-login.jpg" width={"100%"} style={{ marginTop: '20px' }}></img>
            </Dialog>
            
            <div className="main-container w-6 flex border-round-sm">
                <div className="w-6 h-full login-content">
                    <div className="flex flex-column align-items-center justify-content-center h-full">
                        <div className="flex flex-column align-items-start w-8" style={{ marginBottom: '10px' }}>
                            <span className="roboto-condensed-font login-title-1">Olá,</span>
                            <span className="roboto-condensed-font login-title-2">BEM<br></br> VINDO!</span>
                        </div>
                        <div className="flex flex-column align-items-start gap-2 w-8">
                            <label htmlFor="username">Usuário</label>
                            <InputText id="username" className="w-full login-email-input" aria-describedby="username-help" />
                            <small id="username-help">
                                Insira seu email de acesso.
                            </small>
                            <Password
                                className="login-password-input"
                                value={value}
                                onChange={(e) => setValue(e.target.value)}
                                toggleMask
                                feedback={false}
                                pt={{
                                    root: { style: { width: '100%' } },
                                    input: { style: { width: '100%' } }
                                }}
                            />
                            <small id="username-help">
                                Insira sua senha.
                            </small>
                            <Button
                                label="Entrar"
                                onClick={routeChange}
                                className="login-entrar-button roboto-condensed-font"
                            />
                            <div className="flex flex-row w-full align-items-center justify-content-center cicle-buttons-container">
                                <Button icon="pi pi-user-plus" className="user-register-button" rounded severity="info" aria-label="User" tooltip="Cadastrar Usuário" tooltipOptions={{ position: 'bottom', className: 'user-register-tooltip' }} />
                                <Button icon="pi pi-key" className="forgot-password-button" rounded severity="secondary" aria-label="Search" tooltip="Recuperar Senha" tooltipOptions={{ position: 'bottom', className: 'forgot-password-tooltip' }} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-6 h-full flex align-items-center justify-content-center login-content image-container" style={{ backgroundColor: '#f0e8e1', position: 'relative', overflow: 'hidden' }}>
                    <div style={{ position: 'relative' }}>
                        <img src="/images/png/coffee-beans-logo-light.png" alt="unio-logo" width="200" style={{ zIndex: 2, position: 'relative', filter: "invert(6%) sepia(6%) saturate(3466%) hue-rotate(330deg) brightness(93%) contrast(83%)" }} />
                    </div>
                    <img src="/images/png/coffee-wave.png" className="top-coffe-image" width="100%" style={{ zIndex: 2, position: 'absolute', opacity: '0.9', top: '-70px', transform: 'rotate(180deg)' }} />
                    <img src="/images/png/coffee-wave.png" className="bottom-coffe-image" width="100%" style={{ zIndex: 2, position: 'absolute', opacity: '0.9', bottom: '-70px' }} />
                </div>
            </div>
        </div>
    )
}