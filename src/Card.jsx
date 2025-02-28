
export const Card = ({title, releaseDate, description, pages, cover}) => {
  return (
    <section style={{height: 200}}>
      <h2 className='text-capitalize'>Tarjeta</h2>
        <h3>{title}</h3>
        <p>{releaseDate}</p>
        <p>{description}</p>
        <p>{pages}</p>
        <p>{cover}</p>
        

    </section>
  )
}

