

import React, { Component } from 'react';
import { dataProducts, prodInDetails } from "./appData";
const ProductContext = React.createContext();

 class ProductProvider extends Component {
     state ={
         products : dataProducts,
         detailProduct : prodInDetails,
     }
    render() {
        return (
            <div>
              <ProductContext.Provider value={{
                  ...this.state,
              }} >
                  {this.props.children}
                  </ProductContext.Provider> 
            </div>
        )
    }
}
const ProductConsumer = ProductContext.Consumer;

export {ProductProvider,ProductConsumer};
