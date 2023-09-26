const setData = require("../data/setData");
const themeData = require("../data/themeData");

var sets = [];

function initialize() {
    return new Promise((resolve, reject) => {
        try {
            setData.forEach(element => {
                let t_sets;
                let result = themeData.find((theme) => {
                    return theme.id === element.theme_id;
                });
                t_sets = element;
                t_sets.theme = result.name;
                sets.push(t_sets);
            });
            resolve(); // Resolve with no data once the operation is complete
        } catch (error) {
            reject(error); // Reject with an error message if an error occurs
        }
    });
}

function getAllSets() {
    return new Promise((resolve, reject) => {
        try {
            resolve(sets); // Resolve with the completed "sets" array
        } catch (error) {
            reject(error);
        }
    });
}

function getSetByNum(setNum) {
    return new Promise((resolve, reject) => {
        try {
            const result = sets.find((set) => set.set_num === setNum);
            if (result) {
                resolve(result); // Resolve with the found "set" object
            } else {
                reject("Unable to find requested set"); // Reject if the set was not found
            }
        } catch (error) {
            reject(error);
        }
    });
}

function getSetsByTheme(theme) {
    return new Promise((resolve, reject) => {
        try {
            const themeLower = theme.toLowerCase();
            const matchingSets = sets.filter((set) => set.theme.toLowerCase().includes(themeLower));
            if (matchingSets.length > 0) {
                resolve(matchingSets); // Resolve with the found "set" objects
            } else {
                reject("Unable to find requested sets"); // Reject if no sets were found
            }
        } catch (error) {
            reject(error);
        }
    });
}

module.exports = { initialize, getAllSets, getSetByNum, getSetsByTheme };
