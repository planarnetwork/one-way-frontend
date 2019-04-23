
const Axios = require("axios");
const { promisify } = require("util");
const writeFile = promisify(require("fs").writeFile);

async function run() {
  const axios = Axios.create();
  const response = await axios("http://localhost:8008/stops");
  const json = response.data.data.map(stop => [stop.id, stop.name || stop.description]);
  const jsonString = JSON.stringify(json);
  await writeFile(__dirname + "/../src/Data/stops.json", jsonString);
}

run().catch(e => console.error(e));
