const Persons = ({persons, search}) => {

    return(
        <>
         <ul>
        {persons.filter(x => search.length===0 ? true : x.name.slice(0,search.length).toLowerCase()===search.toLowerCase()).map((x,i) => <li key={i}>{x.name} {x.number}</li>)}
      </ul>
        </>
    )
}
export default Persons