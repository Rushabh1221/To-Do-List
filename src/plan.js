//Creating Plan Component:

const Plan = (props) => {
     return <>
        <li className="col-sm-9 shadow p-2 my-2">{props.value}</li>
        <button className="btn btn-primary my-2 col-sm-2 offset-1" onClick={ () => {props.del(props.id)} }>Cancel</button>
        </>
}

export default Plan;  