let user=0
let playerscore=0
let compscore=0
let messageEl=document.getElementById("message")
let endMessageEl=document.getElementById("endmessage")

function getRndInteger() {
    let comp
    return comp = Math.floor(Math.random() * 3) + 1
  }
function functionalpart(user,comp){
   
        
        if(user==comp){
            messageEl.innerText= "Tie in this Turn"
        }else if(user==1&&comp==3){
            messageEl.innerText= "You Won your Turn"
            playerscore+=1
    
        }else if(user==1&&comp==2){
            messageEl.innerText= "You Lost your Turn"
            compscore+=1
        }else if(user==2&&comp==1){
            messageEl.innerText= "You Won your Turn"
            userscore+=1
            
        }else if(user==2&&comp==3){
            messageEl.innerText= "You Lost your Turn"
            compscore+=1
    
        }else if(user==3&&comp==1){
            messageEl.innerText= "You Lost your Turn"
            playerscore+=1
        }else if(user==3&&comp==2){
            messageEl.innerText= "You Won your Turn"
            compscore+=1
        }
        checkwinner(playerscore,compscore)
    
    

    
    
    

}
function rock(){
    console.log("You pressed Rock")
    user=1
    let comp=getRndInteger()
    console.log(comp)
    functionalpart(user,comp)
}
function paper(){
    console.log("You pressed paper")
    user=2
    let comp=getRndInteger()
    console.log(comp)
    functionalpart(user,comp)
}
function scissors(){
    console.log("You pressed scissors")
    user=3
    let comp=getRndInteger()
    console.log(comp)
    functionalpart(user,comp)
}
function checkwinner(count){
    if(playerscore>=5){
        endMessageEl.innerText= "You won Overall :)"
    }else if(compscore>=5){
        endMessageEl.innerText= "Its a Tieeeeeeee :|"
    }
}
