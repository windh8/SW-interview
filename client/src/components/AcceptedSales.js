import React from 'react';

const AcceptedSales = ({acceptedSale, onSaleSold}) => {

  const onButtonClick = (item) => {
    item.status = "Sold";
    console.log(item);
    onSaleSold(item);
  }

  return(
    <div>
      <table>
        <thead>
          <tr>
            <th>Seller Name</th>
            <th>Asking Price</th>
            <th>Image</th>
            <th>Sell To</th>
            <th>Sale Price</th>
            <th>Controls</th>
          </tr>
        </thead>
        <tbody>
        {
          acceptedSale.map((item, index) => {
            return(
              <tr key={`${item.name}-${index}`}>
                <td>{item.name}</td>
                <td>{`$${item.price}`}</td>
                <td><img src={item.imageUrl} alt={`${item.name}'s Sale'`}/></td>
                <td>
                  <input type='text' placeholder='Buyer Name'
                    onChange={(event) => item.transaction.buyerName = event.target.value }/>
                </td>
                <td>
                  <input type='text' name={`${index}-SP`} placeholder='Sale Price'
                    onChange={(event) => item.transaction.salePrice = event.target.value }/>
                </td>
                <td>
                  <button onClick={() => onButtonClick(item) }>Sell</button>
                </td>
              </tr>
            );
          })
        }
        </tbody>
      </table>
    </div>
  );
}

export default AcceptedSales;
