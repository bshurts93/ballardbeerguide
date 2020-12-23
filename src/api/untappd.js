import http from "utils/http";
import queryStringBuilder from "utils/queryStringBuilder";
const baseURL = "https://api.untappd.com/v4";
let queryParams = {
  client_id: process.env.REACT_APP_CLIENT_ID,
  client_secret: process.env.REACT_APP_CLIENT_SECRET,
};

const untappdRepository = {
  searchBeers: async (beerName) => {
    queryParams.q = beerName;
    const queryString = queryStringBuilder(queryParams);
    const url = `${baseURL}/search/beer${queryString}`;
    const options = {
      method: "get",
      url: url,
    };

    return await http(options);
  },
  searchBreweries: async (breweryName) => {
    queryParams.q = breweryName;
    const queryString = queryStringBuilder(queryParams);
    const url = `${baseURL}/search/brewery${queryString}`;
    const options = {
      method: "get",
      url: url,
    };

    return await http(options);
  },
  getBreweryById: async (id) => {
    const queryString = queryStringBuilder(queryParams);
    const url = `${baseURL}/brewery/info/${id}${queryString}`;
    const options = {
      method: "get",
      url: url,
    };

    return await http(options);
  },
};

export default untappdRepository;
