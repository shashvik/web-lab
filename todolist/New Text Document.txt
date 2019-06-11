function additem(){
    var input=document.getElementById("input");
    var item=input.value;
    var ul=document.getElementById("list");
    var textnode=document.createTextNode(item)
if(item==="")
  alert("please put item in box")
else{
    var li=document.createElement('li')
    var checkbox=document.createElement('input')
    checkbox.type='checkbox';
    checkbox.setAttribute('id','check')
    var label=document.createElement('label')

    ul.appendChild(label)
    li.appendChild(checkbox)
    label.appendChild(textnode)
    li.appendChild(label)
ul.insertBefore(li,ul.childNodes[0])
li.className='visual'
input.value=' '
    
}

}

function remove(){
    
    var input=document.getElementById("input");
    
    var item=input.value;
    var ul=document.getElementById("list");
    
    ul.removeChild(ul.childNodes[0])

}