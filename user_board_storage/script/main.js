$(function () {
    console.log("ready!");


    console.log(localStorage);

    // localStorage.setItem()

    // enregister dans localStorage
    let tab = $("#tabs").tabs("option", "active") // Indice de l'onglet (tab) activé (0, 1 ou 2)
    localStorage.setItem("tab", JSON.stringify(tab));

    let box1 = $("#dialog1").parent().offset() // Objet position (left, top par rapport au document) de la première boite de dialogue  (son parent-wrapper en fait)
    let box2 = $("#dialog2").parent().offset() // Idem pour la seconde boite de dialogue

    localStorage.setItem("box1", JSON.stringify(box1));
    localStorage.setItem("box2", JSON.stringify(box2));


    let master = $("#master").slider("option", "value"); // Valeur du curseur (slider) horizontal
    localStorage.setItem("master", JSON.stringify(master));

    let tabEq = []
    $("#eq > span").each(function () {
        tabEq.push($(this).slider("option", "value")) // Valeur de chacun des curseurs verticaux, traitées en boucle jQuery
        localStorage.setItem("tabEq", JSON.stringify(tabEq));
    });




});





//restituer l'ensemble des états
// $("#tabs").tabs("option", "active", indice); // Change l'indice de l'onglet (indice est un entier)
// $("#dialog1").parent().offset(pos); // Change la position de la première boite de dialogue (pos est un objet au format {"top":117,"left":1167.5})
// $("#dialog2").parent().offset(pos); // Idem seconde boite de dialogue
// $("#master").slider("option", "value", valeur) // Change la position du curseur horizontal (valeur est un entier)
// this.settings.sliders.eq.forEach((val, index) => {
//     $("#eq > span").eq(index).slider("option", "value", valeur); // Change la position de chaque curseur vertical (valeur est un entier)
// });