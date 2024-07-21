import React from 'react'

export default function Alert(props) {

    const captalize=(word)=>{
        const lower = word.toLowerCase();
        return word.charAt(0).toUpperCase() + word.slice(1);
    }

  return (
    
    props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} style={{width:'400px',display:'flex',margin:'auto'}} role="alert">
     <strong>{captalize(props.alert.type)}:{props.alert.msg}</strong>
     <button type="button" class="btn-close" data-dismiss="alert" aria-label="Close">
     </button>
</div>
  )
}