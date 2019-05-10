var Profile = require("./profile.js");


// Handle HTTP route GET / and / POST i.e Home
function home(request, response) {
    //if url == "/" && GET
    if (request.url === '/') {
        //Show search
        response.writeHead(200, {'COntent-Type': 'text/plain'});
        response.write("Header\n");
        response.write("Search\n");
        response.end('Footer\n');
    }
    //if url == "/" && POST
        //redirect to /:username
}
    

// Handle HTTP route GET /:username i.e /izzy
function user(request, response) {   
    //if url == "/...."
    var username = request.url.replace("/", "");
    if (username.length > 0) {
        response.writeHead(200, {'COntent-Type': 'text/plain'});
        response.write("Header\n");

        //get json from treehouse
        var student_profile = new Profile(username);
        //on "end"
        student_profile.on("end", function(profileJSON){
            //show profile

            //store the values which we need
            var values = {
                avatarUrl: profileJSON.gravatar_url,
                username: profileJSON.profile_name,
                badges: profileJSON.badges.length,
                javascriptPoints: profileJSON.points.JavaScript
            }
            // simple response
            response.write(values.username + "has" + values.badges + "badges\n");
            response.end('Footer\n');
        });
        //on "error"   
        student_profile.on("error", function(error){
            //show error
            response.write(error.message + "\n");
            response.end('Footer\n');
        });
     
    }
}

module.exports.home = home;
module.exports.user = user;


