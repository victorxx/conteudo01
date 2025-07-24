// Array de objetos com nome e link
const links = [
  { nome: "Google", link: "https://www.google.com" },
  { nome: "YouTube", link: "https://www.youtube.com" },
  { nome: "OpenAI", link: "https://www.openai.com" },
  { nome: "Wikipedia", link: "https://www.wikipedia.org" },
  { nome: "GitHub", link: "https://github.com" }
];

const input = document.getElementById("searchInput");
const list = document.getElementById("resultsList");

// Função para exibir resultados
function mostrarResultados(filtro) {
  list.innerHTML = ""; // Limpa resultados anteriores
  const termo = filtro.toLowerCase();
  
  const resultadosFiltrados = links.filter(item => 
    item.nome.toLowerCase().includes(termo)
  );

  if (resultadosFiltrados.length === 0) {
    list.innerHTML = "<li>Nenhum resultado encontrado.</li>";
    return;
  }

  resultadosFiltrados.forEach(item => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = item.link;
    a.target = "_blank";
    a.textContent = item.nome;
    li.appendChild(a);
    list.appendChild(li);
  });
}

// Evento de input
input.addEventListener("input", e => {
  mostrarResultados(e.target.value);
});

// Mostrar todos inicialmente
mostrarResultados("");
