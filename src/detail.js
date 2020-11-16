import React from "react";
import {Link, useParams} from "react-router-dom";
export default function Detail(props){
    const products= props.productslist;
    // lấy tham số trên url
    let {id} = useParams(); //lấy tham số trên url sau chữ :
    var p = null;
    //lấy dữ liệu về, trả về sản phẩm p:
    for(let i=0;i<products.length;i++){
        if(products[i].id==id){
            p=products[i];
            break;
        }
    }

    if(p==null)
    {
        return (<h1>Không tìm thấy sản phẩm</h1>);
    }
    else {
        return (
            <div className="container">
                <div className="row">
                    <div className="anh-minh-hoa col-md-6">
                        <div>
                            <img src={p.image}/>
                        </div>
                        <div className="form-group text-center">
                            <input name type="text" placeholder="Để lại đánh giá của bạn" />
                            <button style={{marginLeft: '20px'}} className="btn" type="submit">Gửi</button>
                        </div>
                    </div>
                    <div className="chi-tiet-sp col-md-3">
                        <div className="text-center">
                            <img className="anh-sp" src={p.image}/>
                            <hr />
                            <p className="ten-sp">{p.name}
                            </p>
                            <p className="ma-sp">MSP: 83667</p>
                            <p style={{textAlign: 'center'}}><span style={{textDecoration: 'line-through', marginRight: '10px'}}> {p.price}</span><span style={{color: 'red'}}>{p.sale} </span></p>
                            <div className="thong-tin-chi-tiet col-md-12"><a href="#">Thông tin chi tiết</a> </div>
                            <div className="text-left">
                                <p>T0994072203800
                                    TECHNICAL SPECS<br />
                                    Reference T0994072203800<br />
                                    Origin Swiss made<br />
                                    Collection T-Classic<br />
                                    Gender GENT<br />
                                    Case shape ROUND<br />
                                    Water resistance Water-resistant up to a pressure of 5 bar (50 m / 165 ft)<br />
                                    Case Material 316L stainless steel case with yellow gold PVD coating<br />
                                    Length 42<br />
                                    Width 42<br />
                                    Lugs 21<br />
                                    Thickness 10.9<br />
                                    Case options See-through case back<br />
                                    Weight (g) 144<br />
                                    Crystal Domed scratch-resistant sapphire crystal with antireflective coating for the gent and lady models<br />
                                    Dial color silver<br />
                                    Indexes roman and indexes<br />
                                    Movement Swiss automatic<br />
                                    Model POWERMATIC 80.111<br />
                                    Caliber 11 1/2'''<br />
                                    Caliber Diameter (mm): 25,6<br />
                                    Jewels 23<br />
                                    Energy Mechanical<br />
                                    Dial HMSD<br />
                                    Power reserve power reserve up to 80 hours<br />
                                    Strap reference T605036480<br />
                                    Strap details Stainless steel<br />
                                    Strap color Grey, Yellow Gold 1N14<br />
                                    Buckle butterfly clasp with push-buttons</p>
                            </div>
                            <div style={{margin: '50px 80px'}} className=" social-icon">
                                <a href="https://www.facebook.com/" target="blank" className="fab fa-facebook-square col-md-2" />
                                <a href="https://www.youtube.com/" target="blank" className="fab fa-youtube-square col-md-2" />
                                <a href="https://www    .twitter.com/" target="blank" className="fab fa-twitter-square col-md-2" />
                            </div>
                            <div className="row">
                                <div className="pull-left mua-sp col-md-12" style={{}}>
                                    <button className="dat-hang text-uppercase" name type="button">đặt hàng</button>
                                    <button className="tu-van-them text-uppercase" name type="button">Tu vấn thêm</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }


}