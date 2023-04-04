var Airtable = require("airtable");
var base = new Airtable({
  apiKey: "keyzCQU5WbIT4ZaJz",
}).base("apphXxg2R4O6r2l1w");


base("table")
  .select({
     maxRecords: 10,
     view: "Grid view",
  })
  .eachPage(function page(records, fetchNextPage) {
    records.forEach(function (record) {
      // pull my airtable data
      // each record will have its own div
      let airtableItem = document.createElement("div");
      // add some data specific meta to my new divs for filtering
      // airtableItem.classList.add("airtable-item");
      airtableItem.setAttribute("data-ethic", record.fields.ethic);

      // create a img tag for my sticker
      let fruitSticker = document.createElement("img");
      fruitSticker.src = record.fields.fruitSticker[0].url;
      fruitSticker.classList.add("airtable-image");
      // create a span for my  stickername x
      // let artistName = document.createElement("span");
      // artistName.innerHTML = record.fields.ArtistName;

      // appending to div holding each airtable record
      airtableItem.append(fruitSticker);
      
      // append div to body
      let mainFruit = document.querySelector(".main_fruit");
      

      
      //this is from stackoverflow, how to find name of file
       var path=window.location.pathname;
       var filename = path.split("/").pop();


       //for apple.html
       if("apple.html"===filename){
          let ethicParent = document.querySelector("#ethicParent");
          let unethicParent = document.querySelector("#unethicParent");
          if(record.fields.produceType==="apple&pears"){
           if(record.fields.ethic==="ethical"){
              airtableItem.classList.add("airtable-item");
              ethicParent.append(airtableItem);
           }else if(record.fields.ethic==="unethical"){
              unethicParent.append(airtableItem);
              airtableItem.classList.add("airtable-item");
           };
        }
       }

       //melon.html
       if("watermelon.html"===filename){
        let ethicParent = document.querySelector("#ethicParent");
        let unethicParent = document.querySelector("#unethicParent");
        if(record.fields.produceType==="Melon"){
         if(record.fields.ethic==="ethical"){
            airtableItem.classList.add("airtable-item");
            ethicParent.append(airtableItem);
         }else if(record.fields.ethic==="unethical"){
            unethicParent.append(airtableItem);
            airtableItem.classList.add("airtable-item");
         };
      }
     }

     //avocado.html
     if("avocado.html"===filename){
      let ethicParent = document.querySelector("#ethicParent");
      let unethicParent = document.querySelector("#unethicParent");
      if(record.fields.produceType==="Avocado"){
       if(record.fields.ethic==="ethical"){
          airtableItem.classList.add("airtable-item");
          ethicParent.append(airtableItem);
       }else if(record.fields.ethic==="unethical"){
          unethicParent.append(airtableItem);
          airtableItem.classList.add("airtable-item");
       };
    }
   }

   //orange.html
   if("orange.html"===filename){
    let ethicParent = document.querySelector("#ethicParent");
    let unethicParent = document.querySelector("#unethicParent");
    if(record.fields.produceType==="Orange"){
     if(record.fields.ethic==="ethical"){
        airtableItem.classList.add("airtable-item");
        ethicParent.append(airtableItem);
     }else if(record.fields.ethic==="unethical"){
        unethicParent.append(airtableItem);
        airtableItem.classList.add("airtable-item");
     };
  }
 }

 //banana.html
 if("banana.html"===filename){
  let ethicParent = document.querySelector("#ethicParent");
  let unethicParent = document.querySelector("#unethicParent");
  if(record.fields.produceType==="Tropical"){
   if(record.fields.ethic==="ethical"){
      airtableItem.classList.add("airtable-item");
      ethicParent.append(airtableItem);
   }else if(record.fields.ethic==="unethical"){
      unethicParent.append(airtableItem);
      airtableItem.classList.add("airtable-item");
   };
}
}

//strawberry.html
if("strawberry.html"===filename){
  let ethicParent = document.querySelector("#ethicParent");
  let unethicParent = document.querySelector("#unethicParent");
  if(record.fields.produceType==="Melon"){
   if(record.fields.ethic==="ethical"){
      airtableItem.classList.add("airtable-item");
      ethicParent.append(airtableItem);
   }else if(record.fields.ethic==="unethical"){
      unethicParent.append(airtableItem);
      airtableItem.classList.add("airtable-item");
   };
}
}
    });
  });

// set up a event listener for my empowering button
// listen for user clicker, once it is clicker, serach for divs with data-mood, empowering

// get our button using css ID
// assign a event listener to my button to listen for click
let empoweringFilterBtn = document.querySelector("#ethic");
empoweringFilterBtn.addEventListener("click", function(event){ShowHideFilter(event)});


let romanticFilterBtn = document.querySelector("#unethic");
romanticFilterBtn.addEventListener("click", function(event){ShowHideFilter(event)});

function ShowHideFilter(e) {
  // console.log(e.target.id);
  let listofAirtableItems = document.querySelectorAll("div.airtable-item");
  listofAirtableItems.forEach(function SearchFilter(item) {
    
    let parent = document.querySelector("#" + e.target.id + "Parent");
    parent.classList.remove("filter-hide");



    // if div matches the id of the button, show div, otherwise, hide
    // if (item.dataset.ethic == e.target.id) {
    //   item.classList.add("filter-show");
    // } else {
    //   item.classList.add("filter-hide");
    // }
  });
  
}



