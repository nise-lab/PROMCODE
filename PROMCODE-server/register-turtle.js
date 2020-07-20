const neo4j = require("neo4j-driver");
const path = require("path");
require("dotenv").config();

const URI = process.env.SERVER_URI;
const USER = process.env.NEO4J_USER;
const PASSWORD = process.env.NEO4J_PASSWORD;

const registerTurtle = (turtle_path) => {
  const driver = neo4j.driver(URI, neo4j.auth.basic(USER, PASSWORD)); //driverの設定
  const session = driver.session(); //session生成
  const file_path = path.join(__dirname, turtle_path);

  const query = "CALL n10s.rdf.import.fetch(\"file://" + file_path + "\",\"Turtle\")";
  //const query = "CALL n10s.rdf.import.fetch(\"https://github.com/neo4j-labs/neosemantics/raw/3.5/docs/rdf/nsmntx.ttl\",\"Turtle\")"

  session
  .run(query)
  .subscribe({
    onCompleted: () => {
      console.log("completed")
      session.close();
      driver.close();
    },
    onError: error => {
      console.log(error);
      driver.close();
    }
  });
}

module.exports = registerTurtle;
