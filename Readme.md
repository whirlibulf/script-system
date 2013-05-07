
# script-system

A package for the whirlibulf game engine.

Contains the system and component for update scripts.

## Installation

    $ component install whirlibulf/script-system

## API

### Script System

The system calls the `update` function of each script listed in the script component.

It has no options available.

Example:

    var script = require('script-system');
    game.addSystem(new script.System());

### Script Component

The script component factory has no options available.

The component ID is called `script`.

Example:

    var script = require('script-system');
    game.addComponent(new script.Component());

The component instance options should contain a list of script objects which have an `update` function:

    game.scripts.controller = {
      update: function (obj, dt) {
        //...do stuff here
      }
    };
    game.createComponent('script', {
      scripts: [game.scripts.controller]
    });

Scripts will be called in the order in which they are listed.

The update function is called with two parameters:

`obj` is the parent object of the component.
Through this you can access other components of the object.

`dt` is the time elapsed in milliseconds since the last update.


## License

  MIT
