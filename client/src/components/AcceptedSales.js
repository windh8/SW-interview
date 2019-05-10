import React from 'react';

/* AcceptedSales will show all sales with an 'accepted' state. It will also
 * allow the user to change an accepted sale from an 'accepted' state to a
 * 'sold' state. */
const AcceptedSales = ({acceptedSale, onSaleSold}) => {

  /* onButtonClick will change the state of the selected sale to an
   * 'sold' state. List of all given sales will be updated through
   * onSaleSold to reflect change(s). */
  const onButtonClick = item => {
      const {buyerName, salePrice} = item.transaction;

      /* If the salePrice contains only monetary values, for example (5, 5.24, etc...),
       * then allow the sale item to change its state from 'accepted' to 'sold'. */
      //const isPriceNumber = salePrice.search('^.[a-zA-Z!@#$%^&*()].$')//RegExp('').test(salePrice);
      //console.log(`is actual price entered? ${isPriceNumber}`)
      if(buyerName && salePrice && !isNaN(parseFloat(salePrice)) /*&& isPriceNumber < 0*/) {
        item.status = "Sold";
        console.log(item);
        onSaleSold(item);
      }
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
            const {name, price, imageUrl, transaction} = item;

            return(
              <tr key={`${name}-${index}`}>
                <td>{name}</td>
                <td>{`$${price}`}</td>
                <td>
                  <a href={imageUrl} target='_blank' rel="noopener noreferrer">
                    <img src={imageUrl} alt={`${name}'s Sale'`}/>
                  </a>
                </td>
                <td>
                  <input type='text' placeholder='Buyer Name'
                    title="Buyer Name must only contain letters from the alphabet."
                    onChange={({target}) => transaction.buyerName = target.value }/>
                </td>
                <td>
                  <input type='text' placeholder='Sale Price' pattern='^[0-9]+[\\.]?[0-9]*$'
                    title="Please enter in a currency amount."
                    onChange={({target: {value, classList}}) => {
                      /*console.log(RegExp('[0-9]?[.]?[0-9]').test(value))
                      if(!RegExp('/^-?\d*(\.\d+)?$/g').test(value)) {
                        classList.add("Error");
                      } else {
                        classList.remove("Error");
                      }*/
                      if(value.search('^[0-9]+[\\.]?[0-9]*$') >= 0) {
                        console.log('good value entered')
                        transaction.salePrice = parseFloat(value).toFixed(2).toString();
                      }
                    } }/>
                </td>
                <td>
                  <button className='btn btn-primary'
                    onClick={() => onButtonClick(item) }>Sell</button>
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
