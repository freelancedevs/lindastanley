import {h, app} from 'hyperapp'

export default function Footer({state, actions}) {
  return (
  <footer>
  <div class="container">
  <nav class="menu">
  <a href="#">Bio</a>
  <a href="#">Treatments</a>
  <a href="#">Reviews</a>
  <a href="#">Consultation</a>
  <a href="#">Contact Us</a>
  </nav>

  <ul class="social-media">
  <li>
  <a href="http://www.facebook.com" target= "new"><i class="fas fa-camera-retro"></i></a>
  </li>

  <li>
  <a href="http://www.twitter.com" target= "new"><i class="fab fa-twitter-square"></i></a>
  </li>
  <li>
  <a href="http://www.google.com" target= "new"><i class="fab fa-google-plus-g"></i></a>
  </li>
  <li>
<a href="http://www.youtube.com"target="new">  <i class="fab fa-youtube-play"></i></a>
  </li>

  </ul>

  <div class="copyright">
  Ⓒ 2018 Copyright
  </div>

</div>
  </footer>
  )
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>
