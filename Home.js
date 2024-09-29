function Login(){
    let db={'Krishnan':'krishnan@123','Naveen':'Naveen@123','Bala':'Bala@12345'}
    let username=document.getElementById("name").value;
    let password=document.getElementById("pass").value;

    let names=Object.keys(db);
    let flag=false;

    for(let i=0;i<names.length;i++){
        if(names[i]==username){
            if(db[names[i]]==password){
                flag=true;
            }
        }
    }
    if(flag==true){
       window.location.href="http://127.0.0.1:5501/Selection.html";
       document.getElementById("error").innerHTML=""
        
    }
    else{
        document.getElementById("error").innerHTML="Invalid User!"
    }
}