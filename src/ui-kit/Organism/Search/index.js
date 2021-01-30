import React, { Component } from 'react'

export default class index extends Component {
    state = {
        search: ""
    };

    onchange = e => {
        this.setState({ search: e.target.value });
    }
    renderProgrammer = programmer => () {
        const {search} = this.state;
        var code =programmer.code.toLowerCaSe().indexOf(search.toLowerCase()) !== -1;

        return (
            <div>
                
            </div>
        )
    }
}

