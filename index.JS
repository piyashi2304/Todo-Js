let cardcontainer = document.getElementById("cardcontainer")
let addcardPopup=document.getElementById("addcardPopup")
let maincontainer = document.getElementById("main")
let additempopup = document.getElementById("additempopup")
let taskmessage = document.getElementById("taskmessage")
// let single = document.getElementById('single')

function showPopup(){
    addcardPopup.classList.remove("hide")
    maincontainer.classList.add("blur")
}
console.log(showPopup)
function closePopup(){
    addcardPopup.classList.add("hide")
    maincontainer.classList.remove("blur")


}

// document.getElementById("click").addEventListener("click",showPopup)
// document.getElementById("closebutton").addEventListener("click" , closePopup)

function addcard(){
    taskmessage.classList.add("hide")
    closePopup()
    var cardname = document.getElementById("cardname")
   var card = document.createElement("div")
   var heading = document.createElement("h3")
   var hr = document.createElement("hr")
   var subtasklist = document.createElement("div")
   var addsubtask = document.createElement("button")
   var deletecard = document.createElement("button") 

//    addcard.classList.add('card1')
   cardcontainer.appendChild(card)
   card.appendChild(heading)
   card.appendChild(hr)
   card.appendChild(subtasklist)
   card.appendChild(addsubtask)
   card.appendChild(deletecard)

   card.classList.add('card')
   heading.innerText = cardname.value
   cardname.value = ""
   addsubtask.innerText = "+"
   addsubtask.classList.add('xyz')
   deletecard.setAttribute('class','fa-solid fa-trash')
//    deletecard.classList.add('fa-solid','fa-trash')
   deletecard.classList.add('abc')


   


   card.classList.add("box")
   heading.addEventListener("click",function(event){
   
   event.stopPropagation();
   window.alert("heading")

})
   deletecard.addEventListener("click",function(){
    card.remove()
    if (cardcontainer.innerText==="")
    taskmessage.classList.remove('hide')

   })

   addsubtask.addEventListener("click",function(event){
    additempopup.classList.remove("hide")
    maincontainer.classList.add("blur")
    var subtaskpopup = document.createElement("div")
    var heading = document.createElement("h3")
    var subtaskname = document.createElement("input")
    var additem = document.createElement("button")
    var closeitem = document.createElement("button")
   
   additempopup.appendChild(subtaskpopup) 
   additempopup.appendChild(heading) 
   additempopup.appendChild(subtaskname) 
   additempopup.appendChild(additem) 
   additempopup.appendChild(closeitem)

   heading.innerText = "Add Task"
   additem.innerText = "Add"
   closeitem.innerText = "Close"

   // adding item
additem.addEventListener('click',function(){
    additempopup.classList.add("hide")
    maincontainer.classList.remove("blur")
 let item =document.createElement("div")
 let itemtext = document.createElement("span")
 let markdone = document.createElement("button")

 item.appendChild(itemtext)
 item.appendChild(markdone)

 itemtext.innerText = subtaskname.value
 markdone.innerText = "Mark Done"

 subtasklist.appendChild(item)
 additempopup.innerText = " "

})

})

}