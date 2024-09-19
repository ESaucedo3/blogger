export class Account {

  constructor({ id, email, name, picture }) {
    this.id = id;
    this.email = email;
    this.name = name;
    this.picture = picture;
    // TODO add additional properties if needed
    this.coverImg = data.coverImg
    this.github = data.github
    this.linkedin = data.linkedin
    this.graduated = data.graduated
    this.signedUp = new Date(data.createdAt)
  }
}

const data = {
  "_id": "66d930a9e1dd5e2973c93c74",
  "subs": [
    "auth0|66d930a881493f68bd8ef5c2"
  ],
  "email": "rat@rat.com",
  "name": "rat",
  "picture": "https://s.gravatar.com/avatar/2f1290e0bfc81bc195f0ef38446f3642?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fra.png",
  "bio": "",
  "coverImg": "https://images.unsplash.com/photo-1586829135343-132950070391?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80",
  "github": "",
  "linkedin": "",
  "resume": "",
  "class": "",
  "graduated": false,
  "createdAt": "2024-09-05T04:16:58.517Z",
  "updatedAt": "2024-09-05T04:16:58.517Z",
  "__v": 0,
  "id": "66d930a9e1dd5e2973c93c74"
}