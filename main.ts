
window.onload=function(){
    let a=1,b=1  
    const table=document.createElement("table")
    for(let h=0;h<7;h++){
        const tr=document.createElement("tr")
        for(let i=0;i<7;i++){
            const td=document.createElement("td");  
            if(b>3){
                td.textContent=""+a
                a++
             }if(a>31){
                break
             }
             tr.appendChild(td)
             b++
            }
        table.appendChild(tr)
    if(a>31){
        break
    }
    
    
    }
    document.body.appendChild(table)
}


