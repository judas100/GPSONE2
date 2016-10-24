

var DialogGPS = function(message,description,callback,title,buttons){

	var _title = (title || "Usar local?");
	var _message = (message || "Este app deseja alterar as configuracoes do seu dispotivo:");
	var _description = (description || "Use Wi-Fi e redes celulares para localizacao");
	var _buttons = (buttons || ["Não","Sim"]);

	if(Object.prototype.toString.call(_buttons) === "[object Array]") {

		cordova.exec(callback,null,'DialogGPS','DISPLAY',[_title,_message,_description,_buttons]);
			
	}
};
		
DialogGPS.gpsActive = function(successCallback,failCallback){
}
		


module.exports = DialogGPS;
