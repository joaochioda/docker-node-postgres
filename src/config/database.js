module.exports = {
    dialect: 'postgres',
    host: 'db',
    username: 'docker',
    password: '123456',
    database: 'docker',
    define: {
        timestamps: true,
        underscored: true,
    }
}