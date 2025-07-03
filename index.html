<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Guest List Manager (with JSON Server)</title>
  <style>
    body {
      font-family: sans-serif;
      margin: 20px;
    }

    h1 {
      text-align: center;
    }

    #guest-form input {
      padding: 8px;
      margin-right: 5px;
    }

    #guest-list {
      margin-top: 20px;
    }

    .guest-item {
      margin: 5px 0;
      padding: 8px;
      background-color: #f2f2f2;
      border: 1px solid #ddd;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .delete-btn {
      background-color: red;
      color: white;
      border: none;
      padding: 4px 8px;
      cursor: pointer;
    }
  </style>
</head>
<body>

  <h1>Event Guest List (API)</h1>

  <form id="guest-form">
    <input type="text" id="guest-name" placeholder="Enter guest name" required>
    <button type="submit">Add Guest</button>
  </form>

  <div id="guest-list"></div>

  <script>
    const form = document.getElementById('guest-form');
    const guestInput = document.getElementById('guest-name');
    const guestList = document.getElementById('guest-list');
    const API_URL = 'http://localhost:3000/guests';

    // Display guests from server
    function loadGuests() {
      fetch(API_URL)
        .then(res => res.json())
        .then(guests => {
          guestList.innerHTML = '';
          guests.forEach(guest => {
            const div = document.createElement('div');
            div.className = 'guest-item';

            const nameSpan = document.createElement('span');
            nameSpan.textContent = guest.name;

            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'Delete';
            deleteBtn.className = 'delete-btn';
            deleteBtn.onclick = () => deleteGuest(guest.id);

            div.appendChild(nameSpan);
            div.appendChild(deleteBtn);
            guestList.appendChild(div);
          });
        });
    }

    // Add new guest
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      const name = guestInput.value.trim();
      if (name !== '') {
        fetch(API_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ name })
        })
        .then(() => {
          guestInput.value = '';
          loadGuests();
        });
      }
    });

    // Delete guest by ID
    function deleteGuest(id) {
      fetch(`${API_URL}/${id}`, {
        method: 'DELETE'
      }).then(loadGuests);
    }

    // Initial load
    loadGuests();
  </script>

</body>
</html>
