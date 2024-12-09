<template>
  <div>
    <!-- Navbar -->
    <header>
      <nav class="navbar">
        <!-- Container de busca -->
        <div class="search-container">
          <input type="text" placeholder="Pesquisar Mangebook.com.br" />
          <button class="search-btn">Pesquisar</button>
        </div>
         <!-- Botão para a tela de lançamentos -->
         <router-link to="/lancamentos">
            <button class="launch-btn">Lançamentos</button>
               </router-link>
        <!-- Área do usuário com botão de login e cadastro -->
        <div class="user-area">
          <p>Olá, seja bem-vindo!</p>
          <router-link to="/login">
            <button class="login-btn">Entrar</button>
          </router-link>
          <router-link to="/cadastro">
            <button class="register-btn">Cadastrar</button>
          </router-link>
        </div>
      </nav>
    </header>

    <!-- Seção de Livros -->
    <section class="livros-section">
      <h2>Livros disponíveis para compra e aluguel</h2>

      <!-- Grid de livros -->
      <div class="livros">
        <!-- Loop para exibir cada livro -->
        <div v-for="(livro, index) in livros" :key="index" class="livro-item">
          <img :src="livro.imagem" :alt="livro.titulo" />
          <p class="titulo">{{ livro.titulo }}</p>
          <p class="status">{{ livro.status }}</p>
          <p class="price">R$ {{ livro.preco }}</p>
          <div class="actions">
            <!-- Botões de comprar e alugar -->
            <router-link :to="livro.linkComprar">
              <button class="btn-buy">Comprar</button>
            </router-link>
            <router-link :to="livro.linkAlugar">
              <button class="btn-rent" :disabled="livro.status === 'Alugado'">Alugar</button>
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- Rodapé -->
    <footer>
      <div class="footer-content">
        <!-- Links para redes sociais -->
        <div class="social-media">
          <img src="Instagram.png" alt="Instagram" />
          <img src="Facebook.png" alt="Facebook" />
          <br />
          <a href="#" class="instagram-link">Instagram</a>
          <a href="#" class="facebook-link">Facebook</a>
        </div>
        <!-- Logo e descrição -->
        <div class="footer-logo">
          <img src="logofooter.PNG" alt="Logo Mangebook" />
          <p>Mangebook - Livraria Digital</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // Dados dos livros
      livros: [
        {
          imagem: "capa-livro1.PNG",
          titulo: "A Arte da Guerra",
          status: "Disponível para aluguel",
          preco: "25,00",
          linkComprar: "/comprar/arte-da-guerra",
          linkAlugar: "/alugar/arte-da-guerra",
        },
        {
          imagem: "capa-livro2.PNG",
          titulo: "Sociedade do Cansaço",
          status: "Disponível para aluguel",
          preco: "30,00",
          linkComprar: "/comprar/sociedade-do-cansaco",
          linkAlugar: "/alugar/sociedade-do-cansaco",
        },
        {
          imagem: "capa-livro3.PNG",
          titulo: "Revolução dos Bichos",
          status: "Disponível para aluguel",
          preco: "20,00",
          linkComprar: "/comprar/revolucao-dos-bichos",
          linkAlugar: "/alugar/revolucao-dos-bichos",
        },
        {
          imagem: "capa-livro4.PNG",
          titulo: "1984",
          status: "Alugado",
          preco: "35,00",
          linkComprar: "/comprar/1984",
          linkAlugar: "/alugar/1984",
        },
        {
          imagem: "capa-livro5.PNG",
          titulo: "Assim Falava Zaratustra",
          status: "Alugado",
          preco: "28,00",
          linkComprar: "/comprar/zaratustra",
          linkAlugar: "/alugar/zaratustra",
        },
        {
          imagem: "capa-livro6.PNG",
          titulo: "As Intermitências da Morte",
          status: "Disponível para aluguel",
          preco: "32,00",
          linkComprar: "/comprar/intermitencias",
          linkAlugar: "/alugar/intermitencias",
        },
        {
          imagem: "capa-livro7.PNG",
          titulo: "Senhor das Moscas",
          status: "Alugado",
          preco: "27,00",
          linkComprar: "/comprar/senhor-das-moscas",
          linkAlugar: "/alugar/senhor-das-moscas",
        },
        {
          imagem: "capa-livro8.PNG",
          titulo: "História do Cerco de Lisboa",
          status: "Alugado",
          preco: "32,00",
          linkComprar: "/comprar/intermitencias",
          linkAlugar: "/alugar/intermitencias",
        },
        {
          imagem: "capa-livro9.PNG",
          titulo: "O Mito de Sisifo",
          status: "Disponível para aluguel",
          preco: "32,00",
          linkComprar: "/comprar/intermitencias",
          linkAlugar: "/alugar/intermitencias",
        },
        {
          imagem: "capa-livro10.PNG",
          titulo: "O Que Todo Corpo Fala",
          status: "Disponível para aluguel",
          preco: "32,00",
          linkComprar: "/comprar/intermitencias",
          linkAlugar: "/alugar/intermitencias",
        },
        {
          imagem: "capa-livro11.PNG",
          titulo: "Uma Breve História da Humanidade - Sapiens",
          status: "Disponível para aluguel",
          preco: "32,00",
          linkComprar: "/comprar/intermitencias",
          linkAlugar: "/alugar/intermitencias",
        },
        {
          imagem: "capa-livro12.PNG",
          titulo: "A Estranha Morte da Europa",
          status: "Disponível para aluguel",
          preco: "32,00",
          linkComprar: "/comprar/intermitencias",
          linkAlugar: "/alugar/intermitencias",
        },
        {
          imagem: "capa-livro13.PNG",
          titulo: "Como Fazer Amigos e Influenciar Pessoas",
          status: "Disponível para aluguel",
          preco: "32,00",
          linkComprar: "/comprar/intermitencias",
          linkAlugar: "/alugar/intermitencias",
        },
        {
          imagem: "capa-livro14.PNG",
          titulo: "O Princípe",
          status: "Disponível para aluguel",
          preco: "32,00",
          linkComprar: "/comprar/intermitencias",
          linkAlugar: "/alugar/intermitencias",
        },
        {
          imagem: "capa-livro15.PNG",
          titulo: "48 Leis do Poder",
          status: "Disponível para aluguel",
          preco: "32,00",
          linkComprar: "/comprar/intermitencias",
          linkAlugar: "/alugar/intermitencias",
        },
      ],
    };
  },
};
</script>

<style scoped>
/* Reset básico */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
/* Estilo do botão de lançamentos */
.launch-btn {
  background-color: #c1121f; /* Cor chamativa */
  color: #fff; /* Texto branco */
  padding: 10px 20px; /* Tamanho confortável */
  border: none; /* Sem borda */
  border-radius: 25px; /* Bordas arredondadas */
  font-size: 1em; /* Tamanho do texto */
  font-weight: bold; /* Texto em negrito */
  margin-left: -720px; /* Espaço entre o botão de pesquisa */
  cursor: pointer; /* Ícone de clique */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2); /* Sombra */
  transition: all 0.3s ease; /* Transição suave */
}

/* Efeito de hover para o botão de lançamentos */
.launch-btn:hover {
  background-color: #c1121f; /* Cor mais escura ao passar o mouse */
  transform: scale(1.05); /* Leve aumento no tamanho */
}

/* Estilo ao clicar no botão de lançamentos */
.launch-btn:active {
  transform: scale(0.95); /* Reduz levemente o tamanho ao clicar */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2); /* Diminui a sombra */
}
/* Plano de fundo para o corpo da página */
body {
  font-family: 'Playfair Display', serif;
  color: #333;
  min-height: 100vh;
  background-image: url('livraria1.PNG'); /* Aplica a imagem de fundo */
  background-size: cover; /* A imagem cobre toda a área */
  background-position: center; /* Centraliza a imagem */
  background-attachment: fixed; /* Mantém a imagem fixa ao rolar a página */
}

/* Se você quiser aplicar o plano de fundo a uma seção específica, como a área dos livros */
.livros-section {
  background-image: url('livraria1.PNG');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  padding: 50px 20px;
  text-align: center;
  color: #000000; /* Ajuste a cor do texto para garantir boa visibilidade */
}


/* Cabeçalho */
header {
  position: relative;
  width: 400%;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}
/* Botões estilizados para Entrar e Cadastrar */
.login-btn, .register-btn {
  background-color: #c1121f; /* Cor de fundo chamativa */
  color: #fff; /* Cor do texto */
  padding: 10px 20px; /* Tamanho confortável */
  border: none; /* Sem bordas padrão */
  border-radius: 25px; /* Bordas arredondadas */
  font-size: 1em; /* Tamanho do texto */
  font-weight: bold; /* Texto em negrito */
  cursor: pointer; /* Ícone de clique */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2); /* Sombra para dar profundidade */
  transition: all 0.3s ease; /* Transição suave para hover */
}

/* Efeito de hover para os botões */
.login-btn:hover, .register-btn:hover {
  background-color: #c1121f; /* Cor mais escura ao passar o mouse */
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.3); /* Aumenta a sombra */
  transform: scale(1.05); /* Leve aumento no tamanho */
}

/* Estilo ao clicar nos botões */
.login-btn:active, .register-btn:active {
  transform: scale(0.95); /* Reduz levemente o tamanho ao clicar */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2); /* Diminui a sombra */
}
header {
  position: relative;
  width: 100%;
  height: 200px; /* Altura do banner */
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background: url('livraria.PNG') no-repeat center center; /* Aplica a imagem como plano de fundo */
  background-size: cover; /* A imagem cobre toda a área */
} 
.navbar {
  position: absolute;
  width: 100%;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
}

/* Estilo da barra de pesquisa */
.search-container {
  display: flex;
  align-items: center;
  background-color: #fff; /* Cor de fundo branca */
  border-radius: 25px; /* Bordas arredondadas */
  padding: 5px 15px; /* Espaçamento interno confortável */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2); /* Sombra para dar profundidade */
  transition: all 0.3s ease; /* Transição suave para hover */
}

/* Estilo do campo de input da pesquisa */
.search-container input {
  padding: 10px 15px; /* Tamanho confortável */
  border: none; /* Sem borda padrão */
  border-radius: 25px; /* Bordas arredondadas */
  font-size: 1em; /* Tamanho do texto */
  width: 250px; /* Largura do campo de pesquisa */
  transition: all 0.3s ease; /* Transição suave para foco */
  outline: none; /* Remove o contorno ao focar */
}

/* Estilo do botão de pesquisa */
.search-btn {
  background-color: #c1121f; /* Cor do botão */
  color: #fff; /* Cor do texto */
  padding: 10px 20px; /* Tamanho do botão */
  border: none; /* Sem borda */
  border-radius: 25px; /* Bordas arredondadas */
  font-size: 1em; /* Tamanho do texto */
  font-weight: bold; /* Texto em negrito */
  cursor: pointer; /* Ícone de clique */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2); /* Sombra para dar profundidade */
  transition: all 0.3s ease; /* Transição suave para hover */
}

/* Efeito de hover para o botão de pesquisa */
.search-btn:hover {
  background-color: #c1121f; /* Cor mais escura ao passar o mouse */
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.3); /* Aumenta a sombra */
  transform: scale(1.05); /* Leve aumento no tamanho */
}

/* Estilo ao clicar no botão de pesquisa */
.search-btn:active {
  transform: scale(0.95); /* Reduz levemente o tamanho ao clicar */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2); /* Diminui a sombra */
}

/* Efeito de foco no campo de pesquisa */
.search-container input:focus {
  border: 2px solid #ff6600; /* Borda laranja ao focar */
  box-shadow: 0 0 5px rgba(255, 102, 0, 0.5); /* Sombra suave ao focar */
}

.user-area p {
  color: #fff;
}

/* Livros */
.livros {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin: 20px auto;
  max-width: 1200px;
}

.livro-item {
  text-align: center;
  background-color: #f5f5f5;
  padding: 5px;
  border-radius: 30px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
}

.livro-item img {
  width: 150px;
  height: 250px;
  margin-bottom: 10px;
}

.titulo {
  font-weight: bold;
  margin: 10px 0;
}

.status {
  font-size: 0.9em;
  color: gray;
  margin: 5px 0;
}

.price {
  font-size: 1.2em;
  color: #28a745;
  font-weight: bold;
  margin: 10px 0;
}

.actions button {
  margin: 5px;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  font-weight: bold;
}

.btn-buy {
  background-color: #28a745;
  color: #fff;
}

.btn-rent {
  background-color: #007bff;
  color: #fff;
}

.btn-rent:disabled {
  background-color: #aaa;
  cursor: not-allowed;
}

/* Rodapé */
footer {
  background-color: #0f1111;
  color: #000000;
  text-align: center;
  padding: -10px;
}

.social-media img {
  height: 100px;
  margin: px;
}

.footer-logo img {
  height: 200px;
}
</style>
