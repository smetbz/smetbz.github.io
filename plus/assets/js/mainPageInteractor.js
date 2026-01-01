const BASE_URL = `https://api.smetu.ir/miniapp`;

async function auth() {

    const initData = Telegram.WebApp.initData;
    

    $.ajax({
        url: BASE_URL + "/auth",
        method: "POST",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        data: JSON.stringify({
            initData: initData
        }),
        success: function (res) {            
            Telegram.WebApp.CloudStorage.setItem("token", res.token, 
                () => {
                    alert("TOKEN SAVED!")
                }
            )
            alert(`Username : ${res.user.username}\nToken : ${res.token}`);
        },
        error: function (xhr) {
            console.error("Auth failed:", xhr.responseText);
            if(xhr.responseText.includes("NO_TELEGRAM")) {
                window.location.href = "/plus/component-error-page.html";
                return;
            }
            
        }
    });
}

$(document).ready(async function () {
    
    Telegram.WebApp.CloudStorage.getItem("token", (token) => {
        if(!token) {
            auth()
        } else {
            $.ajax({            
                url: BASE_URL + "/me",           
                headers: {
                    "Authorization": "Bearer " + token
                },
                error(xhr) {
                    if(xhr.status === 401) {
                        auth()
                    }
                }
            });
        }
    });

});