import {h, app} from 'hyperapp'

export default function TopImg({state, actions}) {
  return (
  <section id="TopImg">
  <div class="container">
  <div class="title">
  <h5>
  Welcome
  </h5>
  <h1>
  {state.companyInfo.title}
  </h1>
  </div>

  <div class="contact-info">
  <div class="container">
  <div class="booking"> Schedule Appointment </div>
  <h2>(718) - 642 - 9542</h2>
  <div class="hours">
  Opening Hours <strong> Mon - Fri:</strong> 9am -9pm
  <strong> Weekend: </strong> 9am -1am
  </div>
  </div>
  </div>
</div>
  </section>
  )
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>
