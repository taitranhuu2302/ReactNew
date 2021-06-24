import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './styles.scss'

class Breadcumb extends Component {
    render() {
        return (
            <div className="container-fluid" id="breadcumb">
                <div className="container h-100">
                    <nav aria-label="breadcrumb" className="h-100">
                        <ol class="breadcrumb" className="h-100 align-items-center d-flex">
                            <li class="breadcrumb-item"><Link to='/'>HOME</Link></li>
                            <li class="breadcrumb-item active" aria-current="page">LOG IN</li>
                        </ol>
                    </nav>
                </div>
            </div>
        );
    }
}

export default Breadcumb;
