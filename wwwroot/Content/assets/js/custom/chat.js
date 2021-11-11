/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
/*!***************************************!*\
  !*** ../assets/src/js/custom/chat.js ***!
  \***************************************/


// Class definition

function sendMessage  (messages, input, messageObj) {
	if (input.value.length === 0) {
		return;
	}

	var messageOutTemplate = messages.querySelector('[data-kt-element="template-out"]');
	var messageTemplate = messageOutTemplate.cloneNode(true);
	messageTemplate.classList.remove('d-none');
	messageTemplate.querySelector('[data-kt-element="message-text"]').innerText = input.value;
	messageTemplate.querySelector('[data-kt-element="out-contact-avatar"]').innerText = messageObj.name.charAt(0);
	messageTemplate.querySelector('[data-kt-element="out-contact-name"]').innerText = messageObj.name;
	messageTemplate.querySelector('[data-kt-element="out-time"]').innerText = messageObj.time;
	input.value = '';
	messages.appendChild(messageTemplate);
	messages.scrollTop = messages.scrollHeight;
}

function receiveMessage (messages, messageObj) {
	var messageInTemplate = messages.querySelector('[data-kt-element="template-in"]');
	var messageTemplate = messageInTemplate.cloneNode(true);
	messageTemplate.classList.remove('d-none');
	messageTemplate.querySelector('[data-kt-element="message-text"]').innerText = messageObj.text;
	messageTemplate.querySelector('[data-kt-element="in-contact-avatar"]').innerText = messageObj.name.charAt(0);
	messageTemplate.querySelector('[data-kt-element="in-contact-name"]').innerText = messageObj.name;
	messageTemplate.querySelector('[data-kt-element="in-time"]').innerText = messageObj.time;
	messages.appendChild(messageTemplate);
	messages.scrollTop = messages.scrollHeight;
}

function setContact ( contactData) {
	var contacts = document.querySelector("#kt_chat_contacts_body").querySelector('#userList');
	var contactsTemplate = contacts.querySelector('[data-kt-element="contact-template"]');
	var contact = contactsTemplate.cloneNode(true);
	contact.classList.remove('d-none');
	contact.querySelector('[data-kt-element="contact-avatar"]').innerText = contactData.name.charAt(0);
	contact.querySelector('[data-kt-element="contact-email"]').innerText = contactData.email;
	contact.querySelector('[data-kt-element="contact-name"]').innerText = contactData.name;
	contacts.appendChild(contact);
	contacts.scrollTop = contacts.scrollHeight;
}

function setAvatar ( contactData) {
	var avatars = document.querySelector("#kt_chat_messenger_header").querySelector('[data-kt-element="contact-avatars"]');
	var avatarsTemplate = avatars.querySelector('[data-kt-element="contact-avatar-template"]');
	var avatar = avatarsTemplate.cloneNode(true);
	avatar.classList.remove('d-none');
	avatar.querySelector('[data-kt-element="contact-initial"]').innerText = contactData.name.charAt(0);
	avatars.appendChild(avatar);
	avatars.scrollTop = avatars.scrollHeight;
}

var KTAppChat = function () {
	// Private functions
	var handlerSend = function (messengerElement) {
		
		if (!messengerElement) {
			return;
		}


		var messages = messengerElement.querySelector('[data-kt-element="messages"]');
		var input = messengerElement.querySelector('[data-kt-element="input"]');

		let outgoingMessageObj = {
			name: "Alex",
			time: "Just now"
		}

		// Handle send
		KTUtil.on(messengerElement, '[data-kt-element="input"]', 'keydown', function (e) {
			if (e.keyCode == 13) {
				//handlerMessaging(messengerElement);
				sendMessage(messages, input, outgoingMessageObj);
				e.preventDefault();

				return false;
			}
		});

		KTUtil.on(messengerElement, '[data-kt-element="send"]', 'click', function (e) {
			//handlerMessaging(messengerElement);
			sendMessage(messages, input, outgoingMessageObj);
		});
	}
	
	// Public methods
	return {
		init: function (messengerElement,) {
			var contactsData = [
				{ id: 18, name: "Freddy", email: "freddy@cmiconsulting.pe" },
				{ id: 28, name: "Alex", email: "Alex@cmiconsulting.pe" },
				{ id: 15, name: "Jaime", email: "jaime@gmail.com" },
				{ id: 20, name: "Marie", email: "marie@gmail.com" }
			];
			handlerSend(messengerElement);
			contactsData.map(function (contactData) {
				setContact( contactData);
				setAvatar( contactData);
			})
		}
	};
}();

// On document ready
KTUtil.onDOMContentLoaded(function () {
	// Init inline chat messenger
	KTAppChat.init(document.querySelector('#kt_chat_messenger'), document.querySelector("#kt_chat_contacts_body"), document.querySelector("#kt_chat_messenger_header") );
});

/******/ })()
;
//# sourceMappingURL=chat.js.map