let myLeads=[];

const inputEl= document.getElementById("input-el");
const inputBtn= document.getElementById("input-btn");
const ulEl=document.getElementById("ul-el");
const deleteBtn=document.getElementById("delete-el");
const saveBtn= document.getElementById("save-el")
//Chrome tabs have this same structure 
//const tabs=[ {url:"www.exampleLead.com"}];

saveBtn.addEventListener("click",function(){
    //console.log(tabs[0].name);
    chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
    myLeads.push(tabs[0].url);
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    render(myLeads);
})
}
)



let leadsFromlocalstorage=JSON.parse(localStorage.getItem("myLeads")) ;
console.log(leadsFromlocalstorage);

if(leadsFromlocalstorage){
    myLeads=leadsFromlocalstorage;
    render(myLeads);
}
function render(Leads){
    let listItems="";
    for(let i=0; i<Leads.length; i++){
        listItems += `
        <li>
            <a target='_blank' 
                href='${Leads[i]}'>${Leads[i]}
            </a>
        </li>
        `;
        console.log(listItems);
    }
    
ulEl.innerHTML = listItems;
}

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value);
    inputEl.value="";
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    render(myLeads);
    
    
})

deleteBtn.addEventListener('dblclick',function(){
    localStorage.clear();
    myLeads=[];
    render(myLeads);
  
})

