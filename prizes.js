var prizes = [
  '<p>Congratulations! You\'ve won an iDOG!</p><p><img src="assets/prize/idog.jpg" style="height:200px"></p><p><span style="color:limegreen">COMMON</p><p>Just connect your iPod nano and look!</p>',

  '<p>Congratulations! You\'ve won A HANDFUL OF SQUINKIES</p><p><img src="assets/prize/squinkies.jpeg" style="height:200px"></p><p><span style="color:limegreen">COMMON</p><p>Try not to eat them all at once!</p>',

  '<p>Congratulations! You\'ve won an AMONG US PLUSHIE!</p><p><img src="/prizemachine/common/among.png" style="height:200px"></p><p><span style="color:limegreen">COMMON</p><p>What kind of tasks will you do with your new not-suspicious-at-all friend?</p>',

  '<p>Congratulations! You\'ve won RED CABBAGE</p><p><img src="assets/prize/cabbage.png" style="height:200px"></p><p><span style="color:limegreen">COMMON</p><p> Very nutritious!</p>',

  '<p>Congratulations! You\'ve won UNNECESSARILY SPECIFIC DEVIANTART STAMPS!</p><p><img src="/prizemachine/common/stamp1.png"><img src="/prizemachine/common/stamp2.png"><img src="/prizemachine/common/stamp3.jpg"></p><p><img src="/prizemachine/common/stamp4.gif"><img src="/prizemachine/common/stamp5.png"><img src="/prizemachine/common/stamp6.gif"></p><p><span style="color:limegreen">COMMON</p><p>Stick <i>these</i> on your mail!</p>',

  '<p>Congratulations! You\'ve won ONE FROOT LOOP!</p><p><img src="/prizemachine/common/frootloop.png" style="height:200px"></p><p><span style="color:limegreen">COMMON</p><p>Thimble of milk not included.</p>',

  '<p>Congratulations! You\'ve won a HOT PINK BITCH!</p><p><img src="/prizemachine/common/hotpinkbitch.png" style="height:200px"></p><p><span style="color:limegreen">COMMON</p><p>Her name is Breakfast!</p>',

  '<p>Congratulations! You\'ve won a NEW TEXT DOCUMENT!</p><p><img src="/prizemachine/common/txt.png" style="height:200px"></p><p><span style="color:limegreen">COMMON</p><p>It\'s full of endless possibility! What will you write inside?</p>',

  '<p>Congratulations! You\'ve won a HORSE!</p><p><img src="/prizemachine/common/horse.png" style="height:200px"></p><p><span style="color:limegreen">COMMON</p><p>Wow, cool! Your new best friend!</p>',

  '<p>Congratulations! You\'ve won PLASTIC BALLS!</p><p><img src="/prizemachine/common/plasticballs.png" style="height:200px"></p><p><span style="color:limegreen">COMMON</p><p>Win enough of these and you can build your own ball pit!</p>',
  
  '<p>Congratulations! You\'ve won BUTTERED TOAST!</p><p><img src="/prizemachine/uncommon/toast.png" style="height:200px"></p><p><span style="color:yellow">UNCOMMON</p><p>Mmm, yummy! Who doesn\'t love toast?</p>',

  '<p>Congratulations! You\'ve won DESMOND THE MOON BEAR!</p><p><img src="/prizemachine/uncommon/desmond.png" style="height:200px"></p><p><span style="color:yellow">UNCOMMON</p><p>How did he...get here?</p>',

  '<p>Congratulations! You\'ve won a MYSTERIOUS CD!</p><p><img src="/prizemachine/uncommon/cd.png" style="height:200px"></p><p><span style="color:yellow">UNCOMMON</p><p><a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Listen to it?</a></p>',

  '<p>Congratulations! You\'ve won the POKÉMON SCARLET AND VIOLET PREORDER BONUS!</p><p><img src="/prizemachine/uncommon/preorderbonus.jpg" style="height:200px"></p><p><span style="color:yellow">UNCOMMON</p><p>This will really help you get started on your journey!</p>',

  '<p>Congratulations! You\'ve won a FREE SPIN ON THE WEBKINZ WHEEL OF WOW!</p><p><img src="assets/prize/wow.png"></p><p><span style="color:yellow">UNCOMMON</p><p>Use this random prize to go win another random prize!</p>',

  '<p>Congratulations! You\'ve won a iPHONE 5C</p><p><img src="/prizemachine/uncommon/bootlegshirt.png" style="height:200px"></p><p><span style="color:yellow">UNCOMMON</p><p>Who need titanium when you could have plastic!</p>',

  '<p>Congratulations! You\'ve won FISH SOAP!</p><p><img src="/prizemachine/uncommon/fishsoap.png" style="height:200px"></p><p><span style="color:yellow">UNCOMMON</p><p>When you put it on your hands, you can hear the ocean!</p>',

  '<p>Congratulations! You\'ve won a GIANT NOVELTY PEN!</p><p><img src="/prizemachine/uncommon/giantpen.png" style="height:200px"></p><p><span style="color:yellow">UNCOMMON</p><p>Use it to write down your biggest thoughts!</p>',
  
  '<p>Congratulations! You\'ve won HEELIES!</p><p><img src="assets/prize/rare/heelies.png" style="height:200px"></p><p><span style="color:cyan">RARE</p><p>Roll on over to your crush! You're sure to impress!</p>',

  '<p>Congratulations! You\'ve won THE OCEAN!</p><p><img src="/prizemachine/rare/ocean.jpg" style="height:200px"></p><p><span style="color:cyan">RARE</p><p>All the fish you could ever want are in here!</p>',

  '<p>Congratulations! You\'ve won a MYSTERIOUS TAPE!</p><p><img src="/prizemachine/rare/tape.png"></p><p><span style="color:cyan">RARE</p><p><a href="https://www.youtube.com/watch?v=nwP3TeK-fPs">Watch it?</a></p>',

  '<p>Congratulations! You\'ve won a UNICORN!</p><p><img src="/prizemachine/rare/unicorn.png" style="height:200px"></p><p><span style="color:cyan">RARE</p><p>Ask it nicely and it will grant you a wish!</p>',

  '<p>Congratulations! You\'ve won a POT OF GOLD!</p><p><img src="/prizemachine/rare/potogold.gif"></p><p><span style="color:cyan">RARE</p><p>Use your newfound riches to buy more prizes!</p>',

  '<p>Congratulations! You\'ve won a CRYSTAL HEART!</p><p><img src="/prizemachine/rare/heartspin.gif" style="height:200px"></p><p><span style="color:cyan">RARE</p><p>Wow, pretty! Who knows what it can do?</p>',

  
  '<p>Congratulations! You\'ve won a MINECRAFT WOLF PLUSHIE!</p><p><img src="/prizemachine/epic/wolfplush.png" style="height:200px"></p><p><span style="color:purple">EPIC</p><p>He\'s very soft and will fight mobs for you!</p>',

  '<p>Congratulations! You\'ve won a HORNLESS UNICORN!</p><p><img src="/prizemachine/epic/hornlessunicorn.png" style="height:200px"></p><p><span style="color:purple">EPIC</p><p>Even rarer than a regular unicorn!</p>',

  '<p>Congratulations! You\'ve won INFINITE JELLYBEANS!</p><p><img src="/prizemachine/epic/jellybeans.png" style="height:200px"></p><p><span style="color:purple">EPIC</p><p>Say goodbye to those inconvenient "I\'m out of jellybeans again" trips to the grocery store!</p>',

  '<p>Congratulations! You\'ve won SPAMTON!</p><p><img src="/prizemachine/epic/spamton.png" style="height:200px"></p><p><span style="color:purple">EPIC</p><p>"WH4T? HOW THE [$!$!] DID I GET INTO THIS [[Mystery Machine]] ??</p>',
  
  '<p>Congratulations! You\'ve won a GLOWING RAINBOW DOG!</p><p><img src="/prizemachine/legendary/glowingrainbowdog.png" style="height:200px"></p><p><span style="color:red">LEGENDARY</p><p>What a beautiful creature! Can you believe it?</p>',

  '<p>Congratulations! You\'ve won an ETHEREAL DOG!</p><p><img src="/prizemachine/legendary/doghand.gif" style="height:200px"></p><p><span style="color:red">LEGENDARY</p><p>Isn\'t it like nothing you\'ve ever seen before?</p>'
  ]
function newPrize () {
    var randomNumber = Math.floor(Math.random() * (prizes.length));
    document.getElementById('prizeDisplay').innerHTML = prizes[randomNumber];
}