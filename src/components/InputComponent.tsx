import { useState } from "react";

export function InputComponent() {
    const [name, setName] = useState("");
    const [key, setKey] = useState("");

    const handleBlur = () => {
        console.log('Input blurred');
    };

    const handleOnFocus = () => {
        console.log('Input focused');
    };

    const handleKeyDown = (event: { key: string }) => {
        setKey(event.key);
    };

    return (
        <div className="flex flex-col items-center bg-green-300">
            <input className="border-2 border-green-500 p-2 rounded-md text-md mt-6 text-black"
                type="text" 
                value={name} 
                placeholder="Shrek !!"
                onChange={(e) => setName(e.target.value)}
                onBlur={handleBlur}
                onFocus={handleOnFocus}
                onKeyDown={handleKeyDown} 
            />

            <p className="mt-4 text-xl text-green-700" style={{ minWidth: '200px', textAlign: 'left' }}>
                You typed: {name}
            </p>
            
            {name && (
                <p className="text-green-600 text-lg" style={{ minWidth: '200px', textAlign: 'left' }}>
                    Last Key Pressed: <span className="text-green-700 font-bold">{key}</span>
                </p>
            )}
        </div>
    );
}
