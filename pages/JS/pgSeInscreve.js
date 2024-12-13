function validar() {
	var user = document.getElementById("user");
	var email = document.getElementById("email");
	var pass1 = document.getElementById("pass1");
	var pass2 = document.getElementById("pass2");
	var cep = document.getElementById("cep");
	var selecione = false;
	var cidade = document.getElementById("cidade").selectedIndex;
	var elementoCHECK = document.getElementById("limites");

	if(user.value.length == 0)
	{
      alert("O usuário deve inserir");
    	user.focus();
    	return false;
	}
	if(email.value.length == 0)
	{
		alert("Por favor, digite seu e-mail");
		email.focus();
		return false;
	}
	if(pass1.value.length < 6)
	{
		alert("Você deve inserir uma senha com mais de 6 caracteres");
		pass1.focus();
		return false;
	}
	else if(pass1.value != pass2.value)
	{
		alert("As senhas não coincidem");
		pass2.focus();
		return false;
	}
	if(cep.value.length == 0)
	{
		alert("Digite seu CEP");
		cep.focus();
		return false;
	}
	else if(cep.value.length != 0 && isNaN(cep.value))
	{
		alert("Por favor insira apenas números no CEP");
		cep.focus();
		return false;
	}
	
	if(cidade == 0 || cidade == null)
	{
		alert("Selecione uma cidade");
		return false;
	}
	if(!elementoCHECK.checked)
	{
		alert("Você deve aceitar os termos e condições");
		return false;
	}
  else
  {
    alert("Datos de formulario enviados exitosamente.");
    document.getElementById("myForm").reset();
	  return false;
	}
}