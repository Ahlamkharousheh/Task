import React from 'react'
import "./home.css"

class Footer extends React.Component {
    render() {
        return (
            <div className="main">
                <button className="save btn btn-primary" onClick={this.props.postDatatoServer}>SAVE</button>
                <div className="add">
                    {this.props.add}
                </div>
            </div>
        );
    }
}

export default Footer;
