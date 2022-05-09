import { useState, useCallback } from "react";

//범용적으로 쓸 수 있게끔
const useInput = (initialValue = null) => {
  const [value, setValue] = useState(initialValue);
  const handler = useCallback((e) => {
    setValue(e.target.value);
  }, []);
  return [value, handler];
};

export default useInput;
