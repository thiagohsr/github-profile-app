import React, {Component} from 'react';

class Search extends Component {
    onSubmit(e){
        e.preventDefault();
        let username = this.refs.username.value.trim();
        if(!username) {
            alert('Informe um nome de usuário válido e tente novamente.');
            return;
        }
        this.props.onFormSubmit(username);
        this.refs.username.value = '';
    }
    render() {
        return (
            <div>
                <h4>Buscar usuário</h4>
                <div className="mdl-textfield mdl-js-textfield mdl-textfield--expandable">
                <form onSubmit={this.onSubmit.bind(this)}>
                    <label className="mdl-button mdl-js-button mdl-button--icon" htmlFor="search">
                        <i className="material-icons">search</i>
                    </label>
                    <div className="mdl-textfield__expandable-holder">
                        <input ref="username" className="mdl-textfield__input" type="text" id="search"></input>
                        <label className="mdl-textfield__label" htmlFor="search">Enter your query...</label>
                    </div>
                </form>
                </div>
            </div>
        )
    }
}

export default Search