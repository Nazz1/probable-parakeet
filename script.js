function addElement() {
	var ulElement = document.getElementById('markerList'),  
		li = document.createElement("li"),    
		textValue = document.getElementById('text').value, 
		colorValue = document.getElementById('color').value, 
		liTypeValue = document.getElementById('marker').value; 
		
	li.appendChild(document.createTextNode(textValue)); 
	li.style.color = colorValue; 
	li.style['list-style-type'] = liTypeValue; 
	li.onclick = selectElement; 
	
	ulElement.appendChild(li); 
}

function removeElement() {
	if (document.getElementsByClassName('selected').length > 0) {  
		document.getElementsByClassName('selected')[0].remove();  
	} else {
		alert('You should select item');  
	}
}

function changeElement() {
	if (document.getElementsByClassName('selected').length > 0) { 
		var selectedElement = document.getElementsByClassName('selected')[0],
			textValue = document.getElementById('text').value,  
			colorValue = document.getElementById('color').value, 
			liTypeValue = document.getElementById('marker').value; 
		
		selectedElement.style.color = colorValue;	
		selectedElement.style['list-style-type'] = liTypeValue; 
		selectedElement.innerText = textValue;  
		
	} else {
		alert('You should select item'); 
	}
}

function selectElement(clickEvent) {
	var textInput = document.getElementById('text'), 
		colorInput = document.getElementById('color'), 
	
	textInput.value = clickEvent.target.innerText;  
	colorInput.value = clickEvent.target.style.color; 
	
	if (clickEvent.target.style['list-style-type']) {
		liTypeSelect.value = clickEvent.target.style['list-style-type'];  
	} else {
		liTypeSelect.value = 'disk'		
	}
	
	if (document.getElementsByClassName('selected').length > 0) {			
		document.getElementsByClassName('selected')[0].classList.toggle('selected');  
	}
	
	clickEvent.target.classList.toggle('selected'); 
}