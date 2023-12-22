

function Header(title) {
  const headerSlot = document.getElementById('headerSlot');
  headerSlot.innerHTML = `<h1 class="card-title">${title}</h1><nav><ul class="list-inline"><li class="list-inline-item">Link 1</li><li class="list-inline-item">Link 2</li></ul></nav>`;
}

function CustomList(items) {
  const mainContentSlot = document.getElementById('mainContentSlot');
  const list = items.map(item => `<li class="list-group-item">${item}</li>`).join('');
  mainContentSlot.innerHTML = `<ul class="list-group">${list}</ul>`;
}

function CustomForm(fields) {
  const footerSlot = document.getElementById('footerSlot');
  const formFields = fields.map(field => `<input type="${field.type}" class="form-control mb-2" placeholder="${field.label}">`).join('');
  footerSlot.innerHTML = `<form>${formFields}<button class="btn btn-primary">Enviar</button></form>`;
}
