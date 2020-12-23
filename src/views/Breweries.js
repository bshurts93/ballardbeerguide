import React from "react";
import untappdRepository from "api/untappd";
import breweryData from "constants/breweryData";
import { Input, Row, Col } from "antd";
const { Search } = Input;

class Neighborhood extends React.Component {
  state = {
    untappdData: [],
  };

  async searchBeers(beer) {
    const result = await untappdRepository.searchBeers(beer);
    console.log(result.data.response);
  }

  async searchBreweries(brewery) {
    const result = await untappdRepository.searchBreweries(brewery);
    console.log(result.data.response);
  }

  async getBallardBreweries() {
    let promises = [];
    breweryData.untappdIds.forEach((brewery) => {
      const promise = untappdRepository.getBreweryById(brewery.id);
      promises.push(promise);
    });

    Promise.all(promises).then((res) => {
      const breweryResults = res.map(
        (response) => response.data.response.brewery
      );

      this.setState({ untappdData: breweryResults });
      console.log(this.state.untappdData);
    });
  }

  componentDidMount() {
    this.getBallardBreweries();
  }

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
