// Immediate Functions

// (function(){

// })();

// (function(){

// }());


(function(name){
    var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    var today =new Date();
    var msg = 'Welcome ' +name+ ' Today is '+days[today.getDay()];
    console.log(msg);
}('Çınar'));


(function(name){
    var day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var today = new Date();
    var msg = "Welcome " + name + " Today is "  + day[today.getDay()]
    console.log(msg);
}("Halit"));
