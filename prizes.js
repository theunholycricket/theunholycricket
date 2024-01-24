var prizes = [
  '<p>Congratulations! You\'ve won an iDOG!</p><p><img src="assets/prize/idog.jpg" style="height:200px"></p><p><span style="color:limegreen">COMMON</p></span><p>Just connect your iPod nano and look!</p>',

  '<p>Congratulations! You\'ve won A HANDFUL OF SQUINKIES</p><p><img src="assets/prize/squinkies.jpeg" style="height:200px"></p><p><span style="color:limegreen">COMMON</p></span><p>Try not to eat them all at once!</p>',

  '<p>Congratulations! You\'ve won an AMONG US POP-IT!</p><p><img src="assets/prize/amoungus.png" style="height:200px"></p><p><span style="color:limegreen">COMMON</p></span><p>There something sus about how addicting this thing is!</p>',

  '<p>Congratulations! You\'ve won RED CABBAGE</p><p><img src="assets/prize/cabbage.png" style="height:200px"></p><p><span style="color:limegreen">COMMON</p></span><p> Very nutritious!</p>',

  '<p>Congratulations! You\'ve won ASSORTED FRUIT TUMS</p><p><img src="assets/prize/tums.jpeg" style="height:200px"></p><p><span style="color:limegreen">COMMON</p></span><p>No more pesky heartburn for you!</p>',

  '<p>Congratulations! You\'ve won BABY KEYS</p><p><img src="assets/prize/babykeys.png" style="height:200px"></p><p><span style="color:limegreen">COMMON</p></span><p>Only thing these unlock is your inner child!</p>',

  '<p>Congratulations! You\'ve won a HOT PINK BITCH!</p><p><img src="assets/prize/XXXXXXXXXX" style="height:200px"></p><p><span style="color:limegreen">COMMON</p></span><p>Her name is Breakfast!</p>',

  '<p>Congratulations! You\'ve won a NEW TEXT DOCUMENT!</p><p><img src="assets/prize/XXXXXXXXXX" style="height:200px"></p><p><span style="color:limegreen">COMMON</p></span><p>It\'s full of endless possibility! What will you write inside?</p>',

  '<p>Congratulations! You\'ve won a HANNAH MONTANA DINNERWARE SET!</p><p><img src="assets/prize/Hannah.jpeg" style="height:200px"></p><p><span style="color:limegreen">COMMON</p></span><p>Wow, these plates are <i>one in a million</i>(and dishwasher safe!)</p>',

  '<p>Congratulations! You\'ve won PLASTIC BALLS!</p><p><img src="/prizemachine/common/plasticballs.png" style="height:200px"></p><p><span style="color:limegreen">COMMON</p></span><p>Win enough of these and you can build your own ball pit!</p>',
  
  '<p>Congratulations! You\'ve won KUNG FU PANDA 3 ON DVD</p><p><img src="assets/prize/panda.png" style="height:200px"></p><p><span style="color:yellow">UNCOMMON</p></span><p>2 movies was <u>NOT</u> enough!</p>',

  '<p>Congratulations! You\'ve won DESMOND THE MOON BEAR!</p><p><img src="assets/prize/XXXXXXXXXX" style="height:200px"></p><p><span style="color:yellow">UNCOMMON</p></span><p>How did he...get here?</p>',

  '<p>Congratulations! You\'ve won a MYSTERIOUS CD!</p><p><img src="assets/prize/XXXXXXXXXX" style="height:200px"></p><p><span style="color:yellow">UNCOMMON</p></span><p><a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Listen to it?</a></p>',

  '<p>Congratulations! You\'ve won the POKÉMON SCARLET AND VIOLET PREORDER BONUS!</p><p><img src="assets/prize/XXXXXXXXXX" style="height:200px"></p><p><span style="color:yellow">UNCOMMON</p></span><p>This will really help you get started on your journey!</p>',

  '<p>Congratulations! You\'ve won a FREE SPIN ON THE WEBKINZ WHEEL OF WOW!</p><p><img src="assets/prize/wow.png" style="height:200px"></p><p><span style="color:yellow">UNCOMMON</p></span><p>Use this random prize to go win another random prize!</p>',

  '<p>Congratulations! You\'ve won a iPHONE 5C</p><p><img src="assets/prize/5c.jpeg" style="height:200px"></p><p><span style="color:yellow">UNCOMMON</p></span><p>Who need titanium when you could have plastic!</p>',

  '<p>Congratulations! You\'ve won FISH SOAP!</p><p><img src="assets/prize/XXXXXXXXXX" style="height:200px"></p><p><span style="color:yellow">UNCOMMON</p></span><p>When you put it on your hands, you can hear the ocean!</p>',

  '<p>Congratulations! You\'ve won a GIANT NOVELTY PEN!</p><p><img src="assets/prize/XXXXXXXXXX" style="height:200px"></p><p><span style="color:yellow">UNCOMMON</p></span><p>Use it to write down your biggest thoughts!</p>',
  
  '<p>Congratulations! You\'ve won HEELIES!</p><p><img src="assets/prize/rare/heelies.png" style="height:200px"></p><p><span style="color:cyan">RARE</p></span><p>Roll on over to your crush! You\'re sure to impress!</p>',

  '<p>Congratulations! You\'ve won LIGHTNING MCQUEEN CROCS</p><p><img src="assets/prize/crocs.png" style="height:200px"></p><p><span style="color:cyan">RARE</p></span><p>These will make the ladies say KA-CHOW!</p>',

  '<p>Congratulations! You\'ve won a MYSTERIOUS TAPE!</p><p><img src="assets/prize/XXXXXXXXXX"></p><p><span style="color:cyan">RARE</p></span><p><a href="https://www.youtube.com/watch?v=nwP3TeK-fPs">Watch it?</a></p>',

  '<p>Congratulations! You\'ve won a UNICORN!</p><p><img src="assets/prize/XXXXXXXXXX" style="height:200px"></p><p><span style="color:cyan">RARE</p></span><p>Ask it nicely and it will grant you a wish!</p>',

  '<p>Congratulations! You\'ve won a NETHER PORTAL</p><p><img src="assets/prize/XXXXXXXXXX"></p><p><span style="color:cyan">RARE</p></span><p>Don/'t bring your bed!</p>',

  '<p>Congratulations! You\'ve won a CRYSTAL HEART!</p><p><img src="assets/prize/XXXXXXXXXX" style="height:200px"></p><p><span style="color:cyan">RARE</p></span><p>Wow, pretty! Who knows what it can do?</p>',

  
  '<p>Congratulations! You\'ve won a KELP SHAKE</p><p><img src="assets/prize/kelpshake.png" style="height:200px"></p><p><span style="color:purple">EPIC</p></span><p>I wouldn't drink that if I were you!</p>',

  '<p>Congratulations! You\'ve won a HORNLESS UNICORN!</p><p><img src="assets/prize/XXXXXXXXXX" style="height:200px"></p><p><span style="color:purple">EPIC</p></span><p>Even rarer than a regular unicorn!</p>',

  '<p>Congratulations! You\'ve won INFINITE JELLYBEANS!</p><p><img src="assets/prize/XXXXXXXXXX" style="height:200px"></p><p><span style="color:purple">EPIC</p></span><p>Say goodbye to those inconvenient "I\'m out of jellybeans again" trips to the grocery store!</p>',

  '<p>Congratulations! You\'ve won SPAMTON!</p><p><img src="assets/prize/XXXXXXXXXX" style="height:200px"></p><p><span style="color:purple">EPIC</p></span><p>"WH4T? HOW THE [$!$!] DID I GET INTO THIS [[Mystery Machine]] ??</p>',
  
  '<p>Congratulations! You\'ve won a GLOWING RAINBOW DOG!</p><p><img src="assets/prize/XXXXXXXXXX" style="height:200px"></p><p><span style="color:red">LEGENDARY</p></span><p>What a beautiful creature! Can you believe it?</p>',

  '<p>Congratulations! You\'ve won an ETHEREAL DOG!</p><p><img src="assets/prize/XXXXXXXXXX style="height:200px"></p><p><span style="color:red">LEGENDARY</p></span><p>Isn\'t it like nothing you\'ve ever seen before?</p>'
  ]
function newPrize () {
    var randomNumber = Math.floor(Math.random() * (prizes.length));
    document.getElementById('prizeDisplay').innerHTML = prizes[randomNumber];
}