//access data from api using fetch
async function getdata(){
  try{
    var res=await fetch("https://jsonplaceholder.typicode.com/users");
    var data=await res.json()
    console.log(data)
  }
  catch(error){
    console.log(error)
  }
}
getdata();

//create data using post method
async function createdata(){
    try{
        var res=await fetch("https://jsonplaceholder.typicode.com/users",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                name:"sasi",
                age:23,
            
            })
    });
    var data=await res.json()
    console.log(data)
  }
  catch(error){
    console.log(error)
  }
}
createdata();

async function updateData(){
    try{
        var res=await fetch("https://jsonplaceholder.typicode.com/users/1",{
            method:"PUT",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                name:"nandhini",
                gender:"female",
            
            })
    });
    var data=await res.json()
    console.log(data)
  }
  catch(error){
    console.log(error)
  }
}
createdata();



async function deletedata(){
    try{
        var res=await fetch("https://jsonplaceholder.typicode.com/users/1",{
            method:"DELETE"
    });
    var data=await res.json()
    console.log(data)
  }
  catch(error){
    console.log(error)
  }                                      
}
deletedata();