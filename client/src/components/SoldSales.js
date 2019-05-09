import './OpenSales.css';
import React from 'react';

const SoldSales = (props) => {
  return(
    <div>
      <table>
        <tbody>
        <tr>
          <th>Seller Name</th>
          <th>Asking Price</th>
          <th>Image</th>
          <th>Buyer Name</th>
          <th>Sale Price</th>
        </tr>
        {
          props.soldSale.map((item, index) => {
            return(
              <tr key={index}>
                <td>{item.name}</td>
                <td>{`$${item.price}`}</td>
                <td><img src={item.imageUrl} alt={`${item.name}'s Sale'`}/></td>
                <td>{item.transaction.buyerName}</td>
                <td>{`$${item.transaction.salePrice}`}</td>
              </tr>
            );
          })
        }
        </tbody>
      </table>
    </div>
  );
};

export default SoldSales;