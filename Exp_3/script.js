

 
 
 
 
 
 
 
 
 
 // Problem a
 function generateFibonacciNumbers() 
 {
    var n = parseInt(prompt("Enter a number n:"));
    var fibonacciSeries = [0, 1]; // 0 , 1 , 1 , 2

                        
    for (var i = 2; i < n; i++) 
    {
      fibonacciSeries[i] = fibonacciSeries[i - 1] + fibonacciSeries[i - 2];
    }

    alert("The first " + n +" Fibonacci numbers:\n" +fibonacciSeries.join(", "));
  }
  // Problem b
  function square() 
  {
    let n = parseInt(prompt("Enter value for n: "));
    let output = "Number Square\n";
    for (i = 1; i <= n; ++i) 
    {
      let sqr = i * i;
      output += i + " " + sqr ; // output = output +( i + " " + sqr + "\n"+)
    }
    alert(output);
  }