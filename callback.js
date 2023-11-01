function testA(user) {
    let test = user;

    return new Promise((resolve, reject) => {
        try {
            if (test % 2 === 0) {
                resolve(test);
            } else {
                reject("Not even");
            }
        } catch(error) {
            reject(error);
        }
    });
}

// testA(1).then((value) => {
//     console.log("resolved successfully: "+ value);
// }).catch((err) => {
//     console.log(err);
// });



async function runTests() {
    try {
        let A = await testA(2);
        console.log(A);
    } catch (err) {
        console.log(err);
    }
}

runTests().then((result) => console.log(result));

