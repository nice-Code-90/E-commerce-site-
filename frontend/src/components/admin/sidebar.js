import React from 'react';
import { Link } from 'react-router-dom';

import MetaData  from '../layout/MetaData';
import Loader from '../layout/Loader';
import Sidebar from './Slidebar'


const Sidebar = () => {
    return(
        <Fragment>
            <div className="row">
                <div className="col-12 col-md-2">
                    <Sidebar />

                </div>

            </div>


        <div className="col-12 col-md-10">
            <h1 className="my-4">DashBord</h1>
            <div className="row pr-4">
                <div className="col-x1-3 col-sm-6 mb-3">
                    <div className="card text-white bg-success o-hidden h-100">
                        <div className="card-body">
                            <div className="text-center card-font-size">
                                Products
                                <br/>
                                <b>56</b>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

            


            
        <div className="row pr-4">
            <div className="col-x1-3 col-sm-6 mb-3">
                <div className="card text-white bg-success o-hidden h-100">
                    <div className="card-body">
                        <div className="text-center card-font-size">
                            Products
                            <br/>
                            <b>56</b>
                        </div>

                    </div>
                    <Link className="card-footer text-white cleardix small z-1" to="/admin/users">
                        <span className="float-left">View Detals</span>
                        <span className="float-right">
                            <i className="fa fa-angle-right"></i>
                        </span>
                    </Link>

                </div>
            </div>




            <div className="col-x1-3 col-sm-6 mb-3">
                <div className="card text-white bg-danger o-hidden h-100">
                    <div className="card-body">
                        <div className="text-center card-font-size">
                            Orders
                            <br/>
                            <b>125</b>
                        </div>

                    </div>
                    <Link className="card-footer text-white cleardix small z-1" to="/admin/users">
                        <span className="float-left">View Details</span>
                        <span className="float-right">
                            <i className="fa fa-angle-right"></i>
                        </span>
                    </Link>

                </div>
            </div>





            <div className="col-x1-3 col-sm-6 mb-3">
                <div className="card text-white bg-info o-hidden h-100">
                    <div className="card-body">
                        <div className="text-center card-font-size">
                            Users
                            <br/>
                            <b>45</b>
                        </div>

                    </div>
                    <Link className="card-footer text-white cleardix small z-1" to="/admin/users">
                        <span className="float-left">View Details</span>
                        <span className="float-right">
                            <i className="fa fa-angle-right"></i>
                        </span>
                    </Link>

                </div>
            </div>




            <div className="col-x1-3 col-sm-6 mb-3">
                <div className="card text-white bg-warning o-hidden h-100">
                    <div className="card-body">
                        <div className="text-center card-font-size">
                            Out of Stock
                            <br/>
                            <b>4</b>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        </Fragment>
    )
}

export default Sidebar


