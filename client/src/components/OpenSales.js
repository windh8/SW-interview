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
              const {name, price, imageUrl} = item;

              return(
                <tr key={index}>
                  <td>{name}</td>
                  <td>{`$${price}`}</td>
                  <td>
                    <a href={imageUrl} target='_blank' rel="noopener noreferrer">
                    <img src={imageUrl} alt={`${name}'s Sale'`}/>
                    </a>
                  </td>
                  <td>
                    <button className='btn btn-primary'
                      onClick={() => onButtonClick(item)}>Accept</button>
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
