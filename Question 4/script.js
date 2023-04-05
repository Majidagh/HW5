showNotification(getDataFromUser());

function showNotification({ top = 0, right = 0, className = "", html: msg }) {
  const notification = document.querySelector(".notification");
  const messageElm = document.getElementById("message");

  notification.style.top = `${top}px`;
  notification.style.right = `${right}px`;
  notification.classList.add(className);
  messageElm.textContent = msg;
}

function getDataFromUser() {
  const topPosition = +prompt("Enter The Top Position :");
  const rightPosition = +prompt("Enter The Right Position :");
  const className = prompt("Enter The Class Name :");
  const message = prompt("Enter The Notification Message :");

  return {
    top: topPosition,
    right: rightPosition,
    className: className,
    html: message,
  };
}
