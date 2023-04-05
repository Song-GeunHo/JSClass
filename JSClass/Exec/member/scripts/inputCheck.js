const form = document.getElementById("login");
const id = document.getElementById("id")
const pw = document.getElementById("pw");
const idErr = id.nextElementSibling;
const pwErr = pw.nextElementSibling;

const idRegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const pwRegExp = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]$/;

const idIsValid = id.value.length === 0 || idRegExp.test(id.value);
const pwIsValid = pw.value.length === 0 || pwRegExp.test(pw.value);

window.addEventListener("load", () => {
    id.className = idIsValid ? "valid" : "invalid";
    pw.className = pwIsValid ? "valid" : "invalid";
});

id.addEventListener("input", () => {
    if ( !!id.validity.valid ) {
        idErr.textContent = "";
        idErr.className = "error";
    } else showIdError();
});

pw.addEventListener("input", () => {
    if ( !pw.validity.valid ) {
        pwErr.textContent = "";
        pwErr.className = "error"
    } else showPwError();
});

form.addEventListener("submit", (event) => {
    if ( !id.validity.valid ) {
        showIdError();
        event.preventDefault();
    }
    if ( !pw.validity.valid ) {
        showPwError();
        event.preventDefault();
    }
});

function showIdError() {
    id.className = "invalid"
    if ( id.validity.valueMissing ) idErr.textContent = "아이디를 입력해주세요."
    else if ( id.validity.tooShort ) idErr.textContent = `최소 ${id.minLength} 자리 입력이 필요합니다. ${id.value.length}`
    else if ( !idRegExp.test(id.value) ) idErr.textContent = "이메일 형식으로 입력해주세요.";

    idErr.className = "error active";
}

function showPwError() {
    pw.className = "invalid"
    if ( pw.validity.valueMissing ) pwErr.textContent = "비밀번호를 입력해주세요."
    else if ( pw.validity.tooShort ) pwErr.textContent = `최소 ${pw.minLength} 자리 입력이 필요합니다. ${pw.value.length}`
    else if ( !pwRegExp.test(pw.value) ) pwErr.textContent = "영문, 숫자, 특수문자 조합으로 입력해주세요.";

    pwErr.className = "error active";
}

// function checkCustomerInfo() {
//     let id = document.getElementById("id").value;
//     let pw = document.getElementById("pw").value;

//     let name = "고객님";
//     let pass = false;
//     alert("고객 정보 확인 중 !!");
//     const customerInfo = [[ "abcdefG1", "1234Bcd@", "일지매"],
//                                                 [ "abcdefG2", "abcE@2", "김길순"],
//                                                 [ "abcdefG3", "Abc1234#", "제이슨"]];

//         for ( let i=0 ; i < customerInfo.length ; i++ ) {
//             if ( ( id == customerInfo.[i][0] ) && ( pw == customerInfo[i][1] ) ) {
//                 pass = true;
//                 name = customerInfo[i][2];
//                 break;
//             }
//         }
//         if ( pass == false ) {
//             alert("아이디 또는 패스워드가 맞지 않습니다.");
//             window.open("login.html", "_self");
//         } else {
//             sessionStorage.setItem("id", id);
//             sessionStorage.setItem("password", pw);
//             sessionStorage.setItem("name", name);

//             window.open("loginSuccess.html")
//         }
// }