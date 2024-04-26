import React from 'react';


const breadcrumb ={
    backgroundColor: 'white',
    border:'',
    borderRadius:'0.37rem'
}
function Breadcrumb(props){
    function isLast(index){
        return index=== props.crumbs.length -1;
    }
    return(
<nav className="row justify-content-center col-1 mt-2 ml-5">
<ol className="breadcrumb" style={ breadcrumb}>
    {
        props.crumbs.map((crumb,ci)=>{
            const disabled = isLast(ci) ? 'disabled':'';
            return(
<li key={ci}  className="breadcrumb-item align-items-center">
<button className={`btnn btn-link ${disabled}`} onClick={()=> props.selected(crumb)}>
{crumb}
</button>
</li>
            );
        })
    }
</ol>
</nav>
    )
}

export default Breadcrumb;