import { useState } from "react";
import { FlatList } from "react-native";
import {
  CategoryList,
  Header,
  ProductCard,
  ProductDetails,
  ProductName,
  ScreenContainer,
  ScreenTitle,
  SearchInput,
} from "./styles";

type Product = {
  id: number;
  title: string;
  price: number;
  category: string;
};

const products: Product[] = [
  { id: 1, title: "Camisa Social", price: 109.95, category: "men's clothing" },
  { id: 2, title: "calça baggy", price: 109.95, category: "men's clothing" },
  { id: 3, title: "camiseta oversized preta", price: 59.9, category: "men's clothing" },
  { id: 4, title: "jaqueta jeans", price: 189.9, category: "men's clothing" },
  { id: 5, title: "vestido floral", price: 129.9, category: "women's clothing" },
  { id: 6, title: "blusa de tricô", price: 99.9, category: "women's clothing" },
  { id: 7, title: "tênis esportivo", price: 249.9, category: "shoes" },
  { id: 8, title: "relógio digital", price: 159.9, category: "jewelery" },
  { id: 9, title: "fone de ouvido bluetooth", price: 139.9, category: "electronics" },
  { id: 10, title: "mochila notebook 15 polegadas", price: 119.9, category: "accessories" },
];

export function Home() {
  const [search, setSearch] = useState("");
  const filteredProducts = products.filter((product) =>
    `${product.title} ${product.category}`.toLowerCase().includes(search.trim().toLowerCase())
  );

  return (
    <ScreenContainer>
      <Header>
        <ScreenTitle>LOJA FAKEAPP</ScreenTitle>
        <SearchInput
          placeholder="Pesquisar produtos..."
          value={search}
          onChangeText={setSearch}
        />
      </Header>
      <CategoryList>
        <FlatList<Product>
          data={filteredProducts}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <ProductCard>
              <ProductName>{item.title}</ProductName>
              <ProductDetails>
                {item.category} - R$ {item.price.toFixed(2)}
              </ProductDetails>
            </ProductCard>
          )}
        />
      </CategoryList>
    </ScreenContainer>
  );
}
