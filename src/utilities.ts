// Utilities Type

type Product = {
  id: number;
  name: string;
  price: number;
  stock: boolean;
  color?: string;
};

type ProductSummery = Pick<Product, "id" | "name" | "price">;
type ProductWithoutStock = Omit<Product, "stock" | "color">;
type ProductWithColor = Required<Product>;

const product: ProductWithColor = {
  id: 12,
  name: "Mouse",
  price: 200,
  stock: true,
  color: "red",
};

type OptionalProduct = Partial<Product>;
type ReadOnlyproduct = Readonly<Product>;
const obj1: Record<string, unknown> = {};
