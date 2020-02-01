import React from 'react'
import "./home.css"
class Grid extends React.Component {
    render() {
        const items = this.props.items;
       // console.log(items)
        return (
            <div >
                <div className="main">
                    <table>
                        <tbody>
                            <tr>
                                <th>Title</th>
                                <th>Caption</th>
                                <th>List</th>
                                <th>Is Active</th>
                            </tr>
                            {items.map((item, key) => {
                                return (
                                    <tr key={key}>
                                        <td>{item.title}</td>
                                        <td>{item.caption}</td>
                                        <td>{item.type}</td>
                                        <td>{item.is_active + ""}</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default Grid;
