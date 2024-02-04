const body=document.querySelector(".cointainer");
function change(){
    let randomRed=Math.floor(Math.random()*256);
    let randomBlue=Math.floor(Math.random()*256);
    let randomGreen=Math.floor(Math.random()*256);
    let back=`rgb(${randomRed},${randomBlue},${randomGreen})`;
    document.body.style.backgroundColor=back;
}