module.exports = (sequelize, Sequelize) => {
  const Elektro = sequelize.define("elektro", {
    matkul: {
      type: Sequelize.STRING,
    },
    dosen: {
      type: Sequelize.STRING,
    },
  });

  return Elektro;
};
