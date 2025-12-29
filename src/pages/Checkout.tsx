import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { decodeCartData, EncodedCartData } from "@/lib/cartEncoding";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ShoppingBag, Copy, Check, Home } from "lucide-react";
import { toast } from "sonner";

const Checkout = () => {
  const { encoded } = useParams<{ encoded: string }>();
  const navigate = useNavigate();
  const [cartData, setCartData] = useState<EncodedCartData | null>(null);
  const [copied, setCopied] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (!encoded) {
      setIsError(true);
      return;
    }

    const data = decodeCartData(encoded);
    if (!data) {
      setIsError(true);
      return;
    }

    setCartData(data);
  }, [encoded]);

  const handleCopyLink = async () => {
    const url = window.location.href;
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      toast.success("Link copied to clipboard!");
      setTimeout(() => setCopied(false), 2000);
    } catch {
      toast.error("Failed to copy link");
    }
  };

  if (isError) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <Card className="w-full max-w-md p-8 text-center">
          <div className="text-destructive mb-4">
            <ShoppingBag size={48} className="mx-auto opacity-50" />
          </div>
          <h1 className="font-display text-2xl font-bold mb-2">Invalid Checkout Link</h1>
          <p className="text-muted-foreground mb-6">
            This link appears to be broken or has expired. Please try again.
          </p>
          <Button onClick={() => navigate("/")} className="w-full">
            Back to Shop
          </Button>
        </Card>
      </div>
    );
  }

  if (!cartData) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <ShoppingBag size={48} className="mx-auto mb-4 opacity-50 animate-pulse" />
          <p className="text-muted-foreground">Loading checkout...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background py-12 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="font-display text-4xl font-bold mb-2">Shared Cart</h1>
          <p className="text-muted-foreground">Review the cart total below</p>
        </div>

        {/* Cart Summary Card */}
        <Card className="p-8 mb-6">
          <h2 className="font-display text-xl font-semibold mb-6 flex items-center gap-2">
            <ShoppingBag size={24} />
            Order Summary ({cartData.items.length} items)
          </h2>

          {/* Items List - Dynamic Layout */}
          <div className={`${
            cartData.items.length === 1
              ? "space-y-4"
              : cartData.items.length === 2
              ? "grid grid-cols-1 md:grid-cols-2 gap-4 mb-6"
              : "space-y-4"
          } mb-6`}>
            {cartData.items.map((item, index) => (
              <div key={`${item.id}-${index}`}>
                <div className={cartData.items.length > 2 ? "flex gap-4" : "flex flex-col gap-3"}>
                  <img
                    src={item.image}
                    alt={item.name}
                    className={cartData.items.length > 2 ? "w-20 h-24 object-cover rounded" : "w-full h-48 object-cover rounded"}
                  />
                  <div className="flex-1">
                    <h3 className="font-display font-semibold">{item.name}</h3>
                    <p className="text-sm text-muted-foreground italic mb-2">
                      "{item.slogan}"
                    </p>
                    <div className="flex justify-between items-center">
                      <p className="text-sm">
                        Qty: <span className="font-semibold">{item.quantity}</span>
                      </p>
                      <p className="font-medium">
                        ₹{(item.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  </div>
                </div>
                {cartData.items.length > 2 && index < cartData.items.length - 1 && (
                  <Separator className="mt-4" />
                )}
              </div>
            ))}
          </div>

          <Separator className="mb-6" />

          {/* Total */}
          <div className="bg-secondary/50 rounded-lg p-4 mb-6">
            <div className="flex justify-between items-center">
              <span className="font-display text-lg">Total</span>
              <span className="font-display font-bold text-xl">
                ₹{cartData.totalPrice.toFixed(2)}
              </span>
            </div>
          </div>

          {/* Share Link Section */}
          <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 mb-6">
            <p className="text-sm font-semibold mb-2">Share This Cart</p>
            <p className="text-xs text-muted-foreground mb-3">
              Copy the link below to share this order with others
            </p>
            <div className="flex gap-2">
              <input
                type="text"
                readOnly
                value={window.location.href}
                className="flex-1 px-3 py-2 bg-background border border-border rounded text-sm font-mono"
              />
              <Button
                variant="outline"
                size="sm"
                onClick={handleCopyLink}
                className="flex items-center gap-2"
              >
                {copied ? (
                  <>
                    <Check size={16} />
                    Copied
                  </>
                ) : (
                  <>
                    <Copy size={16} />
                    Copy
                  </>
                )}
              </Button>
            </div>
          </div>

          {/* Action Buttons */}
          <div>
            <Button
              variant="outline"
              className="w-full h-12 font-body"
              onClick={() => navigate("/")}
            >
              <Home size={16} className="mr-2" />
              Back to Shop
            </Button>
          </div>
        </Card>

        {/* Metadata */}
        <div className="text-center text-xs text-muted-foreground">
          <p>
            Order created {new Date(cartData.timestamp).toLocaleDateString()} at{" "}
            {new Date(cartData.timestamp).toLocaleTimeString()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
