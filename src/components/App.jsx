import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Profile from './github/Profile.jsx';
import Search from './github/Search.jsx';

class App extends Component{
    constructor(props) {
        super(props);
        this.state = {
            username: "thiagoramos-luizalabs",
            userData: [],
            userRepos: [],
            perPage: 5
        }

    }

    //Get userData from github account
    getUserData(){
        let client_id = '?client_id='.concat(this.props.clientId);
        let client_secret = '&client_secret='.concat(this.props.clientSecret);

        fetch('https://api.github.com/users/'.concat(this.state.username + client_id + client_secret))
            .then( (response) => {
                return response.json() })   
                    .then( (json) => {
                        this.setState({userData: json});
                    });
    }
    
    //Get userData from github account
    getUserRepos(){
        let client_id = '?client_id='.concat(this.props.clientId);
        let client_secret = '&client_secret='.concat(this.props.clientSecret);
        let perPageParam = '&per_page='.concat(this.state.perPage);

        fetch('https://api.github.com/users/'.concat(this.state.username).concat('/repos' + client_id + perPageParam + client_secret))
            .then( (response) => {
                return response.json() })   
                    .then( (json) => {
                        this.setState({userRepos: json});
                    });
    }

    handleFormSubmit(username){
        this.setState({username: username}, ()=> {
            this.getUserData();
            this.getUserRepos();    
        })
    }

    componentDidMount (){
        this.getUserData();
        this.getUserRepos();
    }

    render(){
        return (
            <div>
                <Search onFormSubmit = {this.handleFormSubmit.bind(this)} />
                <Profile {...this.state } />
            </div>
        )
    }
}

App.propTypes = {
    clientId: React.PropTypes.string,
    clientSecret: React.PropTypes.string
};

App.defaultProps = {
    clientId: 'cbf19a16ef1ce7adfee0',
    clientSecret: '9675c0bafa4e6e1df3212d2e788267ec6f69aa7a'
};

export default App