var Profile = require("./example_profile.js/index.js");

var student_profile = new Profile("Chalkers");

//When the JSON body is fully recieved the "end" event is
//triggered and the full body is given to the handler or callback

student_profile.on("end", console.dir);

//If a parsing, network or HTTP error occurs an error object
//is passed in to the handler or callback
student_profile.on("error", console.error);

