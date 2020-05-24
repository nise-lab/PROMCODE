neo4j = require("neo4j-driver");
require("dotenv").config();

const uri = process.env.SERVER_URI;
const user = process.env.NEO4J_USER;
const password = process.env.NEO4J_PASSWORD;

const driver = neo4j.driver(uri, neo4j.auth.basic(user, password)); //driverの設定
const session = driver.session(); //session生成

const query = "CALL semantics.importRDF(\"" + process.env.TURTLE_URI + "\",\"Turtle\")";
//const query = "CALL semantics.importRDF(\"https://github.com/neo4j-labs/neosemantics/raw/3.5/docs/rdf/nsmntx.ttl\",\"Turtle\")";

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
