const ShowButton = ({name,setSearch}) => {
    const clickHandler = () => {
        setSearch(name)
    }

    return (
        <button onClick={clickHandler}>show</button>
    )
}

export default ShowButton