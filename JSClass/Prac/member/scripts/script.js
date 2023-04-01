let submit = document.getElementById("submit");

submit.addEventListener("click", req);

function req () {
        const id = document.getElementById("id").value;
        const pw = document.getElementById("pw").value;
        console.log(id, pw);
       location.href = `test.html?${id}?${pw}`;
}