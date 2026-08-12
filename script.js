// ==========================================
// PRODUTOS DA KAIOSTORE RBX
// ==========================================

const products = [
    {
        name: "Set Demon",
        rarity: "legendary",
        price: "R$ 00,00"
    },

    {
        name: "Set Shadow",
        rarity: "rare",
        price: "R$ 00,00"
    },

    {
        name: "Set Crimson",
        rarity: "uncommon",
        price: "R$ 00,00"
    },

    {
        name: "Set Night",
        rarity: "common",
        price: "R$ 00,00"
    },

    {
        name: "Item Eclipse",
        rarity: "rare",
        price: "R$ 00,00"
    },

    {
        name: "Item Phantom",
        rarity: "legendary",
        price: "R$ 00,00"
    },

    {
        name: "Item Raven",
        rarity: "uncommon",
        price: "R$ 00,00"
    },

    {
        name: "Item Void",
        rarity: "common",
        price: "R$ 00,00"
    }
];


// ==========================================
// ELEMENTOS DO SITE
// ==========================================

const productsContainer =
    document.querySelector("#products");

const searchInput =
    document.querySelector("#search");

const raritySelect =
    document.querySelector("#rarity");

const cartCount =
    document.querySelector("#cart-count");


// ==========================================
// CARRINHO
// ==========================================

let cart = 0;


// ==========================================
// NOME DAS RARIDADES
// ==========================================

function getRarityName(rarity) {

    const names = {

        common: "Comum",

        uncommon: "Incomum",

        rare: "Raro",

        legendary: "Lendário"

    };

    return names[rarity] || rarity;
}


// ==========================================
// MOSTRAR PRODUTOS
// ==========================================

function renderProducts() {

    const search =
        searchInput.value
            .toLowerCase()
            .trim();

    const selectedRarity =
        raritySelect.value;


    const filteredProducts =
        products.filter(product => {

            const matchesSearch =
                product.name
                    .toLowerCase()
                    .includes(search);


            const matchesRarity =
                selectedRarity === "all" ||
                product.rarity === selectedRarity;


            return (
                matchesSearch &&
                matchesRarity
            );

        });


    // ======================================
    // NENHUM PRODUTO
    // ======================================

    if (filteredProducts.length === 0) {

        productsContainer.innerHTML = `
        
            <p style="
                color:#999;
                grid-column:1/-1;
                padding:30px 0;
            ">
                Nenhum produto encontrado.
            </p>

        `;

        return;
    }


    // ======================================
    // PRODUTOS
    // ======================================

    productsContainer.innerHTML =
        filteredProducts.map(product => `

            <article class="product">

                <div class="product-image">

                    IMAGEM DO ITEM

                </div>


                <div class="product-info">

                    <div class="rarity">

                        ${getRarityName(product.rarity)}

                    </div>


                    <h3>

                        ${product.name}

                    </h3>


                    <div class="price">

                        <strong>

                            ${product.price}

                        </strong>


                        <button
                            class="add"
                            data-product="${product.name}"
                        >

                            Adicionar

                        </button>

                    </div>

                </div>

            </article>

        `).join("");


    // ======================================
    // BOTÕES ADICIONAR
    // ======================================

    const addButtons =
        document.querySelectorAll(".add");


    addButtons.forEach(button => {

        button.addEventListener(
            "click",
            () => {

                cart++;

                cartCount.textContent =
                    cart;


                button.textContent =
                    "Adicionado";


                setTimeout(() => {

                    button.textContent =
                        "Adicionar";

                }, 900);

            }
        );

    });

}


// ==========================================
// PESQUISA
// ==========================================

searchInput.addEventListener(
    "input",
    renderProducts
);


// ==========================================
// FILTRO DE RARIDADE
// ==========================================

raritySelect.addEventListener(
    "change",
    renderProducts
);


// ==========================================
// INICIAR SITE
// ==========================================

renderProducts();
