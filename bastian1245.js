<script>
var win1;
function newWin() {
win1 = window.open("", "myWindow", "toolbar=0,width=300,height=100");
win1.document.open();
win1.document.writeln("<title>Пример окна</title><body bgcolor='#C0C0C0'>"+
"<form><input type='text' size=20 value='Текущее значение' name='aname'></form>");
win1.document.writeln("Нажмите кнопку в основном окне "+
 "чтобы сменить значение поля");
win1.focus();
}
function renWin() {
win1.document.forms[0].aname.value='Новое значение';
win1.focus();
}
</script>
<form>
 <input value="Открыть окно" onclick="newWin()" type="button">
 <input value="Сменить значение поля" onclick="renWin()" type="button">
</form>
