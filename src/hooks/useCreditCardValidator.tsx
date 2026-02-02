import { useState, useCallback, useMemo } from "react";
import { formatCard, luhnLikeValidate } from "../utils/helper";

export const useCreditCardValidator = () => {
  const [rawInput, setRawInput] = useState("");
  const [status, setStatus] = useState<{ ok: boolean; text: string }>({
    ok: false,
    text: "",
  });

  const formattedValue = useMemo(() => formatCard(rawInput), [rawInput]);

  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const digits = value.replace(/\D/g, "").slice(0, 16);
    setRawInput(digits);
    if (status.text) {
      setStatus({ ok: false, text: "" });
    }
  }, [status.text]);

  const validate = useCallback(() => {
    const result = luhnLikeValidate(rawInput);
    if (result.valid) {
      setStatus({ ok: true, text: "شماره کارت معتبر است. ✅" });
    } else {
      setStatus({ ok: false, text: result.reason || "شماره کارت نامعتبر است. ❌" });
    }
  }, [rawInput]);

  const clear = useCallback(() => {
    setRawInput("");
    setStatus({ ok: false, text: "" });
  }, []);

  return {
    formattedValue,
    status,
    handleInputChange,
    validate,
    clear,
    hasValue: rawInput.length > 0
  };
};