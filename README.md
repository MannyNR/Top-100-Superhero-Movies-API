# Welcome to my IMBD's Top 100 Superhero Movies API

## The Basics

================

A JSON API following the CRUD standard, (Create Read Update Delete). Technologies used for this API were Node, MongoDB, Mongoose and Express. The API provides the [Top 100 Superhero movies according to IMDB user: dmap-161-475937](https://www.imdb.com/list/ls008583762/) (updated as of March 30, 2022).

---

## API Reference

=====================

Using a GUI program like Postman or for CLI users HTTPIE or CURL, you can create, read, update and delete documents in the database's collection.

http://localhost:3000/api/movies/

### Get **all** Movies on the list:

![alt text](./Readme%20screenshots/Get%20All.png "Get (read) all movies on the list")

---

### Create a new Movie and add to the list:

![alt text](./Readme%20screenshots/Create.png "Create a new movie document and add it to the list")

_Keep in mind there are some **required** fields to create a new movie document:_

```
{
  Position: { type: Number },
  Const: { type: String },
  Created: { type: Date },
  Modified: { type: Date },
  Title: { type: String, required: true },
  URL: { type: String, required: true },
  Title_Type: { type: String },
  IMDb_Rating: { type: Number, required: true },
  Runtime_mins: { type: Number },
  Year: { type: Number },
  Genres: { type: String },
  Num_Votes: { type: Number },
  Release_Date: { type: Date },
  Directors: { type: String },
};
```

### Let's see our newly added superhero movie:

![alt text](./Readme%20screenshots/Get%20after%20creating.png "Our newly added movie")

---

### Deleting, because 101 Dalmatians is not a superhero movie...:

![alt text](./Readme%20screenshots/Delete.png "Confirming the deletion of 101 Dalmatians")

---
---
## **Future Plans**

**_I'm looking to launch it on Heroku with more functionality, stay tuned!_**