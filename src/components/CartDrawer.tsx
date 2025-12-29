import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetFooter } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { toast } from "sonner";

const CartDrawer = () => {
  const { 
    items, 
    removeFromCart, 
    updateQuantity, 
    totalItems, 
    totalPrice, 
    isCartOpen, 
    setIsCartOpen,
    clearCart 
  } = useCart();

  const handleCheckout = () => {
    toast.success("Thank you for your order!", {
      description: "Your support empowers women everywhere.",
    });
    clearCart();
    setIsCartOpen(false);
  };

  return (
    <Sheet open={isCartOpen} onOpenChange={setIsCartOpen}>
      <SheetContent className="w-full sm:max-w-lg flex flex-col">
        <SheetHeader>
          <SheetTitle className="font-display text-xl flex items-center gap-2">
            <ShoppingBag size={20} />
            Your Cart ({totalItems})
          </SheetTitle>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center text-center py-12">
            <ShoppingBag size={64} className="text-muted-foreground/30 mb-4" />
            <p className="font-display text-lg mb-2">Your cart is empty</p>
            <p className="text-muted-foreground text-sm">
              Add some empowering tees to get started
            </p>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto py-6 space-y-4">
              {items.map((item) => (
                <div key={item.id} className="flex gap-4 p-4 bg-secondary/50 rounded-lg">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-24 object-cover rounded"
                  />
                  <div className="flex-1 min-w-0">
                    <h4 className="font-display font-semibold text-sm truncate">
                      {item.name}
                    </h4>
                    <p className="text-xs text-muted-foreground italic mb-2">
                      "{item.slogan}"
                    </p>
                    <p className="text-primary font-medium">${item.price}</p>
                    
                    <div className="flex items-center gap-2 mt-2">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="w-7 h-7 flex items-center justify-center rounded bg-background border border-border hover:border-primary transition-colors"
                      >
                        <Minus size={14} />
                      </button>
                      <span className="w-8 text-center text-sm font-medium">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="w-7 h-7 flex items-center justify-center rounded bg-background border border-border hover:border-primary transition-colors"
                      >
                        <Plus size={14} />
                      </button>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="ml-auto p-1.5 text-muted-foreground hover:text-destructive transition-colors"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <SheetFooter className="border-t border-border pt-6">
              <div className="w-full space-y-4">
                <div className="flex items-center justify-between text-lg">
                  <span className="font-body">Subtotal</span>
                  <span className="font-display font-bold">${totalPrice.toFixed(2)}</span>
                </div>
                <p className="text-xs text-muted-foreground text-center">
                  Shipping & taxes calculated at checkout
                </p>
                <Button 
                  onClick={handleCheckout}
                  className="w-full h-12 font-body tracking-wider uppercase"
                >
                  Checkout — ${totalPrice.toFixed(2)}
                </Button>
              </div>
            </SheetFooter>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default CartDrawer;
