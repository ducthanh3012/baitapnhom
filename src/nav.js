import {Link} from "react-router-dom";
import React from "react";
export default function Nav(){
    return(
        <nav className="section nav">
            <div className="container">
                <div className="row col md-3 col-md-offset-5 logo">
                    <Link to ="/"><img src="imgs/logo-luxury.png" height="150" width="160"/></Link>

                </div>
                <div className="row col-md-12 menu">
                    <div className="a-menu pull-left">
                        <label>
                            <Link to ="/Thuong-hieu">
                                <p>
                                    THƯƠNG HIỆU
                                </p>
                            </Link>
                        </label>
                    </div>
                    <div className="a-menu pull-left">
                        <label>
                            <Link to = "/Dong-ho-nam">
                                <p>
                                    ĐỒNG HỒ NAM
                                </p>
                            </Link>
                        </label>
                    </div>
                    <div className="a-menu pull-left">
                        <label>
                            <Link to = "/Dong-ho-nu">
                                <p>
                                    ĐỒNG HỒ NỮ
                                </p>
                            </Link>
                        </label>
                    </div>
                    <div className="col-md-2 a-menu pull-left">
                        <label>
                            <a href="#">
                                <p>
                                    ĐỒNG HỒ CẶP ĐÔI
                                </p>
                            </a>
                        </label>
                    </div>
                    <div className="col-md-2 a-menu pull-left">
                        <label>
                            <a href="#">
                                <p>
                                    SẢN PHẨM HOT
                                </p>
                            </a>
                        </label>
                    </div>
                    <div className="col-md-1 a-menu pull-left">
                        <label>
                            <a href="#">
                                <p>
                                    SALE
                                </p>
                            </a>
                        </label>
                    </div>
                    <div className="col-md-2 a-menu pull-left">
                        <label>
                            <a href="#">
                                <p>
                                    SPECIAL EVENT
                                </p>
                            </a>
                        </label>
                    </div>


                </div>

            </div>

        </nav>
    );
}