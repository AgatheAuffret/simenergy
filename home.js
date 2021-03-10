

$(function () {


    $('[id*=region_').on('click', function () {

        let region = $(this);

        let regionId = $(this)["0"].id;
        let allRegion = $('[id*=region_');

        console.log(regionId);

        allRegion.css('fill', '#3025AE');
        region.css('fill', '#1D176B');

        // regionId = regionId.replace('region_', '');
        // let boucle = true;
        // do {
        //     regionId = regionId.replace('_', ' ');
        //     if (regionId.indexOf('_') == -1)
        //         boucle = false;
        // }

        // while (boucle);
        // $('#infosRegion').text(regionId);
        // console.log(regionId);
    });

    $( "#region_bretagne" ).click(function() {
        document.getElementById("infosBretagne").style.display = "block";
        if(document.getElementById("infosBretagne").style.display == "block"){
            document.getElementById("infosNormandie").style.display = "none";
            document.getElementById("infosIleDeFrance").style.display = "none";
            document.getElementById("infosHautDeFrance").style.display = "none";
            document.getElementById("infosGrandEst").style.display = "none";
            document.getElementById("infosPaysDeLaLoire").style.display = "none";
            document.getElementById("infosCentreValDeLoire").style.display = "none";
            document.getElementById("infosBourgogneFrancheComte").style.display = "none";
            document.getElementById("infosAlpesCotesAzure").style.display = "none";
            document.getElementById("infosNouvelleAquitaine").style.display = "none";
            document.getElementById("infosRhoneAlpes").style.display = "none";
            document.getElementById("infosOccitanie").style.display = "none";
        }
        

    });

    $( "#region_normandie" ).click(function() {
        document.getElementById("infosNormandie").style.display = "block";
        document.getElementById("infosBretagne").style.display = "none";
        document.getElementById("infosIleDeFrance").style.display = "none";
        document.getElementById("infosHautDeFrance").style.display = "none";
        document.getElementById("infosGrandEst").style.display = "none";
        document.getElementById("infosPaysDeLaLoire").style.display = "none";
        document.getElementById("infosCentreValDeLoire").style.display = "none";
        document.getElementById("infosBourgogneFrancheComte").style.display = "none";
        document.getElementById("infosAlpesCotesAzure").style.display = "none";
        document.getElementById("infosNouvelleAquitaine").style.display = "none";
        document.getElementById("infosRhoneAlpes").style.display = "none";
        document.getElementById("infosOccitanie").style.display = "none";

    });

    $( "#region_ile_de_france" ).click(function() {
        document.getElementById("infosIleDeFrance").style.display = "block";
        document.getElementById("infosBretagne").style.display = "none";
        document.getElementById("infosNormandie").style.display = "none";
        document.getElementById("infosHautDeFrance").style.display = "none";
        document.getElementById("infosGrandEst").style.display = "none";
        document.getElementById("infosPaysDeLaLoire").style.display = "none";
        document.getElementById("infosCentreValDeLoire").style.display = "none";
        document.getElementById("infosBourgogneFrancheComte").style.display = "none";
        document.getElementById("infosAlpesCotesAzure").style.display = "none";
        document.getElementById("infosNouvelleAquitaine").style.display = "none";
        document.getElementById("infosRhoneAlpes").style.display = "none";
        document.getElementById("infosOccitanie").style.display = "none";

    });

    $( "#region_hauts_de_france" ).click(function() {
        document.getElementById("infosHautDeFrance").style.display = "block";
        document.getElementById("infosBretagne").style.display = "none";
        document.getElementById("infosNormandie").style.display = "none";
        document.getElementById("infosIleDeFrance").style.display = "none";
        document.getElementById("infosGrandEst").style.display = "none";
        document.getElementById("infosPaysDeLaLoire").style.display = "none";
        document.getElementById("infosCentreValDeLoire").style.display = "none";
        document.getElementById("infosBourgogneFrancheComte").style.display = "none";
        document.getElementById("infosAlpesCotesAzure").style.display = "none";
        document.getElementById("infosNouvelleAquitaine").style.display = "none";
        document.getElementById("infosRhoneAlpes").style.display = "none";
        document.getElementById("infosOccitanie").style.display = "none";

    });

    $( "#region_grand_est" ).click(function() {
        document.getElementById("infosGrandEst").style.display = "block";
        document.getElementById("infosBretagne").style.display = "none";
        document.getElementById("infosNormandie").style.display = "none";
        document.getElementById("infosIleDeFrance").style.display = "none";
        document.getElementById("infosHautDeFrance").style.display = "none";
        document.getElementById("infosPaysDeLaLoire").style.display = "none";
        document.getElementById("infosCentreValDeLoire").style.display = "none";
        document.getElementById("infosBourgogneFrancheComte").style.display = "none";
        document.getElementById("infosAlpesCotesAzure").style.display = "none";
        document.getElementById("infosNouvelleAquitaine").style.display = "none";
        document.getElementById("infosRhoneAlpes").style.display = "none";
        document.getElementById("infosOccitanie").style.display = "none";

    });

    $( "#region_pays_de_la_loire" ).click(function() {
        document.getElementById("infosPaysDeLaLoire").style.display = "block";
        document.getElementById("infosBretagne").style.display = "none";
        document.getElementById("infosNormandie").style.display = "none";
        document.getElementById("infosIleDeFrance").style.display = "none";
        document.getElementById("infosHautDeFrance").style.display = "none";
        document.getElementById("infosGrandEst").style.display = "none";
        document.getElementById("infosCentreValDeLoire").style.display = "none";
        document.getElementById("infosBourgogneFrancheComte").style.display = "none";
        document.getElementById("infosAlpesCotesAzure").style.display = "none";
        document.getElementById("infosNouvelleAquitaine").style.display = "none";
        document.getElementById("infosRhoneAlpes").style.display = "none";
        document.getElementById("infosOccitanie").style.display = "none";

    });

    $( "#region_centre_val_de_loire" ).click(function() {
        document.getElementById("infosCentreValDeLoire").style.display = "block";
        document.getElementById("infosBretagne").style.display = "none";
        document.getElementById("infosNormandie").style.display = "none";
        document.getElementById("infosIleDeFrance").style.display = "none";
        document.getElementById("infosHautDeFrance").style.display = "none";
        document.getElementById("infosGrandEst").style.display = "none";
        document.getElementById("infosPaysDeLaLoire").style.display = "none";
        document.getElementById("infosBourgogneFrancheComte").style.display = "none";
        document.getElementById("infosAlpesCotesAzure").style.display = "none";
        document.getElementById("infosNouvelleAquitaine").style.display = "none";
        document.getElementById("infosRhoneAlpes").style.display = "none";
        document.getElementById("infosOccitanie").style.display = "none";

    });

    $( "#region_bourgogne_franche_comte" ).click(function() {
        document.getElementById("infosBourgogneFrancheComte").style.display = "block";
        document.getElementById("infosBretagne").style.display = "none";
        document.getElementById("infosNormandie").style.display = "none";
        document.getElementById("infosIleDeFrance").style.display = "none";
        document.getElementById("infosHautDeFrance").style.display = "none";
        document.getElementById("infosGrandEst").style.display = "none";
        document.getElementById("infosPaysDeLaLoire").style.display = "none";
        document.getElementById("infosCentreValDeLoire").style.display = "none";
        document.getElementById("infosAlpesCotesAzure").style.display = "none";
        document.getElementById("infosNouvelleAquitaine").style.display = "none";
        document.getElementById("infosRhoneAlpes").style.display = "none";
        document.getElementById("infosOccitanie").style.display = "none";
    });

    $( "#region_provence_alpes_cotes_dazure" ).click(function() {
        document.getElementById("infosAlpesCotesAzure").style.display = "block";
        document.getElementById("infosBretagne").style.display = "none";
        document.getElementById("infosNormandie").style.display = "none";
        document.getElementById("infosIleDeFrance").style.display = "none";
        document.getElementById("infosHautDeFrance").style.display = "none";
        document.getElementById("infosGrandEst").style.display = "none";
        document.getElementById("infosPaysDeLaLoire").style.display = "none";
        document.getElementById("infosCentreValDeLoire").style.display = "none";
        document.getElementById("infosBourgogneFrancheComte").style.display = "none";
        document.getElementById("infosNouvelleAquitaine").style.display = "none";
        document.getElementById("infosRhoneAlpes").style.display = "none";
        document.getElementById("infosOccitanie").style.display = "none";
    });

    $( "#region_nouvelle_aquitaine" ).click(function() {
        document.getElementById("infosNouvelleAquitaine").style.display = "block";
        document.getElementById("infosBretagne").style.display = "none";
        document.getElementById("infosNormandie").style.display = "none";
        document.getElementById("infosIleDeFrance").style.display = "none";
        document.getElementById("infosHautDeFrance").style.display = "none";
        document.getElementById("infosGrandEst").style.display = "none";
        document.getElementById("infosPaysDeLaLoire").style.display = "none";
        document.getElementById("infosCentreValDeLoire").style.display = "none";
        document.getElementById("infosBourgogneFrancheComte").style.display = "none";
        document.getElementById("infosAlpesCotesAzure").style.display = "none";
        document.getElementById("infosRhoneAlpes").style.display = "none";
        document.getElementById("infosOccitanie").style.display = "none";
    });

    $( "#region_auvergne_rhone_alpes" ).click(function() {
        document.getElementById("infosRhoneAlpes").style.display = "block";
        document.getElementById("infosBretagne").style.display = "none";
        document.getElementById("infosNormandie").style.display = "none";
        document.getElementById("infosIleDeFrance").style.display = "none";
        document.getElementById("infosHautDeFrance").style.display = "none";
        document.getElementById("infosGrandEst").style.display = "none";
        document.getElementById("infosPaysDeLaLoire").style.display = "none";
        document.getElementById("infosCentreValDeLoire").style.display = "none";
        document.getElementById("infosBourgogneFrancheComte").style.display = "none";
        document.getElementById("infosAlpesCotesAzure").style.display = "none";
        document.getElementById("infosNouvelleAquitaine").style.display = "none";
        document.getElementById("infosOccitanie").style.display = "none";
    });

    $( "#region_occitanie" ).click(function() {
        document.getElementById("infosOccitanie").style.display = "block";
        document.getElementById("infosBretagne").style.display = "none";
        document.getElementById("infosNormandie").style.display = "none";
        document.getElementById("infosIleDeFrance").style.display = "none";
        document.getElementById("infosHautDeFrance").style.display = "none";
        document.getElementById("infosGrandEst").style.display = "none";
        document.getElementById("infosPaysDeLaLoire").style.display = "none";
        document.getElementById("infosCentreValDeLoire").style.display = "none";
        document.getElementById("infosBourgogneFrancheComte").style.display = "none";
        document.getElementById("infosAlpesCotesAzure").style.display = "none";
        document.getElementById("infosNouvelleAquitaine").style.display = "none";
        document.getElementById("infosRhoneAlpes").style.display = "none";

    });

})
