
# script-system

A system for executing arbitrary update scripts attached to game objects in the Whirlibulf game engine.

## Required Components

* [whirlibulf/script-component](http://github.com/whirlibulf/script-component)

## Installation

    $ component install whirlibulf/script-system

## Usage

The system calls the `update` function of each script object listed in the script component.

The system itself has no options available.

Register the system:

    var scriptSystem = require('script-system');
    game.use(new scriptSystem());

### Script Component

This system requires the [whirlibulf/script-component](http://github.com/whirlibulf/script-component) component.

The component instance options should contain a list of script objects which have an `update` function:

    game.scripts.controller = {
      update: function (obj, dt) {
        //...do stuff here
      }
    };

    game.add('object id', 'script', {
      scripts: [game.scripts.controller]
    });

Scripts will be called for each object in the order in which they are listed.

The update function is called with two parameters:

`obj` is the parent object of the component.
Through this you can access other components of the object.
Do not keep a reference of this object, otherwise the engine cannot delete it.

`dt` is the time elapsed in milliseconds since the last update.


## License

  MIT
