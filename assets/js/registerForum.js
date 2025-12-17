async function setSystemForRegister() {

    $("#register-date").val(toPersianDate(new Date()));

    // $(".content-contact-form-container").fadeIn();
    // $("#loading-overlay").fadeOut();    

    $("[typeofdata=\"favor\"]").change(function (e) { 
        e.preventDefault();

        $("[typeofdata=\"favor_final\"]").val($("[typeofdata=\"favor_final\"]").val() + ' - ' + $(this).val())
    });


    $("#content-contact-form").on("submit", (e) => {
        e.preventDefault();
        $(".content-btn-submit").text("...").prop("disabled", true);
        const WEBHOOK_URL = `https://api.smetu.ir/forumreg`;

        const first_name = $("[typeofdata=\"fname\"]").val().trim();
        const last_name = $("[typeofdata=\"lname\"]").val().trim();

        const father_name = $("[typeofdata=\"father_name\"]").val().trim();
        const codemelli = $("[typeofdata=\"codemelli\"]").val().trim();

        const birth_place = $("[typeofdata=\"birth_place\"]").val().trim();
        const reshte_tahsili = $("[typeofdata=\"reshte_tahsili\"]").val().trim();

        const gerayesh_magtaa = $("[typeofdata=\"gerayesh_magtaa\"]").val().trim();

        const code_daneshjoei = $("[typeofdata=\"code_daneshjoei\"]").val().trim();
        const voroodi = $("[typeofdata=\"voroodi\"]").val().trim();

        const phonenum = $("[typeofdata=\"phonenum\"]").val().trim();
        const address = $("[typeofdata=\"address\"]").val().trim();

        const favor_final = $("[typeofdata=\"favor_final\"]").val().trim();

        const telegram_id = $("[typeofdata=\"telg\"]").val().trim();
        
        const sabeghe_faaliat = $("[typeofdata=\"sabeghe_faaliat\"]").val().trim();
        
        $.ajax({
            url: WEBHOOK_URL,
            method: "POST",
            contentType: "application/json",
            data: JSON.stringify({                
                first_name,
                last_name,
                father_name,
                codemelli,
                birth_place,
                reshte_tahsili,
                gerayesh_magtaa,
                code_daneshjoei,
                voroodi,
                phonenum,
                address,
                favor_final,
                telegram_id,
                sabeghe_faaliat
            }),
            success: function (data) {
                 if (data.ok === true) {
                    $(".content-btn-submit").text("ثبت نام").prop("disabled", false);
                        Swal.fire({
                            title: 'عملیات موفق!',
                            text: 'کارشناسان ما از طریق تلگرام با شما در تماس خواهند بود.',
                            icon: 'success',
                            confirmButtonText: 'باشه',                           
                            background: '#2f2f2f', 
                            color: '#ffffff',       
                            confirmButtonColor: '#2ea2cc' 
                        });
            }
        },
            error: function (err) {
                console.log("ERR:", err);
            }
        });         


    });
    
    

}