const ratingFunc=(id)=>{
    const prevEle=document.querySelector('.active')
    if(prevEle){
        prevEle.classList.remove('active')
    }
    const ele=document.getElementById(id)
    ele.classList.add('active')
    localStorage.setItem('selected',id.charAt(id.length-1))
}
const submit=()=>{
    const ele=document.querySelector('.feedback')
    ele.classList.add('hide')
    const nextEle=document.querySelector('.thankyou')
    nextEle.classList.remove('hide')
    const span=document.querySelector('#selected')
    span.innerHTML=localStorage.getItem('selected')
}