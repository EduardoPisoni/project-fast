export interface Product {
  id: string;
  name: string;
  fullPrice: number;
  freeShipping: boolean;
  onSale: boolean;
  timesSold: number;
}

export const products = [
  {
    category: "smartphones",
    items: [
      {
        id: "001",
        name: "Smartphone Xiaomi Redmi Note 9S, 4GB de Ram, 64GB, Tela 6.67\", Cinza",
        fullPrice: 2900.90,
        freeShipping: true,
        onSale: true,
        timesSold: 55
      },
      {
        id: "002",
        name: "Smartphone Motorola Moto E20, 32GB, 2GB RAM, Tela 6.5, Cinza",
        fullPrice: 679,
        freeShipping: false,
        onSale: false,
        timesSold: 7
      },
      {
        id: "003",
        name: "Smartphone Samsung Galaxy A03, 4GB RAM, 64GB, Tela Infinita 6.5, Azul",
        fullPrice: 779,
        freeShipping: false,
        onSale: false,
        timesSold: 47
      },
      {
        id: "004",
        name: "Smartphone Moto G52 128GB, RAM 4GB Tela de 6.6\" Branco",
        fullPrice: 1158.99,
        freeShipping: false,
        onSale: false,
        timesSold: 5
      },
      {
        id: "005",
        name: "Smartphone Xiaomi Redmi Note 9S, 4GB de Ram, 64GB, Tela 6.67\", Cinza",
        fullPrice: 2499,
        freeShipping: true,
        onSale: true,
        timesSold: 29
      },
      {
        id: "006",
        name: "Smartphone Xiaomi Redmi Note 9, Dual, 64GB, Branco - Polar White",
        fullPrice: 2159.99,
        freeShipping: true,
        onSale: true,
        timesSold: 19
      },
      {
        id: "007",
        name: "Smartphone Asus ZenFone Max Plus M2, 32GB - Preto - 4G, 3GB RAM",
        fullPrice: 1499,
        freeShipping: false,
        onSale: false,
        timesSold: 13
      },
      {
        id: "008",
        name: "Smartphone Xiaomi 11 Lite Ne 5g Dual Sim 128gb 8gb Ram, Rosa",
        fullPrice: 2899,
        freeShipping: true,
        onSale: true,
        timesSold: 22
      }
    ]
  },
  {
    category: "notebooks",
    items: [
      {
        id: "001",
        name: "Notebook Gamer Asus Intel Core i5, 8GB RAM, SSD 512GB, GTX 1650, Prata",
        fullPrice: 4499.99,
        freeShipping: false,
        onSale: false,
        timesSold: 52
      },
      {
        id: "002",
        name: "Notebook Asus AMD Ryzen 5, 8GB RAM, SSD 256GB, 15,6', Cinza",
        fullPrice: 2599.99,
        freeShipping: false,
        onSale: false,
        timesSold: 45
      }
    ]
  }
];