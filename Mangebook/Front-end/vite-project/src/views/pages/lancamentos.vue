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

    <!-- Seção de Novos Lançamentos -->
    <section class="novos-lancamentos-section">
      <h2>Novos Lançamentos</h2>

      <!-- Grid de livros -->
      <div class="livros">
        <!-- Loop para exibir cada lançamento -->
        <div v-for="(livro, index) in lancamentos" :key="index" class="livro-item">
          <img :src="livro.imagem" :alt="livro.titulo" />
          <p class="titulo">{{ livro.titulo }}</p>
          <p class="status">{{ livro.status }}</p>
          <p class="price">R$ {{ livro.preco }}</p>
          <div class="actions">
            <!-- Botão de realizar reserva -->
            <button 
              v-if="isLoggedIn"
              @click="realizarReserva(livro)"
              class="btn-reserve"
            >
              Realizar Reserva
            </button>
            <router-link v-else to="/cadastro">
              <button class="btn-reserve">Realizar Reserva</button>
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
      // Dados dos lançamentos de livros
      lancamentos: [
        {
          imagem: "capa-livro16.PNG",
          titulo: "Bushido",
          status: "Lançamento",
          preco: "40,00",
        },
        {
          imagem: "capa-livro17.PNG",
          titulo: "A Arte de Ganhar Dinheiro",
          status: "Lançamento",
          preco: "55,00",
        },
        {
          imagem: "capa-livro18.PNG",
          titulo: "A Metamorfose",
          status: "Lançamento",
          preco: "30,00",
        },
        {
          imagem: "capa-livro19.PNG",
          titulo: "As Outras Pessoas",
          status: "Lançamento",
          preco: "30,00",
        },
        {
          imagem: "capa-livro20.PNG",
          titulo: "O Jogo da Imitação",
          status: "Lançamento",
          preco: "30,00",
        },
        {
          imagem: "capa-livro21.PNG",
          titulo: "As Regras do Jogo",
          status: "Lançamento",
          preco: "30,00",
        },
        {
          imagem: "capa-livro22.PNG",
          titulo: "O Que Aconteceu com Annie",
          status: "Lançamento",
          preco: "30,00",
        },
        {
          imagem: "capa-livro23.PNG",
          titulo: "Ensaio Sobre a Cegueira",
          status: "Lançamento",
          preco: "30,00",
        },
        {
          imagem: "capa-livro24.PNG",
          titulo: "Os Irmãos Karamazov",
          status: "Lançamento",
          preco: "30,00",
        },
        {
          imagem: "capa-livro25.PNG",
          titulo: "Walden",
          status: "Lançamento",
          preco: "30,00",
        },
        {
          imagem: "capa-livro26.PNG",
          titulo: "Garota em Chamas",
          status: "Lançamento",
          preco: "30,00",
        },{
          imagem: "capa-livro27.PNG",
          titulo: "A Ciranda das Mulheres Sábias",
          status: "Lançamento",
          preco: "30,00",
        },
        // Adicione mais livros conforme necessário
      ],
      isLoggedIn: false, // A variável para verificar se o usuário está logado
    };
  },
  methods: {
    realizarReserva(livro) {
      // Lógica para realizar a reserva, talvez fazer um redirecionamento ou exibir uma confirmação
      alert(`Reserva realizada para o livro: ${livro.titulo}`);
    }
  },
  mounted() {
    // Aqui você pode verificar o estado de login do usuário, por exemplo, se ele tem um token ou algo semelhante
    // Exemplo simples de como definir isLoggedIn (substitua com lógica real de autenticação)
    const user = localStorage.getItem("user");
    this.isLoggedIn = user !== null; // Checa se o usuário está logado (você pode substituir com lógica mais robusta)
  }
};
</script>

<style scoped>

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
/* Reset básico */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
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

/* Seção dos Novos Lançamentos */
.novos-lancamentos-section {
  background-image: url('livraria1.PNG');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  padding: 50px 20px;
  text-align: center;
  color: #0c0c0c; /* Ajuste a cor do texto para garantir boa visibilidade */
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
  background-color: #fff;
  border-radius: 25px;
  padding: 5px 15px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
}

.search-container input {
  padding: 10px 15px;
  border: none;
  border-radius: 25px;
  font-size: 1em;
  width: 250px;
  transition: all 0.3s ease;
  outline: none;
}

.search-btn {
  background-color: #c1121f;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 25px;
  font-size: 1em;
  font-weight: bold;
  cursor: pointer;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
}

.search-btn:hover {
  background-color: #c1121f;
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.3);
  transform: scale(1.05);
}

.search-btn:active {
  transform: scale(0.95);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
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

.btn-reserve {
  background-color: #007bff;
  color: #fff;
}

.btn-reserve:disabled {
  background-color: #aaa;
  cursor: not-allowed;
}

/* Rodapé */
footer {
  background-color: #0f1111;
  color: #fff;
  text-align: center;
  padding: 0px;
}

.social-media img {
  height: 100px;
  margin: 10px;
}

.footer-logo img {
  height: 200px;
}
</style>
