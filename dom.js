function handleClickbtn(target){
    // console.log(target.parentNode.childNodes[1].innerText);
    const itemName= target.parentNode.childNodes[1].innerText;
    const li= document.createElement('li');
    li.innerText = itemName;
    console.log(li);
}