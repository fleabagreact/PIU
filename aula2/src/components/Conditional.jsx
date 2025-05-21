import Images from "./Images";
import FirstComponent from "./FirstComponent";

function Conditional(){
     let content;
     let isLogged = true;


     if(isLogged){
         content = <Images />
     } else {
         content = <FirstComponent />
     }

     return(
         <>
             {content}
             <button onClick={() => {content = true}}>Mudar Estado</button>
         </>
     )
 }

 export default Conditional