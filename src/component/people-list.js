import React, { Component } from 'react';
import PlanetPopUp from './planet-popup';
// connect from redux
import { connect } from 'react-redux';

// Action dispatch
import { getPeople } from '../actions/people-action';
import { NextPage } from '../actions/next-page-action';
import { PreviousPage } from '../actions/previous-page-action';
import { showPeoplePlanet } from '../actions/showplanet-action';

//css file
import '../index.css';

class PeopleList extends Component {
    constructor(props){
        super(props);

        this.state = {
            name:'',
            count:1,
            people: {
                results: []
            }
        };

        this.nextPage = this.nextPage.bind(this);
        this.showPlanet = this.showPlanet.bind(this);
        this.previousPage = this.previousPage.bind(this);
        this.applyFilter = this.applyFilter.bind(this);
    }

    componentWillMount() {
        this.props.dispatch(getPeople());
    }

    componentWillReceiveProps(nextProps){
        let peopleState = nextProps.people;
        this.setState({
            people: peopleState
        });
    }

    nextPage(){
        this.setState((prevState) =>{
           return {count: prevState.count+1}
        });
        let url = this.state.people.next;
        this.props.dispatch(NextPage(url));
    }
    previousPage(){
        this.setState((prevState) =>{
            return {count: prevState.count-1}
        });
        let url = this.state.people.previous;
        this.props.dispatch(PreviousPage(url));
    }

    showPlanet(e){
        e.preventDefault();
        let url = e.target.innerHTML;
        this.props.dispatch(showPeoplePlanet(url));

    }
    applyFilter(event){
        let peopleState = JSON.parse(JSON.stringify(this.props.people));
        peopleState.results = peopleState.results.filter(person => {
            return person.name.toLowerCase().indexOf(event.target.value) > -1;
        });

        this.setState({
            [event.target.name]: event.target.value,
            people: peopleState
        });
    }
    render() {
        if (Object.getOwnPropertyNames(this.props.people).length === 0){
            return (<div>Loading data....</div>)
        }
        return (
            <div>
                <div className="content taable-size">
                    <table className="table table-responsive table-bordered table-hover ">
                        <thead className="table-head">
                            <tr>
                                <th className="text-center">
                                    Name
                                    <br/>
                                    <input type="text" className="form-control" name="name" value={this.state.name} onChange={this.applyFilter}  placeholder="Search for names" />
                                </th>
                                <th className="text-center">Height</th>
                                <th className="text-center">Mass</th>
                                <th className="text-center">Created</th>
                                <th className="text-center">Edited</th>
                                <th className="text-center">Planet</th>
                            </tr>
                        </thead>
                        <tbody className="table-body">
                            {
                                Object.keys(this.state.people.results).map((people, index) =>
                                    <tr key={index}>
                                        <td>{this.state.people.results[people].name}</td>
                                        <td>{this.state.people.results[people].height}</td>
                                        <td>{this.state.people.results[people].mass}</td>
                                        <td>{this.state.people.results[people].created}</td>
                                        <td>{this.state.people.results[people].edited}</td>
                                        <td>
                                            <button className="btn btn-link" data-toggle="modal" data-target="#showPlanet" onClick={this.showPlanet}>{this.state.people.results[people].homeworld}</button>
                                        </td>
                                    </tr>
                                )

                            }
                        </tbody>
                    </table>
                </div>
                <div className=" text-center">
                    <span className="btn-padding">
                        <button className="btn btn-primary " onClick={this.previousPage} disabled={this.state.count <= 1}>Previous</button>
                    </span>
                    <span className="btn-padding">
                        <button className="btn btn-primary" onClick={this.nextPage} disabled={this.state.count > 8}>Next</button>
                    </span>
                </div>
                <PlanetPopUp 
                    name={this.props.showplanet.name} 
                    diameter={this.props.showplanet.diameter}  
                    climate={this.props.showplanet.climate}  
                    population={this.props.showplanet.population}  
                />
            </div>
        );
    }
}
function mapStateToProps(state){
    return{
        people: state.people.people,
        showplanet: state.showplanet.showplanet
    }
}
export default connect(mapStateToProps)(PeopleList);

