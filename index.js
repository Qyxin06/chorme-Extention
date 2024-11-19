let myLeads = `["www.awesomelead.com"]`
//into array
myLeads = JSON.parse(myleads)
//push the array
myLeads.push("Hi")
//into string
myleads = JSON.stringify(myleads)
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

localStorage.setItem("myLeads","Hello")
localStorage.getItem("Hi")
localStorage.clear

inputBtn.addEventListener("click",function(){
    myLeads.push(inputEl.value);
    renderLeads()
    inputEl.value = ""
})

function renderLeads() {
    let listItems = ""
    for (let i = 0; i < myLeads.length; i++) {
        listItems += `
            <li>
                <a target='_blank' href="${myLeads[i]}">
                    ${myLeads[i]} 
                </a>
            </li>`
    }
    ulEl.innerHTML = listItems  
}

