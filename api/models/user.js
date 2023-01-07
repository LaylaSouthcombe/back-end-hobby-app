const db = require ('../dbConfig/init')

class User {
    constructor(data){
        this.id = data.id
        this.first_name = data.first_name
        this.second_name = data.second_name
        this.password_digest = data.password_digest
        this.email = data.email
        this.last_login = data.last_login
    }

    static get all() {
        return new Promise (async (resolve, reject) => {
            try {
                const usersData = await db.query(`SELECT * FROM users;`)
                const users = usersData.rows.map(d => new User(d))
                resolve(users);
            } catch (err) {
                reject("Error retrieving users")
            }
        })
    }

    static findById (id) {
        return new Promise (async (resolve, reject) => {
            try {
                let userData = await db.query(`SELECT * FROM users WHERE id = $1;`, [ id ]);
                let user = new User(userData.rows[0]);
                resolve(user);
            } catch (err) {
                reject('User not found');
            }
        });
    }

    // static findByOwner (id) {
    //     return new Promise (async (resolve, reject) => {
    //         try {
    //             let usersData = await db.query(`SELECT * FROM users WHERE ownerId = $1;`, [ id ]);
    //             const users = usersData.rows.map(d => new User(d))
    //             resolve (users);
    //         } catch (err) {
    //             reject('Error retrieving owner\'s users');
    //         }
    //     });
    // }

    static create(body){
        return new Promise (async (resolve, reject) => {
            try {
                let userData = await db.query(`INSERT INTO users (first_name, second_name, password_digest, email) VALUES ($1, $2, $3, $4) RETURNING *;`, [ body.first_name, body.second_name, body.password_digest, body.email ]);
                let newUser = new User(userData.rows[0]);
                resolve (newUser);
            } catch (err) {
                reject('Error creating user');
            }
        });
    }

    static update(id, body) {
        return new Promise (async (resolve, reject) => {
            try {
                let updatedUserData = await db.query(`UPDATE users SET age = age + 1 WHERE id = $1 RETURNING *;`, [ id ]);
                let updatedUser = new User(updatedUserData.rows[0]);
                resolve (updatedUser);
            } catch (err) {
                reject('Error updating user');
            }
        });
    }

    destroy(){
        return new Promise(async(resolve, reject) => {
            try {
                await db.query(`DELETE FROM users WHERE id = $1;`, [ this.id ]);
                resolve('User was deleted')
            } catch (err) {
                reject('User could not be deleted')
            }
        })
    }

}

module.exports = User;