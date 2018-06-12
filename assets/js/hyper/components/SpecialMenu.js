import {h, app} from 'hyperapp'

export default function SpecialMenu({state, actions}) {
  var loopMenu = function(){
    return state.specialTreatmentData.map(function(item){
      return(
        <div class="col-md-4">
        <div class="box">
        <div class="box-img">  <div class="price-circle">{item.price}</div></div>

        <span class="title">{item.title}</span>
        <p class="details">{item.description}</p>

        </div>
        </div>
      )
    })

  }
  return (
  <section id="SpecialMenu">
  <div class="container">
  <h5 class="comp-title">Special Treatments</h5>
  <h2>Body Mind Spirit</h2>
  <div class="row boxes">

{loopMenu()}





  </div>
  <a href="#" class="link"> Procedures </a>
  </div>
  </section>
  )
}
