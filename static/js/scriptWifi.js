  var ssid = document.getElementById("ssid");
  var pswd = document.getElementById("pswd");
  var ip = document.getElementById("ip_fixo");
  var gateway = document.getElementById("gateway");
  var mascara = document.getElementById("mascara");
  var send = document.getElementById("send");
  var dhcp = document.getElementById("dhcp");

  

window.onload = function(){
  send.onclick = function(){
    var ajax = new XMLHttpRequest();
    if(dhcp.checked){

      if( (ssid.value !== "") && (pswd.value !== "") ){
        ajax.open("GET", "/credentials?ssid="+ssid.value+"&pswd="+pswd.value,true);
        ajax.send();
        alert("Solicitação enviada com sucesso! Reinicie a máquina para que as alterações sejam validadas!");
      }
      else{
        alert("Preencha os dados antes de enviar!");
      }

    }//dhcp checked
    else{

      if( (ssid.value !== "") && (pswd.value !== "") && (ip.value !== "") && 
          (gateway.value !== "") && (mascara.value !== "") ){
          
            ajax.open("GET", "/credentials?ssid="+ssid.value+"&pswd="+pswd.value+"&ip="+ip.value+
            "&gateway="+gateway.value+"&mascara="+mascara.value,true);
            ajax.send();
            alert("Solicitação enviada com sucesso! Reinicie a máquina para que as alterações sejam validadas!");
      }
      else{
        alert("Preencha os dados antes de enviar!");
      }      
    }

    return false;
  }

  dhcp.onclick = function(){
    if(dhcp.checked)  {
      ip.disabled = true;
      gateway.disabled = true;
      mascara.disabled = true;

      ip.style.backgroundColor = "#90cccc";
      gateway.style.backgroundColor = "#90cccc";
      mascara.style.backgroundColor = "#90cccc";
    }
    else{
      ip.disabled = false;
      gateway.disabled = false;
      mascara.disabled = false;

      ip.style.backgroundColor = "white";
      gateway.style.backgroundColor = "white";
      mascara.style.backgroundColor = "white";
    }
  }

};

