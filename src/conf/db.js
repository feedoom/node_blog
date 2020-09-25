const env = process.env.NODE_ENV;
// 配置
let MYSQL_CONF = {
  host: "localhost",
  user: "root",
  password: "5656",
  port: "3306",
  database: "jsblob",
};
let REDIS_CONF = {
  port: 6379,
  host: "127.0.0.1",
};

// if (env === "dev") {
//   MYSQL_CONF = {
//     host: "localhost",
//     user: "root",
//     password: "56565656",
//     port: "3306",
//     database: "jsblob",
//   };
//   REDIS_CONF = {
//     port: 6379,
//     host: "127.0.0.1",
//   };
// }
// if (env === "procuction") {
//   MYSQL_CONF = {
//     host: "localhost",
//     user: "root",
//     password: "56565656",
//     port: "3306",
//     database: "jsblob",
//   };
//   REDIS_CONF = {
//     port: 6379,
//     host: "127.0.0.1",
//   };
// }

module.exports = {
  MYSQL_CONF,
  REDIS_CONF,
};
