var multi3 = 0;
var multi5 = 0;
    
for (i = 0; i < 1000; i++) {
    multi3 += (i % 3 == 0) ? i : 0;
    multi5 += (i % 5 == 0) ? i : 0;
      }
      document.write("Múltiplos de 3: " + multi3 + "<br>");
      document.write("Múltiplos de 5: " + multi5 + "<br>");
      document.write("Múltiplos de 3 e 5 somados: " + parseInt(multi3+multi5));