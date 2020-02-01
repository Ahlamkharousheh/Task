import React from 'react';
import Dropdown from './Dropdown'
import "../Home/home.css"
import '../SideMenu/sidebar.css'
import {getData} from '../../Utilities/httpUtils'

class SideBar extends React.Component {
    constructor() {
        super();
        this.state = {
            data: [],
            open: true
        }
        this.handler = this.handler.bind(this)
    }
    componentDidMount() {
        getData(`http://demo9606913.mockable.io/menu`)
            .then(data => {
                console.log("get", JSON.stringify(data));
                this.setState({ data: data })
            })
            .catch(error => console.error(error));
    }
    toggleMenu = () => {
        this.setState({ open: !this.state.open });
    }
    handler(data, index) {
        if (!data[index]) {
            return "";
        }
        let html = (
            <Dropdown
                title={data[index].title} key={index}
                children={data[index].children ? this.handler(data[index].children, 0) : ""}
            />
        )
        let children = this.handler(data, ++index);
        return [html, children];
    }
    render() {
        let index = 0;
        return (
            <div>
                {!this.state.open ? <i onClick={this.toggleMenu} className="fas fa-bars"></i> : ""}
                <div className="sidenav" style={{ display: this.state.open ? 'block' : 'none' }}>
                    <i className="fas fa-arrow-left" onClick={this.toggleMenu}></i>
                    <div className="sidemenu">SideMenu<span>.</span></div>
                    <hr className="line"/>
                    {this.handler(this.state.data, index)}
                    <hr className="line"/>
                </div>
            </div>
        );
    }
}
export default SideBar;
