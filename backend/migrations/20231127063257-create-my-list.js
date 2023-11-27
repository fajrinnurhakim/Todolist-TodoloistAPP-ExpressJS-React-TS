"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("MyLists", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            title: {
                type: Sequelize.STRING,
            },
            tanggal: {
                type: Sequelize.DATE,
            },
            start_time: {
                type: Sequelize.TIME,
            },
            end_time: {
                type: Sequelize.TIME,
            },
            status: {
                type: Sequelize.BOOLEAN,
            },
            id_account: {
                type: Sequelize.INTEGER,
                references: {
                    model: "Accounts",
                    key: "id",
                },
                onUpdate: "CASCADE",
                onDelete: "CASCADE",
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable("MyLists");
    },
};