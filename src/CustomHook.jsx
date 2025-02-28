import { useFetch } from "./hooks/useFetch"
import { useCounter } from "./hooks/useCounter"
import { Loading } from "./Loading";
import { Card } from "./Card";
import { useState } from "react";


export const CustomHook = () => {

    const{ counter, decrement, increment } = useCounter(0);
    const [end, setEnd] = useState(false);
    const [start, setStart] = useState(false);
    const { data, isLoading, hasError } = useFetch(
        `https://potterapi-fedeperin.vercel.app/en/books?index=${counter}`
    );

  return (
    <div className="container d-flex flex-column justify-content-center">
        <h1 className="d-flex justify-content-center">Harry Potter's API</h1>
        <hr />
        <Card title={data?.title} releaseDate={data?.releaseDate} description={data?.description} pages={data?.pages} cover={data?.cover} />

        <div className="d-flex justify-content-center p-5">
          <button className='btn btn-primary' disabled={end} onClick = { () => {counter == 0 ? setEnd(true) : decrement(1); setEnd(false)}}>Anterior</button>
          <button className='btn btn-primary' disabled={start} onClick = { () => {counter == 8 ? setStart(true) : increment(1); setStart(false)}}>Siguiente</button>
        </div>
    </div>
  )
}
