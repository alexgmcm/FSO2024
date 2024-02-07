const Filter = ({search, updateSearch}) => {
    return(
        <>
        filter shown with <input value={search} onChange={updateSearch} />
        </>
    )
}

export default Filter