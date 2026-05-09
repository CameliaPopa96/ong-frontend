async function loadImpact(){

  const res = await fetch(`${API_URL}/impact`);
  const data = await res.json();

  document.getElementById("impact").innerHTML = `
    Pacienți ajutați: ${data.patients}<br>
    Donații: ${data.donations} RON
  `;
}

loadImpact();

async function donate(amount){

  const res = await fetch(`${API_URL}/donations/checkout`, {
    method:"POST",
    headers:{"Content-Type":"application/json"},
    body: JSON.stringify({amount})
  });

  const data = await res.json();
  window.location.href = data.url;
}
