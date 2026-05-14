import { Card, CardTitle } from "@/components/ui/card";
import { formatPrice } from "@/utils/format";
import { createOrderAction } from "@/utils/action";
import FormContainer from "../form/FormContainer";
import { SubmitButton } from "../form/Button";
import { Cart } from "@prisma/client";

const CartTotals = ({ cart }: { cart: Cart }) => {
  const { cartTotal, shipping, tax, orderTotal } = cart;
  return (
    <div>
      <Card className="p-8">
        <CartTotalRow label="Subtotal" amount={cartTotal} />
        <CartTotalRow label="Shipping" amount={shipping} />
        <CartTotalRow label="Tax" amount={tax} />
        <CardTitle className="mt-8">
          <CartTotalRow label="Order Total" amount={orderTotal} />
        </CardTitle>
      </Card>
      <FormContainer action={createOrderAction}>
        <SubmitButton text="Place Order" className="w-full mt-8" />
      </FormContainer>
    </div>
  );
};

const CartTotalRow = ({ label, amount }: { label: string; amount: number }) => {
  return (
    <>
      <div className="flex justify-between text-sm">
        <span>{label}</span>
        <span>{formatPrice(amount)}</span>
      </div>
    </>
  );
};

export default CartTotals;
