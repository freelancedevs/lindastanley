import { h, app } from 'hyperapp';
import devtools from 'hyperapp-redux-devtools';
import {actions} from './actions/actions.js'
import {globalState} from './state/globalState.js'
import App from './components/App.js'
import ContactUs from './components/ContactUs.js'



console.log({globalState});

app({

  state: {globalState},

  view: (state, actions) => <div><App state={state} actions={actions}/>
   
  </div>,
  root: document.getElementById('app'),
  actions:{
  	onInputChange: (event) => state => {
        state.form[event.target.name] = event.target.value;
        return state;
      },
      submitForm: () => {
        console.log(state.form)
    	axios.post('https://httpbin.org/anything', state)
          .then(function (response) {
          console.log(response.data);
        })
          .catch(function (error) {
          console.log(error);
        });
    }
    
    
    
  },
  
  load(state, actions) {
      console.log("load function");
    },
    
})

