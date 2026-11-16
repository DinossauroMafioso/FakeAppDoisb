import { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, Image, View } from "react-native";
import {
  CategoryButton,
  CategoryButtonText,
  CategoryList,
  Header,
  MessageText,
  ProductCard,
  ProductDetails,
  ProductImage,
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
  image: string;
};

const API_URL = "https://fakestoreapi.com/products";

export function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    async function loadProducts() {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch(API_URL);
        if (!response.ok) {
          throw new Error("Não foi possível carregar os produtos.");
        }

        const data: Product[] = await response.json();
        if (isMounted) {
          setProducts(data);
          setCategories([...new Set(data.map((product) => product.category))]);
        }
      } catch {
        if (isMounted) {
          setError("Não foi possível carregar os produtos. Verifique sua conexão e tente novamente.");
        }
      } finally {
        if (isMounted) setLoading(false);
      }
    }

    loadProducts();
    return () => {
      isMounted = false;
    };
  }, []);

  const filteredProducts = products.filter((product) => {
    const matchesSearch = `${product.title} ${product.category}`
      .toLowerCase()
      .includes(search.trim().toLowerCase());
    const matchesCategory = !selectedCategory || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

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
        <FlatList
          horizontal
          data={["Todos", ...categories]}
          keyExtractor={(category) => category}
          showsHorizontalScrollIndicator={false}
          style={{ flexGrow: 0, marginBottom: 12 }}
          renderItem={({ item }) => {
            const isAll = item === "Todos";
            const isSelected = isAll ? !selectedCategory : selectedCategory === item;
            return (
              <CategoryButton selected={isSelected} onPress={() => setSelectedCategory(isAll ? null : item)}>
                <CategoryButtonText selected={isSelected}>{item}</CategoryButtonText>
              </CategoryButton>
            );
          }}
        />
        {loading ? (
          <View style={{ padding: 24, alignItems: "center" }}>
            <ActivityIndicator size="large" color="#4f0074" />
            <MessageText>Carregando produtos...</MessageText>
          </View>
        ) : error ? (
          <MessageText>{error}</MessageText>
        ) : (
          <FlatList<Product>
            data={filteredProducts}
            keyExtractor={(item) => item.id.toString()}
            ListEmptyComponent={<MessageText>Nenhum produto encontrado.</MessageText>}
            renderItem={({ item }) => (
              <ProductCard>
                <ProductImage>
                  <Image source={{ uri: item.image }} style={{ width: 100, height: 100 }} resizeMode="contain" />
                </ProductImage>
                <ProductName numberOfLines={2}>{item.title}</ProductName>
                <ProductDetails>
                  {item.category} - R$ {item.price.toFixed(2).replace(".", ",")}
                </ProductDetails>
              </ProductCard>
            )}
          />
        )}
      </CategoryList>
    </ScreenContainer>
  );
}
