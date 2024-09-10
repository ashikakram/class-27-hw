

let memberlist =["akram", "arumman","shedi","fahim","naymul","mahamudhul"]



function grattings(members){
    let utterance = new SpeechSynthesisUtterance(`welcome ${members}`);
    speechSynthesis.speak(utterance);

}
for (let i = 0; i < memberlist.length; i++) {
    grattings(memberlist[i]);
    
}

