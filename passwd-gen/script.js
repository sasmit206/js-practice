
const length=10
const includeAlphabets=document.getElementById("IncludeAlphabets")
const includeNumber=document.getElementById("IncludeNumber")
const includeSymbol=document.getElementById("IncludeSymbol")


function gen_pwd(ilc,iuc,inum,isym){
    let allowedchar = ""
    let pwd = ""
    const lc="qwertyuiopasdfghjklzxcvbnm";
    const uc="QWERTYUIOPASDFGHJKLZXCVBNM";
    const num="0123456789";
    const sym="!@#$%^&*()_+~";
    allowedchar += includeAlphabets.checked ? lc + uc : "";
    allowedchar += includeNumber.checked ? num : "";
    allowedchar += includeSymbol.checked ? sym : "";


     if (allowedchar === "") {
        password.textContent = "select something idiot";
        return '';
    }

    for (let i = 0; i < length; i++) {
        pwd += allowedchar[Math.floor(Math.random() * allowedchar.length)];
    }

    password.textContent = "generated pwd: " + pwd;
    return '';
}
