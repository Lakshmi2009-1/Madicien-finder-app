const allMeds = [
  {
    name: "Daraprin", 
    price: "Rs. 250", 
    manu: "", 
    imgLink: "https://dwaey.com/medrg/upload/1723992724.png", 
    link: "", 
    
    alt: [
      {
      name: "Daramin", 
    price: "Rs. 15", 
    manu: "", 
    imgLink: "https://www.netmeds.com/images/product-v1/600x600/1136339/daramin_25mg_tablet_10s_742022_0_0.jpg", 
    link: "https://www.1mg.com/drugs/daramin-25mg-tablet-201707"
      }
      ]
  },
  
  
  {
    name: "Zytiga", 
    price: "Rs. 75000", 
    manu: "", 
    imgLink: "https://assets.mrmed.in/product-images/product-images-1719919503102-367500702-Zytiga%20250mg%20Tablet_103434.jpg", 
    link: "", 
    
    alt: [
      {
        name: "Mytera", 
    price: "Rs. 15000", 
    manu: "Mylan Pharma", 
    
    imgLink: "https://onemg.gumlet.io/l_watermark_346,w_480,h_480/a_ignore,w_480,h_480,c_fit,q_auto,f_auto/cx456kwzkuscoxk4bl4d.jpg?format=auto", 
    
    link: "https://www.apollopharmacy.in/medicine/mytera-250mg-tablet-120-s"
      },
      
      {
        name: "Abitate", 
    price: "Rs. 29000", 
    manu: "RPG Life Sciences	", 
    
    imgLink: "https://assets.mrmed.in/product-images/product-images-1632405352428-700552497-100012_1.jpg", 
    
    link: "https://www.apollopharmacy.in/medicine/abitate-250mg-tab-120-s"
      }
    ]
  },
  
  
  {
    name: "Glivec", 
    price: "Rs. 6600", 
    manu: "", 
    
    imgLink: "https://onemg.gumlet.io/l_watermark_346,w_690,h_700/a_ignore,w_690,h_700,c_pad,q_auto,f_auto/a0f76dfdb04146cfb0ec1f5099800eb6.jpg", 
    
    link: "https://www.1mg.com/drugs/glivec-400mg-tablet-236606?srsltid=AfmBOornCUHbHOOOrbzDerFlKlCNwkmwUZQQ-SVLiJocqFiRtcstyCwq&wpsrc=Google+Organic+Search", 
    
    alt: [
      {
        name: "Veenat", 
    price: "Rs. 1500", 
    manu: "Natco Pharma", 
    
    imgLink: "https://onemg.gumlet.io/l_watermark_346,w_690,h_700/a_ignore,w_690,h_700,c_pad,q_auto,f_auto/a5f53d8d234d45a695d7c6f59707c652.jpg", 
    
    link: "https://www.1mg.com/drugs/veenat-400-tablet-14360?srsltid=AfmBOoozkKt5QjS2GyIzsogcO_R2FtOGzBoVQFn3fwsoCUwofa590wBc&wpsrc=Google+Organic+Search" 
      }
    ]
  },
  
  
  {
    name: "Paracetamol", 
    price: "Rs.20-30 per 10 tablets", 
    manu: "", 
    
    imgLink: "https://5.imimg.com/data5/SELLER/Default/2022/9/QR/AF/MV/69966959/paracip-paracetamol-650-tablet.jpg", 
    
    link: "https://www.1mg.com/search/all?filter=true&name=Paracetamol", 
    
    alt: [
      {
        name: "Crocin", 
    price: "Rs.20-30 per 10 tablets", 
    manu: "GlaxoSmithKline", 
    
    imgLink: "https://cdn01.pharmeasy.in/dam/products_otc/H45820/crocin-650-tablet-15-nos-3-1689759566.jpg", 
    
    link: "https://www.1mg.com/search/all?name=crocin", 
      },
      
        {
        name: "Dolo 65", 
    price: "Rs.20-30 per 10 tablets", 
    manu: "Micro labs", 
    
    imgLink: "https://assets.truemeds.in/Images/ProductImage/TM-TACR1-011691/dolo-650-tablet-15_dolo-650-tablet-15--TM-TACR1-011691_1.png", 
    
    link: "https://www.1mg.com/search/all?name=dolo%2065"
      },
      
        {
        name: "	Calpol", 
    price: "Rs.20-30 per 10 tablets", 
    manu: "GSK", 
    
    imgLink: "https://drugstreet.in/wp-content/uploads/2023/12/1000046750.jpg", 
    
    link: "https://www.1mg.com/search/all?name=calpol"
      }
    ]
  },
  
  {
    name: "Combiflam", 
    price: "Rs.20-30 per 10 tablets", 
    manu: "Sanofi", 
    
    imgLink: "https://images.apollo247.in/pub/media/catalog/product/c/o/combiflam_tablet_20_s-1.png?tr=q-80,f-webp,w-400,dpr-3,c-at_max%201200w", 
    
    link: "https://www.1mg.com/search/all?filter=true&name=Combiflam", 
    
    alt: [
      {
        name: "Ibuprofen", 
    price: "Rs.20-30 per 10 tablets", 
    manu: "Abbott",
    
    imgLink: "https://5.imimg.com/data5/SELLER/Default/2023/9/344827499/TG/YT/FY/192270567/ibuprofen-tablet-400mg.png", 
    
    link: "https://www.1mg.com/search/all?filter=true&name=Ibuprofen"
    
      },
      
      {
        name: "Brufen", 
    price: "", 
    manu: "Abbott", 
    
    imgLink: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYUmWwHGkFj5M1SKY0GM-af-pHOyLMcLqRdQ&s", 
    
    link: "https://www.1mg.com/search/all?name=brufen"
    
      }
    ]
  },
  
  {
    name: "Disprin", 
    price: "Rs. 10-20 for 10 tablets", 
    manu: "Reckitt Benckiser", 
    
    imgLink: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfABbWyZY3yywBJtf60mpv4GyfpwTHVj5yGA&s", 
    
    link: "https://www.1mg.com/otc/disprin-regular-325mg-effervescent-tablet-for-fast-relief-from-pain-headaches-migraines-otc543020", 
    
    alt: [
      {
        name: "Ecosprin", 
    price: "Rs. 10-20 for 10 tablets", 
    manu: "USV Ltd.", 
    
    imgLink: "https://assets.truemeds.in/Images/ProductImage/TM-TACR1-012745/ecosprin-75-tablet-14_ecosprin-75-tablet-14--TM-TACR1-012745_1.png", 
    
    link: "https://www.1mg.com/search/all?filter=true&name=Ecosprin"
      },
      
      {
        name: "Aspirin", 
    price: "Rs. 10-20 for 10 tablets", 
    manu: "Bayer",
    
    imgLink: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCeIfr0UEUuInFvEhsJRyF3aVQKXuaMSIalA&s", 
    
    link: "https://www.1mg.com/search/all?filter=true&name=Aspirin", 
      },
      
      {
        name: "Aspro", 
    price: "Rs. 10-20 for 10 tablets", 
    manu: "Nicholas Healtcare Limited", 
    imgLink: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2SvOcNgxiuLa4yDomGtmGL5e22x6BHuX5qQ&s", 
    link: ""
      }
    ]
  },
  
  
  {
    name: "ORS", 
    price: "Rs. 15-25 per sachet", 
    manu: "", 
    
    imgLink: "https://cdn01.pharmeasy.in/dam/products_otc/W81928/prolyte-ors-orange-drink-sachet-21-gm-2-1654249497.jpg", 
    
    link: "https://www.1mg.com/search/all?name=ors", 
    
    alt: [
      {
        name: "Electral", 
    price: "Rs. 15-25 per sachet", 
    manu: "FDC Ltd", 
    
    imgLink: "https://m.media-amazon.com/images/I/81jrDrIJoNL.jpg", 
    
    link: "https://www.1mg.com/search/all?name=ors" 
      },
      
      {
        name: "ORSL", 
    price: "Rs. 15-25 per sachet", 
    manu: "Dabur", 
    
    imgLink: "https://images.apollo247.in/pub/media/catalog/product/o/r/ors0011_1-1-_1_.jpg", 
    
    link: "https://www.1mg.com/search/all?name=ors" 
      },
      
      {
        name: "Peditral", 
    price: "Rs. 15-25 per sachet", 
    manu: "Cipla", 
    
    imgLink: "https://images.apollo247.in/pub/media/catalog/product/P/E/PED0040_1_1.jpg?tr=q-80,f-webp,w-400,dpr-3,c-at_max%201200w", 
    
    link: "https://www.1mg.com/search/all?name=ors"
      }
    ]
  },
  
  
  {
    name: "Vicks Vaporub", 
    price: "Rs. 40-60 for 25g", 
    manu: "Procter & Gamble", 
    
    imgLink: "https://cdn01.pharmeasy.in/dam/products_otc/181140/vicks-vaporub-50ml-relief-from-cold-cough-headache-and-body-pain-2-1677525570.jpg", 
    
    link: "https://www.1mg.com/search/all?name=Vicks%20Vaporub&st=vivks%20vaporup&sl=Vicks%20Vapor,Vicks%20Vaporub&s=Vicks%20Vaporub", 
    
    alt: [
      {
       name: "Zandu Balm", 
    price: "Rs. 40-60 for 25g", 
    manu: "Emami", 
    
    imgLink: "https://m.media-amazon.com/images/I/617dG3SoVKL.jpg", 
    
    link: "https://www.1mg.com/search/all?filter=true&name=Zandu%20balm" 
      },
      
      {
        name: "Tiger Balm", 
    price: "Rs. 40-60 for 25g", 
    manu: "Haw Par Healtcare", 
    
    imgLink: "https://rukminim2.flixcart.com/image/850/1000/jd1z9u80/body-pain-relief/v/n/b/30-red-ointment-30g-tiger-balm-original-imaf224hjngnfmhs.jpeg?q=90&crop=false", 
    
    link: "https://www.1mg.com/search/all?name=tiger%20balm" 
      },
      
      {
       name: "Amrutanjan", 
    price: "Rs. 40-60 for 25g", 
    manu: "Amrutanjan Healthcare", 
    
    imgLink: "https://cdn01.pharmeasy.in/dam/products_otc/010715/amrutanjan-strong-doub-50-ml-2-1674209955.jpg?dim=400x0&dpr=1&q=100", 
    
    link: "https://www.1mg.com/search/all?filter=true&name=Amrutanjan%20balm"  
      }
    ]
  },
  
  {
    name: "Digene", 
    price: "Rs. 20-40 for 10 tablets or Rs. 60-80 for 200 ml bottle", 
    manu: "	Abbott", 
    
    imgLink: "https://cdn01.pharmeasy.in/dam/products_otc/255390/digene-gel-acidity-gas-relief-200ml-mint-flavour-sugar-free-2-1710939921.jpg", 
    
    link: "https://www.1mg.com/search/all?name=digene", 
    
    alt: [
      {
        name: "ENO", 
    price: "Rs. 20-40 for 10 tablets or Rs. 60-80 for 200 ml bottle", 
    manu: "GlaxoSmithKline", 
    
    imgLink: "https://i-cf65.ch-static.com/content/dam/cf-consumer-healthcare/nutrition-eno/en_IN/home/mobile/homepage-header-carousal-1-v3_mobile.jpg?auto=format", 
    
    link: "https://www.1mg.com/search/all?name=eno" 
      },
      
      {
        name: "Gelusil", 
    price: "Rs. 20-40 for 10 tablets or Rs. 60-80 for 200 ml bottle", 
    manu: "Pfizer", 
    
    imgLink: "https://images.apollo247.in/pub/media/catalog/product/G/E/GEL0002_3_1.jpg", 
    
    link: "https://www.1mg.com/search/all?name=gelusil"
      }
    ]
  },
  
  {
    name: "Strepsils", 
    price: "Rs. 30-50 for a pack of 8-10 tablets", 
    manu: "Reckitt Benckiser", 
    
    imgLink: "https://5.imimg.com/data5/SELLER/Default/2023/2/RX/ZI/IF/81505918/strepsils-blister.jpg", 
    
    link: "https://www.1mg.com/categories/featured/top-brands/strepsils-884", 
    
    alt: [
      {
        name: "Vicks", 
    price: "Rs. 30-50 for a pack of 8-10 tablets", 
    manu: "Procter & Gamble", 
    
    imgLink: "https://images.ctfassets.net/umpxkz97ty8t/4tjmmu8xgFdItABWjhpWTA/88afdcd6055df8b4fac3fdea0098dfa5/VCD4-Packs.png", 
    
    link: "https://www.1mg.com/search/all?name=vicks&filter=true&state=1&scroll_id=Rre-0688yDrQYBn-2UkFiY-vOvNzHZ9Vlp5wJSeiWio="
      }, 
      
      {
       name: "Dabur Honitus	", 
    price: "Rs. 30-50 for a pack of 8-10 tablets", 
    manu: "Dabur India Ltd", 
    
    imgLink: "https://5.imimg.com/data5/UF/HY/GLADMIN-43545561/dabur-honitus-cough-drops.png", 
    
    link: "https://www.1mg.com/search/all?name=dabur%20honitus" 
      }, 
      
      {
        name: "Cofsils", 
    price: "Rs. 30-50 for a pack of 8-10 tablets", 
    manu: "Cipla Healtcare", 
    
    imgLink: "https://5.imimg.com/data5/SELLER/Default/2020/9/HW/ZE/YJ/14356045/cosils-orange.jpg", 
    
    link: "https://www.1mg.com/search/all?name=cofsils" 
      }
    ]
  },
  
  {
    name: "Benadryl", 
    price: "Rs. 50-80 per bottle (100 ml)", 
    manu: "Johnson & Johnson", 
    
    imgLink: "https://images.apollo247.in/pub/media/catalog/product/b/e/ben0053_1.jpg?tr=q-80,f-webp,w-400,dpr-3,c-at_max%201200w", 
    
    link: "https://www.1mg.com/search/all?filter=true&name=Benadryl", 
    
    alt: [
      {
       name: "Corex", 
    price: "Rs. 50-80 per bottle (100 ml)", 
    manu: "Pfizer", 
    
    imgLink: "https://shreedashrath.com/wp-content/uploads/2021/06/corex-600x600.jpg", 
    
    link: "https://www.1mg.com/search/all?name=corex",   
      },
      
      {
        name: "Ascoril-D", 
    price: "Rs. 50-80 per bottle (100 ml)", 
    manu: "Gzlenmark", 
    
    imgLink: "https://images.apollo247.in/pub/media/catalog/product/a/s/asc0019.jpg", 
    
    link: "https://www.1mg.com/search/all?filter=true&name=Ascoril", 
      }
    ]
  },
  
  {
    name: "Augmentin 1000 Duo Tablet", 
    price: "Rs. 1000", 
    manu: "", 
    
    imgLink: "https://onemg.gumlet.io/l_watermark_346,w_480,h_480/a_ignore,w_480,h_480,c_fit,q_auto,f_auto/bodminug3xmfcubbrdix.jpg?format=auto", 
    
    link: "https://www.1mg.com/drugs/augmentin-1000-duo-tablet-163191", 
    
    alt: [
      {
        name: "Clavam", 
    price: "Rs. 193", 
    manu: "Alkem Laboratories", 
    
    imgLink: "https://images.apollo247.in/pub/media/catalog/product/c/l/cla0004.jpg", 
    
    link: "https://www.1mg.com/drugs/clavam-625-tablet-63841", 
      }
    ]
  },
  
  {
    name: "Crestor", 
    price: "Rs.732", 
    manu: "Astrazeneca", 
    
    imgLink: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0Jd-k1uea3upVeTJNmtS8y9ASkNOwsxN8Uw&s", 
    
    link: "https://www.1mg.com/drugs/crestor-40mg-tablet-932668", 
    
    alt: [
      {
        name: "Rosuvas", 
    price: "Rs. 277", 
    manu: "Sun Pharmaceutical", 
    
    imgLink: "https://5.imimg.com/data5/SELLER/Default/2024/6/425035920/PX/LR/WN/147700842/rosuvas-10-mg-tablet1-500x500.jpg", 
    
    link: "https://www.1mg.com/drugs/rosuvas-10-tablet-113791"
      }
    ]
  },
  
  {
    name: "Lantus", 
    price: "Rs. 634", 
    manu: "Sanofi India Ltd", 
    
    imgLink: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3pt0WVYQOROwvBFQi4lo5Fy0HvifJla0VUw&s", 
    
    link: "https://www.1mg.com/drugs/lantus-solostar-100iu-ml-solution-for-injection-69758", 
    
    alt: [
      {
        name: "Basalog", 
    price: "Rs. 481", 
    manu: "Bicon", 
    
    imgLink: "https://onemg.gumlet.io/l_watermark_346,w_480,h_480/a_ignore,w_480,h_480,c_fit,q_auto,f_auto/0c379a5816da4e63b74cd6889b2d382a.jpg?format=auto", 
    
    link: "https://www.1mg.com/drugs/basalog-100iu-ml-refill-cartridge-164232"
      }
    ]
  },
  
  {
    name: "Tamiflu", 
    price: "Rs. 1238", 
    manu: "roducts India Pvt Ltd",
    
    imgLink: "https://d2jx2rerrg6sh3.cloudfront.net/image-handler/picture/2021/4/shutterstock_170422580.jpg", 
    
    link: "https://www.1mg.com/drugs/tamiflu-75mg-capsule-682558", 
    
    alt: [
      {
        name: "Fluvir", 
    price: "Rs.447", 
    manu: "Hetero Drugs Ltd", 
    
    imgLink: "https://images.apollo247.in/pub/media/catalog/product/f/l/flu0174.jpg?tr=q-80,f-webp,w-400,dpr-3,c-at_max%201200w",
    
    link: "https://www.1mg.com/drugs/fluvir-75mg-capsule-25088", 
      }
    ]
  },
  
  {
    name: "Eliquis", 
    price: "Rs.1086", 
    manu: "Pfizer Ltd",
    
    imgLink: "https://5.imimg.com/data5/SELLER/Default/2022/9/KS/UI/TA/136059498/eliquis-5mg-tablet.jpg", 
    
    link: "https://www.1mg.com/drugs/eliquis-5mg-tablet-330162", 
    
    alt:[
      {
      name: "Apigat", 
    price: "533", 
    manu: "Nacto Pharma Ltd",
    
    imgLink: "https://www.practostatic.com/practopedia-images/v3/res-750/apigat-2-5-mg-tablet-30-s_15fa3947-9fad-47f2-bbed-8d5f500e66e9.JPG", 
    
    link: "https://www.1mg.com/drugs/apigat-5-tablet-540276" 
      }
    ]
  }
  
];

const noFound = document.getElementById('noFound');
const altBtn = document.querySelector('.alt-btn');
const orgBtn = document.querySelector('.org-btn');
const altLab = document.querySelector('.alt-lab');
const original = document.querySelector('.original');

const welcome = document.getElementById('welcome-card');


function find(event){
  const search = event.target.value.toLowerCase();

  welcome.style.display = "none";

  showOriginal(search);
}

let filtArr = [];

function showOriginal(search) {
  
   filtArr = [];
  filtArr = allMeds.filter( med => med.name.toLowerCase().includes(search));
  const original = document.querySelector('.original');
  original.innerHTML = '';
  
  if (filtArr.length === 0 ) {
    
    noFound.style.display = 'block';
    noFound.innerHTML = 'SORRY: no MADICIEN Found';
    original.innerHTML = "";
    altBtn.style.display = "none";
    orgBtn.style.display = "none";
    altLab.style.display = "none";
    return;
  } 
    else{
     noFound.innerHTML = "";
      altBtn.style.display = "block";
    orgBtn.style.display = "block";
    altLab.style.display = "block";
      
  for (let i = 0; i < filtArr.length; i++) {
  
  const newDiv = document.createElement('a');
  const medImg = document.createElement('img');
  const medName = document.createElement('p');
  const medPrice = document.createElement('p');
  const manu = document.createElement('p');
  const content = document.createElement('div');
  
  newDiv.classList.add('newDiv');
  content.classList.add('content');
  medImg.classList.add('pImg');
  
  medImg.src = (filtArr[i].imgLink);
  medName.innerHTML = (`<span>name </span>: ` + filtArr[i].name);
  medPrice.innerHTML = (`<span>price</span>: ` +  filtArr[i].price);
  manu.innerHTML = (`<span>manufacturer</span>: ` + filtArr[i].manu);
  newDiv.href = filtArr[i].link
  
  
  newDiv.appendChild(medImg);
  newDiv.appendChild(content);
  
  content.appendChild(medName);
  content.appendChild(medPrice);
  content.appendChild(manu);
  
  original.appendChild(newDiv);
      }
    }  
}

let alterArray ;

function findAlter() {
  const search = document.getElementById('med').value.toLowerCase();
  
  alterArray =  [];
  
  for (let i = 0; i < allMeds.length; i++) {
    
    for (let p = 0; p < allMeds[i].alt.length; p++) {
      
      if ( allMeds[i].name.toLowerCase().includes(search) ) {
      alterArray.push(allMeds[i].alt[p]);
      }
    }
  }
  showAlter(alterArray, search);
}



function showAlter(alterArray, search){
  
  const alterDiv = document.querySelector('.alterDiv');
  alterDiv.innerHTML = '';
  
  if (alterArray.length === 0 || search === '') {
   
    noFound.style.display = 'block';
    noFound.innerHTML = 'no MADICIEN Found';
    return;
  } 
    else{
      
   noFound.innerHTML = '';  
   original.innerHTML = "";
      
  for (let i = 0; i < alterArray.length; i++) {
  
  const newDiv = document.createElement('a');
  const medImg = document.createElement('img');
  const medName = document.createElement('p');
  const medPrice = document.createElement('p');
  const manu = document.createElement('p');
  const content = document.createElement('div');
  
  newDiv.classList.add('newDiv');
  content.classList.add('content');
  medImg.classList.add('pImg');
  
  medImg.src = (alterArray[i].imgLink);
  medName.innerHTML = (`<span>name</span>: ` + alterArray[i].name);
  medPrice.innerHTML = (`<span>price</span>: ` +  alterArray[i].price);
  manu.innerHTML = (`<span>manufacturer</span>: ` + alterArray[i].manu);
  newDiv.href = alterArray[i].link
  
  
  
  
  newDiv.appendChild(medImg);
  newDiv.appendChild(content);
  
  content.appendChild(medName);
  content.appendChild(medPrice);
  content.appendChild(manu);
  
  alterDiv.appendChild(newDiv);
      }
    }  
  
}


function displayOrg() {
const search = document.getElementById('med');
const userValue = search.value.toLowerCase();

showOriginal(userValue);

}
