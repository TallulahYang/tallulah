
var twitterMessage = "";
var alphabet = ["0", "1"];
var offset = 0;
var c = document.getElementById("c");
var ctx = c.getContext("2d");
c.height = window.innerHeight;
c.width = window.innerWidth;
var font_size = 14;
var columns = c.width / font_size; 
var drops = [];
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
        if (charCode >= '0xD800' && charCode <= '0xdbff')="" {="" console.log('-------')="" charcode="string.charCodeAt(index" +="" 1);="" if="" (charcode="">= 0xDC00 && charCode <= 0xdfff)="" {="" output.push(string.slice(index,="" index="" +="" 2));="" ++index;="" continue;="" }="" output.push(string.charat(index));="" return="" output;="" function="" draw()="" ctx.fillstyle="rgba(0, 0, 0, 0.05)" ;="" ctx.fillrect(0,="" 0,="" c.width,="" c.height);="" ctx.font="font_size" 'px="" "unifont"';="" for="" (var="" i="0;" <="" drops.length;="" i++)="" if="" (offset="">= alphabet.length)
            offset = 0;

        var text = alphabet[offset++];

        if (!text)
            text = " ";

        ctx.fillText(text, i * font_size, drops[i] * font_size);
        if (drops[i] * font_size > c.height && Math.random() > 0.975)
            drops[i] = 0;
        drops[i]++;
    }
}
requestAnimationFrame(function render() {
    draw();
    requestAnimationFrame(render);
});</=></=>