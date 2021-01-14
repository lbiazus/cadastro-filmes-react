import {Component } from 'react';

class EstruturaDaPagina extends Component {
    
    render() {
        return (
            <div className="mainPage">
                <div className="header">
                    <h1>Aplicação de Locadora</h1>
                    <h2>{this.props.title}</h2>
                </div>
                {this.props.children}
            </div>
        )
    }
}

export default EstruturaDaPagina;