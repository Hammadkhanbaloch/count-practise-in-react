const CountChange=({handleclick})=>
    {
        return(
            <>
            <form onSubmit={handleclick}>
            <input type="number" name="number" placeholder="Change By Amount"/>
            <button type="submit" >Change By Amount</button>
            </form>
            </>
        )
    }
    export default CountChange;