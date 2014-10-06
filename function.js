loadXML = function(xmlFile)
{
    var xmlDoc=null;
    //支持IE浏览器  
    if(window.ActiveXObject){  
        xmlDoc=new ActiveXObject("Microsoft.XMLDOM");   
    }  
    //支持Mozilla浏览器  
    else if(document.implementation && document.implementation.createDocument){  
        xmlDoc = document.implementation.createDocument('','',null);  
    }  
    else{  
        alert("wrong way");
    }  
    if(xmlDoc!=null){  
        xmlDoc.async = false;  
        xmlDoc.load(xmlFile);  
    }
    return xmlDoc;
}

function loadXMLDoc(Filename)
{
    var xmlFile = loadXML(Filename);
    var txt,x,xx,i;
    if(xmlFile == null) { return; }
    txt = "";
    x = xmlFile.getElementsByTagName("CD");
    for(i=0;i<x.length;i++)
    {
        txt = txt + "<div onclick = 'display_none(this)'>";
        txt = txt + "<div class='record'>";
        xx = x[i].getElementsByTagName("TITLE");
        {
            try{
                txt = txt + "<p>" + xx[0].firstChild.nodeValue + "</p>"
            }
            catch(er){
                txt = txt + "<p>null</p>"; 
            }
        }
        txt = txt + "</div>";
        txt = txt + "<div style='display:none;'>";
        xx = x[i].getElementsByTagName("ARTIST");
        {
            try{
                txt = txt + "<p>" + xx[0].firstChild.nodeValue + "</p>"
            }
            catch(er){
                txt = txt +"<p>null</p>";
            }
        }
        txt = txt + "</div>";
        txt = txt + "</div>";
    }
    document.getElementById('txtCDInfo').innerHTML=txt;
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
        if(name_id.childNodes[1].style.display=='none'){
            name_id.childNodes[1].style.display='inline';
        }
        else if(name_id.childNodes[1].style.display=='inline'){
            name_id.childNodes[1].style.display='none';
        }
    }
}
