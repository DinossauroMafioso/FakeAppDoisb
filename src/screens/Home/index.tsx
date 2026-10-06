import { useState } from "react";
import { ScreenContainer, Header, ScreenTittle, SearchInput, CatergoryList } from "./styles";
import { FlatList } from "react-native/types_generated/Libraries/Animated/AnimatedExports";

const categorias = [
  "electronics",
  "jewelery",
  "men's clothing",
  "women's clothing"
]


const produtos = [[
  {
    "id": 1,
    "title": "Fjallraven Backpack",
    "price": 109.95,
    "description": "Your perfect pack…",
    "category": "men's clothing",
    "image": "https://fakestoreapi.com/img/…",
    "rating": { "rate": 3.9, "count": 120 }
  },
  {
    "id": 2,
    "title": "calça baggy",
    "price": 109.95,
    "description": "Your perfect pack…",
    "category": "men's clothing",
    "image": "https://fakestoreapi.com/img/…",
    "rating": { "rate": 3.9, "count": 120 }
  },
  {
    "id": 3,
    "title": "camiseta oversized preta",
    "price": 59.9,
    "description": "Camiseta de algodão com caimento solto, confortável para o dia a dia.",
    "category": "men's clothing",
    "image": "https://fakestoreapi.com/img/…",
    "rating": { "rate": 4.3, "count": 210 }
  },
  {
    "id": 4,
    "title": "jaqueta jeans",
    "price": 189.9,
    "description": "Jaqueta jeans clássica com bolsos frontais e forro leve.",
    "category": "men's clothing",
    "image": "https://fakestoreapi.com/img/…",
    "rating": { "rate": 4.1, "count": 98 }
  },
  {
    "id": 5,
    "title": "vestido floral midi",
    "price": 129.9,
    "description": "Vestido leve com estampa floral, ideal para dias quentes.",
    "category": "women's clothing",
    "image": "https://fakestoreapi.com/img/…",
    "rating": { "rate": 4.5, "count": 175 }
  },
  {
    "id": 6,
    "title": "blusa de tricô",
    "price": 99.9,
    "description": "Blusa de tricô macia, ótima para os dias frios.",
    "category": "women's clothing",
    "image": "https://fakestoreapi.com/img/…",
    "rating": { "rate": 4.0, "count": 87 }
  },
  {
    "id": 7,
    "title": "tênis esportivo",
    "price": 249.9,
    "description": "Tênis com amortecimento reforçado para corrida e caminhada.",
    "category": "shoes",
    "image": "https://fakestoreapi.com/img/…",
    "rating": { "rate": 4.6, "count": 342 }
  },
  {
    "id": 8,
    "title": "relógio digital",
    "price": 159.9,
    "description": "Relógio digital resistente à água com cronômetro e alarme.",
    "category": "jewelery",
    "image": "https://fakestoreapi.com/img/…",
    "rating": { "rate": 3.8, "count": 64 }
  },
  {
    "id": 9,
    "title": "fone de ouvido bluetooth",
    "price": 139.9,
    "description": "Fone sem fio com bateria de longa duração e microfone embutido.",
    "category": "electronics",
    "image": "https://fakestoreapi.com/img/…",
    "rating": { "rate": 4.2, "count": 256 }
  },
  {
    "id": 10,
    "title": "mochila notebook 15 polegadas",
    "price": 119.9,
    "description": "Mochila com compartimento acolchoado para notebook e vários bolsos.",
    "category": "accessories",
    "image": "https://fakestoreapi.com/img/…",
    "rating": { "rate": 4.4, "count": 189 }
  }
]]

export function Home() {
  return (
    <ScreenContainer>
      <Header>
        <ScreenTittle>
          "Olá mundo"
        </ScreenTittle>
        <SearchInput placeholder="Pesquisar produtos..." />
        <CatergoryList>
          data={filtered}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
        </CatergoryList>
      </Header>
    </ScreenContainer>

  )
}
;

