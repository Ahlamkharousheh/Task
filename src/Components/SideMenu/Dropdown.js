import React from 'react';
import {icons} from './icons'
class Dropdown extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showSubItem: false
        };     
    }
    handleClick = () => {
        this.setState(prevState => ({
             showSubItem: !prevState.showSubItem}));
    }
 
    render() {   
        return (
            <div > 
                <div className="list" onClick={ () => {
                    this.handleClick()
                }}>
                    <i className={`fas  ${icons.get(this.props.title)}`}></i>       
                    <span>{this.props.title}</span>             
                    {
                        this.props.children.length ? 
                            <span className="caret-down"><i className="fas fa-caret-down"></i></span> :
                            ""
                    }
                </div>
                    {
                        this.props.children.length ?
                            <div style={{display:this.state.showSubItem ? 'block' : 'none'}}>
                                {
                                    this.props.children
                                }
                            </div> :
                            ""
                    }    
            </div>
        );
    }
}

export default Dropdown;
