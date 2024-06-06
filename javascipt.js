let userscore=0;
let compscore=0;

const choices=document.querySelectorAll(".choice");
const msgg=document.querySelector("#msg");
const userpara=document.querySelector("#userscore");
const comppara=document.querySelector("#compscore");

const showwinner=(userwin,userchoice,compchoice)=>{
    if(userwin){
        userscore++;
        userpara.innerText=userscore;
        
        msgg.innerText=`You win your ${userchoice} beats ${compchoice}`;
        msgg.style.backgroundColor="green";
    }
    else{
        compscore++;
        comppara.innerText=compscore;
        
        msgg.innerText=`You Loss ${compchoice} beats your ${userchoice}`;
        msgg.style.backgroundColor="red";
    }
}

const gencompchoice=()=>{
    const option=["rock","paper","scirrors"];
    const randix=Math.floor(Math.random() * 3);
    return option[randix];

}
const draw=()=>{
    console.log("Game was draw");
}

const playgame=(userchoice)=>{
  console.log("user-choice",userchoice);
  //genrate comp choice
  const compchoice=gencompchoice();
  console.log("comp choice",compchoice);

  if(userchoice===compchoice){
    draw();
    msgg.innerText="Game was Draw Play Again!";
    msgg.style.backgroundColor="black";
  } else{
    let userwin=true;
    if(userchoice==="rock"){
        //sciccors, paper
        userwin=compchoice==="paper"?false:true;
    } else if(userchoice==="paper"){
        //rock,sciccors
        userwin=compchoice==="scirrors"?false:true;
    } else{
        //rock,paper
        userwin=compchoice==="rock"?false:true;
    }
    showwinner(userwin,userchoice,compchoice);
  }
}

choices.forEach((actions)=>{
   actions.addEventListener("click",()=>{
    const userchoice=actions.getAttribute("id");
    
    playgame(userchoice);
   });
});

