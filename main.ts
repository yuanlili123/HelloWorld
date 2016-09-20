 var i : number = 0;
 var j : number = 0;
 var n : number = 6;
 var line : number = 0;
 
 var x = "";
 var y = "";
 var w = " ";
 var z = "*";

 line = getLine(n);
 hua(line);

 function hua(n : number) : void{
     for(i = 0 ; i < n; i++){
         for(j = 0; j < n - i; j++){
             x = x + w;
         }
         for(j = 0; j < 2 * i + 1; j++){
             y = y + z;
         }
         console.log(x + y);
         x = ""
         y = ""
     }
 }

 function getLine(line : number) : number{
     return line;
 }