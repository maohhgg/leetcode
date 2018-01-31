/**
 * @param {number} n
 * @return {number}
 */
var climbStairsX = function(n) {
    if(n == 1) return 1;
    if(n == 2) return 2;
    return climbStairs(n-1) + climbStairs(n-2); 
 }; 

var climbStairs = function(n) {
   var mem = [0,1,2,3];
   if(n <= 3){
       return mem[n];
   }
   for (var i = 3; i <= n; i++) {
       mem[i] = mem[i-1] + mem[i-2];
   }
   return mem[n];
}; 
console.log(climbStairs(9));