const SearchBar = (props) => {
    const changeEvent = event => {
        props.onChange(event.target.value)
    }
    return ( 
        <section role="search "className="row d-flex justify-content-center">
            <form className="col-lg-10 col-sm-12 justify-content-center" action="#">
                <label htmlFor="inpSearch" className="visually-hidden" >Search</label>
                <input type="text" className="form-control fs-4" id="inpSearch" onChange={changeEvent} placeholder="Search" />
            </form>
        </section>
    );
}
 
export default SearchBar;