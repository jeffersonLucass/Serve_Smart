document.addEventListener('DOMContentLoaded', () => {
    const data = {
        'aba1': [
            { name: 'Bruschetta de Tomate', img: 'https://via.placeholder.com/150', stock: 5 },
            { name: 'Mini Caprese', img: 'https://via.placeholder.com/150', stock: 0 },
            { name: 'Palitos de Mussarela', img: 'https://via.placeholder.com/150', stock: 8 },
            { name: 'Carpaccio de Carne', img: 'https://via.placeholder.com/150', stock: 2 }
            
        ],
        'aba2': [
            { name: 'Salada Caesar', img: 'https://via.placeholder.com/150', stock: 3 },
            { name: 'Salada de Quinoa', img: 'https://via.placeholder.com/150', stock: 4 },
            { name: 'Salada Grega', img: 'https://via.placeholder.com/150', stock: 0 },
            { name: 'Salada Caprese', img: 'https://via.placeholder.com/150', stock: 6 }
        ],
        'aba3': [
            { name: 'Frango à Parmegiana', img: 'https://via.placeholder.com/150', stock: 8 },
            { name: 'Salmão Grelhado com Ervas', img: 'https://via.placeholder.com/150', stock: 0 },
            { name: 'Filé Mignon ao Molho de Vinho Tinto', img: 'https://via.placeholder.com/150', stock: 0 },
            { name: 'Bife Ancho', img: 'https://via.placeholder.com/150', stock: 6 }
        ],
        'aba4': [
            { name: 'Espaguete', img: 'https://via.placeholder.com/150', stock: 8 },
            { name: 'Fettuccine', img: 'https://via.placeholder.com/150', stock: 0 },
            { name: 'Penne', img: 'https://via.placeholder.com/150', stock: 0 },
            { name: 'Ravioli', img: 'https://via.placeholder.com/150', stock: 6 }
        ],
        'aba5': [
            { name: 'Margherita', img: 'https://via.placeholder.com/150', stock: 8 },
            { name: 'Pepperoni', img: 'https://via.placeholder.com/150', stock: 0 },
            { name: 'Quatro Queijos', img: 'https://via.placeholder.com/150', stock: 0 },
            { name: 'Calabresa', img: 'https://via.placeholder.com/150', stock: 6 }
        ],
        'aba6': [
            { name: 'Batatas Assadas', img: 'https://via.placeholder.com/150', stock: 8 },
            { name: 'Azeitona', img: 'https://via.placeholder.com/150', stock: 0 },
            { name: 'Amendoim', img: 'https://via.placeholder.com/150', stock: 0 },
            { name: 'Tabua de Frios', img: 'https://via.placeholder.com/150', stock: 6 }
        ],
        'aba7': [
            { name: 'Petit Gateau', img: 'https://via.placeholder.com/150', stock: 8 },
            { name: 'Cheesecake', img: 'https://via.placeholder.com/150', stock: 0 },
            { name: 'Pudim de Leite Condensado', img: 'https://via.placeholder.com/150', stock: 0 },
            { name: 'Brownie de Chocolate', img: 'https://via.placeholder.com/150', stock: 6 }
        ],
        'aba8': [
            { name: 'Cerveja', img: 'https://via.placeholder.com/150', stock: 8 },
            { name: 'Refrigerante', img: 'https://via.placeholder.com/150', stock: 0 },
            { name: 'Agua', img: 'https://via.placeholder.com/150', stock: 0 },
            { name: 'Suco', img: 'https://via.placeholder.com/150', stock: 6 }
        ]
    };

    function createCard(item) {
        const card = document.createElement('div');
        card.classList.add('item');
        if (item.stock === 0) {
            card.classList.add('out-of-stock');
        }

        card.innerHTML = `
            <img src="${item.img}" alt="${item.name}">
            <p>${item.name}</p>
            <p class="stock">${item.stock === 0 ? 'Sem estoque' : `Estoque: ${item.stock}`}</p>
            <div class="btn-container">
                <button class="add-btn">+</button>
                <button class="remove-btn">-</button>
            </div>
        `;

        const addBtn = card.querySelector('.add-btn');
        const removeBtn = card.querySelector('.remove-btn');
        const stockText = card.querySelector('.stock');

        addBtn.addEventListener('click', () => {
            item.stock++;
            stockText.textContent = `Estoque: ${item.stock}`;
            if (item.stock > 0) {
                card.classList.remove('out-of-stock');
            }
        });

        removeBtn.addEventListener('click', () => {
            if (item.stock > 0) {
                item.stock--;
                stockText.textContent = item.stock === 0 ? 'Sem estoque' : `Estoque: ${item.stock}`;
                if (item.stock === 0) {
                    card.classList.add('out-of-stock');
                }
            }
        });

        return card;
    }

    Object.keys(data).forEach(tabId => {
        const container = document.querySelector(`#${tabId} .items-container`);
        const items = data[tabId];
        items.forEach(item => {
            const card = createCard(item);
            container.appendChild(card);
        });
    });
});
