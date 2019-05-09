import React, {Component} from 'react';
import {Tabs, Tab} from 'react-bootstrap';
import axios from 'axios';

import OpenSales from './OpenSales';
import AcceptedSales from './AcceptedSales';
import SoldSales from './SoldSales';

class SalesViews extends Component {
  state = { sales: [] };

  componentDidMount = async () => {
    const {data} = await axios.get('http://localhost:8000/sampleSales');
    this.setState({ sales: data });
  }

  // Will update state of all sales when a sale goes from open to accepted state
  onSaleAccepted = (acceptedSale) => {
    const updatedState = this.state.sales.map((item) => {
      if(item.name === acceptedSale.name) {
        return acceptedSale;
      }
      return item;
    });
    this.setState({ sales: updatedState });
  }

  onSaleSold = (soldSale) => {
    const updatedState = this.state.sales.map((item) => {
      if(item.name === soldSale.name) {
        return soldSale;
      }
      return item;
    });
    this.setState({ sales: updatedState });
  }

  // Creates an array of sales that are open, from the total sample sales given
  populateOpenList = () => {
    return this.state.sales.filter((item) => {
      if(item.status === "Open") {
        return item;
      }
      return null;
    });
  }

  populateAcceptedList = () => {
    return this.state.sales.filter((item) => {
      if(item.status === "Accepted") {
        return item;
      }
      return null;
    });
  }

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
