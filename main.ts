window.onload=function(){
    let a=1
    const table=document.createElement("table")
    for(let h=0;h<7;h++){
const tr=document.createElement("tr")
for(let i=0;i<7;i++){
const td=document.createElement("td")
td.textContent=""+a
tr.appendChild(td)
a++
}
table.appendChild(tr)}
document.body.appendChild(table)











