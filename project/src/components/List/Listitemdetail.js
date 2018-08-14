import * as React from 'react';
import * as detailService from '../../services/items.service';
import { Link } from 'react-router-dom';

const letters = /^[A-Za-z]+$/;
const numbers = /^[0-9]+$/;

// GOOGLE MAPS
const MY_API = 'AIzaSyCc3zoz5TZaG3w2oF7IeR-fhxNXi8uywNk'

export default class ItemDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            concertroom: {
                id:'',
                naam:'',
                straat:'',
                huisnummer:'',
                postcode:'',
                district:'',
                point_lat:0,
                point_lng:0,
            },
            editform:false,
            editName:false,
            editStreet:false,
            editNumber:false,
            editZipcode:false,
            editDistrict:false,
            form:false,
        };
    }

    componentWillMount() {
        detailService.get(this.props.match.params.id).then(response => this.setState({ concertroom: response.message }));        
    }

    updateName(naam) {
        this.setState({
            ...this.state,
            concertroom: {
                ...this.state.concertroom,
                naam,
            }
        });
    }

    updateStreet(straat) {
        this.setState({
            ...this.state,
            concertroom: {
                ...this.state.concertroom,
                straat,
                name: {straat},
            }
        });
    }

    updateNumber(huisnummer) {
        this.setState({
            ...this.state,
            concertroom: {
                ...this.state.concertroom,
                huisnummer,
            }
        });
    }

    updateZipcode(postcode) {
        this.state.editZipcode = true; 
        this.state.form = true;
        this.setState({
            ...this.state,
            concertroom: {
                ...this.state.concertroom,
                postcode,
            }
        });
    }

    updateDistrict(district) {
        this.setState({
            ...this.state,
            concertroom: {
                ...this.state.concertroom,
                district,
            }
        });
    }

    onSubmit(e) {
        e.preventDefault();
 
        if(this.validateForm()){
            var pushelement = '/list/' + this.state.concertroom.id;
        
            detailService.update(this.props.match.params.id, this.state.concertroom).then(() => this.props.history.push({pushelement}));
            this.setState({editform: false});
        }
    }

    removeItem() {
        detailService.del(this.props.match.params.id).then(() => this.props.history.push('/list'));
    }

    
    showReplyForm () {
        this.setState({editform: true});
    };
    
    NotShowReplyForm() {
        this.setState({editform:false});
    }
      
    checkIfOnlyLetters(string) {
        var bool = false;
        const letters = /^[A-Za-z]+$/;
        if(letters.test(string)) {
            bool = true;
        }
        return bool;
    }

    validateForm() {
        const nummers = /^[0-9\b]+$/;
        const letters = /^[A-Za-z]+$/;
        var bool = true;
 
        if(this.state.concertroom.straat.length < 3 || !/^[a-zA-Z]+$/.test(this.state.concertroom.straat)) { 
            bool = false;
            this.setState({editStreet : "Gelieve een straat op te geven, zonder getallen."});
        }
        if(!nummers.test(this.state.concertroom.huisnummer)) {
            bool = false;
            this.setState({editNumber : "Gelieve een huisnummer zonder letters mee te geven."});
        }
        if(this.state.concertroom.district == '' || !/^[a-zA-Z]+$/.test(this.state.concertroom.district)) {
            bool = false;
            this.setState({editDistrict : "Gelieve een district in te geven zonder getallen."});
        }
        if(letters.test(this.state.concertroom.postcode) || this.state.concertroom.postcode.length > 4 || this.state.concertroom.postcode.length < 4)
        {
            bool = false;
            this.setState({editPostcode : "Gelieve een geldige postcode mee te geven."});
        } 
        return bool;
    }

    // src={`https://www.google.com/maps/embed/v1/place?key=${MY_API}&q=${this.state.concertroom.point_lat},${this.state.concertroom.point_lng}`}>
    render() {
        return (
            <section className="section-details">
                <div className="container">
                    <h5 class="masthead-brand"><a class="link"><Link to="/list">Go Back</Link></a></h5>
                    <div className = "col-md-4 map float-left try swipe ">
                        <h2>Naam</h2>
                        {this.state.concertroom.naam}
                        <br/>
                    </div>
                    <div className = "col-md-4 map float-left try swipe ">
                        <h2>Adres</h2>
                        {this.state.concertroom.straat} {this.state.concertroom.huisnummer} <br/> {this.state.concertroom.postcode} {this.state.concertroom.district}
                        <br/>
                    </div>
                    <div className = "col-md-8 float-left try shine">
                        <iframe frameBorder="0" style={{ width: "100%", height: "550px"}} 
                            src={`https://www.google.com/maps/embed/v1/place?key=${MY_API}&q=${this.state.concertroom.straat}${this.state.concertroom.huisnummer}${this.state.concertroom.district}`}>
                        </iframe>
                    </div>
                </div>
                <div className={"container"}>
                    <a href="#"  className="btn btn-warning addall" onClick= {()=> {this.showReplyForm();}}>Wijzigen<span className="glyphicon glyphicon-edit"></span></a>
                    <br/>
                    <a href="#"  className="btn btn-danger deletebutton" onClick={()=> {this.removeItem();}}>Verwijderen<span className="glyphicon glyphicon-trash"></span></a>
                </div>
                {this.state.editform ? 
                    <div id="loading"  className ="container formedit">
                        <div id = "content" className="col-md-12 center contentedit ">
                            <form action="" onSubmit={(e) => this.onSubmit(e)}>
                                <div>
                                    <label htmlFor="concertroom-firstname">Naam</label>
                                    <input type="text" class="form-control" name="concertroom-firstname" id="concertroom-firstname" value={this.state.concertroom.naam} onChange={(e) => this.updateName(e.target.value)} />
                                    <span className = "wrong-form">{this.state.editName}</span>
                                </div>
                                <div>
                                    <label htmlFor="concertroom-firstname">Straat</label><span className = "glyphicon glyphicon-remove-circle pull-right closeForm " onClick= {()=> {this.NotShowReplyForm();}}></span>
                                    <input type="" class="form-control" name="concertroom-firstname" id="concertroom-firstname" value={this.state.concertroom.straat} onChange={(e) => this.updateStreet(e.target.value)} />
                                    <span className = "wrong-form">{this.state.editStreet}</span>
                                </div>
                                <div>
                                    <label htmlFor="concertroom-Nummer">Nummer</label>
                                    <input  type="text" class="form-control" name="concertroom-Nubmer" id="concertroom-Nubmer" value={this.state.concertroom.huisnummer} onChange={(e) => this.updateNumber(e.target.value)} />
                                    <span className = "wrong-form">{this.state.editNumber}</span>
                                </div>
                                <div>
                                    <label htmlFor="concertroom-firstname">Postcode</label>
                                    <input type="text" class="form-control" name="concertroom-firstname" id="concertroom-firstname" value={this.state.concertroom.postcode} onChange={(e) => this.updateZipcode(e.target.value)} />
                                    <span className = "wrong-form">{this.state.editZipcode}</span>
                                </div>
                                <div>
                                    <label htmlFor="concertroom-firstname">District</label>
                                    <input type="text" class="form-control" name="concertroom-firstname" id="concertroom-firstname" value={this.state.concertroom.district} onChange={(e) => this.updateDistrict(e.target.value)} />
                                    <span className = "wrong-form">{this.state.editDistrict}</span>
                                </div>
                                <br/>
                                <button type="submit" className ="btn btn-default btn-lg">Opslaan<span className="glyphicon glyphicon-ok"></span></button>
                            </form> 
                        </div>
                    </div> : ''}
            </section>        
        );
    };
}