import {memo} from "react";
import './Catalog.scss';
import Filter from '../theme/Filter';
import BookContent from '../theme/Bookcontent';
const Catalog=()=>{
    return(

        <div className="container">
        <Filter />
        <BookContent />
      </div>
    )
}
export default memo(Catalog)