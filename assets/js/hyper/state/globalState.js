var companyInfo = {
  title: 'Sculpting',
  phone: '267-642-9542',
  location:'Philadelphia,PA',
}

var contactUs= {
  name: "",
  mob: "",
  email: "",
  mess: "",
}

 var specialTreatmentData = [
  {
  title:'Facial Treatment ',
  description:'Full wrinkle removal & Skin tightening',
  price: '$250'
},
{
  title:'Facial Treatment ',
  description:'Full wrinkle removal & Skin tightening',
  price: '$250'
},
{
  title:'Facial Treatment ',
  description:'Full wrinkle removal & Skin tightening',
  price: '$250'
},
]

 var reviewsData = [
  {
    company:'Cosemtics',
    author:'Dr. Regis Sams',
    authorInfo:' Reliance CFO',
    highlights:'Best medical practice in Atlantic area',
  review: '1 bespoke glossier pinterest kogi schlitz, kombucha vinyl biodiesel vexil,lologist. Polaroid gentrify kickstarter shaman roof party echo park irony. Tumblr af truffaut keytar. Subway'
},
{
  company:'Laser Lipo',
  author:'Dr. Michael John',
  authorInfo:' Accreditted practitioner',
  highlights:'Best practice in Philadelphia area',
review: '1 bespoke glossier pinterest kogi schlitz, kombucha vinyl biodiesel vexillologist. Polaroid gentrify kickstarter shaman roof party echo park irony. Tumblr af truffaut keytar. Subway'
},
{
  company:'Reliance',
  author:'Dr. Trocki',
  authorInfo:' Accreditted suregeon',
  highlights:'Best suregeon Delaware area',
review: '1 bespoke glossier pinterest kogi schlitz, kombucha vinyl biodiesel vexillologist. Polaroid gentrify kickstarter shaman roof party echo park irony. Tumblr af truffaut keytar. Subway'
},
{
  company:'ABC',
  author:'Chris Daley',
  authorInfo:' CEO',
  highlights:'CEO of ABC',
review: '1 bespoke glossier pinterest kogi schlitz, kombucha vinyl biodiesel vexillologist. Polaroid gentrify kickstarter shaman roof party echo park irony. Tumblr af truffaut keytar. Subway'
},
{
  company:'CBS',
  author:'Douglas Bell',
  authorInfo:' CEO',
  highlights:'CEO of CBS ',
review: '1 bespoke glossier pinterest kogi schlitz, kombucha vinyl biodiesel vexillologist. Polaroid gentrify kickstarter shaman roof party echo park irony. Tumblr af truffaut keytar. Subway'
},
]

 var randomQuoteData =[
  {
    author: 'Doctor Keith',
    quote: 'Will refer others.'
},
{
  author: 'Doctor Mario',
  quote: 'nice work'
},
{
  author: 'doctor green',
  quote: 'excellent work'
},
{
  author: 'doctor smith',
  quote: 'Grea work'
},

]




export const globalState = {
  count: 0,
  companyInfo,
  contactUs,
  specialTreatmentData,
  reviewsData,
  randomQuoteData,
  reviewStatus: {
    currentReview: 0,
  }
}
