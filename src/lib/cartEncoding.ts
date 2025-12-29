import { CartItem } from "@/contexts/CartContext";
import { products } from "./products";

export interface EncodedCartData {
  items: CartItem[];
  totalPrice: number;
  timestamp: number;
}

/**
 * Find product index by name
 */
const getProductIndex = (productName: string): number => {
  return products.findIndex(p => p.name === productName);
};

/**
 * Encode cart items into a super simple short format
 * Format: "0:2,3:1,5:4" (productIndex:quantity,productIndex:quantity)
 */
export const encodeCartData = (items: CartItem[]): string => {
  return items
    .map(item => {
      const index = getProductIndex(item.name);
      return `${index}:${item.quantity}`;
    })
    .join(",");
};

/**
 * Decode cart data from simple format back to full cart items
 * Format: "0:2,3:1,5:4"
 */
export const decodeCartData = (encoded: string): EncodedCartData | null => {
  try {
    const parts = encoded.split(",");
    const items: CartItem[] = [];
    let totalPrice = 0;

    for (const part of parts) {
      const [indexStr, quantityStr] = part.split(":");
      const index = parseInt(indexStr, 10);
      const quantity = parseInt(quantityStr, 10);

      if (isNaN(index) || isNaN(quantity) || index < 0 || index >= products.length) {
        return null;
      }

      const product = products[index];
      const id = product.name.toLowerCase().replace(/\s+/g, "-");

      items.push({
        id,
        name: product.name,
        slogan: product.slogan,
        price: product.price,
        image: product.image,
        quantity,
      });

      totalPrice += product.price * quantity;
    }

    return {
      items,
      totalPrice,
      timestamp: Date.now(),
    };
  } catch (error) {
    console.error("Failed to decode cart data:", error);
    return null;
  }
};

/**
 * Generate a shareable checkout URL with super short encoding
 * Example: /checkout/0:2,3:1 (product 0 qty 2, product 3 qty 1)
 */
export const generateCheckoutUrl = (items: CartItem[]): string => {
  const encoded = encodeCartData(items);
  const baseUrl = window.location.origin;
  return `${baseUrl}/checkout/${encoded}`;
};
