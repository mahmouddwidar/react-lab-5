import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const cartCount = useSelector(state => state.addToCart.cartCount);

    return (
        <nav className="navbar navbar-expand-lg bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand text-white" to="/">Redux</Link>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    </ul>
                    <div className="d-flex">
                        <div>
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </div>
                        <div className="ms-3">
                            <button className="btn btn-outline-light" type="button">
                                <i className="bi bi-cart"></i>
                                <span className="badge bg-danger">{cartCount}</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
