import React, {Component} from 'react';

class Repo extends Component {
    render() {
        const {repo} = this.props;
        return (
            <tr>
                <td className="mdl-data-table__cell">
                    <a href={repo.html_url}>
                        {repo.name}
                    </a>
                </td>
                <td>{repo.description}</td>
            </tr>
        )
    }
}

export default Repo