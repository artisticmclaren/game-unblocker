function setCookie(name, value, daysToLive) {
    const date=new Date();
    date.setTime(date.getTime()+daysToLive*24*60*60*1000);
    let expires='expires='+date.toUTCString();
    document.cookie=`${name}=${value}; ${expires} path=/`;
}

function deleteCookie(name) {
    setCookie(name, null, null)
}

function getCookie(name) {
    const cDecode=decodeURIComponent(document.cookie);
    const cArray=cDecode.split("; ");
    let result=null;
    
    cArray.forEach(element => {
        if (element.indexOf(name) == 0) {
            result=element.substring(name.length+1);
        }
    });
    return result
}

function SetTitle(cookieName) {
    let newTitle=getCookie(cookieName);
    window.top.document.title=newTitle;
}

let title=setCookie('title','New Tab',9999999);
console.log(document.cookie);

SetTitle("title");

// settings

const newtitle=document.querySelector('#new-title');
const newicon=document.querySelector('#icon-link');

const applyBtn=document.querySelector('#apply');
const resetBtn=document.querySelector('#reset');

applyBtn.addEventListener('click', () => {
   setCookie('title', newtitle.value);
    setCookie('icon', newicon.value);
    SetTitle('title');
});

resetBtn.addEventListener('click', () => {
    setCookie('title', 'New Tab');
    deleteCookie('icon');
    SetTitle('title');
})