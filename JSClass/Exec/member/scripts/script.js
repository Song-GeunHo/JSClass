function req (val) {
        const ID = val;
        const pw = document.getElementById("pw");
        const PW = pw.value;

        if(PW==""||PW.length<8) {
                
        } else location.href = `test.html?${ID}?${PW}`;
}

function is_ID(val) {
        let regExp = /^\w+@\w+\.\w+(\.\w+)?$/;
        return regExp.test(val);
}

// function rule_input(this) {
//         let val = this.value;
//         if(val.length == 8) this.style.outlineColor = "#106EBE";
// }