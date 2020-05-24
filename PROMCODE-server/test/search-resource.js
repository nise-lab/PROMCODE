neo4j = require("neo4j-driver");

const uri = "bolt://localhost";
const user = "*****";
const password = "*****";

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
