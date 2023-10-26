/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/strategy/GaussSumStrategy.ts":
/*!******************************************!*\
  !*** ./src/strategy/GaussSumStrategy.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GaussSumStrategy)
/* harmony export */ });
class GaussSumStrategy {
    get(N) {
        return (N * (N + 1)) / 2;
    }
}


/***/ }),

/***/ "./src/strategy/LoopSumStrategy.ts":
/*!*****************************************!*\
  !*** ./src/strategy/LoopSumStrategy.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LoopSumStrategy)
/* harmony export */ });
class LoopSumStrategy {
    get(N) {
        let sum = 0;
        for (let i = 1; i <= N; ++i) {
            sum += i;
        }
        return sum;
    }
}


/***/ }),

/***/ "./src/strategy/SumPrinter.ts":
/*!************************************!*\
  !*** ./src/strategy/SumPrinter.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SumPrinter)
/* harmony export */ });
class SumPrinter {
    print(strategy, N, domOutput) {
        const value = strategy.get(N);
        domOutput.innerHTML = `1~${N}까지의 총 합:${value}`;
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
/*!*******************************!*\
  !*** ./src/strategy/index.ts ***!
  \*******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _GaussSumStrategy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GaussSumStrategy */ "./src/strategy/GaussSumStrategy.ts");
/* harmony import */ var _LoopSumStrategy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LoopSumStrategy */ "./src/strategy/LoopSumStrategy.ts");
/* harmony import */ var _SumPrinter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SumPrinter */ "./src/strategy/SumPrinter.ts");



const printer = new _SumPrinter__WEBPACK_IMPORTED_MODULE_2__["default"]();
const dom1 = document.createElement('h1');
document.body.appendChild(dom1);
const dom2 = document.createElement('h1');
document.body.appendChild(dom2);
printer.print(new _LoopSumStrategy__WEBPACK_IMPORTED_MODULE_1__["default"](), 100, dom1);
printer.print(new _GaussSumStrategy__WEBPACK_IMPORTED_MODULE_0__["default"](), 100, dom2);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBRWUsTUFBTSxnQkFBZ0I7SUFDakMsR0FBRyxDQUFDLENBQVM7UUFDVCxPQUFPLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzdCLENBQUM7Q0FDSjs7Ozs7Ozs7Ozs7Ozs7O0FDSmMsTUFBTSxlQUFlO0lBQ2hDLEdBQUcsQ0FBQyxDQUFTO1FBQ1QsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDO1FBQ1osS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRTtZQUN6QixHQUFHLElBQUksQ0FBQyxDQUFDO1NBQ1o7UUFDRCxPQUFPLEdBQUcsQ0FBQztJQUNmLENBQUM7Q0FDSjs7Ozs7Ozs7Ozs7Ozs7O0FDUmMsTUFBTSxVQUFVO0lBQzNCLEtBQUssQ0FBQyxRQUFxQixFQUFFLENBQVMsRUFBRSxTQUFrQjtRQUN0RCxNQUFNLEtBQUssR0FBRyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzlCLFNBQVMsQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDLFdBQVcsS0FBSyxFQUFFLENBQUM7SUFDbkQsQ0FBQztDQUNKOzs7Ozs7O1VDUEQ7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7O0FDTmtEO0FBQ0Y7QUFDVjtBQUV0QyxNQUFNLE9BQU8sR0FBRyxJQUFJLG1EQUFVLEVBQUUsQ0FBQztBQUVqQyxNQUFNLElBQUksR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQzFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBRWhDLE1BQU0sSUFBSSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDMUMsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7QUFFaEMsT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLHdEQUFlLEVBQUUsRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDaEQsT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLHlEQUFnQixFQUFFLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZGVzaWducGF0dGVybnMvLi9zcmMvc3RyYXRlZ3kvR2F1c3NTdW1TdHJhdGVneS50cyIsIndlYnBhY2s6Ly9kZXNpZ25wYXR0ZXJucy8uL3NyYy9zdHJhdGVneS9Mb29wU3VtU3RyYXRlZ3kudHMiLCJ3ZWJwYWNrOi8vZGVzaWducGF0dGVybnMvLi9zcmMvc3RyYXRlZ3kvU3VtUHJpbnRlci50cyIsIndlYnBhY2s6Ly9kZXNpZ25wYXR0ZXJucy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9kZXNpZ25wYXR0ZXJucy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZGVzaWducGF0dGVybnMvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9kZXNpZ25wYXR0ZXJucy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2Rlc2lnbnBhdHRlcm5zLy4vc3JjL3N0cmF0ZWd5L2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTdW1TdHJhdGVneSBmcm9tICcuL1N1bVN0cmF0ZWd5JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2F1c3NTdW1TdHJhdGVneSBpbXBsZW1lbnRzIFN1bVN0cmF0ZWd5IHtcbiAgICBnZXQoTjogbnVtYmVyKSB7XG4gICAgICAgIHJldHVybiAoTiAqIChOICsgMSkpIC8gMjtcbiAgICB9XG59XG4iLCJpbXBvcnQgU3VtU3RyYXRlZ3kgZnJvbSAnLi9TdW1TdHJhdGVneSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExvb3BTdW1TdHJhdGVneSBpbXBsZW1lbnRzIFN1bVN0cmF0ZWd5IHtcbiAgICBnZXQoTjogbnVtYmVyKSB7XG4gICAgICAgIGxldCBzdW0gPSAwO1xuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSBOOyArK2kpIHtcbiAgICAgICAgICAgIHN1bSArPSBpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzdW07XG4gICAgfVxufVxuIiwiaW1wb3J0IFN1bVN0cmF0ZWd5IGZyb20gJy4vU3VtU3RyYXRlZ3knO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdW1QcmludGVyIHtcbiAgICBwcmludChzdHJhdGVneTogU3VtU3RyYXRlZ3ksIE46IG51bWJlciwgZG9tT3V0cHV0OiBFbGVtZW50KSB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gc3RyYXRlZ3kuZ2V0KE4pO1xuICAgICAgICBkb21PdXRwdXQuaW5uZXJIVE1MID0gYDF+JHtOfeq5jOyngOydmCDstJ0g7ZWpOiR7dmFsdWV9YDtcbiAgICB9XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBHYXVzc1N1bVN0cmF0ZWd5IGZyb20gJy4vR2F1c3NTdW1TdHJhdGVneSc7XG5pbXBvcnQgTG9vcFN1bVN0cmF0ZWd5IGZyb20gJy4vTG9vcFN1bVN0cmF0ZWd5JztcbmltcG9ydCBTdW1QcmludGVyIGZyb20gJy4vU3VtUHJpbnRlcic7XG5cbmNvbnN0IHByaW50ZXIgPSBuZXcgU3VtUHJpbnRlcigpO1xuXG5jb25zdCBkb20xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZG9tMSk7XG5cbmNvbnN0IGRvbTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChkb20yKTtcblxucHJpbnRlci5wcmludChuZXcgTG9vcFN1bVN0cmF0ZWd5KCksIDEwMCwgZG9tMSk7XG5wcmludGVyLnByaW50KG5ldyBHYXVzc1N1bVN0cmF0ZWd5KCksIDEwMCwgZG9tMik7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=