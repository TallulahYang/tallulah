console.log('-----');
var twitterMessage = "";
var alphabet = ["0", "1"];
var offset = 0;
var c = document.getElementById("c");
var ctx = c.getContext("2d");
//making the canvas full screen
c.height = window.innerHeight;
c.width = window.innerWidth;
var font_size = 14;
var columns = c.width / font_size; //number of columns for the rain
//an array of drops - one per column
var drops = [];
//x below is the x coordinate
//1 = y co-ordinate of the drop(same for every drop initially)
for (var x = 0; x < columns; x++)
    drops[x] = 1;

window.addEventListener('resize', function() {
    c.height = window.innerHeight;
    c.width = window.innerWidth;
});

function getSymbols(string) {
    var index = 0;
    var length = string.length;
    var output = [];
    for (; index < length - 1; ++index) {
        var charCode = string.charCodeAt(index);
        if (charCode >= 0xD800 && charCode <= 0xdbff)="" {="" charcode="string.charCodeAt(index" +="" 1);="" if="" (charcode="">= 0xDC00 && charCode <= 0xdfff)="" {="" output.push(string.slice(index,="" index="" +="" 2));="" ++index;="" continue;="" }="" output.push(string.charat(index));="" return="" output;="" function="" draw()="" black="" bg="" for="" the="" canvas="" translucent="" to="" show="" trail="" ctx.fillstyle="rgba(0, 0, 0, 0.05)" ;="" ctx.fillrect(0,="" 0,="" c.width,="" c.height);="" green="" text="" ctx.font="font_size" 'px="" "unifont"';="" looping="" over="" drops="" (var="" i="0;" <="" drops.length;="" i++)="" a="" random="" alphabet="" character="" print="" var="" *="" alphabet.length)];="" console.log(offset);="" if="" (offset="">= alphabet.length)
            offset = 0;

        var text = alphabet[offset++];

        if (!text)
            text = " ";

        //x = i*font_size, y = value of drops[i]*font_size
        ctx.fillText(text, i * font_size, drops[i] * font_size);
        //ctx.fillText(letters.length.toString(), font_size, font_size);
        //sending the drop back to the top randomly after it has crossed the screen
        //adding a randomness to the reset to make the drops scattered on the Y axis
        if (drops[i] * font_size > c.height && Math.random() > 0.975)
            drops[i] = 0;
        //incrementing Y coordinate
        drops[i]++;
    }
}
requestAnimationFrame(function render() {
    draw();
    requestAnimationFrame(render);
});</=></=>