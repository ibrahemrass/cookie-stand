'use strict'; 



let hours=['6am','7am','8am','9am','10am','11am','12am','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];
function randomValue(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min); 
}

let seatl = {
  location: 'seatl',
  mincus:23,
  maxcus:65,
  avg_cookies:6.3,
  numberOFcustumer:[],
  total:0,
  calculate:function(){
    for(let i=0;i<hours.length;i++){
      this.numberOFcustumer.push(Math.ceil( randomValue(this.mincus,this.maxcus) * this.avg_cookies));
      this.total+=this.numberOFcustumer[i];
    }
   
  },
  render:function() {
    let myshop=document.createElement('div');
    let h1=document.createElement('h1');
    let div= document.getElementById('cookies');
    let ulEl = document.createElement('ul');
    h1.textContent=this.location;
    console.log(h1);
    myshop.appendChild(h1);
    
    myshop.appendChild(ulEl);
    let liEl;
    for(let i = 0 ; i <hours.length; i++)
    {
      liEl = document.createElement('li');
      ulEl.appendChild(liEl);
      liEl.textContent = [hours[i],' ',this.numberOFcustumer[i]];
    }
    div.appendChild(myshop);
    liEl = document.createElement('li');
    ulEl.appendChild(liEl);
    liEl.textContent=`total is : ${this.total}`;
  }
};
seatl.calculate();
seatl.render();



function randomValue(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}

let Tokyo = {
  location: 'Tokyo',
  mincus:3,
  maxcus:24,
  avg_cookies:1.2,
  numberOFcustumer:[],
  total:0,
  calculate:function(){
    for(let i=0;i<hours.length;i++){
      this.numberOFcustumer.push(Math.ceil( randomValue(this.mincus,this.maxcus) * this.avg_cookies));
      this.total+=this.numberOFcustumer[i];
    }

  },
  render:function() {
    let myshop=document.createElement('div');
    let h1=document.createElement('h1');
    let div= document.getElementById('cookies');
    let ulEl = document.createElement('ul');
    h1.textContent=this.location;
    console.log(h1);
    myshop.appendChild(h1);

    myshop.appendChild(ulEl);
    let liEl;
    for(let i = 0 ; i <hours.length; i++)
    {
      liEl = document.createElement('li');
      ulEl.appendChild(liEl);
      liEl.textContent = [hours[i],' ',this.numberOFcustumer[i]];
    }
    div.appendChild(myshop);
    liEl = document.createElement('li');
    ulEl.appendChild(liEl);
    liEl.textContent=`total is : ${this.total}`;
  }
};
Tokyo.calculate();
Tokyo.render();

let Dubai = {
    location: 'Dubai',
    mincus:11,
    maxcus:38,
    avg_cookies:3.7,
    numberOFcustumer:[],
    total:0,
    calculate:function(){
      for(let i=0;i<hours.length;i++){
        this.numberOFcustumer.push(Math.ceil( randomValue(this.mincus,this.maxcus) * this.avg_cookies));
        this.total+=this.numberOFcustumer[i];
      }
    
    },
    render:function() {
      let myshop=document.createElement('div');
      let h1=document.createElement('h1');
      let div= document.getElementById('cookies');
      let ulEl = document.createElement('ul');
      h1.textContent=this.location;
      console.log(h1);
      myshop.appendChild(h1);
    
      myshop.appendChild(ulEl);
      let liEl;
      for(let i = 0 ; i <hours.length; i++)
      {
        liEl = document.createElement('li');
        ulEl.appendChild(liEl);
        liEl.textContent = [hours[i],' ',this.numberOFcustumer[i]];
      }
      div.appendChild(myshop);
      liEl = document.createElement('li');
      ulEl.appendChild(liEl);
      liEl.textContent=`total is : ${this.total}`;
    }
  };
  Dubai.calculate();
  Dubai.render();


  let Paris = {
    location: 'Paris',
    mincus:20,
    maxcus:38,
    avg_cookies:2.3,
    numberOFcustumer:[],
    total:0,
    calculate:function(){
      for(let i=0;i<hours.length;i++){
        this.numberOFcustumer.push(Math.ceil( randomValue(this.mincus,this.maxcus) * this.avg_cookies));
        this.total+=this.numberOFcustumer[i];
      }

    },
    render:function() {
      let myshop=document.createElement('div');
      let h1=document.createElement('h1');
      let div= document.getElementById('cookies');
      let ulEl = document.createElement('ul');
      h1.textContent=this.location;
      console.log(h1);
      myshop.appendChild(h1);
    
      myshop.appendChild(ulEl);
      let liEl;
      for(let i = 0 ; i <hours.length; i++)
      {
        liEl = document.createElement('li');
        ulEl.appendChild(liEl);
        liEl.textContent = [hours[i],' ',this.numberOFcustumer[i]];
      }
      div.appendChild(myshop);
      liEl = document.createElement('li');
      ulEl.appendChild(liEl);
      liEl.textContent=`total is : ${this.total}`;
    }
  };
  Paris.calculate();
  Paris.render();


let Lima = {
    location: 'Lima',
    mincus:2,
    maxcus:16,
    avg_cookies:4.6,
    numberOFcustumer:[],
    total:0,
    calculate:function(){
      for(let i=0;i<hours.length;i++){
        this.numberOFcustumer.push(Math.ceil( randomValue(this.mincus,this.maxcus) * this.avg_cookies));
        this.total+=this.numberOFcustumer[i];
      }
     
    },
    render:function() {
      let myshop=document.createElement('div');
      let h1=document.createElement('h1');
      let div= document.getElementById('cookies');
      let ulEl = document.createElement('ul');
      h1.textContent=this.location;
      console.log(h1);
      myshop.appendChild(h1);
  
      myshop.appendChild(ulEl);
      let liEl;
      for(let i = 0 ; i <hours.length; i++)
      {
        liEl = document.createElement('li');
        ulEl.appendChild(liEl);
        liEl.textContent = [hours[i],' ',this.numberOFcustumer[i]];
      }
      div.appendChild(myshop);
      liEl = document.createElement('li');
      ulEl.appendChild(liEl);
      liEl.textContent=`total is : ${this.total}`;
    }
  };
  Lima.calculate();
  Lima.render();