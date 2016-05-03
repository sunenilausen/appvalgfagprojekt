function myFunction(){

  var x = $('#sel1').val();
  var y = $('#sel2').val();
  
  
  var html = "";
  
  for(i=0;i<x.length;i++)
  {
    for(j=0;j<y.length;j++)
    {
      html += "<tr class='success'>" ;
      html += "<td>" + x[i] + "</td>";
      html += "<td>" + y[j] + "</td>";
      html += "<td>" + "Øvelse Resultat" + "</td>";
      html += "</tr>";
    }
  }
  
  document.getElementById("myOutput").innerHTML = html;
 
}