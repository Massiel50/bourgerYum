var connection = require("../config/connection");

// kinda stringifying question marks in an array

function printQuestionMarks(num) {
    var arr = []

    for (var i =0; i < num; i++){
        arr.push("?");
    }
    return arr.toString();
}

// converts into mysql syntax
function objToSql (ob) {
    var arr = [];

    for (var key in ob) {
        var value = ob[key];

        if (Object.hasOwnProperty.call(ob, key)){
            if (typeof value === "string" && value.indeedof(" ") >= 0) {
                value = "'" + value + "'";
            }
            arr.push(key + "=" + value);
        }
    }

    return arr.toString();
}

let orm = function(tableInput, cb) {
    let queryString = "SELCT * FROM " + tableInput + ";";
    connection.query(queryString, function(err, result){
        if(err) {
            throw err;
        }
        cb(result);
    });
},
create: function(table, cols, vals, cb){
    var queryString = "INSERT INTO " + table;

    queryString += "(";
    queryString += cols.toString();
    queryString += ") ";
    queryString += "VALUES (";
    queryString += print
}