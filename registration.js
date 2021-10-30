function Username(){
    var username1 = document.getElementById("UserName")
    if (username1.value.length<6 || username1.value.length>50){
        var userdiv = document.getElementById("user1");
        if (userdiv){
            userdiv.classList.add("has-error");
            userdiv.classList.remove("has-success");
            var userlen1 = document.getElementById("userlen");
            if (userlen1){
                userlen1.classList.add("show");
                userlen1.classList.remove("hide");
            }
            return true;
        }
    } else {
        var userdiv = document.getElementById("user1");
        if (userdiv){
            userdiv.classList.remove("has-error");
            userdiv.classList.add("has-success");
            var userlen1 = document.getElementById("userlen");
            if (userlen1){
                userlen1.classList.remove("show");
                userlen1.classList.add("hide");
            }
        }
        return false;
    }
}

function Passwords1() {
    var init = document.getElementById("Password");
    var sec = document.getElementById("Rpassword");
    var paswd=  /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$/;
    if (!(init.value.match(paswd)))
    {
        var initDiv = document.getElementById("pass");
        if (initDiv) {

            initDiv.classList.add("has-error");
            initDiv.classList.remove("has-success");
        }
        var passlength = document.getElementById("passlen");
        if (passlength) {
            passlength.classList.add("show");
            passlength.classList.remove("hide");
        }
        return true;
    } else {
        var initDiv = document.getElementById("pass");
        if (initDiv) {
            initDiv.classList.remove("has-error");
            initDiv.classList.add("has-success");
        }
        var passlength = document.getElementById("passlen");
        if (passlength) {
            passlength.classList.remove("show");
            passlength.classList.add("hide");
        }
        return false;

    }

    var init = document.getElementById("Password");
    var sec = document.getElementById("Rpassword");

    if (init && sec) {
        if (init.value == "") {
            var initDiv = document.getElementById("pass");
            if (initDiv) {
                initDiv.classList.add("has-error");
                initDiv.classList.remove("has-success");
            }
            var initErr = document.getElementById("passErr");
            if (initErr) {
                initErr.classList.remove("hide");
                initErr.classList.add("show");
            }
            return true;
        } else {
            var initDiv = document.getElementById("pass");
            if (initDiv) {
                initDiv.classList.remove("has-error");
                initDiv.classList.add("has-success");
            }
            var initErr = document.getElementById("passErr");
            if (initErr) {
                initErr.classList.add("hide");
                initErr.classList.remove("show");
            }
            return false;
        }

    }
}

    function Passwords2() {
        var init = document.getElementById("Password");
        var sec = document.getElementById("Rpassword");
        if (init.value != sec.value) {
            var secDiv = document.getElementById("reppass");
            if (secDiv) {
                secDiv.classList.add("has-error");
                secDiv.classList.remove("has-success");
            }
            var secErr = document.getElementById("verPassErr");
            if (secErr) {
                secErr.classList.remove("hide");
                secErr.classList.add("show");
            }
            return true;
        } else {
            var secDiv = document.getElementById("reppass");
            if (secDiv) {
                secDiv.classList.remove("has-error");
                secDiv.classList.add("has-success");
            }
            var secErr = document.getElementById("verPassErr");
            if (secErr) {
                secErr.classList.add("hide");
                secErr.classList.remove("show");
            }
            return false;
        }
    }

    function firstname() {
        var fname = document.getElementById("Firstname");
        var err = document.getElementById("fnameerr");
        var fnamediv = document.getElementById("fname");
        if (fname) {
            if (fname.value.length > 50 || fname.value.length == 0) {
                if (fnamediv) {
                    fnamediv.classList.add("has-error");
                    fnamediv.classList.remove("has-success");
                }
                if (err) {
                    err.classList.remove("hide");
                    err.classList.add("show");
                }
                return true;
            } else {
                var fnamediv = document.getElementById("fname");
                if (fnamediv) {
                    fnamediv.classList.remove("has-error");
                    fnamediv.classList.add("has-success");
                }
                var err = document.getElementById("fnameerr");
                if (err) {
                    err.classList.add("hide");
                    err.classList.remove("show");
                }
                return false;
            }
        }
    }

    function lastname() {
        var lname = document.getElementById("LastName");
        var lerr = document.getElementById("lnameerr");
        var lnamediv = document.getElementById("lname");
        if (fname) {
            if (lname.value.length > 50 || lname.value.length == 0) {
                if (lnamediv) {
                    lnamediv.classList.add("has-error");
                    lnamediv.classList.remove("has-success");
                }
                if (lerr) {
                    lerr.classList.remove("hide");
                    lerr.classList.add("show");
                }
                return true;
            } else {
                var lnamediv = document.getElementById("lname");
                if (lnamediv) {
                    lnamediv.classList.remove("has-error");
                    lnamediv.classList.add("has-success");
                }
                var lerr = document.getElementById("lnameerr");
                if (lerr) {
                    lerr.classList.add("hide");
                    lerr.classList.remove("show");
                }
                return false;
            }
        }
    }

    function address1() {
        var add1 = document.getElementById("Address1");
        var add1err = document.getElementById("add1err");
        var add1div = document.getElementById("add1");
        if (add1) {
            if (add1.value.length > 100 || add1.value.length == 0) {
                if (add1div) {
                    add1div.classList.add("has-error");
                    add1div.classList.remove("has-success");
                    if (add1err) {
                        add1err.classList.remove("hide");
                        add1err.classList.add("show");
                    }
                }
                return true;
            } else {
                var add1div = document.getElementById("add1");
                if (add1div) {
                    add1div.classList.remove("has-error");
                    add1div.classList.add("has-success");
                }
                var aerr = document.getElementById("add1err");
                if (aerr) {
                    aerr.classList.add("hide");
                    aerr.classList.remove("show");
                }
                return false;
            }
        }
    }

    function address2() {
        var add2 = document.getElementById("Address2");
        var add2err = document.getElementById("add2err");
        var add2div = document.getElementById("add2");
        if (add2) {
            if (add2.value.length > 100) {
                if (add2div) {
                    add2div.classList.add("has-error");
                    add2div.classList.remove("has-success");
                    if (add2err) {
                        add2err.classList.remove("hide");
                        add2err.classList.add("show");
                    }
                }
                return true;
            } else {
                var add2div = document.getElementById("add2");
                if (add2div) {
                    add2div.classList.remove("has-error");
                    add2div.classList.add("has-success");
                }
                var add2err = document.getElementById("add2err");
                if (add2err) {
                    add2err.classList.add("hide");
                    add2err.classList.remove("show");
                }
                return false;
            }

        }
    }

    function city() {
        var city = document.getElementById("City");
        var cityerr = document.getElementById("cityerr");
        var citydiv = document.getElementById("citydiv");
        if (city) {
            if (city.value.length > 50 || city.value == 0) {
                if (citydiv) {
                    citydiv.classList.add("has-error");
                    citydiv.classList.remove("has-success");
                    if (cityerr) {
                        cityerr.classList.remove("hide");
                        cityerr.classList.add("show");
                    }
                }
                return true;
            } else {
                var citydiv = document.getElementById("citydiv");
                if (citydiv) {
                    citydiv.classList.remove("has-error");
                    citydiv.classList.add("has-success");
                }
                var cityerr = document.getElementById("cityerr");
                if (cityerr) {
                    cityerr.classList.add("hide");
                    cityerr.classList.remove("show");
                }
                return false;
            }

        }
    }

    function add_hyphen() {
        var input = document.getElementById("zipcode");
        var str = input.value;
        str = str.replace("-", "");
        if (str.length > 5) {
            str = str.substring(0, 5) + "-" + str.substring(5);
        }
        input.value = str
    }

    function add_hyphen2() {
        var input = document.getElementById("phonenumber");
        var str = input.value;
        str = str.replace("-", "");
        if (str.length == 10) {
            str = str.substring(0, 3) + "-" + str.substring(3, 6) + "-" + str.substring(6);
        }
        input.value = str
    }


    function zip() {
        var zip = document.getElementById("zipcode");
        var ziperr = document.getElementById("ziperr");
        var zipdiv = document.getElementById("zip");
        if (zip) {
            if (zip.value.length > 11 || zip.value.length < 5) {
                if (zipdiv) {
                    zipdiv.classList.add("has-error");
                    zipdiv.classList.remove("has-success");
                    if (ziperr) {
                        ziperr.classList.remove("hide");
                        ziperr.classList.add("show");
                    }
                }
                return true;
            } else {
                var zipdiv = document.getElementById("zip");
                if (zipdiv) {
                    zipdiv.classList.remove("has-error");
                    zipdiv.classList.add("has-success");
                }
                var ziperr = document.getElementById("ziperr");
                if (ziperr) {
                    ziperr.classList.add("hide");
                    ziperr.classList.remove("show");
                }
                return false;
            }

        }

    }


    function number() {
        var num = document.getElementById("phonenumber");
        var numerr = document.getElementById("numerr");
        var numdiv = document.getElementById("num");
        if (num) {
            if (num.value.length != 12) {
                if (numdiv) {
                    numdiv.classList.add("has-error");
                    numdiv.classList.remove("has-success");
                    if (numerr) {
                        numerr.classList.remove("hide");
                        numerr.classList.add("show");
                    }
                }
                return true;
            } else {
                var numdiv = document.getElementById("num");
                if (numdiv) {
                    numdiv.classList.remove("has-error");
                    numdiv.classList.add("has-success");
                }
                var numerr = document.getElementById("numerr");
                if (numerr) {
                    numerr.classList.add("hide");
                    numerr.classList.remove("show");
                }
                return false;
            }

        }

    }

    function bday() {
        var bday = document.getElementById("birthDay");
        var bdayerr = document.getElementById("bdayerr");
        var bdaydiv = document.getElementById("bdaydiv");
        if (bday) {
            if (bday.value.length = 0) {
                if (bdaydiv) {
                    bdaydiv.classList.add("has-error");
                    bdaydiv.classList.remove("has-success");
                    if (bdayerr) {
                        bdayerr.classList.remove("hide");
                        bdayerr.classList.add("show");
                    }
                }
                return true;
            } else {
                var bdaydiv = document.getElementById("bdaydiv");
                if (bdaydiv) {
                    bdaydiv.classList.remove("has-error");
                    bdaydiv.classList.add("has-success");
                }
                var bdayerr = document.getElementById("bdayerr");
                if (bdayerr) {
                    bdayerr.classList.add("hide");
                    bdayerr.classList.remove("show");
                }
                return false;
            }

        }

    }

    function submit() {
       if (Username || Passwords1 || Passwords2 || firstname || lastname || address1 || address2 || city || zip || number || bday){
        var subBtn = document.getElementById("submitButton");
        if (subBtn) {
        subBtn.disabled = false;
        }
        else{
        var subBtn = document.getElementById("submitButton");
        subBtn.disabled = false;
        }
        }
        //var subbtn= document.getElementById("submitButton");
        //subbtn.disabled = false;
    }


    function registerHandlers() {
        document.getElementById("UserName").onblur = Username;
        document.getElementById("Password").onblur = Passwords1;
        document.getElementById("Rpassword").onblur = Passwords2;
        document.getElementById("Firstname").onblur = firstname;
        document.getElementById("LastName").onblur = lastname;
        document.getElementById("Address1").onblur = address1;
        document.getElementById("Address2").onblur = address2;
        document.getElementById("City").onblur = city;
        document.getElementById("zipcode").onblur = zip;
        document.getElementById("phonenumber").onblur = number;
        document.getElementById("birthDay").onblur = bday;
        document.getElementById("sub").onmouseover = submit;

    }
