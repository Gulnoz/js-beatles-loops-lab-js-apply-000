// add solution here
function theBeatlesPlay(musicians, instruments){
  let newArr=[];
  for(let i=0; i<musicians.length;i++){
    let musician=musicians[i];
    let instrument=instruments[i];
    newArr.push(musician+" plays "+instrument)
  }
  return newArr;
}