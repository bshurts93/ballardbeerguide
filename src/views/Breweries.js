import untappdRepository from "api/untappd";
import React from "react";
import { Input, Row, Col } from "antd";
const { Search } = Input;

class Neighborhood extends React.Component {
  async searchBeers(beer) {
    const result = await untappdRepository.searchBeers(beer);
    console.log(result.data.response);
  }

  async searchBreweries(brewery) {
    const result = await untappdRepository.searchBreweries(brewery);
    console.log(result.data.response);
  }

  async getBallardBreweries() {}

  render() {
    return (
      <div className="breweries">
        <Search placeholder="Search Beers" onSearch={this.searchBeers} />
        <Search
          placeholder="Search Breweries"
          onSearch={this.searchBreweries}
        />
      </div>
    );
  }
}

export default Neighborhood;
