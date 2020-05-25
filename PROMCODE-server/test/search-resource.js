neo4j = require("neo4j-driver");
require("dotenv").config();

const uri = process.env.SERVER_URI;
const user = process.env.NEO4J_USER;
const password = process.env.NEO4J_PASSWORD;

const driver = neo4j.driver(uri, neo4j.auth.basic(user, password)); //driverの設定
const session = driver.session(); //session生成

var query = "MATCH (p:Person) RETURN p.name AS name"; //query生成

session
.run(query)
.subscribe({
  onKeys: keys => {
    console.log(keys);
  },
  onNext: record => { //返り値recordを順次処理
    console.log(record.get('name'));
  },
  onCompleted: () => {
    session.close();
    driver.close();
  },
  onError: error => {
    console.log(error);
    driver.close();
  }
});
