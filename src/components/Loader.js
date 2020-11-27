import spinner from './spinner.gif'

export const Loader = () => {
    return (
        <div className="loader">
            <img src={spinner} alt="Loading" />
        </div>
    )
}

export default Loader
