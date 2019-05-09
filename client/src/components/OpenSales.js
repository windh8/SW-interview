import './OpenSales.css';
import React from 'react';

const OpenSales = ({openSale, onSaleAccepted}) => {
  // This Component OpenSales will be given a prop openSale, which will
  // contain all open sales contained in an array.

  const onButtonClick = (item) => {
    item.status = "Accepted";
    console.log(item);
    onSaleAccepted(item);
  }

  return(
    <div>
      <table>
        <tbody>
        <tr>
          <th>Name</th>
          <th>Price</th>
          <th>Image</th>
          <th>Controls</th>
        </tr>
        {
          openSale.map((item, index) => {
            return(
              <tr key={index}>
                <td>{item.name}</td>
                <td>{`$${item.price}`}</td>
                <td>
                  <img src={item.imageUrl} alt={`${item.name}'s Sale'`}/>
                </td>
                <td>
                  <button onClick={() => onButtonClick(item)}>Accept</button>
                </td>
              </tr>
            );
          })
        }
        </tbody>
      </table>
    </div>
  );
};

export default OpenSales;
