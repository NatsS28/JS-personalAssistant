const btn=document.querySelector('.talk');
const content=document.querySelector('.content');




const greetings=[
    'Im good my dear',
    'great going',
     'oh good my love'
];

const weather=[
    'Its sunny',
    'chilly billey',
    'ahhh Sweat'
];

const magnas=[
    'Iam magnus nadraj\'s assistant',
];

const SpeechRecognition=window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition=new SpeechRecognition();

recognition.onstart = function(){
    console.log('voice is activated,you can speak boom...');
};

recognition.onresult=function(event){
    //console.log(event);
    const current =event.resultIndex;

    const transcript=event.results[current][0].transcript;
    content.textContent=transcript;
    read(transcript);

};

btn.addEventListener('click',()=>{
    recognition.start();
});

function read(transcript){
    const speech =new SpeechSynthesisUtterance();
    var voices=window.speechSynthesis.getVoices();
    speech.voice=voices[3];
    speech.text='i dont understand what u said';
    

    if(transcript.includes('how are you')){
        const final=greetings[Math.floor(Math.random()*greetings.length)];
        speech.text=final;
    }
    else if(transcript.includes('weather')){
        const final=weather[Math.floor(Math.random()*weather.length)];
        speech.text=final;
        
    }
    else if(transcript.includes('who are you'||'what are you'||'about you'||'what is your name')){
        const final=magnas[Math.floor(Math.random()*magnas.length)];
        speech.text=final;
    }
        
        
    
    
    speech.volume=1;
    speech.rate=1;
    speech.pitch=1;
   
    
    window.speechSynthesis.speak(speech);

}