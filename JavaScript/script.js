
// Game Sound Effects 
let ButtonClickSound = new Audio ('/sounds/btnclicked.mp3')
let RockSound = new Audio('/sounds/rock.mp3')
let PaperSound = new Audio('/sounds/paper.mp3')
let ScissorsSound = new Audio ('/sounds/Scissors.mp3')

// Main Game Algorithm 
document.getElementById('spinitem').addEventListener('click', ()=>{
  ButtonClickSound.play()
    document.getElementById('instruction').style.display = 'none'
    document.getElementById('finalpic').style.display = 'none'
    document.getElementById('spining').style.display = 'block'
    setTimeout(()=>{
      var select = Math.floor(Math.random() * 3);
      console.log(select)
      
      if(select == 0){
        document.getElementById('finalpic').src = '/icons/scissor.png'
        var AudioName = ScissorsSound
    }
    else if(select == 1){
      document.getElementById('finalpic').src = '/icons/paper.png'
      var AudioName = PaperSound
    }
    else if(select == 2){
      document.getElementById('finalpic').src = '/icons/Rock.png'
      var AudioName = RockSound
    }
    document.getElementById('spining').style.display = 'none'
    AudioName.play()
    document.getElementById('finalpic').style.display = 'block'
  }, 3000)
  })

  document.addEventListener('contextmenu', (e)=>{
    e.preventDefault();
  }, false)