//--------------------------------------메소드에서 화살표함수 사용시----------------------------------------------------------//
// 메소드로 화살표 함수가 사용된 경우에는 object가 아닌
// 전역객체(window)를 가리키게 된다.
const object = {
  name: "운기",
  화살표함수: () => console.log(this), //여기서 this는 전역객체이므로 window가 나옴!
};

object.화살표함수();


//--------------------------------------메소드에서 일반함수 사용시----------------------------------------------------------//
// 일반 함수사용시 this는 자신을 호출한 객체인 object2가 나옴!
const object2 = {
  name: "운기",
  화살표함수2: function () {
    console.log(this); //여기서 this는 object2가 나옴!
  },
};

object2.화살표함수2();

//--------------------------------------함수 호출시 함수 내부의 this(일반함수)----------------------------------------------------------//

// 1. 전역공간에서 this => 전역 객체
// 2. 메소드 호출 시 메소드 내부의 this : 자신을 호출한 객체
// 3. 함수 호출시 함수 내부의 this: 지정되지 않는다!

// 함수내부에 일반 함수를 사용하면 this가 지정되지 않아서 전역객체가 나오게된다.
const test = {
  name: "석원쌤",
  함수: function () {
    const 내부함수 = function () {
      console.log(this); //여기 this는 전역객체를 나타냄! 확인해보면 window가 찍힘
    };
    내부함수();
  },
};

test.함수();
// 1. test.함수() 메서드를 실행하면 내부 함수인 내부함수()가 실행된다!
// 2. 함수가 호출 됐기때문에 내부함수()안에서 this는 지정되지 않으므로 전역객체를 바라본다.



//--------------------------------------함수 호출시 함수 내부의 this(화살표함수)----------------------------------------------------------//
//내부함수를 일반함수대신 arrow함수를 쓰게되면?!

const test1 = {
  name: "석원쌤",
  함수: function () {
    const 내부함수 = () => {
      console.log(this); //여기 this는 test1을 바라봄 왜냐 ? 화살표함수에는 this가 없기때문에!
    };
    내부함수();
  },
};

test1.함수();
