import { useState } from 'react';
import process from "process";

export function useStorage (key, initialValue){
  const [value, setValue] = useState(getStorage());

  function setStorage (newValue) {
    try {
        window.sessionStorage.setItem(key, JSON.stringify(newValue))
      setValue(newValue);
    } catch (e) {
      setValue(initialValue);
    }
  }

  function getStorage () {
    let val = false;
    try {
      const item =  window.sessionStorage.getItem(key);
      val = item !== null ? JSON.parse(item) : initialValue;
      return val;
    } catch (e) {
      val = false;
    }

    return val
  }

  return [value, setStorage];
}
