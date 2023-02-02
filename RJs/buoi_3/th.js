const team = [
    {member: 'John',km: 3},
    {member: 'Jane',km: 4},
    {member: 'David',km: 5},
    {member: 'Peter',km: 2},
];
let sum = 0;
for(let {km} of team){
    sum += km
};
console.log(sum);

function tong ( a, b) {
    return a + b
}

export{ tong };