let config = {
  host : process.env.HOSTDB,
  port : process.env.PORTDB,
  user : process.env.USERDB,
  password : process.env.PASSWORD_DB,
  database : process.env.DATABASE,
};

module.exports = config;