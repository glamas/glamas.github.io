function loadXMLDoc(url)
{
var xmlhttp;
var txt,x,xx,i;
if (window.XMLHttpRequest)
  {// code for IE7+, Firefox, Chrome, Opera, Safari
  xmlhttp=new XMLHttpRequest();
  }
else
  {// code for IE6, IE5
  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
xmlhttp.onreadystatechange=function()
  {
  if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
        txt="<div onclick='display_none(this)' >";
    x=xmlhttp.responseXML.documentElement.getElementsByTagName("CD");
    for (i=0;i<x.length;i++)
    {
        txt=txt + "<div class='record'>";
        xx=x[i].getElementsByTagName("TITLE");
        {
        try
        {
            txt=txt + "<p>" + xx[0].firstChild.nodeValue + "</p>";
        }
        catch (er)
        {
            txt=txt + "<p> </p>";
        }
        }
        txt=txt + "</div>";
        txt=txt + "<div style='display:none;'>";
        xx=x[i].getElementsByTagName("ARTIST");
        {
        try
          {
          txt=txt + "<p>" + xx[0].firstChild.nodeValue + "</p>";
          }
        catch (er)
          {
          txt=txt + "<p> </p>";
          }
        }
        txt=txt + "</div>";
    }
    txt=txt + "</div>";
        /*
    txt="<table border='1'><tr><th>Title</th><th>Artist</th></tr>";
    x=xmlhttp.responseXML.documentElement.getElementsByTagName("CD");
    for (i=0;i<x.length;i++)
      {
      txt=txt + "<tr>";
      xx=x[i].getElementsByTagName("TITLE");
        {
        try
          {
          txt=txt + "<td>" + xx[0].firstChild.nodeValue + "</td>";
          }
        catch (er)
          {
          txt=txt + "<td> </td>";
          }
        }
      xx=x[i].getElementsByTagName("ARTIST");
        {
        try
          {
          txt=txt + "<td>" + xx[0].firstChild.nodeValue + "</td>";
          }
        catch (er)
          {
          txt=txt + "<td> </td>";
          }
        }
      txt=txt + "</tr>";
      }
    txt=txt + "</table>";
    */
    document.getElementById('txtCDInfo').innerHTML=txt;
    }
  }
xmlhttp.open("GET",url,true);
xmlhttp.send();
}


function display_none(name_id)
{
    //alert(name_id.childNodes.length);
    if(name_id.childNodes.length == 5){
        if(name_id.childNodes[3].style.display=='none'){
            name_id.childNodes[3].style.display='inline';
        }
        else if(name_id.childNodes[3].style.display=='inline'){
            name_id.childNodes[3].style.display='none';
        }
    }
    if(name_id.childNodes.length == 2){        
        if(name_id.childNodes[2].style.display=='none'){
            name_id.childNodes[2].style.display='inline';
        }
        else if(name_id.childNodes[3].style.display=='inline'){
            name_id.childNodes[3].style.display='none';
        }
    }
}
