
var myObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show')
    } else {
      entry.target.classList.remove('show')
    }
  })
})

var elements = document.querySelectorAll('.hidden')

elements.forEach((element) => myObserver.observe(element))

/*Animação 2*/

var myObserver2 = new IntersectionObserver(entries2 => {
  entries2.forEach(entry2 => {
    if (entry2.isIntersecting) {
      entry2.target.classList.add('show')
    } else {
      entry2.target.classList.remove('show')
    }
  })
})

var elements2 = document.querySelectorAll('.hidden2')

elements2.forEach((element2) => myObserver2.observe(element2))

/*Animação 3*/

var myObserver3 = new IntersectionObserver(entries3 => {
  entries3.forEach(entry3 => {
    if (entry3.isIntersecting) {
      entry3.target.classList.add('show')
    } else {
      entry3.target.classList.remove('show')
    }
  })
})

var elements3 = document.querySelectorAll('.hidden3')

elements3.forEach((element3) => myObserver3.observe(element3))

/*Loader */

document.addEventListener("DOMContentLoaded", function () {
  const loader = document.getElementById("loader");

  // Oculta o loader quando a página carrega completamente
  setTimeout(() => {
    loader.classList.add("hidden");
  }, 500);

  // Captura todos os links da página
  document.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", function (event) {
      const href = this.getAttribute("href");

      // Se o link for âncora (#) e estiver na mesma página, NÃO ativa o loader
      if (href.startsWith("#")) return;

      // Se o link abre em nova aba, também NÃO ativa o loader
      if (this.target === "_blank") return;

      event.preventDefault(); // Impede a navegação imediata
      loader.classList.remove("hidden"); // Mostra o loader

      // Aguarda um tempo e então faz a navegação
      setTimeout(() => {
        window.location.href = this.href;
      }, 1000);
    });
  });

  // Caso o loader fique preso, garante que ele sempre some ao carregar a página
  window.addEventListener("pageshow", () => {
    loader.classList.add("hidden");
  });
});

// URL Delay

function UrlDelay(url) {
  if (window.innerWidth <= 1020) {
    setTimeout(() => {
      window.location.href = url;
    }, 300); // tempo de delay em milissegundos
  } else {
    window.location.href = url;
  }
}


//tamanho texto

function atualizarTextoPorTamanho() {
  const texto = document.getElementById("texto2");
  const texto1 = document.getElementById("texto1");

  if (window.innerWidth <= 610) {
    // Texto reduzido para telas pequenas
    if (texto2) {
      texto2.textContent = "Crescendo por meio da criação e do desenvolvimento.";
    }
    if (texto1) {
      texto1.textContent = "Aspirante a desenvolvedor Full Stack, com foco atual em Back-End.";
    }
  } else {
    // Texto original para telas maiores
    if (texto2) {
      texto2.textContent = "Minha paixão por design, código e interação me motiva a evoluir constantemente e encontrar meu espaço no mundo do desenvolvimento.";
    }
    if (texto1) {
      texto1.textContent = "Aspirante a desenvolvedor Full Stack, com foco atual em back-end e sempre buscando evoluir para criar soluções completas.";
    }
  }
}

window.addEventListener("DOMContentLoaded", atualizarTextoPorTamanho);
window.addEventListener("resize", atualizarTextoPorTamanho);


