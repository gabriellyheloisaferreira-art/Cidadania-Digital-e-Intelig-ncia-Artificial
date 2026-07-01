// Aguarda o carregamento completo do DOM
document.addEventListener("DOMContentLoaded", () => {
    
    // --- FUNCIONALIDADE 1: Alternador de Modo Escuro (Acessibilidade) ---
    const themeToggleBtn = document.getElementById("theme-toggle");
    
    themeToggleBtn.addEventListener("click", () => {
        // Altera a classe no body para disparar as variáveis CSS
        document.body.classList.toggle("dark-mode");
        
        // Processa informação e altera o texto dinamicamente antes de exibir
        if (document.body.classList.contains("dark-mode")) {
            themeToggleBtn.textContent = "☀️ Modo Claro";
        } else {
            themeToggleBtn.textContent = "🌓 Modo Escuro";
        }
    });

    // --- FUNCIONALIDADE 2: Validador Dinâmico do Quiz ---
    const submitQuizBtn = document.getElementById("submit-quiz-btn");
    const resultBox = document.getElementById("quiz-result");

    submitQuizBtn.addEventListener("click", () => {
        // Captura a opção selecionada pelo usuário usando seletores específicos
        const selectedOption = document.querySelector('input[name="question1"]:checked');
        
        // Remove classes anteriores para reprocessar a exibição
        resultBox.className = "result-box"; 
        
        // Validação se o usuário deixou em branco
        if (!selectedOption) {
            resultBox.classList.add("error");
            resultBox.textContent = "⚠️ Por favor, selecione uma das opções antes de verificar.";
            resultBox.classList.remove("hidden");
            return;
        }

        // Armazena o valor em variável para processamento lógico
        const userChoice = selectedOption.value;

        // Manipula o DOM alterando textos e exibindo a div de feedback
        if (userChoice === "correct") {
            resultBox.classList.add("success");
            resultBox.textContent = "🎯 Excelente! Checar em fontes confiáveis e não repassar mídias suspeitas são pilares fundamentais da Cidadania Digital.";
        } else {
            resultBox.classList.add("error");
            resultBox.textContent = "❌ Resposta Incorreta. Agir por impulso ou ignorar o problema ajuda a espalhar a desinformação automatizada. Sempre verifique os fatos!";
        }

        // Torna a div de resultado visível
        resultBox.classList.remove("hidden");
    });
});
