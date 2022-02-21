async function getAdvice(){
    let adviceTag=document.querySelector("#advice");
    let adviceID=document.querySelector("#adviceID");
    let main=document.querySelector("main");
    let loader=document.querySelector(".loader");
    main.style.display="none";
    loader.style.display="initial";
    try{
        let response=await fetch("https://api.adviceslip.com/advice");
        let {advice,id}=(await response.json()).slip;
        adviceTag.textContent=advice;
        adviceID.textContent="#"+id;
    }catch(err){
        alert("There is an error , please try again later !");
        console.log(err);
    }finally{
        setTimeout(()=>{
            loader.style.display="none";
            main.style.display="initial";
        },350)
    }
}