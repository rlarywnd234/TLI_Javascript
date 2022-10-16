// 형변환 
//String(),Number(), Boolean()
//사용법은 다른 언어와도 비슷하게 그냥 괄효 안에 넣기만 하면 된다.
// propmt로 입력 받은 값은 문자열로 분류된다. 그러므로 형변환할 필요가 있다.
const mathScore = prompt("Math score?");
const engScore = prompt("English score?");
const result =  ((Number(mathScore) + Number(engScore))/2);
console.log(result);

//Boolean()  : 숫자 0, 빈 문자열, null, undefined, NaN 전부 False값으로 변환된다
// 반대의 경우에는 True
console.log(
    Boolean(0), Boolean(""), Boolean(null), Boolean(undefined), Boolean(NaN)
)

// 연산자 축약형
// 다른 언어들과 마찬가지로 규칙이 동일하게 때문에 자세히 적진 않겠다.
// 우선순위도 동일, 증감식도 동일, 축약형도 동일
let num = 10;
num -=5;
// num = num - 5
num +=5
// num = num + 5

// 비교 연산자
// 다른 언어와 규칙 동일
a == True;
a != false;
a == "No, Nai, Nah";
a <= 5;
/***일치 연산자***/
// 자료형까지 비교해줌. < 매우 중요 
a = "1"
b = 1 
console.log(a==b)  // 결과값 : True
console.log(a===b) // 결과값 : False


// 논리 연산자 (C언어와 똑같다.)
// if 조건문에 활용가능, 항상 괄호로 구분 지을 것을 생각할 것.
|| // or
&&  // and
! // Noy