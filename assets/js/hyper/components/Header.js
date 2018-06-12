import {h, app} from 'hyperapp'

export default function Header({state, actions}) {
  return (
  <header>
  <div class="container">
  <div class="logo">
  <i class="fas fa-user-md"></i>
  </div>
  <nav>
  <a href="/components/ourstory">Bio</a>
  <a href="#">Treatments</a>
  <a href="#">Reviews</a>
  <a href="#">Consultation</a>
  <a href="#">Contact Us</a>
  </nav>
</div>
  </header>
  )
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>
