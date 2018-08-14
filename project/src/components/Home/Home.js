import * as React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
        <div class="inner cover">
            <img class="img-fluid mb-5 d-block mx-auto" src="./Img/arts-and-entertainment.png" alt="" height="300" width="300"/>
            <h1 class="cover-heading">Concert Room Lookup</h1>
            <p class="lead">With Concert Room Lookup you can easily find a concert room nearby.</p>
            <p class="lead">
                <a class="btn btn-lg btn-secondary"><Link to="/List" className="homebtn">Look up a concert room.</Link></a>
            </p>
        </div>
)

export default Home;