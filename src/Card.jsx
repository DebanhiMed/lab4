export const Card = ({title, releaseDate, description, pages, cover}) => {
  return (
    <section className='container text-capitalize d-flex justify-content-center w-50 flex-column'>
      <div className='d-flex flex-column justify-content-center align-items-center'>
        <h2>Tarjeta</h2>
        <h3>{title}</h3>
        <p>{releaseDate}</p>
        <p>{description}</p>
        <p>Pages: {pages}</p>
        <img src={cover} />
      </div>
        

    </section>
  )
}

