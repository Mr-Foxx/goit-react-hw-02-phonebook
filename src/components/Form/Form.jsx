import React from "react"
import { Formik } from 'formik';
import { FormContact,Label,Input,Button } from "./Form.styled";
import PropTypes from 'prop-types';
// import { nanoid } from 'nanoid';

// const idInputName = nanoid();
// const idInputNamber = nanoid();


export const Form = (props) => {
    const { handleSubmit } = props;
  
    return (
      <Formik initialValues={{ name: '', number: '' }} onSubmit={handleSubmit}>
        {({ values, handleChange, handleSubmit }) => (
          <FormContact onSubmit={handleSubmit}>
            <Label htmlFor="name">Name</Label>
            <Input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            //   id={idInputName}
              value={values.name}
              onChange={handleChange}
            />
            <br />
  
            <Label htmlFor="number">Number</Label>
            <Input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            //   id={idInputNamber}
              value={values.number}
              onChange={handleChange}
            />
            <br />
  
            <Button type="submit">Add Contact</Button>
          </FormContact>
        )}
      </Formik>
    );
  };

  Form.propTypes={
    handleSubmit:PropTypes.func.isRequired
}

// ===


// export const Form=({newName,newNumber,handleNameChange,handleNumberChange,handleSubmit})=>{

//     return(

//         <form onSubmit={handleSubmit}>
//           <label htmlFor="name">Name</label>
//            <input
//            type="text"
//            name="name"
//            value={newName}
//            onChange={handleNameChange}
//            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//            required
//           />

//          <br />

//         <label htmlFor="number">Number</label>
//           <input
//             type="tel"
//              name="number"
//              value={newNumber}
//              onChange={handleNumberChange}
//              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//              required
//            />
//          <br />

//        <button type="submit">Add Contact</button>

//      </form>
//     )
// }