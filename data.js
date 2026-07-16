let naonaoData={
 projects:[],
 customers:[],
 finance:{
  income:0,
  pending:0
 }
};

function saveData(){
 localStorage.setItem("naonaoData",JSON.stringify(naonaoData));
}

function loadData(){
 let d=localStorage.getItem("naonaoData");
 if(d){
  naonaoData=JSON.parse(d);
 }
}

loadData();
