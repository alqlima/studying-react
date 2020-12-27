import React, { Component } from 'react';

class Child extends Component {
    // Alterar o nome do parent component
    Alterar = () => {
        this.props.funcaoAlterar('Este é o novo nome');
    }
    render() {
        return (
            <div>
                <h3>Child</h3>
                <button onClick={this.Alterar}>Alterar</button>
            </div>
        )
    }
}

export default Child;