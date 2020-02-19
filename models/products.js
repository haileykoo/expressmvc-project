const product = 
{


    fakeDB : [],

    init() 
    {
        // fake data should be included
        // this.fakeDB.push ()

    },
    getAllProducts()
    {
        return this.fakeDB;

    }



}

// call init function
product.init()

// to make this file to be imported by other js files
module.exports = product; 