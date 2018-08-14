import * as React from 'react';
import { Link } from 'react-router-dom';

const Listitem = (props) => (
    <Link to={`/list/${props.id}`} style={{ textDecoration: 'none' }}>
        <div className="card card-title">
            <h5>{props.naam}</h5>
        </div>
    </Link>
);
   
export default Listitem;