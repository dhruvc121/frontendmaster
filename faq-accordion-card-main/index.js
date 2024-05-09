const myFoo=(event,ans)=>{
    const answer=document.querySelector('.answer-'+ans)
    answer.classList.toggle('active')
    const button=document.querySelector("#"+event.target.id)
    button.classList.toggle('active_btn')
    //const button=document.querySelector()
}