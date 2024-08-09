interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  category: string;
  inStock: boolean;
}

type ProductDetails = Omit<Product, "id" | "inStock">;

const updateProduct = (id: string, details: ProductDetails): void => {
  console.log(`Updating product with id ${id}:`, details);
  // 実際のデータベース更新処理はここで行われる
};

const productId = "abc123";
const updatedDetails: ProductDetails = {
  name: "Updated Product",
  price: 1999,
  description: "This is an updated product",
  category: "Electronics",
};

updateProduct(productId, updatedDetails);
