window.onload = function () {
    var a = 1, b = 1;
    var table = document.createElement("table");
    for (var h = 0; h < 7; h++) {
        var tr = document.createElement("tr");
        for (var i = 0; i < 7; i++) {
            var td = document.createElement("td");
            if (b > 3) {
                td.textContent = "" + a;
                a++;
            }
            if (a > 31) {
                break;
            }
            tr.appendChild(td);
            b++;
        }
        table.appendChild(tr);
        if (a > 31) {
            break;
        }
    }
    document.body.appendChild(table);
};
