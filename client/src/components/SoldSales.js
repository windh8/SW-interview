import React from 'react';

/* SoldSales will show all sales with a 'sold' state. */
const SoldSales = ({soldSale}) => {
  return(
    <div>
      <table>
        <thead>
          <tr>
            <th>Seller Name</th>
            <th>Asking Price</th>
            <th>Image</th>
            <th>Buyer Name</th>
            <th>Sale Price</th>
          </tr>
        </thead>
        <tbody>
        {
          soldSale.map((item, index) => {
            const {name, price, imageUrl, transaction: {buyerName, salePrice}} = item;
            
            return(
              <tr key={index}>
                <td>{name}</td>
                <td>{`$${price}`}</td>
                <td>
                  <a href={imageUrl} target='_blank' rel="noopener noreferrer">
                    <img src={imageUrl} alt={`${name}'s Sale'`}/>
                  </a>
                </td>
                <td>{buyerName}</td>
                <td>{`$${salePrice}`}</td>
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
