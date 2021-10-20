/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
/*!******************************************!*\
  !*** ../assets/src/js/custom/getlink.js ***!
  \******************************************/


// Class definition
var KTFormsClipboard = function () {
    // Shared variables
    var clipboard;

    // Private functions
    var example1 = function () {
        // Select elements
        const target = document.getElementById('chatroomLink');
        const button = target.nextElementSibling;

        // Init clipboard -- for more info, please read the offical documentation: https://clipboardjs.com/
        clipboard = new ClipboardJS(button, {
            target: target,
            text: function () {
                return target.value;
            }
        });

        // Success action handler
        clipboard.on('success', function (e) {
            const currentLabel = button.innerHTML;

            // Exit label update when already in progress
            if (button.innerHTML === 'Copied!') {
                return;
            }

            // Update button label
            button.innerHTML = "Copied!";

            // Revert button label after 3 seconds
            setTimeout(function () {
                button.innerHTML = currentLabel;
            }, 3000)
        });
    }

    return {
        // Public Functions
        init: function () {
            example1();
        }
    };
}();

// On document ready
KTUtil.onDOMContentLoaded(function () {
    KTFormsClipboard.init();
});

/******/ })()
;
//# sourceMappingURL=getlink.js.map