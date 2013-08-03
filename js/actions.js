// actions
$(document).ready(function(e){
	document.addEventListener("deviceready", onDeviceReady, false);
    
    function onDeviceReady() {
        alert('onDeviceRead');
        var newTask;
        $('#add').tap(function(){
            alert('Entra al add');
            if($('#todo').val()!=''){
                newTask = $('#todo').val();
                window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, onFileSystemSuccess, fail);
            }else{
                navigator.notification.alert('No agregaste ninguna tarea!', null, "Checklist","Ok");
                
            }
        });
        
        function onFileSystemSuccess(fileSystem) {
            fileSystem.root.getFile("incomplete.txt", {create: true, exclusive: false}, gotFileEntry, fail);
        }
        
        function gotFileEntry(fileEntry) {
            fileEntry.createWriter(gotFileWriter, fail);
        }
        
        //Append
        function gotFileWriter(writer) {
            writer.seek(writer.length);
            writer.write(newTask);
        }        
    }
    
    
});
/*
$(document).ready(function(e){
	document.addEventListener("deviceready", function(){
		if(!isLogin())
			window.location.href = '#login';
	   $('#regSend').tap(function(){
		  if($('#regNom').val()!='' && $('#regTel').val()!='' && $('#regMail').val()!='' && $('#regFoto').attr('rel')!=undefined){
			  var nom = $('#regNom').val();
			  var tel = $('#regTel').val();
			  var mail = $('#regMail').val();
			  var foto = $('#regFoto').attr('rel');
			  enviarDatos(nom, tel, mail, foto);
			  //navigator.notification.alert(nom +'\n'+ tel +'\n'+ mail, null, "Hotel","Aceptar");
		  }else{
			  navigator.notification.alert('Todos los campos son requeridos', null, "Hotel","Ok");
		  }
	   });
	   $('#regFoto').tap(function(){
		   tomarFoto();
	   });
	   //---------------Reservaciones---------------//
	   var nr1 = $('#nr1');
	   nr1.find('ul[data-role=listview] li').tap(function(){
		   if($(this).index()!=0){
				nr1.attr('th',$(this).index());
				$(this).css('background','#0ff000');
		   }
	   });
	   $('#sh').tap(function(){
		   if(nr1.attr('th')!=undefined && nr1.attr('th')!=''){
			   window.location.href = '#nr2';
		   }
	   });
	   $('#rh').tap(function(){
		   if(isConnected())
		   		subirReserva(0,nr1.attr('th'), $('#rHabitaciones').val(), $('#rDias').val(), $('#rPersonas').val());
			else
				guardarReserva(nr1.attr('th'), $('#rHabitaciones').val(), $('#rDias').val(), $('#rPersonas').val());
	   });
		$('a[href=#historial]').tap(function(event){
			leerHistorial();
		});
		
	}, false);
});
*/