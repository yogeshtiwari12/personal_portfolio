import React from 'react';
const mongoose = require('mongoose');
const http = require('http');
const express = require('express');

function Authentication() {
    const app = express();
    const server = http.createServer(app);

    
    mongoose.connect("mongodb://localhost:27017/mydb", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Connection established to MongoDB...");
    })
    .catch(err => {
        console.log("Something went wrong with MongoDB connection: ", err);
    });

    const userschema = new mongoose.Schema({
        name: String,
        roll: Number,
        course: String
    });

    const model = mongoose.model('User', userschema);

    app.use(express.json());

    async function getData(rollNumber, course_) {
        try {
            const data = await model.findOne({ roll: rollNumber, course: course_ });
            if (data) {
                console.log("User data with roll number is:", data);
            } else {
                console.log("User Not Found");
            }
        } catch (error) {
            console.log("Server error", error);
        }
    }

    getData(21, "btech cs");

    server.listen(3000, () => {
        console.log("Server is running at port 3000");
    });

    return (
        <div>
            {/* Your React component JSX goes here if needed */}
        </div>
    );
}

export default Authentication;
