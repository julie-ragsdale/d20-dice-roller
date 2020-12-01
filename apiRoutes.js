$(document).ready(function() {

    // Get user input
    function getSelectedSpell(spell) {
        const spell = $('.card-title[data-spellname=""]').text();
        console.log(spell)
    }

    getSelectedSpell(spell);

    // Send request to API
    function getSpellFromAPI(spell) {

        $.get(`https://www.dnd5eapi.co/api/spells/${spell}/`).then(function(response) {

        });

    }

});