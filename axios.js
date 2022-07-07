const { default: axios } = require("axios");

const data = {
  locations: [
    "27.702822,85.302397",
    "27.696537,85.326267",
  ],
  options: {
    allToAll: true,
    routeType: "fastest",
  },
};

async function get() {
  const response = await axios.post(
    "http://www.mapquestapi.com/directions/v2/routematrix?key=C0PP56BGlxvP80NvqGxz2A5rRfo3AJQD",
    data
  );
  console.log(response.data);
}

get();
