const mysql = require('mysql')
const config = require('../../config/config-db-mysql')
let connection = mysql.createConnection(config)

class userDao {

    checkstatus(){
        console.log(connection)
    }
    
    addUser(user) {
        let sql = `insert into users (idGoogle,nombre,correo,fotos) values ('${user.id}','${user.nombre}','${user.correo}','${user.foto}')`
        console.log(sql)
        connection.query(sql);
        connection.end()
        return 'exitoso'
    }

    deleteUser() { //altgr + comilla inbertida
        console.log("en proceso");
    }

}

module.exports = userDao;