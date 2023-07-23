"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from 'next/image'
import styles from 'src/app/Form/styles.scss'

const Form: React.FC = () => {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = {
      input1: encodeURIComponent(input1),
      input2: encodeURIComponent(input2),
    };
    const encodedData = new URLSearchParams(data).toString();
    router.push(`/Display?${encodedData}`);
  };

  return (
    <div>
      <h1>Enter Data</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="input1">Input 1:</label>
        <input type="text" id="input1" value={input1}
          onChange={(e) => setInput1(e.target.value)}
          required
        />
        <br />
        <label htmlFor="input2">Input 2:</label>
        <input type="text" id="input2" value={input2}
          onChange={(e) => setInput2(e.target.value)}
          required
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;