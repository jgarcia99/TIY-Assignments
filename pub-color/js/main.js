var d,h,m,s, hhex,mhex, shex,colorTime;

function showTime() {
    d= new Date();
    h = d.getHours();
    m = d.getMinutes();
    s = d.getSeconds();
  
     var hhex = (Math.floor(h * 255/23)).toString(16);
     var mhex = (Math.floor(m * 255/59)).toString(16);
     var shex = (Math.floor(h * 255/59)).toString(16);
    
    if(h<=9) h= '0'+h;
    if(h<=9) h= '0'+m ;
    if(h<=9) h= '0'+s ;
    
    if(hhex.length < 2)  hhex = "0" + hhex;
    if(mhex.length < 2)  hhex = "0" + mhex;
    if(shex.length < 2)  hhex = "0" + shex;
        
   

colorTime = "#" + hhex + mhex + shex;
    
    document.body.style.background = colorTime;
    
    document.getElementById('clock').innerHTML= h + ":" + m + ":" + s;
    
    setInterval(showTime,1000);
};

showTime();


