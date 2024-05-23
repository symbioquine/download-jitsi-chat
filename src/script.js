(function() {

  let chatToggleBtn = document.querySelector(
      ".toolbar-button-with-badge > .toolbox-button > div > .toolbox-icon"
  );

  // If the chat window is closed, open it to access the chats;
  if (!chatToggleBtn.classList.contains("toggled")) {
      chatToggleBtn.click();
  }

  let meetName = document.querySelector("#videoconference_page div.subject-text--content").innerText;

  let finalFileName = meetName + ".md";

  let finalChat = "## Chat Transcript\n\n```txt\n" + Array.from(document.querySelector("#chatconversation").querySelectorAll("div.usermessage")).map(um => um.closest('.chatmessage').parentElement.querySelector('.timestamp').innerText + " " + um.innerText).join("\n\n") + "\n```";

  /* *
   * Downloads the final data in a .txt format.
   *
   * @param {string} filename - The string to be saved as file name.
   * @param {string} text - The data in a single string.
   * @returns {void}
   */
  ((filename, text) => {
      var element = document.createElement("a");
	  element.setAttribute(
		  "href",
		  "data:text/plain;charset=utf-8," + encodeURIComponent(text)
	  );
	  element.setAttribute("download", filename);
	  element.click();
  })(finalFileName, finalChat)
  
})();
