//onsubmit append child with 2 element error meassage and error icon
const FirstName=document.getElementById('FirstName') 
const LastName=document.getElementById('LastName') 
const EmailAddress=document.getElementById('EmailAddress') 
const Password=document.getElementById('Password') 


const eles=document.querySelectorAll('.input-container')
// //console.log(eles)
// const Foo=(e)=>{
//     e.preventDefault();
//     console.log(typeof(eles),"++++++",eles)
//     eles.forEach(element => {
//         console.log("----------",element.children[0].value)
//         if(element.children[0].value==""||element.children[0].value==undefined){
            
//             var child1 = document.createElement('span');
//             child1.classList.add('error-icon')
//             child1.innerHTML = '<img src="./images/icon-error.svg" alt=""/>';
//             element.appendChild(child1)
//             if(element.children[0].type!="email"){
//                 var child2 = document.createElement('span');
//                 child2.classList.add('error-message')
//                 child2.innerHTML = 'Field cannot be empty!';
//                 element.appendChild(child2)
//             }else{
//                 var child2 = document.createElement('span');
//                 child2.classList.add('error-message')
//                 child2.innerHTML = 'Please enter valid email!';
//                 element.appendChild(child2)
//             }
//         }else{
//             element.children[0].removeChild('span')
//         }
//     });
// }

const Foo=(e)=>{
    e.preventDefault();
    eles.forEach(element=>{
        if(element.children[0].value==""||element.children[0].value==undefined){
            element.children[1].classList.remove('hide')
            element.children[2].classList.remove('hide')
        }else{
            element.children[1].classList.add('hide')
            element.children[2].classList.add('hide')
        }
    }
    )
}