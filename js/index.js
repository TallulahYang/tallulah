(function(){
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
    for (index = 0 ; index < length - 1; ++index) {
        var charCode = string.charCodeAt(index);
        if (charCode >= 0xD800 && charCode <= 0xDBFF)
        {
            charCode = string.charCodeAt(index + 1);
            if (charCode >= 0xDC00 && charCode <= 0xDFFF) 
            {
                output.push(string.slice(index, index + 2));
                ++index;
                continue;
            }
        }
        output.push(string.charAt(index));
    }
    output.push(string.charAt(index));
    return output;
}

function draw() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
    ctx.fillRect(0, 0, c.width, c.height);
    ctx.fillStyle = "#0F0"; //green text
    ctx.font = font_size + 'px "Unifont"';
    for (var i = 0; i < drops.length; i++) {
        if (offset >= alphabet.length)
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

setInterval(draw, 50);
// requestAnimationFrame(function render() {
//   draw();
//   requestAnimationFrame(render);
// });</=></=>
})();