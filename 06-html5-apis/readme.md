# Guide for Html5 Apis exercise
To mantain this code reusable and more debuggable
i decided to separate into multiples commonjs modules, but,
this make it really long to review, so, i add a quick
reference to what does each module here

## List of Modules:

`/dist/js/modules/LocalStorageModule`: Set LocalStorage and define
events for buttons like save and clear.

`/dist/js/modules/IndexedDBModule`: Set IndexedDB, manage error and
holds the events for clicks on buttons like save and clear.

`/dist/js/modules/WebSocketModule`: Set WebSocket Work.

`/dist/js/modules/DraggableModule`: Make TextAreas draggable.

`/dist/js/modules/RandomColorModule`: Return Random Colors for
Canvas work.

All Modules from `/dist/js/modules/canvas` run the draw script to
the desired canvas element.

All js files inside `/dist/js/` are the first script called on DOM Ready.

Files that finish with `_compiled` are full files compiled with browserify
