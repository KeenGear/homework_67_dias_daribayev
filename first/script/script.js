const container = document.getElementById('container');
const addButton = document.getElementById('add-item-btn');

addButton.addEventListener('click', () => {
  const notification = document.createElement('div');
  notification.className = 'notification';
  notification.innerHTML = 'Notification will close in 5 seconds<span class="close-btn">X</span>';

  container.appendChild(notification);

  setTimeout(() => {
    notification.remove();
  }, 5000);

  const closeBtn = notification.querySelector('.close-btn');
  closeBtn.addEventListener('click', () => {
    notification.remove();
  });
});
