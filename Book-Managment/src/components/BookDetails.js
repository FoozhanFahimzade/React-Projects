import React from 'react';
import EditDialog from './EditForm';
import DeleteDialog from './DeleteForm';
const BookDetail = ({book}) => {
    return ( 
        <div>
        <li>
            <div className="title">{book.title} </div>
            <div className="author" >{book.author} </div>
            <div className="price" >{book.price} </div>
            <EditDialog props={book}/>
            <DeleteDialog props={book}/>
            
        </li>
        </div>
     );
}
 
export default BookDetail;
