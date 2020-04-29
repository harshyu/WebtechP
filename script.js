function validateForm() {
    var x = document.forms["myForm"]["fname"].value;
    if (x == "") {
        alert("Name must be filled out");
        return false;
    }
    var y = document.forms["myForm"]["fname2"].value;
    if (y == "") {
        alert("Please Fill Email !");
        return false;
    }
}