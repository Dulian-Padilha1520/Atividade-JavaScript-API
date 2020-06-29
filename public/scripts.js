function onOff(){
    document
        .querySelector("#Solicitado")
        .classList
        .toggle("hide")
    
    document
        .querySelector("body")
        .classList
        .toggle("hideScroll")

    document
        .querySelector("#Solicitado")
        .classList
        .toggle("addScroll")
}
$('input[name="campo-radio"]').change(function () {
    if ($('input[name="campo-radio"]:checked').val() === "Sim") {
        $('.esconde').show();
    } else {
        $('.esconde').hide();
    }
});