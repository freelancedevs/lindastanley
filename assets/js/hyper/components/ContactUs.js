import {h, app} from 'hyperapp';
import axios from 'axios';

 

export default function ContactUs({state, actions}){
 state = {
  form: {
    name: '',
    mob: '',
    email: '',
    mess: '',
    }
}
console.log("outside actions object");

   actions = {
      onInputChange: (event) => state => {
        console.log(state)
        return{
          form:{
        ...state.form,
        [event.target.name]: event.target.value
        }

      }

      },

      submitForm: () => {
        console.log(state.form)
     axios.post('htts://httpbin.org/anything', state.form)
          .then(function (response) {
          console.log(response.data);
        })
          .catch(function (error) {
          console.log(error);
        });
      }
}
    
 
console.log(actions.submitForm(state.form));
      return(
      h("div", {class: 'row'}, [
        h("div", {class: 'col-md-4'}, [
          h("div", {class: 'panel'}, [
            h("h4", {}, 'Quick Contact'),
            h("div", {class: 'fieldset'}, [
              h("input", {type: 'text', placeholder: "Please input your Name", class:"form-control", 
                          name: 'name',
                         oninput: (event)=>actions.onInputChange(event)}),
              h("input", {type: 'text', placeholder: "Please input your Mobile number", class:"form-control", 
                          name: 'mob',
                         oninput: (event)=>actions.onInputChange(event)}),
              h("input", {type: 'text', placeholder: "Please input your Email", class:"form-control", 
                          name: 'email',
                         oninput: (event)=>actions.onInputChange(event)}),
               h("textarea", {placeholder: "Please your message", class:"form-control",
                              name: 'mess',
                         oninput: (event)=>actions.onInputChange(event)}),
              h("button", {type: 'button', class:"btn btn-primary", 
                         onclick: ()=>actions.submitForm()}, "submit"),
              
            ])
          ])
        ]),
      ])
      )
    
 }
   
  
  
   


   
    






