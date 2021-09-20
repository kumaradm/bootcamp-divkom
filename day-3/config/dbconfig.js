module.exports = {
  HOST: "localhost",
  USER: "root",
  PASSWORD: "MySQL112354.",
  DB: "day3",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
