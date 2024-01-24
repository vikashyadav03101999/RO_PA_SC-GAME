let yourScore=0;
let compScore=0;

const pickUp=document.querySelectorAll(".choose");
const msg=document.querySelector("#msg");

let userScore=document.querySelector("#your-score");
let comScore=document.querySelector("#comp-score");
// code of userpickup 
pickUp.forEach((choose)=>{
    // console.log(choose);
    choose.addEventListener('click',()=>{
        const userPicks=choose.getAttribute("id");
    //    console.log("boxes are clicked",userPicks);
    playGame(userPicks);

    })
})

// code for computer pickup

const compChoice=()=>{
    const option=["rock","paper","scissors"];
    const randomInx=Math.floor(Math.random()*3);
    return option[randomInx];
}

const gameTie=()=>{
    // console.log("game is draw");
    msg.innerText="Game Tie , Play Again ! ";
        msg.style.backgroundColor="rgb(108, 64, 150)"
}


const winner=(userWin,userPicks,pickupOfcomp)=>{
    if(userWin){
        yourScore++;
        userScore.innerText=yourScore;
        // console.log("u win")
        msg.innerText=`You Win ! Your ${userPicks} beats ${pickupOfcomp}`;
        msg.style.backgroundColor="green"
    }
    else{
        // console.log("i loose");
        compScore++;
        comScore.innerText=compScore;
        msg.innerText=`You Loose ! ${pickupOfcomp} beats Your ${userPicks}`;
        msg.style.backgroundColor="red"
    }
}
// game code
const playGame=(userPicks)=>{
    // console.log("user choose=",userPicks);
const pickupOfcomp=compChoice();
// console.log("comp choose = ",pickupOfcomp);
if(userPicks===pickupOfcomp){
    gameTie();
}
else{
    let userWin=true;
    if(userPicks==="rock"){
        userWin=pickupOfcomp==="paper" ? false:true;
    }else if(userPicks==="paper"){
        userWin=pickupOfcomp==="scissors"? false:true;
    }else{
        userWin=pickupOfcomp==="rock"?false:true;
    }
    winner(userWin,userPicks,pickupOfcomp);
}
}