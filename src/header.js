export default function Header (){
    return(
        <header className="section header">
            <div className="container">
                <div className="row">
                    <div className="pull-left col-md-4 header-left">
                        <p className="fas fa-map-marker-alt pull-left"></p>
                        <p className="pull-right">
                            331 Nguyen Dinh Chieu St., Ward 5, Dist.3, HCMC
                        </p>
                    </div>
                    <div className="pull-right col-md-8 header-right">
                        <p className="col-md-6 col-md-offset-2 pull-left">
                            Call Us: 1800 0091 | 028 3833 9999
                        </p>
                        <div className="col-md-4 pull-right">
                            <input className="form-control" type="search" name="search" placeholder="Tìm kiếm"/>
                        </div>

                    </div>
                </div>

            </div>
        </header>
    );
}