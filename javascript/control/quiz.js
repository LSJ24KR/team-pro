//주어진 숫자 만큼 0부터 순회하는 함수
// 훈회하면서 주어진 특정한 일을 수행해야 함
//5, 순회하는 숫자를 다 출력하고 싶음
//5, 순회하는 숫자의 두배값을 다 출력하고 싶음
// function iterate(max, action)
function add(num1) {        
            console.log(num1);          
        
      
}
function add2(num2) {        
    console.log(num2*2);          


}
function iterate(max, action){
    for(let t = 1; t<=max; t++){
        let result1 = action(t);
    } 
}

iterate(3, add);
iterate(3, add2);