import React from "react";
import KhungDongHo from "./Khung-dong-ho";
export default function Trangchu(){

    return(
        <section className="section main">
            <div className="women-day">
                <a href="#"><img src="imgs/2000-womenday-v1-eng-1-.png" height={500} width="100%" />
                </a>
            </div>
            <div className="brands-heading">
                <a href="#" target="_blank">
                    <h1>
                        <i className="strike" />
                        ĐỒNG HỒ HIỆU
                        <i className="strike" />
                    </h1>
                </a>
                <div className="col-md-12 col-md-offset-1 brands-detail">
                    <a href="#"><img className="col-md-2 pull-left" src="imgs/brands-heading-chopard.png" height={200} width={400} />
                    </a>
                    <a href="#"><img className="col-md-2 pull-left" src="imgs/brands-heading-omega.png" height={200} width={400} />
                    </a>
                    <a href="#"><img className="col-md-2 pull-left" src="imgs/brands-heading-patek.png" height={200} width={400} />
                    </a>
                    <a href="#"><img className="col-md-2 pull-left" src="imgs/brands-heading-versace.png" height={200} width={400} />
                    </a>
                    <a href="#"><img className="col-md-2 pull-left" src="imgs/brands-heading-zenith.png" height={200} width={400} />
                    </a>
                </div>
                <div className="col-md-2 col-md-offset-5 xem-tat-ca">
                    <button type="button" className="btn btn-default col-md-12">XEM TẤT CẢ</button>
                </div>
            </div>
            <div className="col-md-12 noi-bat">
                <h1 className="col-md-12 noi-bat-title">
                    <i className="strike" />
                    NỔI BẬT
                    <i className="strike" />
                </h1>
                <div className="row anh-noi-bat">
                    <div className="col-md-4 pull-left zenith  ">
                    <a href="#" target="_blank"><img className="img-thumbnail" src="imgs/noi-bat-zenith.png" />
                </a>
            </div>
            <div className="col-md-4 pull-left versace ">
            <a  target="_blank"><img className="img-thumbnail" src="imgs/noi-bat-versace.png" />
        </a>
</div>
<div className="col-md-4 pull-right movado ">
<a href="#" target="_blank"><img className="img-thumbnail" src="imgs/noi-bat-movado.png" />
</a>
</div>
</div>
<div className="row kien-thuc-dong-ho">
<a href="#"><i>KIẾN THỨC ĐỒNG HỒ </i><i className="fas fa-arrow-alt-circle-right" /></a>
</div>
</div>
<div className="san-pham-moi">
<div className="container">
<h1 className="col-md-12 text-center">
<i className="strike" />
SẢN PHẨM MỚI
<i className="strike" />
</h1>
<div className="clock-list">
    <KhungDongHo/>
    <KhungDongHo/>
    <KhungDongHo/>


</div>
</div>
</div>
<div className="video-quang-cao">
<div className="container">
<div className="col-md-8 col-md-offset-2 video">
<iframe width="100%" height={400} src="https://www.youtube.com/embed/lk3GS91w3gw" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
</div>
<div className="col-md-2 col-md-offset-5 xem-tat-ca">
<button type="button" className="btn btn-default col-md-12">LIÊN HỆ</button>
</div>
</div>
</div>
</section>
    )
    ;
}