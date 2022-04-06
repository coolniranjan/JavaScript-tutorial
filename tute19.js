
// solution of exercise 1

let li="google"
let a=document.links;
Array.from(a).forEach(function(e){
    let href=e.href;
    // console.log(href)
    if(href.includes(li)){
        console.log(href)
    }
})

