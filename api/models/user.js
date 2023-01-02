const db = require ('../dbConfig/init')

class User {
    constructor(data){
        this.id = data.id
        this.name = data.name
        this.age = data.age
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
                resolve (user);
            } catch (err) {
                reject('User not found');
            }
        });
    }

    static findByOwner (id) {
        return new Promise (async (resolve, reject) => {
            try {
                let usersData = await db.query(`SELECT * FROM users WHERE ownerId = $1;`, [ id ]);
                const users = usersData.rows.map(d => new User(d))
                resolve (users);
            } catch (err) {
                reject('Error retrieving owner\'s users');
            }
        });
    }

    static create(name, age){
        return new Promise (async (resolve, reject) => {
            try {
                let userData = await db.query(`INSERT INTO users (name, age) VALUES ($1, $2) RETURNING *;`, [ name, age ]);
                let newUser = new User(userData.rows[0]);
                resolve (newUser);
            } catch (err) {
                reject('Error creating user');
            }
        });
    }

    update() {
        return new Promise (async (resolve, reject) => {
            try {
                let updatedUserData = await db.query(`UPDATE users SET age = age + 1 WHERE id = $1 RETURNING *;`, [ this.id ]);
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