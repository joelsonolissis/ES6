let loggedIn = false;
function callIfAuthenticated(fn){
    return !!loggedIn && fn();
}

function SUM(a,b){
return a + b;
}

console.log(callIfAuthenticated(() => SUM(2, 3)));
loggedIn = true;
console.log(callIfAuthenticated(() => SUM(2, 3)));
