import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetFooter } from "@/components/ui/sheet";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Minus, Plus, Trash2, ShoppingBag, Copy, Check } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { generateCheckoutUrl } from "@/lib/cartEncoding";
import { toast } from "sonner";
import copy from "copy-to-clipboard";
import { useState } from "react";

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
  const [copiedLink, setCopiedLink] = useState(false);
  const [linkDialogOpen, setLinkDialogOpen] = useState(false);
  const [displayUrl, setDisplayUrl] = useState("");

  const handleCreateLink = () => {
    if (items.length === 0) {
      toast.error("Your cart is empty");
      return;
    }

    const url = generateCheckoutUrl(items);
    const success = copy(url);

    if (success) {
      setCopiedLink(true);
      toast.success("Checkout link copied to clipboard!", {
        description: "Share it with others to let them see your cart.",
      });
      setTimeout(() => setCopiedLink(false), 2000);
    } else {
      // If copy fails, show dialog so user can manually copy
      setDisplayUrl(url);
      setLinkDialogOpen(true);
      toast.info("Link is ready to copy", {
        description: "Copy it from the dialog box",
      });
    }
  };

  const copyFromDialog = () => {
    const success = copy(displayUrl);

    if (success) {
      setCopiedLink(true);
      toast.success("Link copied!");
      setTimeout(() => setCopiedLink(false), 2000);
    } else {
      // Select and show error
      const input = document.getElementById("checkout-link-input") as HTMLInputElement;
      if (input) {
        input.select();
        toast.error("Please use Ctrl+C or Cmd+C to copy");
      }
    }
  };

  return (
    <>
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
                      <p className="text-primary font-medium">₹{item.price}</p>

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
                    <span className="font-display font-bold">₹{totalPrice.toFixed(2)}</span>
                  </div>
                  <p className="text-xs text-muted-foreground text-center">
                    Shipping & taxes calculated at checkout
                  </p>
                  <Button
                    onClick={handleCreateLink}
                    className="w-full h-12 font-body tracking-wider uppercase flex items-center justify-center gap-2"
                  >
                    {copiedLink ? (
                      <>
                        <Check size={18} />
                        Copied
                      </>
                    ) : (
                      <>
                        <Copy size={18} />
                        Create Shareable Link
                      </>
                    )}
                  </Button>
                </div>
              </SheetFooter>
            </>
          )}
        </SheetContent>
      </Sheet>

      {/* Fallback Link Dialog */}
      <Dialog open={linkDialogOpen} onOpenChange={setLinkDialogOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Share Your Cart</DialogTitle>
            <DialogDescription>
              Copy this link to share your cart with others
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <input
              id="checkout-link-input"
              type="text"
              readOnly
              value={displayUrl}
              className="w-full px-3 py-2 bg-secondary border border-border rounded text-sm font-mono text-muted-foreground"
            />
            <Button
              onClick={copyFromDialog}
              className="w-full flex items-center justify-center gap-2"
            >
              {copiedLink ? (
                <>
                  <Check size={16} />
                  Copied
                </>
              ) : (
                <>
                  <Copy size={16} />
                  Copy Link
                </>
              )}
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default CartDrawer;
