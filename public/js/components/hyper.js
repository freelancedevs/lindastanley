webpackJsonp([0],{

/***/ 17:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var reviewLeft = function reviewLeft(state, actions) {
  return { reviewStatus: {
      currentReview: state.reviewStatus.currentReview - 1
    } };
};

var reviewRight = function reviewRight(state, actions) {
  return { reviewStatus: {
      currentReview: state.reviewStatus.currentReview + 1
    } };
};

var actions = exports.actions = {
  reviewLeft: reviewLeft,
  reviewRight: reviewRight

};

/***/ }),

/***/ 18:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = App;

var _hyperapp = __webpack_require__(0);

var _Header = __webpack_require__(40);

var _Header2 = _interopRequireDefault(_Header);

var _TopImg = __webpack_require__(45);

var _TopImg2 = _interopRequireDefault(_TopImg);

var _OurStory = __webpack_require__(41);

var _OurStory2 = _interopRequireDefault(_OurStory);

var _SpecialMenu = __webpack_require__(44);

var _SpecialMenu2 = _interopRequireDefault(_SpecialMenu);

var _RandomQuote = __webpack_require__(42);

var _RandomQuote2 = _interopRequireDefault(_RandomQuote);

var _ContactUs = __webpack_require__(4);

var _ContactUs2 = _interopRequireDefault(_ContactUs);

var _Reviews = __webpack_require__(43);

var _Reviews2 = _interopRequireDefault(_Reviews);

var _Footer = __webpack_require__(39);

var _Footer2 = _interopRequireDefault(_Footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function App(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  return (0, _hyperapp.h)(
    'div',
    { 'class': 'app' },
    (0, _hyperapp.h)(_Header2.default, { state: state, actions: actions }),
    (0, _hyperapp.h)(_TopImg2.default, { state: state, actions: actions }),
    (0, _hyperapp.h)(_OurStory2.default, { state: state, actions: actions }),
    (0, _hyperapp.h)(_SpecialMenu2.default, { state: state, actions: actions }),
    (0, _hyperapp.h)(_RandomQuote2.default, { state: state, actions: actions }),
    (0, _hyperapp.h)(_Reviews2.default, { state: state, actions: actions }),
    (0, _hyperapp.h)(_ContactUs2.default, { state: state, actions: actions }),
    (0, _hyperapp.h)(_Footer2.default, { state: state, actions: actions })
  );
}

/***/ }),

/***/ 19:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var companyInfo = {
  title: 'Sculpting',
  phone: '267-642-9542',
  location: 'Philadelphia,PA'
};

var contactUs = {
  name: "",
  mob: "",
  email: "",
  mess: ""
};

var specialTreatmentData = [{
  title: 'Facial Treatment ',
  description: 'Full wrinkle removal & Skin tightening',
  price: '$250'
}, {
  title: 'Facial Treatment ',
  description: 'Full wrinkle removal & Skin tightening',
  price: '$250'
}, {
  title: 'Facial Treatment ',
  description: 'Full wrinkle removal & Skin tightening',
  price: '$250'
}];

var reviewsData = [{
  company: 'Cosemtics',
  author: 'Dr. Regis Sams',
  authorInfo: ' Reliance CFO',
  highlights: 'Best medical practice in Atlantic area',
  review: '1 bespoke glossier pinterest kogi schlitz, kombucha vinyl biodiesel vexil,lologist. Polaroid gentrify kickstarter shaman roof party echo park irony. Tumblr af truffaut keytar. Subway'
}, {
  company: 'Laser Lipo',
  author: 'Dr. Michael John',
  authorInfo: ' Accreditted practitioner',
  highlights: 'Best practice in Philadelphia area',
  review: '1 bespoke glossier pinterest kogi schlitz, kombucha vinyl biodiesel vexillologist. Polaroid gentrify kickstarter shaman roof party echo park irony. Tumblr af truffaut keytar. Subway'
}, {
  company: 'Reliance',
  author: 'Dr. Trocki',
  authorInfo: ' Accreditted suregeon',
  highlights: 'Best suregeon Delaware area',
  review: '1 bespoke glossier pinterest kogi schlitz, kombucha vinyl biodiesel vexillologist. Polaroid gentrify kickstarter shaman roof party echo park irony. Tumblr af truffaut keytar. Subway'
}, {
  company: 'ABC',
  author: 'Chris Daley',
  authorInfo: ' CEO',
  highlights: 'CEO of ABC',
  review: '1 bespoke glossier pinterest kogi schlitz, kombucha vinyl biodiesel vexillologist. Polaroid gentrify kickstarter shaman roof party echo park irony. Tumblr af truffaut keytar. Subway'
}, {
  company: 'CBS',
  author: 'Douglas Bell',
  authorInfo: ' CEO',
  highlights: 'CEO of CBS ',
  review: '1 bespoke glossier pinterest kogi schlitz, kombucha vinyl biodiesel vexillologist. Polaroid gentrify kickstarter shaman roof party echo park irony. Tumblr af truffaut keytar. Subway'
}];

var randomQuoteData = [{
  author: 'Doctor Keith',
  quote: 'Will refer others.'
}, {
  author: 'Doctor Mario',
  quote: 'nice work'
}, {
  author: 'doctor green',
  quote: 'excellent work'
}, {
  author: 'doctor smith',
  quote: 'Grea work'
}];

var globalState = exports.globalState = {
  count: 0,
  companyInfo: companyInfo,
  contactUs: contactUs,
  specialTreatmentData: specialTreatmentData,
  reviewsData: reviewsData,
  randomQuoteData: randomQuoteData,
  reviewStatus: {
    currentReview: 0
  }
};

/***/ }),

/***/ 39:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Footer;

var _hyperapp = __webpack_require__(0);

function Footer(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  return (0, _hyperapp.h)(
    "footer",
    null,
    (0, _hyperapp.h)(
      "div",
      { "class": "container" },
      (0, _hyperapp.h)(
        "nav",
        { "class": "menu" },
        (0, _hyperapp.h)(
          "a",
          { href: "#" },
          "Bio"
        ),
        (0, _hyperapp.h)(
          "a",
          { href: "#" },
          "Treatments"
        ),
        (0, _hyperapp.h)(
          "a",
          { href: "#" },
          "Reviews"
        ),
        (0, _hyperapp.h)(
          "a",
          { href: "#" },
          "Consultation"
        ),
        (0, _hyperapp.h)(
          "a",
          { href: "#" },
          "Contact Us"
        )
      ),
      (0, _hyperapp.h)(
        "ul",
        { "class": "social-media" },
        (0, _hyperapp.h)(
          "li",
          null,
          (0, _hyperapp.h)(
            "a",
            { href: "http://www.facebook.com", target: "new" },
            (0, _hyperapp.h)("i", { "class": "fas fa-camera-retro" })
          )
        ),
        (0, _hyperapp.h)(
          "li",
          null,
          (0, _hyperapp.h)(
            "a",
            { href: "http://www.twitter.com", target: "new" },
            (0, _hyperapp.h)("i", { "class": "fab fa-twitter-square" })
          )
        ),
        (0, _hyperapp.h)(
          "li",
          null,
          (0, _hyperapp.h)(
            "a",
            { href: "http://www.google.com", target: "new" },
            (0, _hyperapp.h)("i", { "class": "fab fa-google-plus-g" })
          )
        ),
        (0, _hyperapp.h)(
          "li",
          null,
          (0, _hyperapp.h)(
            "a",
            { href: "http://www.youtube.com", target: "new" },
            "  ",
            (0, _hyperapp.h)("i", { "class": "fab fa-youtube-play" })
          )
        )
      ),
      (0, _hyperapp.h)(
        "div",
        { "class": "copyright" },
        "\u24B8 2018 Copyright"
      )
    )
  );
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>

/***/ }),

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = ContactUs;

var _hyperapp = __webpack_require__(0);

var _axios = __webpack_require__(21);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function ContactUs(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  state = {
    form: {
      name: '',
      mob: '',
      email: '',
      mess: ''
    }
  };
  console.log("outside actions object");

  actions = {
    onInputChange: function onInputChange(event) {
      return function (state) {
        console.log(state);
        return {
          form: _extends({}, state.form, _defineProperty({}, event.target.name, event.target.value))

        };
      };
    },

    submitForm: function submitForm() {
      console.log(state.form);
      _axios2.default.post('htts://httpbin.org/anything', state.form).then(function (response) {
        console.log(response.data);
      }).catch(function (error) {
        console.log(error);
      });
    }
  };

  console.log(actions.submitForm(state.form));
  return (0, _hyperapp.h)("div", { class: 'row' }, [(0, _hyperapp.h)("div", { class: 'col-md-4' }, [(0, _hyperapp.h)("div", { class: 'panel' }, [(0, _hyperapp.h)("h4", {}, 'Quick Contact'), (0, _hyperapp.h)("div", { class: 'fieldset' }, [(0, _hyperapp.h)("input", { type: 'text', placeholder: "Please input your Name", class: "form-control",
    name: 'name',
    oninput: function oninput(event) {
      return actions.onInputChange(event);
    } }), (0, _hyperapp.h)("input", { type: 'text', placeholder: "Please input your Mobile number", class: "form-control",
    name: 'mob',
    oninput: function oninput(event) {
      return actions.onInputChange(event);
    } }), (0, _hyperapp.h)("input", { type: 'text', placeholder: "Please input your Email", class: "form-control",
    name: 'email',
    oninput: function oninput(event) {
      return actions.onInputChange(event);
    } }), (0, _hyperapp.h)("textarea", { placeholder: "Please your message", class: "form-control",
    name: 'mess',
    oninput: function oninput(event) {
      return actions.onInputChange(event);
    } }), (0, _hyperapp.h)("button", { type: 'button', class: "btn btn-primary",
    onclick: function onclick() {
      return actions.submitForm();
    } }, "submit")])])])]);
}

/***/ }),

/***/ 40:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Header;

var _hyperapp = __webpack_require__(0);

function Header(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  return (0, _hyperapp.h)(
    "header",
    null,
    (0, _hyperapp.h)(
      "div",
      { "class": "container" },
      (0, _hyperapp.h)(
        "div",
        { "class": "logo" },
        (0, _hyperapp.h)("i", { "class": "fas fa-user-md" })
      ),
      (0, _hyperapp.h)(
        "nav",
        null,
        (0, _hyperapp.h)(
          "a",
          { href: "/components/ourstory" },
          "Bio"
        ),
        (0, _hyperapp.h)(
          "a",
          { href: "#" },
          "Treatments"
        ),
        (0, _hyperapp.h)(
          "a",
          { href: "#" },
          "Reviews"
        ),
        (0, _hyperapp.h)(
          "a",
          { href: "#" },
          "Consultation"
        ),
        (0, _hyperapp.h)(
          "a",
          { href: "#" },
          "Contact Us"
        )
      )
    )
  );
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>

/***/ }),

/***/ 41:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = OurStory;

var _hyperapp = __webpack_require__(0);

function OurStory(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  return (0, _hyperapp.h)(
    "section",
    { id: "OurStory" },
    (0, _hyperapp.h)(
      "div",
      { "class": "container" },
      (0, _hyperapp.h)(
        "div",
        { "class": "row" },
        (0, _hyperapp.h)(
          "div",
          { "class": "col-md-6" },
          (0, _hyperapp.h)(
            "h5",
            { "class": "comp-title" },
            "Our Story"
          ),
          (0, _hyperapp.h)(
            "h2",
            null,
            "Practice Dedicated to a Woman's Health"
          ),
          (0, _hyperapp.h)(
            "p",
            null,
            "+1 bespoke glossier pinterest kogi schlitz, kombucha vinyl biodiesel vexillologist. Polaroid gentrify kickstarter shaman roof party echo park irony. Tumblr af truffaut keytar. Subway tile austin irony skateboard kitsch echo park pitchfork swag bespoke. Brooklyn poutine migas drinking vinegar."
          ),
          (0, _hyperapp.h)(
            "div",
            { "class": "quote" },
            "\"Mind Body Spirit\" -",
            (0, _hyperapp.h)(
              "strong",
              null,
              " Dr. Linda Stanley"
            )
          ),
          (0, _hyperapp.h)(
            "a",
            { href: "#", "class": "reserve-btn" },
            "Contact"
          )
        ),
        (0, _hyperapp.h)(
          "div",
          { "class": "col-md-6" },
          (0, _hyperapp.h)("div", { "class": "video-img" })
        )
      )
    )
  );
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>

/***/ }),

/***/ 42:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = RandomQuote;

var _hyperapp = __webpack_require__(0);

function RandomQuote(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  return (0, _hyperapp.h)(
    'section',
    { id: 'RandomQuote', style: {
        background: 'url("https://www.reviewtrackers.com/wp-content/uploads/run-doctors-office-with-patient-feedback.jpg")'
      } },
    (0, _hyperapp.h)(
      'div',
      { 'class': 'container' },
      (0, _hyperapp.h)(
        'h1',
        null,
        '"Practice Dedicated To A Womans Health"'
      ),
      (0, _hyperapp.h)(
        'span',
        { 'class': 'author' },
        ' - Dr Stanley'
      )
    )
  );
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>

/***/ }),

/***/ 43:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Reviews;

var _hyperapp = __webpack_require__(0);

function Reviews(_ref) {
  var state = _ref.state,
      actions = _ref.actions;


  var currentReview = function currentReview() {
    return (0, _hyperapp.h)(
      "div",
      null,
      (0, _hyperapp.h)(
        "h5",
        { "class": "comp-title" },
        "Reviews"
      ),
      (0, _hyperapp.h)(
        "h2",
        null,
        state.reviewsData[state.reviewStatus.currentReview].company
      ),
      (0, _hyperapp.h)(
        "h4",
        null,
        "\"",
        state.reviewsData[state.reviewStatus.currentReview].highlights,
        "\""
      ),
      (0, _hyperapp.h)(
        "p",
        null,
        state.reviewsData[state.reviewStatus.currentReview].review,
        " "
      ),
      (0, _hyperapp.h)(
        "div",
        { "class": "author" },
        (0, _hyperapp.h)(
          "strong",
          null,
          state.reviewsData[state.reviewStatus.currentReview].author
        ),
        " -",
        (0, _hyperapp.h)(
          "em",
          null,
          state.reviewsData[state.reviewStatus.currentReview].authorInfo
        )
      )
    );
  };
  var leftClickBTN = function leftClickBTN() {
    if (state.reviewStatus.currentReview == 0) {
      console.log('do nothing');
    } else {
      actions.reviewLeft();
    }
  };

  var rightClickBTN = function rightClickBTN() {
    if (state.reviewStatus.currentReview == state.reviewsData.length - 1) {
      console.log('do nothing');
    } else {
      actions.reviewRight();
    }
  };

  return (0, _hyperapp.h)(
    "section",
    { id: "Reviews" },
    (0, _hyperapp.h)(
      "div",
      { "class": "container" },
      (0, _hyperapp.h)(
        "div",
        { "class": "row" },
        (0, _hyperapp.h)(
          "div",
          { "class": "col-md-8 side-img" },
          (0, _hyperapp.h)(
            "div",
            { "class": "side-img" },
            (0, _hyperapp.h)("img", { src: "https://thumbs.dreamstime.com/b/doctor-black-woman-22447586.jpg" })
          )
        ),
        (0, _hyperapp.h)(
          "div",
          { "class": "col-md-4" },
          currentReview(),
          (0, _hyperapp.h)(
            "div",
            { "class": "arrows" },
            (0, _hyperapp.h)("i", { onclick: leftClickBTN,
              "class": "fa fa-arrow-left " + (state.reviewStatus.currentReview > 0 ? 'ready' : ''), "aria-hidden": "true" }),
            (0, _hyperapp.h)("i", { onclick: rightClickBTN,
              "class": "fa fa-arrow-right " + (state.reviewStatus.currentReview == state.reviewsData.length - 1 ? '' : 'ready'), "aria-hidden": "true" })
          )
        )
      )
    )
  );
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>

/***/ }),

/***/ 44:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = SpecialMenu;

var _hyperapp = __webpack_require__(0);

function SpecialMenu(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  var loopMenu = function loopMenu() {
    return state.specialTreatmentData.map(function (item) {
      return (0, _hyperapp.h)(
        "div",
        { "class": "col-md-4" },
        (0, _hyperapp.h)(
          "div",
          { "class": "box" },
          (0, _hyperapp.h)(
            "div",
            { "class": "box-img" },
            "  ",
            (0, _hyperapp.h)(
              "div",
              { "class": "price-circle" },
              item.price
            )
          ),
          (0, _hyperapp.h)(
            "span",
            { "class": "title" },
            item.title
          ),
          (0, _hyperapp.h)(
            "p",
            { "class": "details" },
            item.description
          )
        )
      );
    });
  };
  return (0, _hyperapp.h)(
    "section",
    { id: "SpecialMenu" },
    (0, _hyperapp.h)(
      "div",
      { "class": "container" },
      (0, _hyperapp.h)(
        "h5",
        { "class": "comp-title" },
        "Special Treatments"
      ),
      (0, _hyperapp.h)(
        "h2",
        null,
        "Body Mind Spirit"
      ),
      (0, _hyperapp.h)(
        "div",
        { "class": "row boxes" },
        loopMenu()
      ),
      (0, _hyperapp.h)(
        "a",
        { href: "#", "class": "link" },
        " Procedures "
      )
    )
  );
}

/***/ }),

/***/ 45:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = TopImg;

var _hyperapp = __webpack_require__(0);

function TopImg(_ref) {
  var state = _ref.state,
      actions = _ref.actions;

  return (0, _hyperapp.h)(
    "section",
    { id: "TopImg" },
    (0, _hyperapp.h)(
      "div",
      { "class": "container" },
      (0, _hyperapp.h)(
        "div",
        { "class": "title" },
        (0, _hyperapp.h)(
          "h5",
          null,
          "Welcome"
        ),
        (0, _hyperapp.h)(
          "h1",
          null,
          state.companyInfo.title
        )
      ),
      (0, _hyperapp.h)(
        "div",
        { "class": "contact-info" },
        (0, _hyperapp.h)(
          "div",
          { "class": "container" },
          (0, _hyperapp.h)(
            "div",
            { "class": "booking" },
            " Schedule Appointment "
          ),
          (0, _hyperapp.h)(
            "h2",
            null,
            "(718) - 642 - 9542"
          ),
          (0, _hyperapp.h)(
            "div",
            { "class": "hours" },
            "Opening Hours ",
            (0, _hyperapp.h)(
              "strong",
              null,
              " Mon - Fri:"
            ),
            " 9am -9pm",
            (0, _hyperapp.h)(
              "strong",
              null,
              " Weekend: "
            ),
            " 9am -1am"
          )
        )
      )
    )
  );
}
// <Header state={state} actions={actions}/>
// <Button state={state} actions={actions}/>

/***/ }),

/***/ 46:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _hyperapp = __webpack_require__(0);

var _hyperappReduxDevtools = __webpack_require__(20);

var _hyperappReduxDevtools2 = _interopRequireDefault(_hyperappReduxDevtools);

var _actions = __webpack_require__(17);

var _globalState = __webpack_require__(19);

var _App = __webpack_require__(18);

var _App2 = _interopRequireDefault(_App);

var _ContactUs = __webpack_require__(4);

var _ContactUs2 = _interopRequireDefault(_ContactUs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log({ globalState: _globalState.globalState });

(0, _hyperapp.app)({

  state: { globalState: _globalState.globalState },

  view: function view(state, actions) {
    return (0, _hyperapp.h)(
      'div',
      null,
      (0, _hyperapp.h)(_App2.default, { state: state, actions: actions })
    );
  },
  root: document.getElementById('app'),
  actions: {
    onInputChange: function onInputChange(event) {
      return function (state) {
        state.form[event.target.name] = event.target.value;
        return state;
      };
    },
    submitForm: function submitForm() {
      console.log(state.form);
      axios.post('https://httpbin.org/anything', state).then(function (response) {
        console.log(response.data);
      }).catch(function (error) {
        console.log(error);
      });
    }

  },

  load: function load(state, actions) {
    console.log("load function");
  }
});

/***/ })

},[46]);