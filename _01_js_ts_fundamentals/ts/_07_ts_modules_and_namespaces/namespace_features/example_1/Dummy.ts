
/* Below is a TypeScript convention and NOT a Vanilla JavaScript feature.
* The following line of code is an example of how you import a namespace
* in TypeScript */

/// <reference path="drag-drop-interfaces.ts" />

import Draggable = DDInterfaces.Draggable;

class Dummy implements Draggable {

}