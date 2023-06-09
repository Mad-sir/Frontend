function allowDrop(event) {
    event.preventDefault();
  }
  
  function drag(event) {
    event.dataTransfer.setData("text", event.target.innerHTML);
  }
  
  function drop(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("text");
    var item = document.createElement("div");
    item.innerHTML = data;
    item.className = "item";
    event.target.appendChild(item);
    showMessage("Item dropped successfully!");
  }
  
  function resetContainers() {
    var container1 = document.getElementById("container1");
    var container2 = document.getElementById("container2");
    container2.innerHTML = "";
    showMessage("");
  }
  
  function showMessage(message) {
    var messageDiv = document.getElementById("message");
    messageDiv.innerHTML = message;
  }
  