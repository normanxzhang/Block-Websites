// Get list
// Tokenize words and compare
// go to random page

let isinvalid = window.location.href.localeCompare("https://www.twitch.tv/");


if (isinvalid===0) {
    window.location.replace("https://procrastination.com/");
    console.log("Going to counter website   ")
}

/*
doesn't register clicks from twitch.tv/streamer -> twitch.tv
refreshes + direct website 
*/
// https://procrastination.com/