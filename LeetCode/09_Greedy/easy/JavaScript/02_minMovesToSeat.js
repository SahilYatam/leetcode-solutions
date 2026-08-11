// 2037. Minimum Number of Moves to Seat Everyone


/**
 * @param {number[]} seats
 * @param {number[]} students
 * @return {number}
 */
var minMovesToSeat = function(seats, students) {
    let sortedSeats = seats.sort((a, b) => a-b)
    let sortedStudents = students.sort((a, b) => a-b)

    let distance = []
    let total = 0

    for(let i = 0; i < sortedSeats.length; i++){
        distance.push(Math.abs(sortedSeats[i] - sortedStudents[i]))
    }

    for(let sum of distance){
        total += sum
    }

    return total
};

let seats = [3,1,5], students = [2,7,4]
// Output: 4

// let seats = [4,1,5,9], students = [1,3,2,6]
// Output: 7

// let seats = [2,2,6,6], students = [1,3,2,6]
// Output: 4

console.log(minMovesToSeat(seats, students));
