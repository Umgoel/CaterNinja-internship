"use client";
import { useRouter } from 'next/navigation';

const Display: React.FC = () => {
  const router = useRouter();
  const { input1, input2 } = router.query;

  return (
    <div>
      <h1>Entered Data</h1>
      <p><strong>Input 1:</strong> {input1}</p>
      <p><strong>Input 2:</strong> {input2}</p>
    </div>
  );
};

export default Display;
