import {h, app} from 'hyperapp'

export default function ContactUs({state, actions}) {
  return (
  <section id="ContactUs">
  <div class="container">
  <h5 class="comp-title">Contact Us</h5>
  <h2>Every Womans Place</h2>

  <div class="box">
  <div class="row">
  <div class="col-md-6">
  <div class="title">
  {state.companyInfo.location}
  </div>
  <h6 class="Address">
  900 Bridge Street<br/>
  Summerdale,Pa 19124
  </h6>
  <p>
  <strong>email: </strong> <a href="mailto:@lindastanley.com">lindastanley.com</a>
  </p>

  </div>

  <div class="col-md-6">
  <h6>
  Phone:
  </h6>
  <div class="title">
  {state.companyInfo.phone}
  </div>
  <h6>
  Wellness Service:
  </h6>
  <p>
  Friday, Saturday and Sunday<br/>
  from 12pm - 130pm
  </p>
  <h6>
  Body Service:
  </h6>
  <p>
  Daily<br/>
  from 8am - 4pm
  </p>

  </div>
  </div>

  </div>

  </div>
  </section>
  )
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>
