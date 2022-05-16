//IIFE -- Immediately Invoked Function Expression
// or Anonymous Self-Executing Function

(function(){
    
    function Start(){
        console.log("App Started!...");
    }
    window.addEventListener("load", Start);
})();