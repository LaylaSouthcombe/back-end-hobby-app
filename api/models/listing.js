const db = require ('../dbConfig/init')

const User = require("./user")


class Listing {
    constructor(data){
        this.id = data.id
        this.name = data.name
        this.address = data.address
    }

    static findById (id) {
        return new Promise (async (resolve, reject) => {
            try {
                let listingData = await db.query(`SELECT * FROM listings WHERE id = $1;`, [ id ]); 
                let listing = new Listing(listingData.rows[0]);
                resolve (listing);
            } catch (err) {
                reject('Listing not found');
            }
        });
    }

    get dogs(){
        return new Promise (async (resolve, reject) => {
            try {
                const dogsData = await db.query(`SELECT * FROM dogs WHERE listing_id = $1;`, [ this.id ]);
                const dogs = dogsData.rows.map(d => new Dog(d));
                resolve(dogs);
            } catch (err) {
                reject("Listing's dogs could not be found");
            };
        });
    };

}

module.exports = Listing;