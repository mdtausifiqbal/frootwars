var game = {
    init: function() {
        // Get Handler for game canvas and context
        game.canvas = document.getElementById("gamecanvas");
        game.context = game.canvas.getContext("2d");

        // Initialize Objects
        levels.init();
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
    },

    showLevelScreen: function name() {
        game.hideScreens();
        game.showScreen("levelselectscreen");
    }
}

var levels = {
    data: [
        {
            // Level 1
            foreground:"desert-foreground",
            background:"clouds-background",
            entities: []
        },
        {
            // Level 2
            foreground:"desert-foreground",
            background:"clouds-background",
            entities: []
        },
    ],
    init: function () {
        var levelSelectScreen = document.getElementById("levelselectscreen");

        // An event handler to call
        var buttonClickHandler = function () {
            game.hideScreen("levelselectscreen");

            // Load Level
            levels.load(this.value - 1);
        }

        for (let i = 0; i < levels.data.length; i++) {
            var button = document.createElement("input");
            button.type = "button";
            button.value = (i + 1);
            button.addEventListener("click", buttonClickHandler);

            levelSelectScreen.appendChild(button);
            
        }
    },

    load: function (number) {
        
    }
}