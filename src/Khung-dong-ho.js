import React from "react";
import {Link} from "react-router-dom";

export default function KhungDongHo(props) {
    const products = props.productslist;

    for (var i=0;i<3;i++){
        return(
            <div className="pull-left col-md-4 ">
                <img className="img-watch" src="imgs/dong-ho-nam2.jpg"/>
                <p style={{fontWeight: 'bold', marginTop: '20px'}} className="text-center">Mã SP: 74180</p>
                <p className="text-capitalize text-center">Tissot Chemin T099.407.22.038.00 Watch 42mm</p>
                <p style={{textAlign: 'center'}}><span style={{textDecoration: 'line-through', marginRight: '10px'}}> 22,630,000</span><span style={{color: 'red'}}>21,500,000 </span></p>
                <div className="pull-left" style={{marginLeft: '80px'}}>
                    <Link to={"/Dong-ho-nam/"}><button className="button1" name type="button">Chi Tiết</button></Link>
                    <button className="button2" name type="button">Đặt Hàng</button>
                </div>
            </div>
        );
    }
}