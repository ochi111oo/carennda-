window.onload = function () {
    var a = 1;
    var table = document.createElement("table");
    for (var h = 0; h < 7; h++) {
        var tr = document.createElement("tr");
        for (var i = 0; i < 7; i++) {
            var td = document.createElement("td");
            td.textContent = "" + a;
            tr.appendChild(td);
            a++;
        }
        table.appendChild(tr);
    }
    document.body.appendChild(table);
};
