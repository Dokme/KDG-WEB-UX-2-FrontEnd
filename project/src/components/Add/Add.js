import * as React from 'react';
//import { Link } from 'react-router-dom';

const Add = () => (
        <div class="inner cover">
            <div class="container">
                <form class="well form-horizontal" action=" " method="post"  id="contact_form">
                    <fieldset>
                        <div class="form-group">
                            <label class="col-md-4 control-label">Naam</label>  
                            <div class="col-md-4 inputGroupContainer">
                                <div class="input-group">
                                    <input name="address" placeholder="Naam" class="form-control" type="text" />
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-md-4 control-label">Straat</label>  
                            <div class="col-md-4 inputGroupContainer">
                                <div class="input-group">
                                    <input name="address" placeholder="Straat" class="form-control" type="text" />
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-md-4 control-label">Nummer</label>  
                            <div class="col-md-4 inputGroupContainer">
                                <div class="input-group">
                                    <input name="address" placeholder="Nummer" class="form-control" type="text" />
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-md-4 control-label">District</label>  
                            <div class="col-md-4 inputGroupContainer">
                                <div class="input-group">
                                    <input name="city" placeholder="District" class="form-control"  type="text" />
                                </div>
                            </div>
                        </div>
                        <div class="form-group"> 
                            <label class="col-md-4 control-label">Postcode</label>
                            <div class="col-md-4 selectContainer">
                                <div class="input-group">
                                    <select name="state" class="form-control selectpicker">
                                        <option value=" " >Selecteer een postcode</option>
                                        <option>2000</option>
                                        <option>2018</option>
                                        <option>2020</option>
                                        <option>2030</option>
                                        <option>2040</option>
                                        <option>2050</option>
                                        <option>2060</option>
                                        <option>2100</option>
                                        <option>2140</option>
                                        <option>2170</option>
                                        <option>2180</option>
                                        <option>2600</option>
                                        <option>2610</option>
                                        <option>2660</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-md-4 control-label"></label>
                            <div class="col-md-4">
                                <button type="submit" class="btn btn-success" >Verstuur <span class="glyphicon glyphicon-send"></span></button>
                            </div>
                        </div>
                    </fieldset>
                </form>
            </div>
        </div>
)

export default Add