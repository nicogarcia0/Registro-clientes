const mysql = require('mysql')
const conn = mysql.createConnection({
    host: '85.208.20.226',
    user: 'adminUser',
    password: 'lb01po32',
    database: 'clientInfo',
});
    function main(){
    conn.connect();
    console.log('Conectado')
    conn.query('SELECT * FROM workersCreds', function(err, rows, fields){
        if (err) throw err;
        console.log(rows)
    })

}

main()