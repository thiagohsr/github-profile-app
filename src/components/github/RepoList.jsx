import React, {Component} from 'react';
import Repo from './Repo.jsx';

class RepoList extends Component {
    render() {
        return (
        <table className="mdl-data-table mdl-data-table--selectable mdl-shadow--2dp">
            <thead>
                <tr>
                    <th className="mdl-data-table__cell--non-numeric">Title</th>
                    <th className="mdl-data-table__cell--non-numeric">Description</th>
                </tr>
            </thead>
            <tbody>
                {
                    this.props.userRepos.map(repo => {
                        return (
                            <Repo
                                repo={repo}
                                key={repo.id}
                                {...this.props} />
                        )
                    })
                }
            </tbody>
        </table>
        )
    }
}

export default RepoList