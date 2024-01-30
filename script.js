const btn = document.getElementById('btn');

// btn.addEventListener('click', ()=>{
//     let textSpeak = "hello sir, how can i help you?"
//     let speakData = new SpeechSynthesisUtterance();
//     speakData.volume = 1;
//     speakData.rate = 0.7;
//     speakData.text = textSpeak;
    
//     speechSynthesis.speak(speakData)
// })

btn.addEventListener('click', ()=>{

    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition);
    recognition.onstart = function(){
        console.log('speech start');
    };
    recognition.start()

    recognition.onresult = function(event){
        const transcript = event.results[0][0].transcript;
        console.log(transcript.includes('hey'))
    }
})

