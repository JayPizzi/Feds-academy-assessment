var database = [
    {
        username: "jugular breaker",
        password: "iwillbreakthejugular"
    },
    {
        username: "pizzi",
        password: "1234"
    },
    {
        username: "ikpe",
        password: "ikp"
    }
];

var newsFeed = [
    {
        username: "pizzi",
        timeline: "Javascript is amazing"
    },
    {
        username: "jay",
        timeline: "i'm so excited about this new journey. #learningjs #js"
    },
    {
        username: "jojo",
        timeline: "learning js requires God's strenth, determination & consistency."
    }
];

function isUserValid(username, password,){
    for(var i=0; i < database.length; i++){
        if(database[i].username === username &&
            database[i].password === password 
        ){
            return true;
        }
    }
    return false
}

function signIn(username, password,){
    if(isUserValid(username, password,)){
        console.log(newsFeed);
    }else{
        alert("Sorry, wrong username & password!")
    }
}

var userNamePrompt = prompt("What's your username?");
var passwordPrompt = prompt("What's your password?");

signIn(userNamePrompt, passwordPrompt);