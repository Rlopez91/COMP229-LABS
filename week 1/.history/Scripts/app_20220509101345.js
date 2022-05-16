//IIFE -- Immediately Invoked Function Expreson
// or Anonymous Self-Executing Function

(function(){
    function Start(){
        console.log("App Started!...");
    }
    window.addEventListener("load", Start);
})();