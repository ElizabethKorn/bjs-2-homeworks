function compareArrays(arr1, arr2) {
    return arr1.length === arr2.length && arr1.every((item, index) => item === arr2[index]);   
}

function getUsersNamesInAgeRange(users, gender) {
    let result = users.filter(user => user.gender === gender).
    map(user => user.age).
    reduce((acc, age, index,arr) => {
        let sum = acc + age;
        if (index === arr.length - 1) {
            return sum / arr.length;
        }
        return sum;
        }, 0);
    return result;
}