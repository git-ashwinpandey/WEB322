/********************************************************************************** 
 * WEB322 – Assignment 2
 * I declare that this assignment is my own work in accordance with Seneca Academic Policy.
 * No part of this assignment has been copied manually or electronically from any other source
 * (including web sites) or distributed to other students.
 * Name: Ashwin Pandey 
 * Student ID: 156027211 
 * Date: 26th September, 2023
 * 
 *********************************************************************************/

const legoData = require("./modules/legoSets");
const express = require('express'); 

legoData.initialize();

const app = express(); 
const HTTP_PORT = process.env.PORT || 8080;


app.listen(HTTP_PORT, () => console.log(`server listening on: ${HTTP_PORT}`));

app.get('/', (req, res) => {
    res.send('Assignment 2: Ashwin Pandey - 156027211');
});

app.get('/lego/sets', async (req, res) => {
    try {
        const sets = await legoData.getAllSets();
        res.json(sets);
    } catch (error) {
        res.status(500).send('Error getting Lego sets: ' + error.message);
    }
});

app.get('/lego/sets/num-demo', async (req, res) => {
    const setNum = '001-1';
    try {
        const set = await legoData.getSetByNum(setNum);
        res.json(set);
    } catch (error) {
        res.status(404).send('Error: ' + error.message);
    }
});

app.get('/lego/sets/theme-demo', async (req, res) => {
    const theme = 'tech';
    try {
        const sets = await legoData.getSetsByTheme(theme);
        res.json(sets);
    } catch (error) {
        res.status(404).send('Error: ' + error.message);
    }
});