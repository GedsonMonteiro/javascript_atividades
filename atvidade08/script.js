var arraySequence = [0, 1];
var sequence = 0;
var numPairs = 0;
var numOdd = 0;
var pairPlus = 0;
var nextElement = 0;

  do {
    sequence++
    nextElement = arraySequence[sequence] + arraySequence[sequence-1];
    nextElement < 50000 ? (
    arraySequence.push(nextElement),
    nextElement % 2 == 0 ? 
      ( numPairs  ++ , pairPlus += nextElement ) : numOdd ++ ) : false;
    } 
    
  while  (nextElement < 50000);

    document.write("Sequência de números : " + arraySequence.join(' / ') + "<br><br>");
    document.write("Quantidade de números pares : " + numPairs + "<br>");
    document.write("Quantidade de números impares : " + numOdd + "<br>");
    document.write("Somatórios dos números pares : " + pairPlus)