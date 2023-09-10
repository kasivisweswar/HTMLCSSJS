//3.Transfer
//break and continue
for (var i = 0; i < 10; i++) {
    if (i == 5) {
        break //stops the iteration
    }
    console.log(i)
}
console.log()

for (var i = 0; i < 10; i++) {
    if (i == 5) {
        continue //skips the iteration 
        //skips the condition number we've given
    } console.log(i)
}