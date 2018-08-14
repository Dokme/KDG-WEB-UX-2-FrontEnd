import * as React from 'react';
import { Link } from 'react-router-dom';
import * as detailService from '../../services/items.service';
import Listitem from './Listitem';


export default class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            details: [],
        };
    }
    
    componentWillMount() {
        detailService.getAll().then(response => this.setState({ details: response.message }));
    }

    renderItems() {
        return this.state.details.map (
            (details, i) => (<div key={i}>
                <Listitem 
                    naam = {details.naam}
                    id = {details.id} 
                    straat = {details.straat}  
                    huisnummer = {details.huisnummer}
                    district = {details.district}
                    postcode = {details.postcode} 
                    point_lat = {details.point_lat} 
                    point_lng = {details.point_lng}
                />
            </div>)
        );
    }

    render() {
        return (
            <div class="container row text-center">
                {this.state.details.length ? (
                    <div class="container">
                        <div class="row text-center">
                            <div class="col-lg-3 col-md-6 mb-4">
                                {this.renderItems()}
                            </div>
                        </div>
                    </div>
                ) :
                (
                    <div className="container">
                        <h1 className = "text-center">Even geduld..</h1>
                    </div>
                )}
            </div>
        );
    }
};