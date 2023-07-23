'use client';
import styles from "./styles.scss";

import { useSearchParams } from 'next/navigation'


export default function SearchBar() {
  const searchParams = useSearchParams()
  const inp1 = searchParams.get('input1')
  const inp2 = searchParams.get('input2')
  return (
  <div> <h3> Entered Data:  <br></br>
  Your Name : {inp1} <br></br>
  Your Age : {inp2} <br></br> </h3></div>
  );
}


