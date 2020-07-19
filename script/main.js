$(function () {
    console.log(localStorage);

    function saveState() {
        // enregister dans localStorage
        let tab = $("#tabs").tabs("option", "active") // Indice de l'onglet (tab) activé (0, 1 ou 2)
        localStorage.setItem("tab", JSON.stringify(tab));

        let box1 = $("#dialog1").parent().offset() // Objet position (left, top par rapport au document) de la première boite de dialogue  (son parent-wrapper en fait)
        let box2 = $("#dialog2").parent().offset() // Idem pour la seconde boite de dialogue

        localStorage.setItem("box1", JSON.stringify(box1));
        localStorage.setItem("box2", JSON.stringify(box2));


        let master = $("#master").slider("option", "value"); // Valeur du curseur (slider) horizontal
        localStorage.setItem("master", master);

        let tabEq = []
        $("#eq > span").each(function () {
            tabEq.push($(this).slider("option", "value")) // Valeur de chacun des curseurs verticaux, traitées en boucle jQuery
            localStorage.setItem("tabEq", JSON.stringify(tabEq));
        });

        let test = $("#test").val()
        localStorage.setItem("test", test);
    }

    function setState() {

        //restituer l'ensemble des états
        $("#tabs").tabs("option", "active", localStorage.getItem("tab")); // Change l'indice de l'onglet (indice est un entier)
        $("#dialog1").parent().offset(JSON.parse(localStorage.getItem("box1"))); // Change la position de la première boite de dialogue (pos est un objet au format {"top":117,"left":1167.5})
        $("#dialog2").parent().offset(JSON.parse(localStorage.getItem("box2"))); // Idem seconde boite de dialogue
        $("#master").slider("option", "value", localStorage.getItem("master")); // Change la position du curseur horizontal (valeur est un entier)

        let i = 0;
        const tabQ = JSON.parse(localStorage.getItem("tabEq"));
        $("#eq > span").each(function () {
            $(this).slider("option", "value", tabQ[i]); // Change la position de chaque curseur vertical (valeur est un entier)
            i++
        });

        $("#test").val(localStorage.getItem("test"));
    }

    $(window).unload(function () {
        saveState();
    });

    $(window).load(function () {
        setState();
    });
});





