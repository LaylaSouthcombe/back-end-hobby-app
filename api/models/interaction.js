const db = require ('../dbConfig/init')

class Interaction {
    constructor(data){
        this.id = data.id
        this.user_id = data.user_id
        this.listing_id = data.listing_id
        this.watching = data.watching
        this.messaged = data.messaged
        this.purchased = data.purchased
    }
    //shows a users interactions - link images
    static async showUsersInteractions(userId){
        return new Promise (async (resolve, reject) => {
            try {
                let interactions = await db.query(`SELECT * FROM interactions INNER JOIN listings ON interactions.listing_id = listings.id WHERE interactions.user_id = $1;`, [userId])
                resolve(interactions.rows)
            }catch(err){
                reject("Error finding users interactions");
            }
        })
    }

    static async createOrUpdateInteraction(user_id, {listing_id, watching, messaged, purchased}){
        return new Promise (async (resolve, reject) => {
            try {
                let interaction = await db.query(`SELECT * FROM interactions WHERE user_id = $1 AND listing_id = $2;`, [user_id, listing_id])
                let newInteraction
                if(interaction.rows.length){
                    let interactionsData = await db.query(`UPDATE interactions SET watching = $3, messaged = $4, purchased = $5 WHERE user_id = $1 AND listing_id = $2 RETURNING *;`, [ user_id, listing_id, watching, messaged, purchased ]);
                    newInteraction = new Interaction(interactionsData.rows[0]);
                } else if (!interaction.rows.length){
                    let interactionsData = await db.query(`INSERT INTO interactions (user_id, listing_id, watching, messaged, purchased) VALUES ($1, $2, $3, $4, $5) RETURNING *;`, [ user_id, listing_id, watching, messaged, purchased ]);
                    newInteraction = new Interaction(interactionsData.rows[0]);
                }
                resolve (newInteraction);
            } catch (err) {
                reject('Error creating interaction');
            }
        });
    }    
}

module.exports = Interaction;