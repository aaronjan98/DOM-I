const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

const nav = document.querySelectorAll("nav a");
nav[0].textContent = siteContent["nav"]["nav-item-1"]
nav[1].textContent = siteContent["nav"]["nav-item-2"]
nav[2].textContent = siteContent["nav"]["nav-item-3"]
nav[3].textContent = siteContent["nav"]["nav-item-4"]
nav[4].textContent = siteContent["nav"]["nav-item-5"]


// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

const header = document.querySelector("h1");
header.textContent = siteContent["cta"]["h1"]

const button = document.querySelector("button");
button.textContent = siteContent["cta"]["button"]

const codeSnippet = document.getElementById('cta-img')
codeSnippet.setAttribute('src', siteContent["cta"]["img-src"])

const hTags = document.querySelectorAll('h4');
hTags[0].textContent = siteContent['main-content']['features-h4']
hTags[1].textContent = siteContent['main-content']['about-h4']
hTags[2].textContent = siteContent['main-content']['services-h4']
hTags[3].textContent = siteContent['main-content']['product-h4']
hTags[4].textContent = siteContent['main-content']['vision-h4']

const pTags = document.querySelectorAll('p');
pTags[0].textContent = siteContent['main-content']['features-content']
pTags[1].textContent = siteContent['main-content']['about-content']
pTags[2].textContent = siteContent['main-content']['services-content']
pTags[3].textContent = siteContent['main-content']['product-content']
pTags[4].textContent = siteContent['main-content']['vision-content']

const middleImg = document.getElementById('middle-img')
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"])

const contactSec = document.querySelector('.contact h4');
contactSec.textContent = siteContent['contact']['contact-h4']

const contactPar = document.querySelectorAll('.contact p');
contactPar[0].textContent = siteContent['contact']['address']
contactPar[1].textContent = siteContent['contact']['phone']
contactPar[2].textContent = siteContent['contact']['email']

const footer = document.querySelector('footer');
footer.textContent = siteContent['footer']['copyright']