
function api(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        
        if(this.readyState==4&&this.status==200){
            var response = JSON.parse(this.responseText);
            var output="";
            for(var i=0;i<response.length;i++){
            output += "<input id='title' onclick='getcheckboxvalue();' type=checkbox> "+response[i].title +"<br><br>";
            
            }
            document.getElementById("demo").innerHTML=output;
            
            
            
        }
    }
    xhttp.open("GET","https://jsonplaceholder.typicode.com/todos",true);
    xhttp.send();
}
var a = [];
function getcheckboxvalue(){
var check = document.getElementById('title');
           
            if(check.checked){
                // alert("Checked");
                a.push('checked');
                console.log(a.length)
                if((a.length)%5 == 0){
                    alert("Sucessfully Completed 5 Tasks");
                }
            }
        }
