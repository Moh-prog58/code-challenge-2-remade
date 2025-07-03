document.addEventListener("DOMContentLoaded", function() {
  let form = document.getElementById("guest-form");
  let nameInput = document.getElementById("guest-name");
  let categoryInput = document.getElementById("guest-category");
  let list = document.getElementById("guest-list");

  form.addEventListener("submit", function(e) {
    e.preventDefault();

    let name = nameInput.value;
    let category = categoryInput.value;

    if (name === "") return;
    if (list.children.length >= 10) {
      alert("Only 10 guests allowed");
      return;
    }

    let li = document.createElement("li");

    let span = document.createElement("span");
    span.textContent = name + " (" + category + ") ";

    let rsvp = document.createElement("span");
    rsvp.textContent = "Not Attending";
    rsvp.className = "not-attending";
    rsvp.style.cursor = "pointer";
    rsvp.onclick = function() {
      if (rsvp.textContent === "Attending") {
        rsvp.textContent = "Not Attending";
        rsvp.className = "not-attending";
      } else {
        rsvp.textContent = "Attending";
        rsvp.className = "attending";
      }
    };

    let time = document.createElement("div");
    time.textContent = new Date().toLocaleString();

    let editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.onclick = function() {
      let newName = prompt("Edit name:", name);
      if (newName) {
        span.textContent = newName + " (" + category + ") ";
      }
    };

    let delBtn = document.createElement("button");
    delBtn.textContent = "Remove";
    delBtn.onclick = function() {
      list.removeChild(li);
    };

    let btns = document.createElement("div");
    btns.className = "btns";
    btns.appendChild(editBtn);
    btns.appendChild(delBtn);

    li.appendChild(span);
    li.appendChild(rsvp);
    li.appendChild(time);
    li.appendChild(btns);
    list.appendChild(li);

    nameInput.value = "";
  });
});
