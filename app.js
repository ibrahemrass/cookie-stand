'use strict'; 



let hours=['6am','7am','8am','9am','10am','11am','12am','1pm','2pm','3pm','4pm','5pm','6pm','7pm',"Daily Location Total"];
let CulmTot=[0,0,0,0,0,0,0,0,0,0,0,0,0,0];
function randomValue(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min); 
  
}
  

    
let div= document.getElementById('cookies');
let table=document.createElement('table')
div.appendChild(table)

function Store(location,mincus,maxcus,avg_cookies){
  this.location= location;
  this.mincus=mincus;
  this.maxcus=maxcus;
  this.avg_cookies=avg_cookies;
  this.numberOFcustumer=[];
  this.total=0;
  }

  Store.prototype.upDateCus = function(){ for(let i=0;i<hours.length;i++){
  this.numberOFcustumer.push(Math.ceil( randomValue(this.mincus,this.maxcus) * this.avg_cookies));
  this.total+=this.numberOFcustumer[i]; 
}
}
Store.prototype.render = function () {
  let myshop=document.createElement('div');
     let h1=document.createElement('h1');
     let div= document.getElementById('cookies');
     let tr =document.createElement('tr')
     table.appendChild(tr);
  
     }
     Store.prototype.cookiesBranch = function(){
  
  for(let i=0; i<hours.length-1; i++)
  CulmTot[i]=this.numberOFcustumer[i]+CulmTot[i];


  



  let tr =document.createElement('tr')
table.appendChild(tr)
let th1=document.createElement('th')
th1.textContent=this.location;
tr.appendChild(th1)

for(let i=0;i<hours.length-1;i++){
  let thEl=document.createElement('th')
  thEl.textContent=this.numberOFcustumer[i]
  tr.appendChild(thEl)
}
let thA=document.createElement('th')
thA.textContent=this.total;
tr.appendChild(thA)
}
 




let seatl= new Store('seatl','23','65','6.3')
let Tokyo =new Store('Tokyo','3','24','1.2')
let Dubai= new Store('Dubai','11','38','3.7')
let Paris=new Store('Paris','20','38','2.3')
let lima = new Store('lima','2','16','4.6')

seatl.upDateCus();
Tokyo.upDateCus();
Dubai.upDateCus();
Paris.upDateCus();
lima.upDateCus();
seatl.render();
Tokyo.render();
Dubai.render();
Paris.render();
lima.render();
console.log(seatl);
console.log(Tokyo);
console.log(Dubai);
console.log(Paris);
console.log(lima);


function timeheader(){
  let tr =document.createElement('tr')
table.appendChild(tr)
let th1=document.createElement('th')
th1.textContent=' '
tr.appendChild(th1)

for(let i=0;i<hours.length;i++){
  let thEl=document.createElement('th')
  thEl.textContent=hours[i]
  tr.appendChild(thEl)}
}
Store.prototype.cookiesBranch = function(){
  
  for(let i=0; i<hours.length-1; i++)
  CulmTot[i]=this.numberOFcustumer[i]+CulmTot[i];


  



  let tr =document.createElement('tr')
table.appendChild(tr)
let th1=document.createElement('th')
th1.textContent=this.location;
tr.appendChild(th1)

for(let i=0;i<hours.length-1;i++){
  let thEl=document.createElement('th')
  thEl.textContent=this.numberOFcustumer[i]
  tr.appendChild(thEl)
}
let thA=document.createElement('th')
thA.textContent=this.total;
tr.appendChild(thA)
}

  timeheader();
  seatl.cookiesBranch();
  Tokyo.cookiesBranch();
  Dubai.cookiesBranch();
  Paris.cookiesBranch();
  lima.cookiesBranch();
  
  
  let tr =document.createElement('tr')
  table.appendChild(tr)
  let thS=document.createElement('th');
  
  thS.textContent="Totatls";
  tr.appendChild(thS);
  for(let i=0; i<hours.length-1; i++){
    
    let thS=document.createElement('th');
    thS.textContent=CulmTot[i];
    tr.appendChild(thS);
  }


// function cokkisInBranch(){
//   for (var i=0;i<numberOFcustumer.length;i++){
//     var trEl= document.createElement('tr');
//     var thLocation= document.createElement('th');
//     thLocation.textContent=locationDetailsArray[i].locationName;
//     trEl.appendChild(thLocation);
//     for (var j=0;j<hours.length;j++)
//     {
//       var tdEl= document.createElement('td');
//       tdEl.textContent=numberOFcustumer[i].hours[j];
//       trEl.appendChild(tdEl);
//     }
//   }
// }






// seatl.calculate();
// seatl.render();



// function randomValue(min, max) {
//   return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
// }

// let Tokyo = {
//   location: 'Tokyo',
//   mincus:3,
//   maxcus:24,
//   avg_cookies:1.2,
//   numberOFcustumer:[],
//   total:0,
//   calculate:function(){
//     for(let i=0;i<hours.length;i++){
//       this.numberOFcustumer.push(Math.ceil( randomValue(this.mincus,this.maxcus) * this.avg_cookies));
//       this.total+=this.numberOFcustumer[i];
//     }

//   },
//   render:function() {
//     let myshop=document.createElement('div');
//     let h1=document.createElement('h1');
//     let div= document.getElementById('cookies');
//     let ulEl = document.createElement('ul');
//     h1.textContent=this.location;
//     console.log(h1);
//     myshop.appendChild(h1);

//     myshop.appendChild(ulEl);
//     let liEl;
//     for(let i = 0 ; i <hours.length; i++)
//     {
//       liEl = document.createElement('li');
//       ulEl.appendChild(liEl);
//       liEl.textContent = [hours[i],' ',this.numberOFcustumer[i]];
//     }
//     div.appendChild(myshop);
//     liEl = document.createElement('li');
//     ulEl.appendChild(liEl);
//     liEl.textContent=`total is : ${this.total}`;
//   }
// };
// Tokyo.calculate();
// Tokyo.render();

// let Dubai = {
//     location: 'Dubai',
//     mincus:11,
//     maxcus:38,
//     avg_cookies:3.7,
//     numberOFcustumer:[],
//     total:0,
//     calculate:function(){
//       for(let i=0;i<hours.length;i++){
//         this.numberOFcustumer.push(Math.ceil( randomValue(this.mincus,this.maxcus) * this.avg_cookies));
//         this.total+=this.numberOFcustumer[i];
//       }
    
//     },
//     render:function() {
//       let myshop=document.createElement('div');
//       let h1=document.createElement('h1');
//       let div= document.getElementById('cookies');
//       let ulEl = document.createElement('ul');
//       h1.textContent=this.location;
//       console.log(h1);
//       myshop.appendChild(h1);
    
//       myshop.appendChild(ulEl);
//       let liEl;
//       for(let i = 0 ; i <hours.length; i++)
//       {
//         liEl = document.createElement('li');
//         ulEl.appendChild(liEl);
//         liEl.textContent = [hours[i],' ',this.numberOFcustumer[i]];
//       }
//       div.appendChild(myshop);
//       liEl = document.createElement('li');
//       ulEl.appendChild(liEl);
//       liEl.textContent=`total is : ${this.total}`;
//     }
//   };
//   Dubai.calculate();
//   Dubai.render();


//   let Paris = {
//     location: 'Paris',
//     mincus:20,
//     maxcus:38,
//     avg_cookies:2.3,
//     numberOFcustumer:[],
//     total:0,
//     calculate:function(){
//       for(let i=0;i<hours.length;i++){
//         this.numberOFcustumer.push(Math.ceil( randomValue(this.mincus,this.maxcus) * this.avg_cookies));
//         this.total+=this.numberOFcustumer[i];
//       }

//     },
//     render:function() {
//       let myshop=document.createElement('div');
//       let h1=document.createElement('h1');
//       let div= document.getElementById('cookies');
//       let ulEl = document.createElement('ul');
//       h1.textContent=this.location;
//       console.log(h1);
//       myshop.appendChild(h1);
    
//       myshop.appendChild(ulEl);
//       let liEl;
//       for(let i = 0 ; i <hours.length; i++)
//       {
//         liEl = document.createElement('li');
//         ulEl.appendChild(liEl);
//         liEl.textContent = [hours[i],' ',this.numberOFcustumer[i]];
//       }
//       div.appendChild(myshop);
//       liEl = document.createElement('li');
//       ulEl.appendChild(liEl);
//       liEl.textContent=`total is : ${this.total}`;
//     }
//   };
//   Paris.calculate();
//   Paris.render();


// let Lima = {
//     location: 'Lima',
//     mincus:2,
//     maxcus:16,
//     avg_cookies:4.6,
//     numberOFcustumer:[],
//     total:0,
//     calculate:function(){
//       for(let i=0;i<hours.length;i++){
//         this.numberOFcustumer.push(Math.ceil( randomValue(this.mincus,this.maxcus) * this.avg_cookies));
//         this.total+=this.numberOFcustumer[i];
//       }
     
//     },
//     render:function() {
//       let myshop=document.createElement('div');
//       let h1=document.createElement('h1');
//       let div= document.getElementById('cookies');
//       let ulEl = document.createElement('ul');
//       h1.textContent=this.location;
//       console.log(h1);
//       myshop.appendChild(h1);
  
//       myshop.appendChild(ulEl);
//       let liEl;
//       for(let i = 0 ; i <hours.length; i++)
//       {
//         liEl = document.createElement('li');
//         ulEl.appendChild(liEl);
//         liEl.textContent = [hours[i],' ',this.numberOFcustumer[i]];
//       }
//       div.appendChild(myshop);
//       liEl = document.createElement('li');
//       ulEl.appendChild(liEl);
//       liEl.textContent=`total is : ${this.total}`;
//     }
//   };
//   Lima.calculate();
//   Lima.render();