const btns = document.querySelectorAll('.btn-question')
const btnNext = document.querySelectorAll('.btn-question')

let elemIndex= 0;
let nb_quest
let value
let num_quest = 0

btns.forEach((btnElem, key)=>{

    
    elemIndex = key + 1;

    console.log(elemIndex)

    document.querySelector(`.btn-question.btn-question-${elemIndex}`).addEventListener('click',(event)=>{
        const elemIndexQuestion = Number.parseInt(event.target.classList[1].split('-')[2])
        if(true){
            num_quest = num_quest + 1
            document.querySelector(`.question.ques-${elemIndexQuestion}`).classList.remove('active')
            nb_quest = document.querySelector(`.question.ques-${elemIndexQuestion}`).classList[2]
            if(nb_quest > 2){
                const tab_values=[]
                for(let i = 1; i <= nb_quest; i++){
                    if(document.querySelector(`.q${elemIndexQuestion}-${i}`).querySelector("input").checked === true){
                        console.log(`Question ${elemIndexQuestion}, reponse ${i}`)
                        tab_values.push(`${i}`)
                    }
                }
            }
            else{
                for(let i = 1; i <= nb_quest; i++){
                    if(document.querySelector(`.q${elemIndexQuestion}-${i}`).querySelector("input").checked === true){
                        console.log(`Question ${elemIndexQuestion}, reponse ${i}`)
                        value = i
                        console.log("valeur = " + value)
                    }
                }
                if(value!=null){
                    document.querySelector(`.rep${num_quest}-${value}`).classList.add('active')
                    document.querySelector(`.btnNext${num_quest}`).classList.add('active')
                    console.log(num_quest + "yesss")}
            }
        }
    })

    document.querySelector(`.btnNext${elemIndex}`).addEventListener('click',(event)=>{
        console.log("valeur = " + value)
        console.log("question = " + num_quest)
        
        document.querySelector(`.rep${num_quest}-${value}`).classList.remove('active')
        document.querySelector(`.btnNext${num_quest}`).classList.remove('active')
        document.querySelector(`.question.ques-${num_quest+1}`).classList.add('active')
        
    })
})


