//필터 리턴 값이 배열이다 
let items = [
    { id: 1, name: "벤치프레스", count: 0 },
    { id: 2, name: "랫풀다운", count: 0 },
    { id: 3, name: "스쿼트", count: 0 },
  ];

//운동제목 추가하기- ES6 
const handleAdd = () => {
const workouts = [...items,{id: items.length+1,name: undefined count:0}]
console.log(worksout);
console.log(items);
}

  const handledelete = (id) => {
const workouts =items.filter(item=>item.id !=id);
console.log(typeof workouts);
items = [...workouts] //얕은 복사 
};

  //handledelete(2)
handleAdd()
  console.log(items);