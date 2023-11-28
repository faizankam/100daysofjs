function adjective(){
   let a = "crazy";
   let b = "amazing";
   let c = "fire";
   let d = Math.floor(Math.random()*3)
   if (d == 0){return a}
   else if (d == 1){return b}
   else if (d == 2){return c}
}
function shopname(){
    let a = "engine";
    let b = "food";
    let c = "garments";
    let d = Math.floor(Math.random()*3)
    if (d == 0){return a}
    else if (d == 1){return b}
    else if (d == 2){return c}
 }
 function anotherword(){
    let a = "bros";
    let b = "limited";
    let c = "hub";
    let d = Math.floor(Math.random()*3)
    if (d == 0){return a}
    else if (d == 1){return b}
    else if (d == 2){return c}
 }
 console.log("Business Name\n" , adjective(),shopname(),anotherword() )
