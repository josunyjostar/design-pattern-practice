/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/composite/File.ts":
/*!*******************************!*\
  !*** ./src/composite/File.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ File)
/* harmony export */ });
/* harmony import */ var _Unit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Unit */ "./src/composite/Unit.ts");

class File extends _Unit__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(name, size) {
        super(name);
        this.size = size;
    }
    getSize() {
        return this.size;
    }
}


/***/ }),

/***/ "./src/composite/Folder.ts":
/*!*********************************!*\
  !*** ./src/composite/Folder.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Folder)
/* harmony export */ });
/* harmony import */ var _Unit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Unit */ "./src/composite/Unit.ts");

class Folder extends _Unit__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(name) {
        super(name);
        this.units = [];
    }
    getSize() {
        return this.units.reduce((acc, v) => {
            return acc + v.getSize();
        }, 0);
    }
    add(unit) {
        this.units.push(unit);
    }
    createUnit(unit, dom) {
        const domUnit = document.createElement("div");
        domUnit.classList.add("unit");
        domUnit.innerHTML = `
    <div>
        <span>${unit.getName()}</span>
        <span>(${unit.getSize()})</span>
    </div>`;
        dom.append(domUnit);
        return domUnit;
    }
    list(dom) {
        const domUnit = this.createUnit(this, dom);
        const bFolder = this instanceof Folder;
        if (bFolder) {
            domUnit.classList.add("folder");
            this.units.forEach((v) => {
                if (v instanceof Folder) {
                    v.list(domUnit);
                }
                else {
                    this.createUnit(v, domUnit);
                }
            });
        }
    }
}


/***/ }),

/***/ "./src/composite/Unit.ts":
/*!*******************************!*\
  !*** ./src/composite/Unit.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Unit)
/* harmony export */ });
class Unit {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!********************************!*\
  !*** ./src/composite/index.ts ***!
  \********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _File__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./File */ "./src/composite/File.ts");
/* harmony import */ var _Folder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Folder */ "./src/composite/Folder.ts");


const root = new _Folder__WEBPACK_IMPORTED_MODULE_1__["default"]("root");
root.add(new _File__WEBPACK_IMPORTED_MODULE_0__["default"]("a.txt", 1000));
root.add(new _File__WEBPACK_IMPORTED_MODULE_0__["default"]("b.txt", 2000));
const sub1 = new _Folder__WEBPACK_IMPORTED_MODULE_1__["default"]("sub1");
sub1.add(new _File__WEBPACK_IMPORTED_MODULE_0__["default"]("sa.txt", 100));
sub1.add(new _File__WEBPACK_IMPORTED_MODULE_0__["default"]("sb.txt", 4000));
root.add(sub1);
const subsub = new _Folder__WEBPACK_IMPORTED_MODULE_1__["default"]("sub3");
sub1.add(subsub);
subsub.add(new _File__WEBPACK_IMPORTED_MODULE_0__["default"]("subsub1.txt", 2250));
subsub.add(new _File__WEBPACK_IMPORTED_MODULE_0__["default"]("subsub2.txt", 5340));
const sub2 = new _Folder__WEBPACK_IMPORTED_MODULE_1__["default"]("sub2");
root.add(sub2);
sub2.add(new _File__WEBPACK_IMPORTED_MODULE_0__["default"]("sub2A.txt", 250));
sub2.add(new _File__WEBPACK_IMPORTED_MODULE_0__["default"]("sub2B.txt", 340));
const dom = document.querySelector("#list");
root.list(dom);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQzVDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kZXNpZ25wYXR0ZXJucy8uL3NyYy9jb21wb3NpdGUvRmlsZS50cyIsIndlYnBhY2s6Ly9kZXNpZ25wYXR0ZXJucy8uL3NyYy9jb21wb3NpdGUvRm9sZGVyLnRzIiwid2VicGFjazovL2Rlc2lnbnBhdHRlcm5zLy4vc3JjL2NvbXBvc2l0ZS9Vbml0LnRzIiwid2VicGFjazovL2Rlc2lnbnBhdHRlcm5zL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2Rlc2lnbnBhdHRlcm5zL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9kZXNpZ25wYXR0ZXJucy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2Rlc2lnbnBhdHRlcm5zL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZGVzaWducGF0dGVybnMvLi9zcmMvY29tcG9zaXRlL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBVbml0IGZyb20gXCIuL1VuaXRcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZpbGUgZXh0ZW5kcyBVbml0IHtcclxuICBjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcsIHByaXZhdGUgc2l6ZTogbnVtYmVyKSB7XHJcbiAgICBzdXBlcihuYW1lKTtcclxuICB9XHJcblxyXG4gIGdldFNpemUoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLnNpemU7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCBVbml0IGZyb20gXCIuL1VuaXRcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZvbGRlciBleHRlbmRzIFVuaXQge1xyXG4gIHByaXZhdGUgdW5pdHM6IEFycmF5PFVuaXQ+ID0gW107XHJcbiAgY29uc3RydWN0b3IobmFtZTogc3RyaW5nKSB7XHJcbiAgICBzdXBlcihuYW1lKTtcclxuICB9XHJcblxyXG4gIGdldFNpemUoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLnVuaXRzLnJlZHVjZSgoYWNjLCB2KSA9PiB7XHJcbiAgICAgIHJldHVybiBhY2MgKyB2LmdldFNpemUoKTtcclxuICAgIH0sIDApO1xyXG4gIH1cclxuXHJcbiAgYWRkKHVuaXQ6IFVuaXQpOiB2b2lkIHtcclxuICAgIHRoaXMudW5pdHMucHVzaCh1bml0KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY3JlYXRlVW5pdCh1bml0OiBVbml0LCBkb206IEVsZW1lbnQpOiBIVE1MRGl2RWxlbWVudCB7XHJcbiAgICBjb25zdCBkb21Vbml0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGRvbVVuaXQuY2xhc3NMaXN0LmFkZChcInVuaXRcIik7XHJcbiAgICBkb21Vbml0LmlubmVySFRNTCA9IGBcclxuICAgIDxkaXY+XHJcbiAgICAgICAgPHNwYW4+JHt1bml0LmdldE5hbWUoKX08L3NwYW4+XHJcbiAgICAgICAgPHNwYW4+KCR7dW5pdC5nZXRTaXplKCl9KTwvc3Bhbj5cclxuICAgIDwvZGl2PmA7XHJcblxyXG4gICAgZG9tLmFwcGVuZChkb21Vbml0KTtcclxuICAgIHJldHVybiBkb21Vbml0O1xyXG4gIH1cclxuXHJcbiAgbGlzdChkb206IEVsZW1lbnQpIHtcclxuICAgIGNvbnN0IGRvbVVuaXQgPSB0aGlzLmNyZWF0ZVVuaXQodGhpcywgZG9tKTtcclxuICAgIGNvbnN0IGJGb2xkZXIgPSB0aGlzIGluc3RhbmNlb2YgRm9sZGVyO1xyXG5cclxuICAgIGlmIChiRm9sZGVyKSB7XHJcbiAgICAgIGRvbVVuaXQuY2xhc3NMaXN0LmFkZChcImZvbGRlclwiKTtcclxuICAgICAgdGhpcy51bml0cy5mb3JFYWNoKCh2KSA9PiB7XHJcbiAgICAgICAgaWYgKHYgaW5zdGFuY2VvZiBGb2xkZXIpIHtcclxuICAgICAgICAgIHYubGlzdChkb21Vbml0KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5jcmVhdGVVbml0KHYsIGRvbVVuaXQpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IGFic3RyYWN0IGNsYXNzIFVuaXQge1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbmFtZTogc3RyaW5nKSB7fVxyXG5cclxuICBnZXROYW1lKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5uYW1lO1xyXG4gIH1cclxuXHJcbiAgYWJzdHJhY3QgZ2V0U2l6ZSgpOiBudW1iZXI7XHJcbn1cclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgRmlsZSBmcm9tIFwiLi9GaWxlXCI7XHJcbmltcG9ydCBGb2xkZXIgZnJvbSBcIi4vRm9sZGVyXCI7XHJcblxyXG5jb25zdCByb290ID0gbmV3IEZvbGRlcihcInJvb3RcIik7XHJcbnJvb3QuYWRkKG5ldyBGaWxlKFwiYS50eHRcIiwgMTAwMCkpO1xyXG5yb290LmFkZChuZXcgRmlsZShcImIudHh0XCIsIDIwMDApKTtcclxuXHJcbmNvbnN0IHN1YjEgPSBuZXcgRm9sZGVyKFwic3ViMVwiKTtcclxuc3ViMS5hZGQobmV3IEZpbGUoXCJzYS50eHRcIiwgMTAwKSk7XHJcbnN1YjEuYWRkKG5ldyBGaWxlKFwic2IudHh0XCIsIDQwMDApKTtcclxuXHJcbnJvb3QuYWRkKHN1YjEpO1xyXG5cclxuY29uc3Qgc3Vic3ViID0gbmV3IEZvbGRlcihcInN1YjNcIik7XHJcbnN1YjEuYWRkKHN1YnN1Yik7XHJcbnN1YnN1Yi5hZGQobmV3IEZpbGUoXCJzdWJzdWIxLnR4dFwiLCAyMjUwKSk7XHJcbnN1YnN1Yi5hZGQobmV3IEZpbGUoXCJzdWJzdWIyLnR4dFwiLCA1MzQwKSk7XHJcblxyXG5jb25zdCBzdWIyID0gbmV3IEZvbGRlcihcInN1YjJcIik7XHJcbnJvb3QuYWRkKHN1YjIpO1xyXG5zdWIyLmFkZChuZXcgRmlsZShcInN1YjJBLnR4dFwiLCAyNTApKTtcclxuc3ViMi5hZGQobmV3IEZpbGUoXCJzdWIyQi50eHRcIiwgMzQwKSk7XHJcblxyXG5jb25zdCBkb20gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2xpc3RcIik7XHJcbnJvb3QubGlzdChkb20pO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=