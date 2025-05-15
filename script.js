function showNotification(message, duration = 5000) {
  const notification = document.getElementById("notification");
  notification.textContent = message;
  notification.style.display = "block";

  // Плавно появиться
  requestAnimationFrame(() => {
    notification.classList.add("show");
  });

  // Через duration миллисекунд — исчезнуть
  setTimeout(() => {
    notification.classList.remove("show");
    // Скрыть элемент полностью после исчезновения
    setTimeout(() => {
      notification.style.display = "none";
    }, 500); // время исчезновения = 0.5s
  }, duration);
}

function downloadFile(path) {
  // showNotification("Download started...", 4000);

  const link = document.createElement("a");
  link.href = path;
  link.download = path.split("/").pop();
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  //setTimeout(() => {
  //  showNotification("File downloaded.", 6000);
  //}, 3000); // Эмуляция завершения загрузки
}
