class Fruit {
   // 생성자: new키워드로 객체를 생성할때 호출되는 함수
   constructor(name, emoji){
    this.name = name;
    this.emoji = emoji;
   }

   
display = () => {
    console.log(`${this.name}: ${this.emoji}`);
   };




}

// apple은 fruit클래스의 인스턴스이다.
const apple = new Fruit('apple','❤️');
const orange = new Fruit('orange','💕');
    
    
console.log(apple);
console.log(orange);
console.log(apple.name);
console.log(apple.emoji);
apple.display();