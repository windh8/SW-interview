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

      /* If the salePrice property, of the sale item, contains a valid value,
       * for example (5, 5.24, etc...), and not 'NaN', then the sale item will
       * change its state from 'accepted' to 'sold'. */
      if(buyerName && salePrice && salePrice !== 'NaN') {
        item.status = "Sold";
        console.log(item);
        onSaleSold(item);
      }
  }

  /* amountValidation will store the value entered, in the Sale Price field,
   * into the sale item's transaction.salePrice property if the value has the
   * correct pattern, otherwise it will store NaN and outline the text field
   * with the incorrect value with red instead. */
  const amountValidation = ({value, classList}, transaction) => {
    const hasCorrectValue = !Number.isNaN(value) && value.search('[^0-9.]+') === -1;
    if(hasCorrectValue) {
      classList.remove('saleErr');
      transaction.salePrice = parseFloat(value).toFixed(2).toString();
    }
    else {
      classList.add('saleErr')
      transaction.salePrice = "NaN";
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
                    onChange={ ({target}) => amountValidation(target, transaction)
                    }/>
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
