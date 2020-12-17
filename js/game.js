var game = {
    init: function() {
        // Get Handler for game canvas and context
        game.canvas = document.getElementById("gamecanvas");
        game.context = game.canvas.getContext("2d");

        // Hide all game layers and display the start Screen

        game.hideScreens();
        game.showScreen("gamestartscreen");
    },

    hideScreens : function () {
        var screens = document.getElementsByClassName("gamelayer");

        // Iterate through all game layers and set their display to none

        for (let i = screens.length-1; i >=0; i--){
           var screen = screens[i];
           screen.style.display = "none";
        }
    },

    hideScreen: function (id) {
        var screen = document.getElementById(id);
        screen.style.display = "none";
    },

    showScreen: function (id) {
        var screen = document.getElementById(id);
        screen.style.display = "block";
    }
}