
const Axios = require("axios");
const { promisify } = require("util");
const writeFile = promisify(require("fs").writeFile);

async function run() {
  const axios = Axios.create();
  const response = await axios("https://api.one-way.to/stops");
  const json = response.data.data.map(stop => [stop.id, stop.name]);
  const jsonString = JSON.stringify(json);
  await writeFile(__dirname + "/../src/Data/stops.json", jsonString);
}

run().catch(e => console.error(e));
