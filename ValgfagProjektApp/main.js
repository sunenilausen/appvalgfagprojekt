function myFunction(){

  
  var x = $('#sel1').val();
  var y = $('#sel2').val();
  
  
  
  var html = "";
  html += "<tr class='success'>" ;
  html += "<td>" + x[0] + "</td>";
  html += "<td>" + y[0] + "</td>";
  html += "<td>" + "Øvelse Resultat" + "</td>";
  html += "</tr>";

  document.getElementById("myOutput").innerHTML = html;
}