# Gronda Event Tracker API

## Installation

- Install NodeJS, MongoDB
- Install `npm` or `yarn`
- Rename `.env.example` to `.env`
- Edit variables in `.env`
- Run `npm install`
- Start MongoDB
- Run `yarn run dev` or `npm run dev`
- Check `http://localhost:3000/api/status` to see it works and for health check

## Database - MongoDB. Why?

- Flexibility: with mongodb its easy to store and incorporate data of any structure and allow vital adjustments of the schema without impacting performance.
- Scalability and performance: With a NoSQL database; it has been built to scale, they all include sharding - which is a method for distributing data across multiple datasets, and partitioning - breaking down data into chunks. This allows the database to scale.
- Speed - As MongoDB is a document-oriented database, it is easy to access your documents by indexing. This provides a faster query response. Some research has shown that the speed of MongoDB could be 100x faster than a relational database.


# Architecture

## Architecture Overview:
- Design pattern - Monolithic
- Programming language - JavaScript/Nodejs
- Database - MongoDB

## Architecture Details:
- Design pattern - Monolithic: a single backend codebase that will contain all the functions of the system, separated as modules but connected. E.g, event module will feed functionalities on the analytics management.

- Programming language - JavaScript/Nodejs: backend codebase will be written in Nodejs.

- Database - MongoDB: Datastore is MongoDB and indexing will be enabled to support efficient execution of DB queries.

## Architecture Diagram:
![architecture diagram](https://i.ibb.co/bKHcWVS/Screenshot-2021-02-15-at-12-59-26-PM.png)

# Routes
- POST `baseUrl/api/v1/event` - create a new event
{
    client: 'macbook pro 2020',
    receiver: 'web',
    event_name: 'loginButtonClick',
    event_identifier: Math.random().toString(36).substring(2, 15)
}

- GET `baseUrl/api/v1/analytics?` - get analytics
- params - skip = 20, limit = 10, data = count|data, client = '', event_name = ''

