import CreditCardValidator from "../modules/credit-card-validator";

export function IranianCreditCard() {
  return (
    <div className="flex flex-col items-center pt-32  min-h-screen bg-gray-50">
        <CreditCardValidator />
    </div>
  );
}
