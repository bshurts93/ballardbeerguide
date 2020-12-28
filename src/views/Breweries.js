import React from "react";
import untappdRepository from "api/untappd";
import breweryData from "constants/breweryData";
import { Avatar, Input, Row, Col, Card } from "antd";
const { Search } = Input;
const { Meta } = Card;

class Breweries extends React.Component {
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
    // let promises = [];
    // breweryData.untappdIds.forEach((brewery) => {
    //   const promise = untappdRepository.getBreweryById(brewery.id);
    //   promises.push(promise);
    // });

    // Promise.all(promises).then((res) => {
    //   const breweryResults = res.map(
    //     (response) => response.data.response.brewery
    //   );

    //   this.setState({ untappdData: breweryResults });
    //   console.log(this.state.untappdData);
    // });
    await this.setState([{ untappdData: breweryData.placeholderBrewery }]);
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

        <Row gutter={16}>
          {this.state.untappdData.map((brewery) => {
            console.log(brewery);
            return (
              <Col span={24}>
                <Card bordered={true}>
                  <Meta
                    avatar={
                      <Avatar
                        src={brewery.brewery_label}
                        shape="square"
                        size={64}
                      />
                    }
                    title={brewery.brewery_name}
                    description={brewery.brewery_description}
                  />
                </Card>
              </Col>
            );
          })}
        </Row>
      </div>
    );
  }
}

export default Breweries;
