// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';
import Table from './table';
import { getData } from './fetch';
import {useEffect, useState} from 'react';

export function App() {

  const [data, setData] = useState([]);

  useEffect(() => {
    const myFunc = async () => {
      const data = await getData();
      setData(data)
    }
    myFunc();
  }, []);

  console.log(data)

  return (
    <>
      <Table data={data}/>
      <div />
    </>
  );
}

export default App;
