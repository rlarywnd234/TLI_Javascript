//let(변동 가능성이 있는 값), const(절대 변하지 않을 변수)
// ; < 라인 끝날 때마다 사용
let grade = "F"; // 변경될 여지가 있는 변수는 let으로 선언 
const GRANDE_SIZE = 155; // 고정해야할 변수는 let으로 선언
const name = "KKJ"
// *** 내부에 변수 사용시 쌍따옴표 사용 금지***
const message1 = `my grade is ${grade}`; 
console.log(message1);

// * / % - + 동일하니 스킵
//자료형
const name2 = "Mike"; //문자열
const y = 30; //숫자형
const a = true; // Boolenan형

//null 과 undefined
let user = null; //공란으로 설정해두고 변수 선언
let user2 = undefined;



//alert, prompt, confirm

//alert() 사용자에게 알람창을 띄움 > 주로 다른 함수와 연계해서 사용한다
alert("Warnning : Blah Blah")

//prompt() 사용자에게 값을 입력받을 경우에 사용함
const User_Name = prompt("type your name.");
alert("wellcome " + User_Name);
//prompt( A , B ) 이렇게 입력시 A에는 안내 구문, B에는 입력란에 B값이 디폴트로 들어간다.
const User_Name2 = prompt("Type your name", "ex)KKJ") 
alert(`wellcome, ${User_Name2}`) 
// 예시 > 아이디 입력 : 예시) rlarywnd2314412... , 유저 이름 입력 : 예시 **** 

//confirm
const isAdult = confirm("are you adult?") // 알림창에 확인과 취소 버튼이 존재한다 
console.log(isAdult) // isAdult 값에 확인(True) 취소(false)값을 리턴해준다
//예시 > 결제확인 : 결제하시겠습니까?, 삭제확인 : 정말 삭제하시겠습니까?

// alert, confirm, prompt 
// 장점: 사용이 아주아주 쉬움
// 단점: 스크립트 일시 정지, 일일이 확인 버튼을 눌러야함, 디자인 변경 불가능