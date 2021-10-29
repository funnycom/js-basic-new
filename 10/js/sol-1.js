    window.onload = window.open("current.html", "", "width=300, height=50");

    // 아래 방법처럼 displayTime() 함수를 선언한 후 load 이벤트가 발생했을 때 함수를 연결할 수도 있음.
    // window.onload = displayTime();
    // function displayTime() {
    //   window.open("current.html", "", "width=300, height=50");
    // }