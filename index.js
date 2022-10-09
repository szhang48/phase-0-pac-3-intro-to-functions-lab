function shout(string) {
    return string.toUpperCase();
}
function whisper(string) {
    return string.toLowerCase();
}
function logShout(string) {
   console.log(string);
   console.log(string.toUpperCase());
}
function logWhisper(string) {
    console.log(string);
    console.log(string.toLowerCase());
}
function sayHiToHeadphonedRoommate(string) {
    const cantanswer = "I can't hear you!";
    const yesanswer = "YES INDEED!";
    const loveanswer = "I would love to!";
    
    if (string.toLowerCase(string) === string){
        return cantanswer;
    }
    else if (string.toUpperCase(string) === string){
        return yesanswer;
    }
    else if ("Lets have dinner together!") {
        return loveanswer;
    }

}