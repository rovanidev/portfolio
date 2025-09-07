
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

  
  setTimeout(() => {
    loader.classList.add("hidden");
  }, 500);

  
  document.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", function (event) {
      const href = this.getAttribute("href");

      
      if (href.startsWith("#")) return;

      
      if (this.target === "_blank") return;

      event.preventDefault(); 
      loader.classList.remove("hidden");

      
      setTimeout(() => {
        window.location.href = this.href;
      }, 1000);
    });
  });

 
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

window.addEventListener('pageshow', function (event) {
  // Verifica se foi restaurada do cache (navegador "voltou")
  if (event.persisted) {
    // Aqui você reseta tudo o que precisa
    resetarAnimacoes();
  }
});

function resetarAnimacoes() {
  // Exemplo genérico — adapte conforme suas animações
  const elementos = document.querySelectorAll('.animado');
  elementos.forEach(el => {
    el.classList.remove('ativo', 'finalizado'); // classes que mudam visual
    el.style.transform = '';
    el.style.opacity = '';
    // Ou o que for necessário para "resetar"
  });
}

window.addEventListener('pageshow', function (event) {
  if (event.persisted) {
    window.location.reload();
  }
}); 





//tamanho texto

function atualizarTextoPorTamanho() {
  const texto = document.getElementById("texto2");
  const texto1 = document.getElementById("texto1");

  if (window.innerWidth <= 610) {
    if (texto2) {
      texto2.textContent = "Crescendo por meio da criação e do desenvolvimento.";
    }
    if (texto1) {
      texto1.textContent = "Dev Back-end em formação, solucionando problemas reais" 
  } else {
    if (texto2) {
      texto2.textContent = "Minha paixão por resolver problemas com lógica e código me motiva a evoluir constantemente e consolidar meu espaço no desenvolvimento back-end"
    }
    if (texto1) {
      texto1.textContent = "Em formação como desenvolvedor back-end, com foco em crescimento técnico e criação de soluções completas que gerem valor real.";
    }
  }
}
}

window.addEventListener("DOMContentLoaded", atualizarTextoPorTamanho);
window.addEventListener("resize", atualizarTextoPorTamanho);

