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
    //gets all the listings
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
    //creates a new listing
    static async createNewListing(userId, {title, summary, price, open_to_swaps, category_id, subcategory_id, availability, delivery, postage, collection, favourited_users,location}){
        return new Promise (async (resolve, reject) => {
            try {
                let newListing = await db.query(`INSERT INTO listings (title, summary, price, open_to_swaps, category_id, subcategory_id, user_id, availability, delivery, postage, collection, favourited_users, location) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13) RETURNING *;`, [ title, summary, price, open_to_swaps, category_id, subcategory_id, userId, availability, delivery, postage, collection, favourited_users, location])
                resolve(newListing.rows[0])
            }catch(err){
                reject("Error creating new listing");
            }
        })
    }
    //edits a listing
    static editListing(userId, id, {title, summary, price, open_to_swaps, category_id, subcategory_id, availability, delivery, postage, collection, favourited_users, location}) {
        return new Promise (async (resolve, reject) => {
            try {
                let listingToBeUpdated = await db.query('SELECT * FROM listings WHERE id = $1;', [id])
                let updatedListing
                //can only update listing if you are the owner
                if(listingToBeUpdated.rows[0].user_id === parseInt(userId)){
                    updatedListing = await db.query(`UPDATE listings SET title = $2, summary = $3, price = $4, open_to_swaps = $5, category_id = $6, subcategory_id = $7, availability = $8, delivery = $9, postage = $10, collection = $11, favourited_users = $12, location = $13 WHERE id = $1 RETURNING *;`, [ id, title, summary, price, open_to_swaps, category_id, subcategory_id, availability, delivery, postage, collection, favourited_users,location ]); 
                } else {
                    throw new Error('Only the author of the listing can edit it')
                }
                resolve(updatedListing.rows[0]);
            } catch (err) {
                reject('Listing could not be updated');
            }
        });
    }
    //shows listings that a user owns
    static showUsersListings(userId) {
        return new Promise (async (resolve, reject) => {
            try {
                let listingsData = await db.query(`SELECT * FROM listings WHERE user_id = $1;`, [ userId ]); 
                const listings = listingsData.rows.map(d => new Listing(d))
                resolve(listings);
            } catch (err) {
                reject('Users listings not found');
            }
        });
    }
    //shows listings that are in the category
    static showCategoryListings(categoryId) {
        return new Promise (async (resolve, reject) => {
            try {
                let listingsData = await db.query(`SELECT * FROM listings WHERE category_id = $1;`, [ categoryId ]); 
                const listings = listingsData.rows.map(d => new Listing(d))
                resolve(listings);
            } catch (err) {
                reject('Listings for this category not found');
            }
        });
    }
    //shows listings that are in the subcategory
    static showSubcategoryListings(subcategoryId) {
        return new Promise (async (resolve, reject) => {
            try {
                let listingsData = await db.query(`SELECT * FROM listings WHERE subcategory_id = $1;`, [ subcategoryId ]); 
                const listings = listingsData.rows.map(d => new Listing(d))
                resolve(listings);
            } catch (err) {
                reject('Listings for this subcategory not found');
            }
        });
    }
    //shows listings that are in that location
    //update to be able to include postings nearby - Google maps API?
    static showLocationListings(location) {
        return new Promise (async (resolve, reject) => {
            try {
                let listingsData = await db.query(`SELECT * FROM listings WHERE location = $1;`, [ location ]); 
                const listings = listingsData.rows.map(d => new Listing(d))
                resolve(listings);
            } catch (err) {
                reject('Listings for this location not found');
            }
        });
    }
    //shows listings that include the search term
    static searchListings(searchTerm) {
        return new Promise (async (resolve, reject) => {
            try {
                let listingsData = await db.query(`SELECT * FROM listings WHERE title ILIKE '%${searchTerm}%' OR summary ILIKE '%${searchTerm}%' OR location ILIKE '%${searchTerm}%';`); 
                const listings = listingsData.rows.map(d => new Listing(d))
                resolve(listings);
            } catch (err) {
                reject('Listing not found');
            }
        });
    }
    //not done - add in code to search for listings with highest views in last 3 days
    static showTrendingListings(id) {
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
    //not done - add in code that finds similar posts to a users views, but if no views show random posts in top 100 viewed today
    static showSuggestedListings(id) {
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
    //finds post with specific id
    static findById(id) {
        return new Promise (async (resolve, reject) => {
            try {
                let listingData = await db.query(`SELECT * FROM listings WHERE id = $1 LIMIT 1;`, [ id ]); 
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