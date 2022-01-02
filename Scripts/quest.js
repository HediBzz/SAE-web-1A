const btns = document.querySelectorAll('.btn-question')
const btnNext = document.querySelectorAll('.btn-question')

let elemIndex= 0;
let nb_quest
let value
let num_quest = 0

btns.forEach((btnElem, key)=>{

    
    elemIndex = key + 1;

    document.querySelector(`.btn-question.btn-question-${elemIndex}`).addEventListener('click',(event)=>{
        const elemIndexQuestion = Number.parseInt(event.target.classList[1].split('-')[2])
        
        num_quest = num_quest + 1
        document.querySelector(`.question.ques-${elemIndexQuestion}`).classList.remove('active')
        nb_quest = document.querySelector(`.question.ques-${elemIndexQuestion}`).classList[2]
        
        value = 0;
        for(let i = 1; i < 3; i++){
            if(document.querySelector(`.q${elemIndexQuestion}-${i}`).querySelector("input").checked === true){
                value = i
            }
        }
    
        if(value!=0){
            document.querySelector(`.rep${num_quest}-${value}`).classList.add('active')
            document.querySelector(`.btnNext${num_quest}`).classList.add('active')
        }
        
        
    })

    document.querySelector(`.btnNext${elemIndex}`).addEventListener('click',(event)=>{
        
        document.querySelector(`.rep${num_quest}-${value}`).classList.remove('active')
        document.querySelector(`.btnNext${num_quest}`).classList.remove('active')
        document.querySelector(`.question.ques-${num_quest+1}`).classList.add('active')
        
    })
})


