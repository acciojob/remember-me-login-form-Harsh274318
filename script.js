//your JS code here. If required.
 let userName = document.querySelector("#username");
    let password = document.querySelector("#password");
    let checkbox = document.querySelector("#checkbox");
    let submit = document.querySelector("#submit");
    let existing = document.querySelector("#existing");
    let details = JSON.parse(localStorage.getItem("detail"))||[]
    existing.style.display="none";
    submit.addEventListener("click",(e)=>{
        if(checkbox.checked){
            alert(`Logged in as ${userName.value}`)
            let obj = {
                name : userName.value,
                password : password.value
            }
            details.push(obj)
            localStorage.setItem("detail",JSON.stringify(details));
        }
        else{
            alert(`Logged in as ${userName.value}`)
            let localData = JSON.parse(localStorage.getItem("detail"))
            for(let t of localData){
                if(t.name ==userName.value && t.password == password.value){
                    localStorage.removeItem("detail")
                }
            }

        }
    })
    let dataOflocal = JSON.parse(localStorage.getItem("detail"))
                if(dataOflocal.length != 0){
                    existing.style.display = (existing.style.display="none")?"inline-block":"none";
                }
    existing.addEventListener("click",(e)=>{
        alert(`Logged in as ${dataOflocal[0].name}`)
    })
   