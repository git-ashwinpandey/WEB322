/********************************************************************************** 
 * WEB322 – Assignment 1
 * I declare that this assignment is my own work in accordance with Seneca Academic Policy.
 * No part of this assignment has been copied manually or electronically from any other source
 * (including web sites) or distributed to other students.
 * Name: Ashwin Pandey 
 * Student ID: 156027211 
 * Date: 15th September, 2023
 * 
 *********************************************************************************/

const readline = require('readline');
const fs = require('fs');
const rl = readline.createInterface(process.stdin, process.stdout);

rl.question('Do you want to read a File(F) or Directory(D)? ', function(searchOption) {
    if (searchOption.toUpperCase() === 'F') {
        rl.question('File: ', function(fileName) {
            fs.readFile(fileName, function(err, fileData) {
                if (err) {
                    console.log(err.message)
                }
                else { 
                    textString = fileData.toString().replace(/\s+/g, ' ');
                    textArray = textString.replace(/[^\w\s\']/g, "").split(" ");
                    var longestWord;
                    var length = 0
                    const findLongest = textArray.map(word => {
                        if (word.length > length) {
                            length = word.length;
                            longestWord = word;
                        }
                    });
                    let tempSet = new Set(textArray);
                    let mostFreq = 0;
                    let mostFreqWord;
                    tempSet.forEach((word) => {
                        let counter = textArray.filter((element) => element === word).length;
                        if (mostFreq < counter) {
                            mostFreq = counter;
                            mostFreqWord = word;
                        }
                    });
                    console.log("Number of Characters (including spaces): " + textString.length);
                    console.log("Number of Words: " + textArray.length);
                    console.log("Longest Word: " + longestWord);
                    console.log("Most Repeated Word: " + mostFreqWord + " - " + mostFreq + " times");
                }
            })
            rl.close();
        });
        
    } else if (searchOption.toUpperCase() === 'D') {
        rl.question('Directory: ', function(directory) {
            fs.readdir(directory, function(err, filesArray) {
                if (err) {
                    console.log(err.message)
                } else {
                    reverseArray = filesArray.reverse();
                    reverseArrayString = filesArray.sort().reverse().join(', ');
                    console.log('Files (reverse alphabetical order): ' + reverseArrayString);
                    reverseArray.forEach(file => {
                        let filePath = directory+"/"+file;
                        fs.stat(filePath, function(err, stats) {
                            if (err) {
                                console.log(err.message);
                            } else {
                                console.log(file + ": " + stats.size + " bytes");
                            }
                        });
                    })
                }
            })
            rl.close();
        });
    } else {
        console.log("Invalid Choice");
        rl.close();
    }
});




