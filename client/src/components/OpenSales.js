import React from 'react';

/* OpenSales will show all sales with an 'open' state. It will also allow
 * the user to change an open sale from an 'open' state to an 'accepted' state. */
const OpenSales = ({openSale, onSaleAccepted}) => {

  /* onButtonClick will change the state of the selected sale to an
   * 'accepted' state. List of all given sales will be updated through
   * onSaleAccepted to reflect change(s). */
  const onButtonClick = item => {
    item.status = "Accepted";
    console.log(item);
    onSaleAccepted(item);
  }

  return(
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Image</th>
            <th>Controls</th>
          </tr>
        </thead>
        <tbody>
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
