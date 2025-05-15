function showNotification(message) {
  const notification = document.getElementById("notification");
  notification.textContent = message;
  notification.style.display = "block";
  notification.classList.remove("notification"); // сброс анимации
  void notification.offsetWidth; // перезапуск анимации
  notification.classList.add("notification");
}

function downloadFile(path) {
  showNotification("Начинается загрузка...");

  const link = document.createElement("a");
  link.href = path;
  link.download = path.split("/").pop();
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  // Предположим, что файл "скачан" через 3 секунды (эмуляция)
  setTimeout(() => {
    showNotification("Файл загружен. Найдите его в папке 'Загрузки'.");
  }, 3000);
}
