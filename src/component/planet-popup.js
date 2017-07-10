import React, { Component } from 'react';
import '../index.css'


class PlanetPopUp extends Component {
    render() {
        return (
            <div className="modal fade" id="showPlanet" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLongTitle">Planet</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <table className="table table-responsive table-bordered">
                                <thead className="table-head">
                                <tr>
                                    <td>Name</td>
                                    <td>Diameter</td>
                                    <td>Climate</td>
                                    <td>Population</td>
                                </tr>
                                </thead>
                                <tbody className="table-body">
                                <tr>
                                    <td>{this.props.name}</td>
                                    <td>{this.props.diameter}</td>
                                    <td>{this.props.climate}</td>
                                    <td>{this.props.population}</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default PlanetPopUp;

