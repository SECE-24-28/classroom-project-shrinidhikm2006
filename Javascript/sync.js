


  function display(){
return new Promise((resolve,reject)=>{
    let isTrue=true
    if(isTrue)
    {
      resolve(1000)
    }
    else 
      reject()
  })
  }
   

 display().then((data)=>{ console.log("done!....................",data)})
  .catch(()=>{console.log("not done")} )




  function display(){
return new Promise((resolve,reject)=>{
    let isTrue=true
    if(isTrue)
    {
      resolve(1000)
    }
    else 
      reject("bye")
  })
  }
   

//  display().then((data)=>{ console.log("done!....................",data)})
//   .catch(()=>{console.log("not done")} )
 
  async function show(){
     try{
      var res= await  display()
      console.log(res)
     }
     catch(Exception){
      console.log("the pb",Exception)
     }
     
  } 
  
  show()
