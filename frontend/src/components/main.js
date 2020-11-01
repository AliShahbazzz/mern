import React, { Component } from 'react';
import axios from 'axios';

axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'X-CSRFToken'

class Main extends Component {
    constructor(props) {
        super(props)
        this.state = {
            items: null,
            newItem: ''
        }
    }
    componentWillMount = () => {
        axios.get('http://localhost:5000/api/items')
            .then(res => this.setState({ items: res.data }))
            .catch(err => console.log(err))
    }

    updateState = (e) => {
        let newItem = e.target.value
        this.setState({
            newItem: newItem
        })
    }

    addItem = () => {
        axios.post('http://localhost:5000/api/items/', {
            name: this.state.newItem
        }).then(res => console.log(res.data))
            .catch(err => console.log(err))
    }

    deleteItem = (id) => {
        axios.delete('http://localhost:5000/api/items/' + id)
            .then(res => console.log(res.data))
            .catch(err => console.log(err))
    }
    render() {
        return (
            <div>
                <h4>Welcome</h4>
                <ul>
                    {this.state.items ? this.state.items.map(item =>
                        <li key={item.name}>
                            {item.name}
                            <button onClick={() => this.deleteItem(item._id)}>Delete</button>
                        </li>
                    ) : null}
                </ul>
                <input type="text" onChange={(e) => this.updateState(e)}></input>
                <button onClick={() => this.addItem()}>Add</button>
            </div>
        );
    }
}

export default Main;