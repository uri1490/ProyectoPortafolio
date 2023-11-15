import { useRouteError } from "react-router-dom"

export const Error=()=>{
   const error=useRouteError();
   return(
    <div>
        <i>
            {error.statusText || error.message}
        </i>
    </div>
    )
}