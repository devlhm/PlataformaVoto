module.exports = (sequelize, DataTypes) => {
	const Propostas = sequelize.define("Propostas", {
		titulo: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				notEmpty: true,
			},
		},
		conteudo: {
			type: DataTypes.TEXT,
			allowNull: false,
			validate: {
				notEmpty: true,
			},
		},
		autor: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				notEmpty: true,
			},
		},
		score: {
			type: DataTypes.INTEGER,
			allowNull: true,
			defaultValue: 0
		},
	});

	return Propostas;
};
