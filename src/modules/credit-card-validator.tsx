import { useCreditCardValidator } from "../hooks/useCreditCardValidator";

export default function CreditCardValidator() {
  const {
    formattedValue,
    status,
    handleInputChange,
    validate,
    clear,
    hasValue,
  } = useCreditCardValidator();

  return (
    <div className="bg-red mb-4 p-6 bg-white rounded-xl shadow-lg font-sans">
      <h1 className="text-2xl font-bold mb-4 text-center text-gray-800">کنترل صحت شماره کارت بانکی </h1>

      <label className="block mb-4 text-gray-700">
        کد 16 رقمی کارت را وارد کنید:
        <input
          type="text"
          dir="ltr"
          inputMode="numeric"
          value={formattedValue}
          onChange={handleInputChange}
          placeholder="XXXX - XXXX - XXXX - XXXX"
          className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-lg"
        />
      </label>

      <div className="flex gap-4">
        <button 
         onClick={validate}
         disabled={!hasValue} className="flex-1 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">کنترل شماره کارت</button>
        <button onClick={clear} className="flex-1 px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition">پاک کردن</button>
      </div>
      {status.text && (
        <div className={`mt-4 p-4 rounded-lg ${status.ok ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>{status.text}</div>
      )}
    </div>
  );
}
