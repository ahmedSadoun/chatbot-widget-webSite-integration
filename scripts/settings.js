"use strict";

/**
 * Initializes the SDK and sets a global field with passed name for it the can
 * be referred later
 *
 * @param {string} name Name by which the chat widget should be referred
 */
function initSdk(name) {
  // Retry initialization later if WebSDK is not available yet
  if (!document || !WebSDK) {
    setTimeout(function () {
      initSdk(name);
    }, 2000);
    return;
  }

  if (!name) {
    name = "Bots"; // Set default reference name to 'Bots'
  }
  var Bots;

  setTimeout(function () {
    var chatWidgetSettings = {
      URI: "oda-ea7ee6ca09024e5fa0656e7ca7c8dee3-da2.data.digitalassistant.oci.oraclecloud.com", // ODA URI, pass the hostname. Do not include the protocol (https://).

      channelId: "c74b4fbc-22e7-4456-9d2e-af2a7f81dcfe", // Channel ID, available in channel settings in ODA UI

      //Add settings here
      showConnectionStatus: true, // to show connection statue

      openChatOnLoad: true, // to auto open the widget and repositioning it
      position: { bottom: "20px", right: "60px" },
      initUserHiddenMessage: "اهلا بحضرتك",
      //   embedded: true,
      //   targetElement: "chat-container",
      //   embedTopStickyId: "top-text",
      //   customHeaderElementId: "custom-header",

      icons: {
        avatarBot: "images/bot-green.png",
        avatarUser: "images/user-icon.png",
        logo: "images/bot-white.png",
        launch: "images/bot-button.png",
      },
      i18n: {
        en: {
          chatTitle: "أطلب فطار", // Replaces Chat
          connected: "متصل", // Replaces Connected
          inputPlaceholder: "...أكتب هنا", // Replaces Type a message
          send: "Send (Enter)", // Replaces Send tool tip
        },
      },
      fontFamily: "Oracle Sans, Helvetica Neue, Helvetica, Arial, sans-serif",
      theme: "classic",
    };

    Bots = new WebSDK(chatWidgetSettings);
    console.log("settings is up ");
    Bots.connect();

    //Add Bots.setUserInputMessage('Order pizza'); here. Comment out for voice recognition.

    // Create global object to refer Bots
    window[name] = Bots;
  }, 0);
}
