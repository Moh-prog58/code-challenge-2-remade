document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('guest-form');
  const input = document.getElementById('guest-name');
  const list = document.getElementById('guest-list');

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    const name = input.value.trim();

    if (name !== '') {
      const li = document.createElement('li');
      li.textContent = name;

      const removeBtn = document.createElement('button');
      removeBtn.textContent = 'Remove';
      removeBtn.addEventListener('click', function () {
        list.removeChild(li);
      });

      li.appendChild(removeBtn);
      list.appendChild(li);

      input.value = '';
    }
  });
});
