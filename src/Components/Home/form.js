import React from 'react';
import "./home.css"

class Form extends React.Component {
    render() {
        return (
            <div className="main">
                <form className="container" onSubmit={this.props.handleFormSubmit}>
                    <div className="form-group">
                        <h2 >Title:</h2>
                        <input type="text" className="form-control" value={this.props.title} onChange={this.props.handleInputChange} placeholder="Enter title" name="title" />
                    </div>
                    <div className="form-group">
                        <h2 >Caption:</h2>
                        <input type="text" className="form-control" value={this.props.caption} onChange={this.props.handleInputChange} placeholder="Enter caption" name="caption" />
                    </div>
                    <div className="form-group">
                        <h2 >Select list:</h2>
                        <select className="form-control" name="type" value={this.props.type} onChange={this.props.handleInputChange} >
                            <option></option>
                            <option >Main</option>
                            <option >Sub</option>
                            <option>Secondary</option>
                        </select>
                    </div>
                    <div className="checkbox" >
                        <label><input  type="checkbox" name="is_active" checked={this.props.is_active} onChange={this.props.handleInputChange} />Active</label>
                    </div>
                    
                    <button type="submit" className="btn btn-primary" >ADD</button>
                </form>
            </div>
        );
    }
}
export default Form;