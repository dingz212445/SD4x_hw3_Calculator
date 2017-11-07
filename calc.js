var lastval;
var lastOp;
var justOp = false;

$('button').click(function() {
	if(justOp){
		if ($(this).val()){
			$('#display').val('');
		}
		
	}
	$('#display').val($('#display').val() + $(this).val());
	justOp = false;
});

$('#clearButton').click(function(){
	lastval = 0;
	justOp = false;
	lastOp = null;
	$('#display').val('');
});

$('#addButton, #subtractButton, #multiplyButton, #divideButton').click(function(){
	justOp = true;
	if (lastOp != 'equalsButton'){
		$('#equalsButton').click();
	}
	justOp = true;
	lastval = $('#display').val();
	lastOp = this.id;
	$('#output').html(lastval);
});


$('#equalsButton').click(function(){
	if(justOp) {
		return;
	}
	if(lastOp == 'addButton'){
		$('#display').val(parseInt($('#display').val()) + parseInt(lastval));
	} else if(lastOp == 'subtractButton'){
		$('#display').val(parseInt(lastval) - parseInt($('#display').val()));
	} else if(lastOp == 'multiplyButton'){
		$('#display').val(parseInt(lastval) * parseInt($('#display').val()));
	} else if(lastOp == 'divideButton'){
		$('#display').val(parseInt(lastval) / parseInt($('#display').val()));
	} 
	
	lastval = $('#display').val();
	$('#output').html(lastval);
	justOp = true;
	lastOp = this.id;
});



 