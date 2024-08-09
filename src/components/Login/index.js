import React, { useState } from "react";
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';
import { useNavigate } from "react-router-dom";
import './index.scss';

export default function LoginScreen() {
    const [value, setValue] = useState('');

    let navigate = useNavigate();
    const routeChange = () =>{
        let path = `../home`; 
        navigate(path, { replace: true })
    }

    return (
        <div id="login-screen" className="w-full h-full flex flex-column align-items-center justify-content-center">
            <div className="main-container w-6 flex border-round-sm">
                <div className="w-6 h-full">
                    <div className="flex flex-column align-items-center justify-content-center h-full">
                        <div className="flex flex-column align-items-start w-8" style={{ marginBottom: '10px' }}>
                            <span className="roboto-condensed-font login-title-1">Olá,</span>
                            <span className="roboto-condensed-font login-title-2">BEM VINDO!</span>
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
                <div className="w-6 h-full flex align-items-center justify-content-center" style={{ backgroundColor: '#ede4f7'}}>
                    <div style={{ position: 'relative' }}>
                        <img src="/images/png/logo_default.png" alt="unio-logo" width="200" style={{ zIndex: 2, position: 'relative' }} />
                        <img src="/images/png/logo_default.png" alt="unio-logo" width="200" style={{ position: 'absolute', bottom: '-1px', left: '0px', opacity: '0.4' }} />
                        <img src="/images/png/logo_default.png" alt="unio-logo" width="200" style={{ position: 'absolute', bottom: '-6px', left: '0px', opacity: '0.2' }} />
                        <img src="/images/png/logo_default.png" alt="unio-logo" width="200" style={{ position: 'absolute', bottom: '-11px', left: '0px', opacity: '0.1' }} />
                    </div>
                </div>
            </div>
        </div>
    )
}