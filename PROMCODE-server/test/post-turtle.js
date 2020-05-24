neo4j = require("neo4j-driver");

const uri = "bolt://localhost";
const user = "*****";
const password = "*****";

const driver = neo4j.driver(uri, neo4j.auth.basic(user, password)); //driverの設定
const session = driver.session(); //session生成

const query = "CALL semantics.importRDF(\"http://localhost:3000/neo4j-sample.ttl\",\"Turtle\")";
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
