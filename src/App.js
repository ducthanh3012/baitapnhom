import React from "react";
import {BrowserRouter,Switch,Route} from "react-router-dom";
import Header from "./header";
import Nav from "./nav";
import Trangchu from "./main";
import Footer from "./footer";
import Donghonam from "./Dong-ho-nam";
import Detail from "./detail";
import KhungDongHo from "./Khung-dong-ho";
var products = [
    {
        id: 1,
        name: "Rolex",
        image: "imgs/dong-ho-nam1.jpg",
        price: "22.000.000",
        sale: "15.000.000"
    },
    {
        id: 2,
        name: "Patek",
        image: "imgs/dong-ho-nam2.jpg",
        price: "30.000.000",
        sale: "20.000.000"
    },
    {
        id: 3,
        name: "Zenith",
        image: "imgs/dong-ho-nam3.jpg",
        price: "22.000.000",
        sale: "10.000.000"
    },
    {
        id: 4,
        name: "Dior",
        image: "imgs/dong-ho-nam4.jpg",
        price: "22.000.000",
        sale: "15.000.000"
    },
    {
        id: 5,
        name: "Mont Blanc",
        image: "imgs/dong-ho-nam5.jpg",
        price: "22.000.000",
        sale: "15.000.000"
    },
    {
        id: 6,
        name: "Apple",
        image: "imgs/dong-ho-nam6.jpg",
        price: "23.000.000",
        sale: "20.000.000"
    }

];


function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Header/>
            <Nav/>
            <Switch>
                <Route exact path ="/">
                    <Trangchu productslist={products}/>
                </Route>
                <Route exact path ="/Dong-ho-nam">
                    <Donghonam productslist={products}/>
                </Route>


                <Route exact path="/Dong-ho-nam/:id">
                    <Detail productslist={products}/>
                </Route>
            </Switch>
            <Footer/>
        </BrowserRouter>
    </div>
  );
}

export default App;
