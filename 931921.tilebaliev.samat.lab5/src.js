function changeOpacityTo( className, opacityParam ) {
	for ( elem of document.getElementsByClassName( className ) ) {
		elem.style.opacity = opacityParam;
	}
}

function openWindow() {

	// change opacity
	changeOpacityTo( 'newsBlock', 0.2 );

	// edit content of container
	let container = document.createElement( 'div' );
	container.id ='popup';

	// setup our window
	let header = document.createElement( 'h1' );
	let firstP = document.createElement( 'p' );
	
	let mainString = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. A, alias';
	let additionalString = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam hic, ipsa, ullam, cupiditate eveniet at voluptate corrupti commodi nobis ratione voluptatem! Vel animi totam cupiditate doloribus ad ab exercitationem officia eveniet impedit? Deleniti quasi nisi consectetur perspiciatis quibusdam nostrum, enim perferendis nam, magni molestias recusandae id libero vitae, repudiandae praesentium.';
	
	let secondP = document.createElement( 'p' );
	secondP.textContent = additionalString;
	
	let headerText = document.activeElement.parentElement.getElementsByTagName( 'h2' )
		.item(0).textContent;
	
	header.textContent = headerText;
	firstP.textContent = headerText + ': ' + mainString;
	
	container.onclick = function() {
		// reback opacity
		changeOpacityTo( 'newsBlock', 1 );	
		document.body.removeChild(this);
	}

	// adding previous tags
	container.appendChild( header );
	container.appendChild( firstP );
	container.appendChild( secondP );

	document.body.appendChild( container );	
}
