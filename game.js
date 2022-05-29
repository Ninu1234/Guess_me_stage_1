
let words = [
    {
        "inputs": 5,
        "category": "Sports",
        "word": "Chess"
    },
    {
        "inputs": 6,
        "category": "European Country Name",
        "word": "France"
    },
    {
        "inputs": 7,
        "category": "Outdoor Game",
        "word": "Cricket"
    },
    {
        "inputs": 8,
        "category": "Indoor Game",
        "word": "billiards"
    },

]

$(document).ready(function () {
    fillBlanks();
})

function fillBlanks() {
    //Select a random word
    const randomWord = words[Math.floor(Math.random() * words.length)];

    //Make sure blanks are empty to begin with
    $("#blanks").empty();

    //Show blanks uisng <span>
    for (let i = 0; i < randomWord.inputs; i++) {
        let input_html = `<span class="fill_blanks" id="input_${i}">_</span>`
        $("#blanks").append(input_html)
    }

    //Show Hint
    $("#hint").html(randomWord.category)

    var gameOver=false
    
     $('.clickable').click(function(){
         var correct_guess = false
         var id = $(this).attr('id')
         var life = parseInt($('#life').text())
         for(var i = 0;i<randomWord.word.length;i++){
             if (randomWord.word.charAt(i).toLowerCase() == id){
                 if(life>0 && ($('.fill_blanks').eq(i).html()=='_' || $('.fill_blanks').eq(i).html() == id)){
                     $('.fill_blanks').eq(i).html(id)
                     correct_guess = true
                     if($('#blanks').text()==randomWord.word.toLowerCase()){
                         $('#result').text('YOU WIN')
                         correct_guess = true
                         gameOver = true
                     }
                 }
             }
         } 
     
       
        if (life > 0 && correctGuess!=true && gameOver!=true) {           
            life = life - 1
            $("#life").text(life)
        }
        else if (life == 0) {
            $("#result").text("You Lost!!")
        }
    })
}

    
