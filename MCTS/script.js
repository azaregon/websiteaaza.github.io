sentence_array = [
    "The quick brown fox jumps over the lazy dog$",
    'The waitress was not amused when he ordered green eggs and ham.',
    'She is never happy until she finds something to be unhappy about; then, she is overjoyed.',
    'He wondered why at 18 he was old enough to go to war, but not old enough to buy cigarettes.',
    'The elderly neighborhood became enraged over the coyotes who had been blamed for the poodle’s disappearance.',
    'Thirty years later, she still thought it was okay to put the toilet paper roll under rather than over.',
    'A good example of a useful vegetable is medicinal rhubarb.', "He was the only member of the club who didn't like plum pudding.", 
    'All she wanted was the answer, but she had no idea how much she would hate it.',
    'Pair your designer cowboy hat with scuba gear for a memorable occasion.',
    'He liked to play with words in the bathtub.',
    'He drank life before spitting it out.', "It turns out you don't need all that stuff you insisted you did.", 
    'Nothing seemed out of place except the washing machine in the bar.',
    'There were white out conditions in the town; subsequently, the roads were impassable.',
    'He found the end of the rainbow and was surprised at what he found there.',
    'That was how he came to win $1 million.',
    'Green should have smelled more tranquil, but somehow it just tasted rotten.',
    'Wisdom is easily acquired when hiding under the bed with a saucepan on your head.', 
    "You can't compare apples and oranges, but what about bananas and plantains?", 
    'He had a wall full of masks so she could wear a different face every day.',
    'They throw cabbage that turns your brain into emotional baggage.',
    'He would only survive if he kept the fire going and he could hear thunder in the distance.', 
    "The llama couldn't resist trying the lemonade.", 'He created a pig burger out of beef.',
    'He found his art never progressed when he literally used his sweat and tears.',
    'Jason didn’t understand why his parents wouldn’t let him sell his little sister at the garage sale.',
    'Lightning Paradise was the local hangout joint where the group usually ended up spending the night.', 
    "There's a growing trend among teenagers of using frisbees as go-cart wheels.", 
    'A kangaroo is really just a rabbit on steroids.',
    'The sky is clear; the stars are twinkling.',
    'The view from the lighthouse excited even the most seasoned traveler.', 
    "He was 100% into fasting with her until he understood that meant he couldn't eat.", 
    'Poison ivy grew through the fence they said was impenetrable.',
    'Some bathing suits just shouldn’t be worn by some people.',
    'There can never be too many cherries on an ice cream sundae.',
    '8% of 25 is the same as 25% of 8 and one of them is much easier to do in your head.',
    'People who insist on picking their teeth with their elbows are so annoying!',
    'She saw the brake lights, but not in time.',
    'It dawned on her that others could make her happier, but only she could make herself happy.',
    'He was willing to find the depths of the rabbit hole in order to be with her.',
    'Flash photography is best used in full sunlight.',
    'Instead of a bachelorette party',
    'Everyone was busy, so I went to the movie alone.',
    'Iguanas were falling out of the trees.',
    'She only paints with bold colors; she does not like pastels.',
    'The clock within this blog and the clock on my laptop are 1 hour different from each other.',
    'The opportunity of a lifetime passed before him as he tried to decide between a cone or a cup.',
    'Normal activities took extraordinary amounts of concentration at the high altitude.', 
    "Today we gathered moss for my uncle's wedding.", 
    "There's no reason a hula hoop can't also be a circus ring."
    ]
   
   
   morsedict = {
   
     "a": ".-",
     'b': '-...',
     'c': '-.-.',
     'd': '-..',
     'e': '.',
     'f': '..-.',
     'g': '--.',
     'h': '....',
     'i': '..',
     'j': '.---',
     'k': '-.-',
     'l': '.-..',
     'm': '--',
     'n': '-.',
     'o': '---',
     'p': '.--.',
     'q': '--.-',
     'r': '.-.',
     's': '...',
     't': '-',
     'u': '..-',
     'v': '...-',
     'w': '.--',
     'x': '-..-',
     'y': '-.--',
     'z': '--..',
     ' ': '      '
   };
   
   
   
   
   function generateSentence() {
       rand = Math.floor(Math.random() * sentence_array.length);
     sentences = sentence_array[rand-1];
     sentences = sentences.toLowerCase()
   
     var converted = "";
     converted += "⠀┃⠀"
   
   
     for (i of sentences) {
       convertedLetter = morsedict[i];
       convertedLetter = String(convertedLetter)
   
       if (convertedLetter === "undefined") {
         converted += i
       } else {
         converted += convertedLetter;
       }
   
       converted += "⠀┃⠀"
   
       // console.log(convertedLetter);
     }
   
     document.getElementById("question").innerHTML = converted;
     window.sentence = sentences
   }
   
   
   function match(){
   answer = document.getElementById("answer").value;
   if (answer === window.sentences){
   document.getElementById("result").innerHTML = "you are right";
   
   }
   else if (answer === ""){
   document.getElementById("result").innerHTML = "answer's empty";
   }
   else{
   
   document.getElementById("result").innerHTML = "you are wrong, this is the right: <br>\"" + window.sentence + "\"" ;
   }
   }