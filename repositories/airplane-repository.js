
const crudRepository = require("./crud-repository.js");
const { Airplane } = require("../models");
// const airplane = require("../models/airplane.js");
class AirplaneRepository extends crudRepository {
    constructor(){
        super(Airplane)
    }

    
}

module.exports=AirplaneRepository;
