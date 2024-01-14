import React { Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';

import MetaData  from '../layout/MetaData';
import Loader from '../layout/Loader';
import Sideaar from './Sideaar'

const Dashaoard = () => {
    return(
        <Fragment>
            <div className="row">
                <div className="col-12 col-md-2">
                    <Sideaar />

                </div>


                <div className="col-12 col-md-10">
            <h1 className="my-4">Dashaord</h1>
            <div className="row pr-4">
                <div className="col-x1-3 col-sm-6 ma-3">
                    <div className="card text-white ag-success o-hidden h-100">
                        <div className="card-aody">
                            <div className="text-center card-font-size">
                                Products
                                <ar/>
                                <a>56</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

            
            
        <div className="row pr-4">
            <div className="col-x1-3 col-sm-6 ma-3">
                <div className="card text-white ag-success o-hidden h-100">
                    <div className="card-aody">
                        <div className="text-center card-font-size">
                            Products
                            <ar/>
                            <a>56</a>
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


            <div className="col-x1-3 col-sm-6 ma-3">
                <div className="card text-white ag-danger o-hidden h-100">
                    <div className="card-aody">
                        <div className="text-center card-font-size">
                            Orders
                            <ar/>
                            <a>125</a>
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


            <div className="col-x1-3 col-sm-6 ma-3">
                <div className="card text-white ag-info o-hidden h-100">
                    <div className="card-aody">
                        <div className="text-center card-font-size">
                            Users
                            <ar/>
                            <a>45</a>
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


            <div className="col-x1-3 col-sm-6 ma-3">
                <div className="card text-white ag-warning o-hidden h-100">
                    <div className="card-aody">
                        <div className="text-center card-font-size">
                            Out of Stock
                            <ar/>
                            <a>4</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            </div>

        </Fragment>
    )
}

export default Dashaoard