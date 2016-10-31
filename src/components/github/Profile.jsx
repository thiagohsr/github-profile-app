import React, {Component} from 'react';
import RepoList from './RepoList.jsx';

class Profile extends Component{
    render(){
        return (
            <section className="section--center mdl-grid">
                <header className="mdl-cell mdl-cell--3-col-desktop mdl-cell--2-col-tablet mdl-cell--4-col-phone mdl-color-text--white" style={{height:"100%"}}>
                    <img src={this.props.userData.avatar_url} />
                </header>
                <div className="mdl-card mdl-cell mdl-cell--9-col-desktop mdl-cell--6-col-tablet mdl-cell--4-col-phone">
                    <div className="mdl-card__supporting-text">
                        <h4>{this.props.userData.name}</h4>
                        <ul className="demo-list-item mdl-list">
                            <li className="mdl-list__item">
                                <span className="mdl-chip">
                                    <span className="mdl-chip__contact mdl-color--teal mdl-color-text--white">
                                        {this.props.userData.public_gists}
                                    </span>
                                    <span className="mdl-chip__text">Gists</span>
                                </span>
                            </li>
                            <li className="mdl-list__item">
                                <span className="mdl-chip">
                                    <span className="mdl-chip__contact mdl-color--blue mdl-color-text--white">
                                        {this.props.userData.public_repos}
                                    </span>
                                    <span className="mdl-chip__text">Repos</span>
                                </span>
                            </li>
                            <li className="mdl-list__item">
                                <span className="mdl-chip">
                                    <span className="mdl-chip__contact mdl-color--blue mdl-color-text--white">
                                        {this.props.userData.followers}
                                    </span>
                                    <span className="mdl-chip__text">Followers</span>
                                </span>
                            </li>
                            <li className="mdl-list__item">
                                <span className="mdl-chip">
                                    <span className="mdl-chip__contact mdl-color--blue mdl-color-text--white">
                                        {this.props.userData.following}
                                    </span>
                                    <span className="mdl-chip__text">Following</span>
                                </span>
                            </li>
                        </ul>
                    </div>
                    <div className="mdl-card__supporting-text">
                        <h4>Repositórios do usuário</h4>
                        <RepoList userRepos={ this.props.userRepos } />                        
                    </div>
                    <div className="mdl-card__actions">
                        <a href="#" className="mdl-button">Visitar perfil</a>
                    </div>
                </div>
            </section>
        )
    }
}

export default Profile