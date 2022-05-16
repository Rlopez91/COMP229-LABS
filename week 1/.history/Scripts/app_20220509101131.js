//IIFE -- Immediately Invoked Function Expresison
// or Anonymous Self-Executing Function

(function(){
    function Start(){
        console.log("App Started!...");
    }
    window.addEventListener("load", Start);
})();