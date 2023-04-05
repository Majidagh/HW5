showNotification(getData());

function showNotification({ top = 0, right = 0, className = "", html: msg }) {
  const notify = document.querySelector(".message-content");
  const messageShow = document.getElementById("notif");

  notify.style.top = `${top}px`;
  notify.style.right = `${right}px`;
  notify.classList.add(className);
  messageShow.textContent = msg;
}

function getData() {
  const topPos = +prompt("Enter Top Position :");
  const rightPos = +prompt("Enter Right Position :");
  const className = prompt("Enter Class Name :");
  const message = prompt("Display Message :");

  return {
    top: topPos,
    right: rightPos,
    className: className,
    html: message,
  };
}
