import React, { Component } from 'react';
import Grid from './Grid';
import Form from './form';
import Footer from './footer';
import {postData} from '../../Utilities/httpUtils'

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            caption: "",
            type: "",
            is_active: false,
            add:"",
            items: [],        
        }
    };

    handleFormSubmit = (e) => {
        e.preventDefault();
        let items = [...this.state.items];
        items.push({
            title: this.state.title,
            caption: this.state.caption,
            type: this.state.type,
            is_active: this.state.is_active
        });

        this.setState({
            items,
            title: "",
            caption: "",
            type: "",
            is_active: false,     
            add:"" 
        });
    };
  
    handleInputChange = (event) => {
        //event.preventDefault();
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    };
    postDatatoServer = (event) => {
        postData(`http://demo9606913.mockable.io/save`, this.state.items)
            .then(data => {
                console.log("post", JSON.stringify(data));
                 this.setState({ add: "Add Successfully" })
            })
            .catch(error => console.error(error));
    }
    render() {
        return (
            <div>
                <Form handleFormSubmit={this.handleFormSubmit}
                    handleInputChange={this.handleInputChange}
                    title={this.state.title}
                    caption={this.state.caption}
                    type={this.state.type}
                    is_active={this.state.is_active} />
                <Grid items={this.state.items} />
                <Footer postDatatoServer={this.postDatatoServer} add={this.state.add}/>
            </div>
        );
    }
}

export default Home;