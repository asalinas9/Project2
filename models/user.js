module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
        username: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [1]
        },
        password: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [1]
        }
    });
    return User;
};