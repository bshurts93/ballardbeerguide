import React from "react";
import breweryData from "constants/breweryData";
import untappdRepository from "api/untappd";

class About extends React.Component {
  state = {
    brewery: {},
  };
  async componentDidMount() {
    //   TODO: remove comments to use API
    // const { id } = this.props.match.params;
    // const response = await untappdRepository.getBreweryById(id);
    // this.setState({ brewery: response.data.response.brewery });

    setTimeout(() => {
      this.setState({ brewery: breweryData.placeholderBreweries[0] });
      console.log(this.state);
    }, 1000);
  }

  render() {
    return (
      <div className="about-container">
        <h1 className="about-title">{this.state.brewery.brewery_name}</h1>
      </div>
    );
  }
}

export default About;
