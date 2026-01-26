import { useState, useEffect, useCallback, useRef } from "react";

const App = () => {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(8);
  const [numbers, setNumbers] = useState(false);
  const [specialChars, setSpecialChars] = useState(false);

  const passwordRef = useRef(null);

  const generatePassword = useCallback(() => {
    const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbersStr = "0123456789";
    const specialStr = "!@#$%^&*()_+{}|:<>?[]\\;'\",./";

    let availableChars = chars;
    if (numbers) availableChars += numbersStr;
    if (specialChars) availableChars += specialStr;

    let generatedPassword = "";
    for (let i = 0; i < length; i++) {
      generatedPassword += availableChars.charAt(
        Math.floor(Math.random() * availableChars.length),
      );
    }
    setPassword(generatedPassword);
  }, [length, numbers, specialChars]);

  useEffect(() => {
    generatePassword();
  }, [generatePassword]);

  const copyToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 99999); // For mobile devices
    navigator.clipboard.writeText(password);
    alert("Password copied to clipboard!");
  }, [password]);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">
          Password Generator
        </h1>

        <div className="flex mb-4">
          <input
            ref={passwordRef}
            type="text"
            value={password}
            readOnly
            className="flex-1 px-3 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={copyToClipboard}
            className="px-4 py-2 bg-blue-500 text-white rounded-r-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Copy
          </button>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">
            Length: {length}
          </label>
          <input
            type="range"
            min="6"
            max="20"
            value={length}
            onChange={(e) => setLength(Number(e.target.value))}
            className="w-full"
          />
        </div>

        <div className="flex items-center mb-2">
          <input
            type="checkbox"
            id="numbers"
            checked={numbers}
            onChange={(e) => setNumbers(e.target.checked)}
            className="mr-2"
          />
          <label htmlFor="numbers" className="text-sm">
            Include Numbers
          </label>
        </div>

        <div className="flex items-center">
          <input
            type="checkbox"
            id="specialChars"
            checked={specialChars}
            onChange={(e) => setSpecialChars(e.target.checked)}
            className="mr-2"
          />
          <label htmlFor="specialChars" className="text-sm">
            Include Special Characters
          </label>
        </div>
      </div>
    </div>
  );
};

export default App;
