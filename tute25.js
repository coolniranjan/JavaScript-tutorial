
// --solution of exercise-2 to create editable div--

let div = document.getElementById("myfirst")

let v = localStorage.getItem('val');
if(localStorage.getItem('val')!=undefined){
    div.innerHTML = v

}
else{
    div.innerHTML=`you can click here to edit this`
}

div.addEventListener('click',function(e){

    let notextarea = document.getElementsByClassName("txtarea").length


    if (notextarea == 0) {

        ht = div.innerHTML
        div.innerHTML = `<textarea class="txtarea" id="txtarea1" >${ht}</textarea>`
    }

    let are = document.getElementById("txtarea1")

    are.addEventListener('blur', function () {


        div.innerHTML = are.value;
        localStorage.setItem("val", are.value);

    })


})