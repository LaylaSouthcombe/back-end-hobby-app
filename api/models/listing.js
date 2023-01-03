const db = require ('../dbConfig/init')

const User = require("./user")


class Listing {
    constructor(data){
        this.id = data.id
        this.title = data.title
        this.summary = data.summary
        this.price = data.price
        this.open_to_swaps = data.open_to_swaps
        this.category_id = data.category_id
        this.subcategory_id = data.subcategory_id
        this.user_id = data.user_id
        this.date_posted = data.date_posted
        this.availability = data.availability
        this.delivery_pickup = data.delivery_pickup
        this.favourited_users = data.favourited_users
        this.location = data.location
    }

    static findById(id) {
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
}

module.exports = Listing;