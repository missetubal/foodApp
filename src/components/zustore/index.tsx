import create from 'zustand';

const useStore = create(set => ({
  cardItens: [
    {
      name: '',
      description: '',
      image: '',
      price: '',
      amount: '',
      id: '',
    },
  ],
  addItem: cardItem =>
    set(state => ({
      cardItens: [
        {
          name: cardItem.name,
          description: cardItem.description,
          image: cardItem.image,
          price: cardItem.price,
          amount: cardItem.amount,
          id: cardItem.id,
        },
        ...state.cardItens,
      ],
    })),
  removeItem: id =>
    set(state => ({
      currentItem: state.cardItens.filter(cardItem => cardItem.id !== id),
    })),
  updateItem: cardItem =>
    set(state => ({
      cardItens: state.cardItens.map(item => {
        if (item.id === cardItem.id) {
          return {
            ...item,
            name: cardItem.amount,
          };
        } else {
          return item;
        }
      }),
    })),
}));

export const itemCartStore = useStore;
