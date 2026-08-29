const modalidadesBtn = document.getElementById("modalidadesBtn");
const dropdownModalidades = document.getElementById("dropdownModalidades");

const crossfit = document.getElementById("crossfit");
const musculacao = document.getElementById("musculacao");
const funcional = document.getElementById("funcional");

const cardModalidade = document.getElementById("cardModalidade");


// Abrir e fechar o dropdown
modalidadesBtn.addEventListener("click", function () {
    dropdownModalidades.classList.toggle("show");

});

// CrossFit
crossfit.addEventListener("click", function () {
    cardModalidade.innerHTML = `
            <div class="modalidade-info">
            <h2>CrossFit</h2>
            <p>
                Um programa de condicionamento físico de alta intensidade
                que combina movimentos funcionais variados, como
                levantamento de peso olímpico, ginástica e exercícios aeróbicos.
            </p>
            <h3>
                Treinos semanais:
                <span>Seg - Sex: 10h - 20h</span>
            </h3>
        </div>
    `;
    dropdownModalidades.classList.remove("show");
});

// Musculação
musculacao.addEventListener("click", function () {
    cardModalidade.innerHTML = `
        <div class="modalidade-info">
            <h2>Musculação</h2>
            <p>
                Um exercício físico que usa a força dos músculos contra
                uma resistência, como pesos livres, máquinas ou o
                próprio peso do corpo.
            </p>
            <h3>
                Treinos semanais:
                <span>Seg - Sex: 10h - 20h</span>
            </h3>
        </div>
    `;

    dropdownModalidades.classList.remove("show");
});

// Funcional
funcional.addEventListener("click", function () {

    cardModalidade.innerHTML = `
        <div class="modalidade-info">
            <h2>Funcional</h2>
            <p>
                Um método de exercício que usa movimentos naturais
                do corpo, como agachar, puxar, empurrar e girar,
                para melhorar o condicionamento físico global.
            </p>
            <h3>
                Treinos semanais:
                <span>Seg - Sex: 10h - 20h</span>
            </h3>
        </div>
    `;

    dropdownModalidades.classList.remove("show");
});