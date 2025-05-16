document.addEventListener('DOMContentLoaded', function () {
    const etapa1 = document.getElementById('etapa1');
    const etapa2 = document.getElementById('etapa2');
    const etapa3 = document.getElementById('etapa3');
    const etapa4 = document.getElementById('etapa4');
    const continuar1 = document.getElementById('continuar1');
    const continuar2 = document.getElementById('continuar2');
    const continuar3 = document.getElementById('continuar3');
    const voltar1 = document.getElementById('voltar1');
    const voltar2 = document.getElementById('voltar2');
    const voltar3 = document.getElementById('voltar3');
    const enviar = document.getElementById('enviat');
    const passosContainer1 = document.querySelector('.passos-container1');
    const passosContainer2 = document.querySelector('.passos-container2');
    const passosContainer3 = document.querySelector('.passos-container3');
    const formEtapa1 = document.getElementById('formEtapa1');
    const formEtapa2 = document.getElementById('formEtapa2');
    const senhaInput = document.getElementById('senha');

    // IDs dos requisitos de senha
    const requisitoOitoDigitos = document.getElementById('requisito-oito-digitos');
    const requisitoDoisNumeros = document.getElementById('requisito-dois-numeros');
    const requisitoCaractereEspecial = document.getElementById('requisito-caractere-especial');
    const requisitoLetraMaiuscula = document.getElementById('requisito-letra-maiuscula');

    // Função para mostrar o modal com mensagem personalizada
    function mostrarModal(mensagem) {
        const modalBody = document.getElementById('erroSenhaModalBody');
        if (modalBody) {
            modalBody.innerHTML = mensagem;

            // Inicializar e mostrar o modal do Bootstrap
            const erroModal = new bootstrap.Modal(document.getElementById('erroSenhaModal'));
            erroModal.show();
        } else {
            // Fallback para alert caso o modal não esteja disponível no HTML
            alert(mensagem.replace(/<[^>]*>?/gm, '')); // Remove tags HTML para exibir no alert
        }
    }

    // Função para validar o formato do email
    function validarEmail(email) {
        const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return regexEmail.test(email);
    }

    // Função para validar a senha
    function validarSenha(senha) {
        const resultados = {
            temOitoDigitos: senha.length >= 8,
            temDoisNumeros: (senha.match(/[0-9]/g) || []).length >= 2,
            temCaractereEspecial: /[!@#$%^&*(),.?":{}|<>]/.test(senha),
            temLetraMaiuscula: /[A-Z]/.test(senha)
        };
        return resultados;
    }

    // Atualizar os requisitos de senha em tempo real
    if (senhaInput) {
        senhaInput.addEventListener('input', function () {
            const validacao = validarSenha(this.value);

            // Atualizar estilo visual dos requisitos
            requisitoOitoDigitos.style.color = validacao.temOitoDigitos ? 'green' : '';
            requisitoDoisNumeros.style.color = validacao.temDoisNumeros ? 'green' : '';
            requisitoCaractereEspecial.style.color = validacao.temCaractereEspecial ? 'green' : '';
            requisitoLetraMaiuscula.style.color = validacao.temLetraMaiuscula ? 'green' : '';
        });
    }

    // Validações da Primeira Etapa
    if (formEtapa1) {
        formEtapa1.addEventListener('submit', function (event) {
            event.preventDefault();

            const nomeCompleto = document.getElementById('nome-completo').value.trim();
            const email = document.getElementById('email').value.trim();
            const senha = document.getElementById('senha').value.trim();
            const confirmaSenha = document.getElementById('confirma-senha').value.trim();

            if (!nomeCompleto || !email || !senha || !confirmaSenha) {
                mostrarModal('<p>Por favor, preencha todos os campos obrigatórios!</p>');
                return;
            }

            if (!validarEmail(email)) {
                mostrarModal('<p>Por favor, insira um endereço de e-mail válido!</p>');
                return;
            }

            const validacao = validarSenha(senha);
            const erros = [];

            if (!validacao.temOitoDigitos) erros.push('Mínimo 8 dígitos');
            if (!validacao.temDoisNumeros) erros.push('Pelo menos 2 números');
            if (!validacao.temCaractereEspecial) erros.push('Pelo menos 1 caractere especial');
            if (!validacao.temLetraMaiuscula) erros.push('Pelo menos 1 letra MAIÚSCULA');

            if (erros.length > 0) {
                let mensagemErro = '<p>A senha não atende aos seguintes requisitos:</p><ul>';
                erros.forEach(erro => {
                    mensagemErro += `<li>${erro}</li>`;
                });
                mensagemErro += '</ul>';
                mostrarModal(mensagemErro);
                return;
            }

            if (senha !== confirmaSenha) {
                mostrarModal('<p>As senhas não coincidem!</p>');
                return;
            }

            // Avançar para a Etapa 2
            etapa1.style.display = 'none';
            etapa2.style.display = 'block';
            passosContainer1.style.display = 'none';
            passosContainer2.style.display = 'flex';
        });
    }

    // Botão de voltar da Etapa 2
    if (voltar1) {
        voltar1.addEventListener('click', function () {
            etapa2.style.display = 'none';
            etapa1.style.display = 'block';
            passosContainer1.style.display = 'flex';
            passosContainer2.style.display = 'none';
        });
    }

    // Validações da Segunda Etapa
    if (formEtapa2) {
        formEtapa2.addEventListener('submit', function (event) {
            event.preventDefault();

            const telefoneInput = document.getElementById('telefone');
            const cpfInput = document.getElementById('cpf');
            const rgInput = document.getElementById('rg');
            const cepInput = document.getElementById('cep');
            const enderecoInput = document.getElementById('endereco');

            function validarTelefone(telefone) {
                const telefoneNumerico = telefone.replace(/\D/g, '');
                return telefoneNumerico.length >= 10 && telefoneNumerico.length <= 11;
            }

            function validarCPF(cpf) {
                const cpfNumerico = cpf.replace(/\D/g, '');
                return cpfNumerico.length === 11;
            }

            function validarRG(rg) {
                const rgNumerico = rg.replace(/\D/g, '');
                return rgNumerico.length >= 7 && rgNumerico.length <= 9;
            }

            function validarCEP(cep) {
                const cepNumerico = cep.replace(/\D/g, '');
                return cepNumerico.length === 8;
            }

            function validarEndereco(endereco) {
                const regex = /^[a-zA-ZÀ-ÿ0-9\s\.,\-\/º°ª]+$/;
                return regex.test(endereco);
            }

            if (!telefoneInput.value || !enderecoInput.value || !cpfInput.value || !rgInput.value || !cepInput.value) {
                mostrarModal('<p>Por favor, preencha todos os campos obrigatórios!</p>');
                return;
            }

            if (!validarTelefone(telefoneInput.value)) {
                mostrarModal('<p>Por favor, insira um número de telefone válido!</p>');
                return;
            }

            if (!validarCPF(cpfInput.value)) {
                mostrarModal('<p>Por favor, insira um CPF válido!</p>');
                return;
            }

            if (!validarRG(rgInput.value)) {
                mostrarModal('<p>Por favor, insira um RG válido (entre 7 e 9 dígitos)!</p>');
                return;
            }

            if (!validarCEP(cepInput.value)) {
                mostrarModal('<p>Por favor, insira um CEP válido!</p>');
                return;
            }

            if (!validarEndereco(enderecoInput.value)) {
                mostrarModal('<p>Por favor, verifique o endereço. Ele contém caracteres inválidos!</p>');
                return;
            }

            // Avançar para a Etapa 3
            etapa2.style.display = 'none';
            etapa3.style.display = 'block';
            passosContainer2.style.display = 'none';
            passosContainer3.style.display = 'flex';
        });
    }

    // Botão de voltar da Etapa 3
    if (voltar2) {
        voltar2.addEventListener('click', function () {
            etapa3.style.display = 'none';
            etapa2.style.display = 'block';
            passosContainer3.style.display = 'none';
            passosContainer2.style.display = 'flex';
        });
    }

    // Validações para a Terceira Etapa
    const fotoInput = document.getElementById('filedon');
    const videoInput = document.getElementById('videodon');
    const observacoesInput = document.getElementById('campos');

    // Validar o formato e tamanho da foto 3x4
    if (fotoInput) {
        fotoInput.addEventListener('change', function() {
            const fileInputElement = this; // Referência ao input de arquivo
            const file = fileInputElement.files[0];
            
            if (!file) {
                return; // Não há arquivo selecionado
            }
            
            // Verificar tipo de arquivo
            if (!file.type.startsWith('image/')) {
                mostrarModal('<p>O arquivo selecionado não é uma imagem. Por favor, envie uma foto.</p>');
                fileInputElement.value = ''; // Limpar o input
                return;
            }
            
            // Verificar tamanho (máximo 5MB)
            if (file.size > 5 * 1024 * 1024) {
                mostrarModal('<p>A foto deve ter no máximo 5MB. Por favor, envie uma imagem menor.</p>');
                fileInputElement.value = ''; // Limpar o input
                return;
            }
            
            // Criar uma imagem para verificar as dimensões
            const img = new Image();
            
            // Gerenciar erros de carregamento da imagem
            img.onerror = function() {
                mostrarModal('<p>Não foi possível carregar a imagem para verificação. Por favor, tente novamente.</p>');
                fileInputElement.value = ''; // Limpar o input
            };
            
            img.onload = function() {
                console.log(`Dimensões da imagem: ${img.width}x${img.height}`);
                
                // Verificar proporção 3:4 (largura:altura)
                // Em uma foto 3x4, a altura deve ser maior que a largura (4 > 3)
                const ratio = img.width / img.height;
                console.log(`Proporção calculada: ${ratio.toFixed(2)}`);
                
                // A proporção correta é de 3/4 = 0.75
                const expectedRatio = 3/4; // 0.75
                const tolerance = 0.1; // Tolerância de 10% na proporção
                const minRatio = expectedRatio - tolerance; // ~0.65
                const maxRatio = expectedRatio + tolerance; // ~0.85
                
                console.log(`Faixa aceitável: ${minRatio.toFixed(2)} a ${maxRatio.toFixed(2)}`);
                
                if (ratio < minRatio || ratio > maxRatio) {
                    const mensagem = `<p>A imagem não tem a proporção 3x4.</p>
                        <p>Dimensões atuais: ${img.width}x${img.height} (proporção: ${ratio.toFixed(2)})</p>
                        <p>A proporção deve ser aproximadamente 0.75 (3:4), onde a altura é maior que a largura.</p>
                        <p>Por favor, envie uma foto no formato 3x4.</p>`;
                    
                    mostrarModal(mensagem);
                    fileInputElement.value = ''; // Limpar o input
                    console.log("Validação de proporção falhou: imagem rejeitada");
                } else {
                    console.log("Validação de proporção passou: imagem aceita");
                }
                
                URL.revokeObjectURL(img.src); // Liberar o URL
            };
            
            // Iniciar o carregamento da imagem
            const objectURL = URL.createObjectURL(file);
            img.src = objectURL;
        });
    }
    
    // Validar o tamanho do vídeo
    if (videoInput) {
        videoInput.addEventListener('change', function() {
            const file = this.files[0];
            if (file) {
                // Verificar tipo de arquivo
                if (!file.type.startsWith('video/')) {
                    mostrarModal('<p>O arquivo selecionado não é um vídeo. Por favor, envie um arquivo de vídeo.</p>');
                    this.value = ''; // Limpar o input
                    return;
                }
                
                // Verificar o tamanho do vídeo (20MB máximo)
                if (file.size > 20 * 1024 * 1024) {
                    mostrarModal('<p>O vídeo deve ter no máximo 20MB. Por favor, envie um vídeo menor.</p>');
                    this.value = ''; // Limpar o input
                }
            }
        });
    }

    // Capturar o formulário da etapa 3
    const formEtapa3 = document.querySelector('#etapa3 form');
    
    if (formEtapa3) {
        formEtapa3.addEventListener('submit', function(event) {
            event.preventDefault();
            
            // Verificar se todos os campos foram preenchidos
            if (!fotoInput || !fotoInput.files.length) {
                mostrarModal('<p>Por favor, selecione uma foto 3x4!</p>');
                return;
            }
            
            if (!videoInput || !videoInput.files.length) {
                mostrarModal('<p>Por favor, selecione um vídeo esclarecedor!</p>');
                return;
            }
            
            if (!observacoesInput || !observacoesInput.value.trim()) {
                mostrarModal('<p>Por favor, preencha o campo de observações!</p>');
                return;
            }
            
            // Verificar novamente o tamanho do vídeo e foto
            const foto = fotoInput.files[0];
            if (foto.size > 5 * 1024 * 1024) {
                mostrarModal('<p>A foto deve ter no máximo 5MB.</p>');
                return;
            }
            
            const video = videoInput.files[0];
            if (video.size > 20 * 1024 * 1024) {
                mostrarModal('<p>O vídeo deve ter no máximo 20MB.</p>');
                return;
            }
            
            // Avançar para a Etapa 4
            etapa3.style.display = 'none';
            etapa4.style.display = 'block';
            passosContainer3.style.display = 'flex';
            
            // Atualizar a classe do passo ativo
            const passoElements = document.querySelectorAll('.passos-container3 .passo');
            if (passoElements.length >= 4) {
                passoElements[2].classList.remove('passo-ativo');
                passoElements[3].classList.add('passo-ativo');
            }
        });
    }

    // Botão de voltar da Etapa 4
    if (voltar3) {
        voltar3.addEventListener('click', function () {
            etapa4.style.display = 'none';
            etapa3.style.display = 'block';
            
            // Atualizar a classe do passo ativo
            const passoElements = document.querySelectorAll('.passos-container3 .passo');
            if (passoElements.length >= 4) {
                passoElements[3].classList.remove('passo-ativo');
                passoElements[2].classList.add('passo-ativo');
            }
        });
    }

    // Validações para a Quarta Etapa e finalização do cadastro
    const formEtapa4 = document.querySelector('#etapa4 form');
    
    if (formEtapa4) {
        formEtapa4.addEventListener('submit', function(event) {
            event.preventDefault();
            
            // Verificação dos inputs de estado civil (radio buttons)
            const estadoCivilSelecionado = document.querySelector('input[name="estado-civil"]:checked');
            if (!estadoCivilSelecionado) {
                mostrarModal('<p>Por favor, selecione seu estado civil!</p>');
                return;
            }
            
            // Verificação do número de pessoas na casa
            const numeroPessoas = document.getElementById('numerodepessoas');
            if (!numeroPessoas || !numeroPessoas.value.trim() || numeroPessoas.value <= 0) {
                mostrarModal('<p>Por favor, informe um número válido de pessoas na casa!</p>');
                return;
            }
            
            // Verificação da ocupação
            const ocupacao = document.getElementById('ocupacao');
            if (!ocupacao || !ocupacao.value.trim()) {
                mostrarModal('<p>Por favor, informe sua ocupação!</p>');
                return;
            }
            
            // Verificação da política de privacidade
            const privacidade = document.getElementById('privacidade');
            if (!privacidade || !privacidade.checked) {
                mostrarModal('<p>Você precisa concordar com a Política de Privacidade para continuar!</p>');
                return;
            }
            
            // Se todas as validações passarem, redirecionar para a página de entrar
            window.location.href = 'entrar1.html';
        });
    }

    // Seleciona todos os ícones de "mostrar senha"
    const mostrarSenhaIcons = document.querySelectorAll('.mostrar-senha');

    mostrarSenhaIcons.forEach(function (icon) {
        icon.addEventListener('click', function () {
            // Seleciona o campo de entrada associado ao ícone
            const input = this.previousElementSibling;

            if (input.type === 'password') {
                input.type = 'text'; // Altera para texto
                this.innerHTML = '<i class="fa fa-eye-slash" aria-hidden="true"></i>'; // Ícone de "ocultar"
            } else {
                input.type = 'password'; // Altera para senha
                this.innerHTML = '<i class="fa fa-eye" aria-hidden="true"></i>'; // Ícone de "mostrar"
            }
        });
    });

    // Mudar a cor do botão de rádio quando selecionado
    const radioButtons = document.querySelectorAll('input[type="radio"]');
    
    radioButtons.forEach(function(radio) {
        radio.addEventListener('change', function() {
            // Remover a classe 'checked' de todos os radio buttons no mesmo grupo
            const name = this.getAttribute('name');
            document.querySelectorAll(`input[name="${name}"]`).forEach(function(rb) {
                rb.classList.remove('checked');
                rb.parentElement.classList.remove('label-checked');
            });
            
            // Adicionar a classe 'checked' ao radio button selecionado
            if (this.checked) {
                this.classList.add('checked');
                this.parentElement.classList.add('label-checked');
            }
        });
    });
});
