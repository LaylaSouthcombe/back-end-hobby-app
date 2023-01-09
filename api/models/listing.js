const db = require ('../dbConfig/init')

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
        this.delivery = data.delivery
        this.postage = data.postage
        this.collection = data.collection
        this.favourited_users = data.favourited_users
        this.location = data.location
    }

    static get all() {
        return new Promise (async (resolve, reject) => {
            try {
                const listingsData = await db.query(`SELECT * FROM listings;`)
                const listings = listingsData.rows.map(d => new Listing(d))
                resolve(listings);
            } catch (err) {
                reject("Error retrieving listings")
            }
        })
    }

    static async createNewListing(userId, {title, summary, price, open_to_swaps, category_id, subcategory_id, availability, delivery, postage, collection, location}){
        return new Promise (async (resolve, reject) => {
            try {
                let newListing = await db.query(`INSERT INTO listings (title, summary, price, open_to_swaps, category_id, subcategory_id, user_id, availability, delivery, postage, collection, location) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12) RETURNING *;`, [ title, summary, price, open_to_swaps, category_id, subcategory_id, userId, availability, delivery, postage, collection, location])
                resolve(newListing.rows[0])
            }catch(err){
                reject("Error creating new listing");
            }
        })
    }
//not done
    static editListing(id) {
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
//not done
static showUsersListing(id) {
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
//not done
static showCategoryListing(id) {
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
//not done
static showLocationListing(id) {
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
//not done
static searchListing(id) {
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
//not done
static showTrendingListing(id) {
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
//not done
static showSuggestedListing(id) {
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

//  showCategoryListing, showLocationListing, searchListing, showTrendingListing, showSuggestedListing


module.exports = Listing;