// 패턴을 통해 구조를 짠 것
var app = (function(){


// var 전역변수
    let init = function(){
        // let 지역변수
        login_form();

    }
    let login_form = function(){
        let wrapper = document.querySelector('#wrapper');
        wrapper.innerHTML = '<form action="/action_page.php">'
        +'  First name:<br>'
        +'  <input type="text" name="firstname" value="Mickey">'
        +'  <br>'
        +'  Last name:<br>'
        +'  <input type="text" name="lastname" value="Mouse">'
        +'  <br><br>'
        +'  <input type="button" value="로그인">'+' <input id="enroll" type="button" value="회원가입">'
        +'</form> ';


        let join_btn = document.querySelector('#enroll')

        join_btn.addEventListener('click', function(){
            enrollment();
        })

    }

    let enrollment = function(){
        let inner_enrollment = document.querySelector('#enrollment');
        inner_enrollment.innerHTML = '<form action="/action_page.php">'
        +'  ID:<br>'
        +'  <input type="text" name="id" value="회원가입아이디">'
        +'  <br>'
        +'  passwords:<br>'
        +'  <input type="text" name="passwords" value="비밀번호">'
        +'  <br><br>'
        +'  Name:<br>'
        +'  <input type="text" name="name" value="이름">'
        +'  <br><br>'
        +'  Address:<br>'
        +'  <input type="text" name="address" value="주소">'
        +'  <br><br>'
        +'  Phone numbers:<br>'
        +'  <input type="text" name="phone_numbers" value="핸드폰 번호">'
        +'  <br><br>'
        +'  <input type="button" value="button">'+'<input id="enroll2" type="button" value="되돌아가기">'
        +'</form> ';

        let btn_back = document.querySelector('#enroll2')

        btn_back.addEventListener('click',function(){
            wrapper();
        });
    }

    let join_form =function(){
        let wrapper = document.querySelector('#wrapper');
        wrapper.innerHTML =  '<form action="/action_page.php">'
        +'  ID:<br>'
        +'  <input type="text" name="id" value="회원가입아이디">'
        +'  <br>'
        +'  passwords:<br>'
        +'  <input type="text" name="passwords" value="비밀번호">'
        +'  <br><br>'
        +'  Name:<br>'
        +'  <input type="text" name="name" value="이름">'
        +'  <br><br>'
        +'  Address:<br>'
        +'  <input type="text" name="address" value="주소">'
        +'  <br><br>'
        +'  Phone numbers:<br>'
        +'  <input type="text" name="phone_numbers" value="핸드폰 번호">'
        +'  <br><br>'
        +'  <input type="submit" value="submit">'+'  <input id="enroll" type="submit" value="되돌아가기">'
        +'</form> '
    }

    

    return{init : init};
    //이 RETURN이 클로져이다. 펑션에는 input (parameter) / output (return value)
    //init : public mothod , login_form : private metohd가됌.


})();