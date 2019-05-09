import './SalesApp.css';

import React, {Component} from 'react';
import {Tabs, Tab} from 'react-bootstrap';
import axios from 'axios';

import OpenSales from './OpenSales';
import AcceptedSales from './AcceptedSales';
import SoldSales from './SoldSales';

class SalesViews extends Component {
  state = { sales: [] };

  /* Once the component is mounted, an axios request will be sent to recieve
   * the sample sales given; they will be stored in the SalesViews component state. */
  componentDidMount = async () => {
    const {data} = await axios.get('http://localhost:8000/sampleSales');
    this.setState({ sales: data });
  }

  /* onSaleAccepted will update the state of the SalesViews component to
   * reflect any changes made to an open sale (open to accepted), shown
   * in the OpenSales component. */
  onSaleAccepted = acceptedSale => {
    const updatedState = this.state.sales.map((item) => {
      if(item.name === acceptedSale.name) {
        return acceptedSale;
      }
      return item;
    });
    this.setState({ sales: updatedState });
  }

  /* onSaleSold will update the state of the SalesViews component to
   * reflect any changes made to an accepted sale (accepted to sold), shown
   * in the AcceptedSales component. */
  onSaleSold = soldSale => {
    const updatedState = this.state.sales.map((item) => {
      if(item.name === soldSale.name) {
        return soldSale;
      }
      return item;
    });
    this.setState({ sales: updatedState });
  }

  /* populateOpenList creates a list of sales that have an open state,
   * from the total sample sales given. */
  populateOpenList = () => {
    return this.state.sales.filter((item) => {
      if(item.status === "Open") {
        return item;
      }
      return null;
    });
  }

  /* populateAcceptedList creates a list of sales that have an accepted state,
   * from the total sample sales given. */
  populateAcceptedList = () => {
    return this.state.sales.filter((item) => {
      if(item.status === "Accepted") {
        return item;
      }
      return null;
    });
  }

  /* populateSoldList creates a list of sales that have a sold state,
   * from the total sample sales given. */
  populateSoldList = () => {
    return this.state.sales.filter((item) => {
      if(item.status === "Sold") {
        return item;
      }
      return null;
    });
  }

  render() {
    return(
      <div>
        <Tabs defaultActiveKey="Open" id="uncontrolled-tab-example">
          <Tab eventKey="Open" title="Open">
            <OpenSales openSale={ this.populateOpenList() }
              onSaleAccepted={this.onSaleAccepted}/>
          </Tab>
          <Tab eventKey="Accepted" title="Accepted">
            <AcceptedSales acceptedSale={ this.populateAcceptedList() }
              onSaleSold={this.onSaleSold}/>
          </Tab>
          <Tab eventKey="Sold" title="Sold">
            <SoldSales soldSale={ this.populateSoldList() } />
          </Tab>
        </Tabs>
      </div>
    );
  }
}

export default SalesViews;
