//IIFE -- Immediately Invoked Function Expresson
// or Anonymous Self-Executing Function

(function(){
    function Start(){
        console.log("App Started!...");
    }
    window.addEventListener("load", Start);
})();