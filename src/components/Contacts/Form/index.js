import React, {useState} from 'react'

function Form({setContacts, contacts}) {
  const [form, setForm] = useState({fullname: "", phone_number: ""});

  const onChangeInput = (e) => {
    setForm({...form, [e.target.name]:e.target.value});
  };

  const onSubmit = (e) =>{
    e.preventDefault();
    if(form.fullname ==='' || form.phone_number===''){
        return false;
    }
    setContacts([...contacts,form]);
    console.log(form);
    e.target.reset();
  };

  return (
    <form onSubmit={onSubmit}>
        <div><input 
        name='fullname' 
        placeholder='Full Name' 
        onChange={onChangeInput}/></div>
        <div><input 
        name='phone_number' 
        placeholder='Phone Number' 
        onChange={onChangeInput}/></div>
        <div className='btn'><button>Add</button></div>
    </form>
  )
}

export default Form