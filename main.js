var i = 0;
var j = 0;
var n = 6;
var line = 0;
var x = "";
var y = "";
var w = " ";
var z = "*";
line = getLine(n);
hua(line);
function hua(n) {
    for (i = 0; i < n; i++) {
        for (j = 0; j < n - i; j++) {
            x = x + w;
        }
        for (j = 0; j < 2 * i + 1; j++) {
            y = y + z;
        }
        console.log(x + y);
        x = "";
        y = "";
    }
}
function getLine(line) {
    return line;
}
