@import url("https://fonts.googleapis.com/css2?family=Passion+One:wght@400;700;900&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Lexend+Deca:wght@100..900&display=swap");

* {
  margin: 0;
  padding: 0;
  font-family: "Lexend Deca", sans-serif;
}

.titulo {
  text-align: center;
  color: #8B4513;
  margin: 20px 0;
  font-family: "Passion One", sans-serif;
  font-size: 1.7rem;
}

.passos-container {
  display: flex;
  width: 300px;
  margin-left: auto;
  margin-right: 40px;
  text-decoration: none;
}

.passos-container4 {
  display: flex;
  width: 100%;
  margin: 0;
}

.passo.ativo {
  margin-top: 30px;
  background-color: #FBF6F1;
  text-decoration: none;
}

.passos-container3 {
    display: flex;
    width: 100%;
    margin: 0;
  }
  
  .passo {
    flex: 1;
    text-align: center;
    padding: 12px;
    background-color: #FFFBF8;
    color: #000000;
    border: none;
  }
  
  


  
  .estado-civil {
    display: flex;
    flex-direction: row;
    margin-top: 1rem;
    
    justify-content: flex-start;
    align-items: center;
  }
  
  .estado-civil label {
    display: flex;
    align-items: center;
    gap: 5px;
    font-size: 14px;
    margin-bottom: 0;
  }
  
  .pessoas {
    display: flex;
    flex-direction: row;
    margin-top: 1rem;
    margin-bottom: 2rem;
    gap: 1.5rem;
    justify-content: flex-start;
    align-items: center;
  }
  
  .pessoas label {
    display: flex;
    align-items: center;
    gap: 5px;
    font-size: 14px;
    margin-bottom: 0;
  }
  
  .campos {
    margin-bottom: 35px;
  }
  
  #numerodepessoas, #ocupacao {
    width: 100%;
    padding: 10px 15px;
    border: 1px solid #CCC;
    border-radius: 20px;
    font-size: 0.9rem;
    margin-top: 5px;
  }
  
 
  
  /* Estilização do formulário e aviso */

  
  #etapa3 .aviso {
    font-size: 0.85rem;
    line-height: 1.4;
    margin: 20px 0;
  }
.passo {
  flex: 1;
  margin-top: 30px;
  text-align: start;
  padding: 15px;
  background-color: #c5a26d49;
  text-decoration: none;
  align-items: start;
  color: #000000;
}
a {
  text-decoration: none;
}



.aviso {
  font-size: 0.85rem;
  margin-bottom: 20px;
  line-height: 1.4;
  margin: 20px 40px 40px;
}

.campo {
  margin-bottom: 15px;
  margin: 0 40px 40px;
  width: auto;
}

.campo label {
  display: block;
  margin-bottom: 5px;
}

.campo label span.obrigatorio {
  color: red;
}

#campos {

  width: 100%;
  padding: 30px;
  background-color: transparent;
  border: 1px solid #929191;
  border-radius: 12px;
  font-size: 0.9rem;
  padding-left: 20px;
}

input[type="file"]  {
  display: none;
}


#videodon{
    width: 100%;
  
    padding: 80px;
    font-size: 14px;
    background-color: #e2e0dd;
    color: #91908f;;
    
}

#maio{
    display: flex;
    flex-direction: row;
    justify-content: space-between; 
    align-items: center; 
    width: 100%; /* Ensures the container takes up the full width */
    gap: 1rem;
 
 
}

#campos:focus {
  border-color: #E2CCAE;
  
}



  

#filedon{

    width: 190px;
    height: 250px;
    padding: 6rem 2rem;
    background-color: #e2e0dd;
    color:#91908f;;
}

.estado-civil{
    display:flex;
    flex-direction: row;
    margin-top: 1rem;
    font-size:14px;
    margin-bottom:2rem;
}
.estado-civil label {
    display: flex;
    align-items: center; /* Alinha verticalmente o botão e o texto */
   
    margin-right: 10rem /* Espaçamento entre os grupos de rádio */
}

.pessoas{
    display:flex;
    flex-direction: row;
    margin-top: 1rem;
    font-size:14px;
    margin-bottom:2rem;

}

.pessoas label {
    display: flex;
    align-items: center; /* Alinha verticalmente o botão e o texto */
   
    margin-right: 11rem /* Espaçamento entre os grupos de rádio */
}

input[type="radio"], input[type="checkbox"] {
    transform: scale(1.4);
}




.requisitos{
  font-size: 15px;
 
  margin-top: -1rem;
 
  
}
.camppinho{
    margin-bottom:2rem;
}
.requisitos p {
    align-self: center;
    text-align: justify;
    margin-bottom: 2rem;
  margin-right:14rem;
}


.sub-sub-titulo {
  font-size: 0.75rem;
  color: #666;
  margin: 0px 40px 40px;
}
 #botao {
    background-color: #E2CCAE;
    width: 150px;
    height: 40px;
    border-radius: 10px;
    border: none;
    color:#000000;
     justify-content: flex-end;
     font-size: 14px;
     font-family: "Lexend Deca";

  }

  .botaosem{
  background-color: transparent;
  border: 1px solid #000000;
   padding: 0.5rem 3.2rem;
   border-radius: 10px;
  color: #000000;
   font-weight: 400;
   font-size: 1rem;
   cursor: pointer;
   transition: all 0.3s ease;
  }

.botoes {
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
}

.botao-avancar {
  background-color: transparent;
  font-size: 40px;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
.botao-none {
  background-color: transparent;
  border: none;
}
#botao-validar{
  background-color: #E2CCAE;
  border: none;
  color: #000000;

}


/* Responsividade */
@media (min-width: 100px) and (max-width: 950px) {
  body {
    overflow-x: hidden;
  }
  .formulario {
    background-color:#fce8d83b;
    margin-left: 10px;
    margin-right: 10px;
    font-size: 14px;
  }

  
#campos {

    width: 100%;
    padding: 30px;
    background-color: transparent;
    border: 1px solid #929191;
    border-radius: 12px;
    font-size: 0.9rem;
    padding-left: 20px;
  }
  
  input[type="file"]  {
    display: none;
  }
  
  
  #videodon{
      width: 100%;
      padding: 80px;
      background-color: #e2e0dd;
      color: #91908f;;
      
  }
  
  #maio{
      display: flex;
      flex-direction: row;
      justify-content: space-between; /* Distributes space between child elements */
      align-items: center; /* Aligns items vertically */
      width: 100%; /* Ensures the container takes up the full width */
      gap: 1rem;
   
   
  }
  
  #campos:focus {
    border-color: #E2CCAE;
    
  }
  
  
  
    
  
  #filedon{
  
      width: 120px;
      height: 100px;
      padding: 6rem 1rem;
      background-color: #e2e0dd;
      color:#91908f;;
      font-size:12px
  }
  
  #botao {
    background-color: #E2CCAE;
    width: 100px;
    height: 40px;
    border-radius: 20px;
    border: none;
    color: #3E3E3E;
  }
  .ph ph-arrow-right {
    text-align: end;
    justify-items: end;
  }
  .aviso {
    font-size: 14px;
    margin-left: 5px;
    margin-right: 5px;
    text-align: center;
  }
  .passos-container {
    display: none;
  }
  .campo {
    margin-left: 5px;
    margin-right: 5px;
  }
  .requisitos-senha {
    margin-left: 5px;
  }
  input::placeholder{
    font-size: 14px;
  }

}





#fixado {
  position: fixed;
  width: 100%;
  z-index: 1000;
  top: 0;
  left: 0;
  padding-left: 16px;
  padding-right: 16px;
}


.navbar-nav {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 14px;
  gap: 0.5rem;
  margin-left: 20px;
}


.menu-lateral {
  justify-content: flex-start;
  text-align: left;
}


.img {
  margin-top: -0.6rem;
  margin-left: 1rem;
}


#dona1,
#doap,
#doain {
  font-size: 14px;
}


#conteudoNavbarSuportado {
  text-align: left;
}


.nav-centralizada {
  gap: 1px;
  display: flex;
  justify-content: flex-start;
}


.nav-item {
  margin: 0 5px;
}


#icone {
  border: none;
  outline: none;
}


.btn-brown,
#doeagora {
  background-color: rgba(226, 204, 174, 1);
  border-color: rgba(226, 204, 174, 1);
  color: #4E3629;
  font-weight: 700;
  font-family: "Lexend Deca";
}


#doeagora {
  font-size: 16px;
  width: 9rem;
  margin-right: 2rem;
}


#doeagora:hover {
  background-color: #caae8d;
}


.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}


.titulo {
  text-align: center;
  color: #693B11;
  margin: 40px 0 50px;
  font-family: "Passion One", sans-serif;
  font-size: 2rem;
}


.formulario {
  background-color:#F9E7D2;
  padding: 30px;
  margin-bottom: 100px;

}


.campo {
  margin-bottom: 20px;
}


.campo label {
  display: block;
  margin-bottom: 8px;
  font-weight: 400;
}


.campo label span.obrigatorio {
  color: red;
}


.campo input, .campo textarea {
  width: 100%;
  padding: 10px 15px;
  border: 1px solid #CCC;
  border-radius: 20px;
  font-size: 0.9rem;
}


.campo textarea {
  resize: vertical;
  min-height: 100px;
}

#continuar3{

    background-color: #E2CCAE; /* Fundo do botão */
    border: none;
    color: #3E3E3E;
    padding: 8px 25px;
    border-radius: 10px;
    font-size: 14px;
    cursor: pointer;
    font-weight: 400;
    display: flex;
    align-items: center;
    justify-content: center;

}

#enviar{

    background-color: #E2CCAE; /* Fundo do botão */
    border: none;
    color: #3E3E3E;
    padding: 8px 25px;
    border-radius: 10px;
    font-size: 14px;
    cursor: pointer;
    font-weight: 400;
    display: flex;
    align-items: center;
    justify-content: center;

}

#voltar4{

    background-color: transparent;
   padding: 8px 25px;
    border-radius: 10px;
    border: 1px #000000 solid;
    color: #3E3E3E;
    font-size: 14px;
    cursor: pointer;
    font-weight: 400;
    display: flex;
    align-items: center;
    justify-content: center;



}

.politica-container {
    display: flex;
    align-items: center;
    margin: 20px 0;
    gap: 10px;
  }
  
  .politica-container input[type="checkbox"] {
    margin: 0;
    flex-shrink: 0;
    width: 16px;  /* Reduced from 20px to match other inputs */
    height: 16px; /* Reduced from 20px to match other inputs */
    cursor: pointer;
    transform: scale(1); /* Removed the larger scale transformation */
  }
  
  
  .politica-container label {
    margin: 0;
    font-size: 14px;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 10px;
  }
  
  #politica {
    color: #EC9E07;
    text-decoration: none;
  }
  
  #politica:hover {
    text-decoration: underline;
  }
  
  /* Responsividade para o container de política */
  @media (max-width: 768px) {
    .politica-container {
      align-items: flex-start;
    }
    
    .politica-container input[type="checkbox"] {
      margin-top: 3px;
    }

    .politica-container label {
        margin: 0;
        font-size: 12px;
        cursor: pointer;
        display: flex;
        align-items: center;
        gap: 10px;
      }


  
#politica {
  color: #EC9E07;
  text-decoration: none;
  font-size: 12px;
}

#politica:hover {
  text-decoration: underline;
}
  }


#continuar2 {
  background-color: #E2CCAE; /* Fundo do botão */
  border: none;
  color: #3E3E3E;
 padding: 8px 25px;
  border-radius: 10px;
  font-size: 14px;
  cursor: pointer;
  font-weight: 400;
  display: flex;
  align-items: center;
  justify-content: center;
}


#continuar2:hover {
  background-color: #caae8d; /* Fundo mais escuro ao passar o mouse */
  color: #3d2106; /* Cor do texto ao passar o mouse */
  border: 1px solid #d8b48bce; /* Borda ao passar o mouse */
}


#voltar1:hover {
  background-color: #f5f5f5; /* Fundo leve ao passar o mouse */
  color: #000000; /* Cor do texto ao passar o mouse */
  border: 1px solid #3E3E3E; /* Borda mais escura ao passar o mouse */
}

.terrmo{
    margin-top: -1.2rem;
}




#formEtapa1 .botoes{
  display: flex;
  justify-content: flex-end; /* Alinha o botão à direita */
  margin-top: 50px;
}
#formEtapa3 .botoes {
  display: flex;
  justify-content: space-between; /* Espaça os botões uniformemente */
  margin-top: 50px;
  gap: 20px;
}

#formEtapa4 .botoes {
    display: flex;
    justify-content: space-between; /* Espaça os botões uniformemente */
    margin-top: 50px;
    gap: 20px;
  }


#formEtapa2 .botoes {
  display: flex;
  justify-content: space-between; /* Espaça os botões uniformemente */
  margin-top: 50px;
  gap: 20px;
}


#voltar1 {

  background-color: transparent;
  padding: 8px 25px;
  border-radius: 10px;
  border: 1px #000000 solid;
  color: #3E3E3E;
  font-size: 16px;
  cursor: pointer;
  font-weight: 400;
  display: flex;
  align-items: center;
  justify-content: center;
}

#voltar2{

    background-color: transparent;
    padding: 8px 25px;
    border-radius: 10px;
    border: 1px #000000 solid;
    color: #3E3E3E;
    font-size: 14px;
    cursor: pointer;
    font-weight: 400;
    display: flex;
    align-items: center;
    justify-content: center;


}


#continuar1 {
  background-color: #E2CCAE;
 padding: 8px 25px;
  border-radius: 10px;
  border: none;
  color: #3E3E3E;
  font-size: 14px;
  cursor: pointer;
  font-weight: 400;
}


#continuar1:hover {
  background-color: #caae8d;
  color: #3d2106;
  border: 1px solid #d8b48bce;
}


/* Passos */
.passos-container1, .passos-container2, .passoscontainer3, .passos-container4{
  display: flex;
  width: 100%;
  margin: 0;
}


.passos-container2 {
  display: none; /* Oculta o container por padrão */
}


.passo {
  flex: 1;
  text-align: center;
  padding: 12px;
  background-color: #FFFBF8;
  color: #000000;
  border: none;
}


.passo.ativo {
  background-color: #F9E7D2;
  font-weight: 500;
}


/* Estilos específicos para a segunda página */
#etapa2 .formulario {
  margin-top: 20px; /* Ajuste para encaixar o formulário abaixo dos passos */
}



#etapa2 .passos-container2 {
  margin-bottom: 10px; /* Ajuste para reduzir o espaço entre os passos e o formulário */
}


.aviso {
  font-size: 0.85rem;
  line-height: 1.4;
  margin: 20px 0;
}


.requisitos-senha {
  font-size: 0.85rem;
  color: #666;
  margin-bottom: 20px;
}


.requisitos-senha p {
  margin: 3px 0;
}


.requisitos-senha .requisitos-secundarios::before {
  content: "•";
  color: red;
  margin-right: 5px;
}


footer {
  background-color: #fcf2e8;
    padding: 20px 50px;
    font-family: "Lexend Deca", sans-serif;
  }
 
 
  .footer-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-start;
    gap: 40px;
  }
 
 
  .footer-left {
    max-width: 400px;
    font-size: 12px;
    height: 180px;
  }
 
 
  .footer-left p {
    font-size: 10px;
  }
 
 
  footer-left img {
    width: 200px;
    height: auto;
  }
 
 
  .copyright {
    padding-top: 20px;
  }
 
 
  .footer-logo {
    margin-bottom: 10px;
  }
 
 
  .footer-right {
    display: flex;
    gap: 40px;
    margin-top: 20px;
  }
 
 
  .footer-column {
    flex: 2;
    min-width: 200px;
    text-align: center;
  }
 
 
  .footer-column h3 {
    font-weight: 400;
    font-size: 14px;
    color: #535151;
    margin-bottom: 10px;
  }
 
 
  .footer-column a {
    color: #EC9E07;
    text-decoration: none;
    font-size: 12px;
    display: block;
    margin-bottom: 5px;
  }
 
 
  .footer-column a:hover {
    text-decoration: underline;
    color: #8B7777;
  }


.input-wrapper {
  position: relative;
  display: flex;
  align-items: center;
}


.input-wrapper input {
  width: 100%;
  padding-right: 40px;
}


.mostrar-senha {
  position: absolute;
  right: 10px;
  cursor: pointer;
  color: #888;
  font-size: 18px;
}


.mostrar-senha:hover {
  color: #000;
}


.senha-container {
  display: flex;
  gap: 20px;
}


.senha-grupo {
  flex: 1;
}


a {
  text-decoration: none;
}


/* Responsividade */
@media (max-width: 868px) {


  .btn-brown {
    width: auto;
    padding: 5px 15px;
    font-size: 16px;
  }


  #continuar2, #voltar1{
      width: 48%;
      font-size: 14px;
  }


#continuar1{
  width: 100px;
}


  .passos-container1, .passos-container2, .passos-container3, .passos-container4 {
    display: none;
  }


  .botoes {
    flex-direction: column; /* Empilha os botões em telas menores */
    gap: 10px; /* Espaço entre os botões */
    justify-content: space-between;
  }

  footer {
    padding: 20px 30px;
  }




  .footer-container {
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 5px;
  }




  .footer-left {
    max-width: 100%;
  }




  .copyright {
    margin-bottom: 20px;
  }




  .footer-logo {
    height: 50px;
  }




  .footer-right {
    flex-direction: column;
    gap: 20px;
    width: 100%;
  }




  .footer-column {
    min-width: auto;
  }




  .footer-column h3 {
    font-weight: 400;
    font-size: 12px;
    color: #535151;
    margin-bottom: 10px;
  }




  .footer-column a {
    color: #EC9E07;
    text-decoration: none;
    font-size: 10px;
    display: block;
    margin-bottom: 5px;
  }


  .senha-container {
    flex-direction: column;
  }
}




@media (min-width: 799px) {
  .passos-container1, .passos-container2 {
    display: flex;
  }


  .botoes {
    flex-direction: row;
    gap: 10px;
    justify-content: space-between;
  }


  #botao-voltar, #botao-avancar {
    width: 48%;
    font-size: 14px;
  }


  footer {
    padding: 20px 50px;
    font-family: "Lexend Deca", sans-serif;
  }




  .footer-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-start;
    gap: 40px;
  }




  .footer-left {
    max-width: 280px;
  }




  .footer-left p {
    font-size: 10px;
  }




  .footer-logo {
    height: 50px;
    margin-bottom: 10px;
  }




  .footer-right {
    display: flex;
    gap: 10px;
    margin-top: 20px;
  }




  .footer-column {
    flex: 2;
    min-width: 100px;
    text-align: center;
  }




  .footer-column h3 {
    font-weight: 400;
    font-size: 10px;
    color: #535151;
    margin-bottom: 10px;
  }




  .footer-column a {
    color: #EC9E07;
    text-decoration: none;
    font-size: 8px;
    display: block;
    margin-bottom: 5px;
  }




  .footer-column a:hover {
    text-decoration: underline;
  }
}


@media (min-width: 1024px) {
  footer {
    padding: 20px 50px;
    font-family: "Lexend Deca", sans-serif;
  }




  .footer-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-start;
    gap: 40px;
  }




  .footer-left {
    max-width: 400px;
    font-size: 12px;
  }




  .footer-logo {
    height: 60px;
    margin-bottom: 20px;
  }




  .footer-right {
    display: flex;
    gap: 20px;
    margin-top: 20px;
  }




  .footer-column {
    flex: 2;
    min-width: 200px;
    text-align: center;
  }




  .footer-column h3 {
    font-weight: 400;
    font-size: 14px;
    color: #535151;
    margin-bottom: 10px;
  }




  .footer-column a {
    color: #EC9E07;
    text-decoration: none;
    font-size: 12px;
    margin-bottom: 5px;
  }




  .footer-column a:hover {
    text-decoration: underline;
  }




  .copyright {
    margin-top: -20px;
  }
}


@media (min-width: 1500px) {
  footer {
    padding: 20px 50px;
    font-family: "Lexend Deca", sans-serif;
  }




  .footer-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-start;
    gap: 40px;
  }




  .footer-left {
    max-width: 400px;
    font-size: 12px;
  }




  .footer-logo {
    height: 70px;
    margin-bottom: 10px;
  }




  .footer-right {
    display: flex;
    gap: 20px;
    margin-top: 20px;
  }




  .footer-column {
    flex: 2;
    min-width: 200px;
    text-align: center;
  }




  .footer-column h3 {
    font-weight: 400;
    font-size: 14px;
    color: #535151;
    margin-bottom: 10px;
  }




  .footer-column a {
    color: #EC9E07;
    text-decoration: none;
    font-size: 12px;
    margin-bottom: 5px;
  }




  .footer-column a:hover {
    text-decoration: underline;
  }
}
@media (min-width: 1000px) {
  .navbar-nav {
    margin-left: 20px;
    margin-right: auto;
  }
}


@media (max-width: 1024px) {
  .mr-auto {
    border: none;
  }
}


/* Corrigido para não interferir com o comportamento do Bootstrap */
@media (max-width: 991px) {
  .navbar-brand {
    margin-right: 0;
  }
 
  .navbar-toggler {
    margin-right: 15px;
  }
 
  /* Remove o alinhamento centralizado em telas menores */
  #conteudoNavbarSuportado {
    text-align: left !important;
  }
 
  .navbar-collapse.show .navbar-nav,
  .navbar-collapse.collapsing .navbar-nav {
    flex-direction: column;
    align-items: flex-start;
    margin-left: 0;
    margin-right: 0;
    width: 100%;
  }
 
  .nav-centralizada {
    display: block;
    width: 100%;
    text-align: left;
    justify-content: flex-start;
  }
 
  .btn-brown {
    margin: 10px 0;
    justify-content: flex-start;
    display: block;
    margin-right: auto;
  }
 
  /* Garante que os itens de dropdown também fiquem alinhados à esquerda */
  .dropdown-menu {
    text-align: left;
    padding-left: 15px;
  }
}

@media (max-width: 768px) {
    #maio {
      flex-direction: column;
      gap: 1rem;
      align-items: center;
    }
      
    .pessoas input [type=checkbox] {
        transform: scale(1.4);
        top: 9rem;
      }
    #filedon {
      width: 100%;
      max-width: 200px;
      height: 150px;
      padding: 3rem 1rem;
      margin: 0 auto;
    }
    
    #videodon {
      padding: 40px;
      margin: 0 auto 20px;
    }
    
    .estado-civil, .pessoas {
      flex-direction: column;
      align-items: flex-start;
      gap: 0.8rem;
      margin-left: 20px;
    }
    
    .requisitos-senha {
        display: flex;
        justify-content: center;
        flex-direction: column;
      text-align: justify;
    }
    
    .botoes {
      flex-direction: column;
      width: 100%;
    }
    
    #voltar2, #voltar4, #continuar3, #enviar {
      width: 100%;
      margin-bottom: 10px;
    }
  }
  
  /* Tablet e telas médias */
  @media (min-width: 769px) and (max-width: 824px) {
    #filedon {
      width: 160px;
      height: 180px;
      padding: 4rem 1.5rem;
    }
    
    #videodon {
      padding: 50px;
    }
   
    .pessoas input [type=checkbox] {
      transform: scale(1.4);
      margin-top: 2rem;
    }   
    

    .estado-civil, .pessoas {
      justify-content: center;
      flex-wrap: wrap;
    }
    
    .requisitos-senha {
      max-width: 400px;
      margin-left: auto;
      margin-right: auto;
    }
  }
  
  /* Ajustes para telas grandes */

  
