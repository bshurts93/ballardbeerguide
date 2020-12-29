import React from "react";
import untappdRepository from "api/untappd";
import breweryData from "constants/breweryData";
import { Link } from "react-router-dom";
import { Avatar, Button, Collapse, Row, Col, Skeleton } from "antd";

const { Panel } = Collapse;

class Breweries extends React.Component {
  state = {
    untappdData: [],
  };

  async getBallardBreweries() {
    //   TODO: remove comments to use API

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

    setTimeout(() => {
      this.setState({ untappdData: breweryData.placeholderBreweries });
      console.log(this.state);
    }, 1000);
  }

  componentDidMount() {
    this.getBallardBreweries();
  }

  render() {
    let breweryPanels;
    if (this.state.untappdData.length) {
      breweryPanels = this.state.untappdData.map((brewery) => {
        return (
          <Panel
            header={
              <Row className="brewery-expand__header">
                <Col>
                  <Avatar shape="square" src={brewery.brewery_label} />
                </Col>
                <Col>
                  <h1 className="brewery-expand__title">
                    {brewery.brewery_name}
                  </h1>
                </Col>
              </Row>
            }
            key={brewery.brewery_id}
          >
            <Row style={{ paddingBottom: 20 }}>
              {brewery.brewery_description}
            </Row>
            <Row>
              <Link to={`/${brewery.brewery_id}/${brewery.brewery_slug}`}>
                <Button block type="primary">
                  Check it out
                </Button>
              </Link>
            </Row>
          </Panel>
        );
      });
    } else {
      breweryPanels = Array.apply(null, { length: 10 }).map((x) => {
        return (
          <Panel
            showArrow={false}
            header={<Skeleton active avatar paragraph={{ rows: 0 }} />}
          ></Panel>
        );
      });
    }

    return (
      <div className="breweries">
        <Collapse bordered={false} accordion>
          {breweryPanels}
        </Collapse>
      </div>
    );
  }
}

export default Breweries;
