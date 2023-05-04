



export const GifItem = ({ tittle = 'Sin titulo', url }) => {

    console.log({ tittle, url });

    return (
        <div className="card">
            <img src={ url } alt={ tittle } />
            <p>{ tittle }</p>
        </div>
    )
}
