import wixLocation from 'wix-location';

$w.onReady(function () {
	$w("#txtTantrica").onClick((handler) => {
		wixLocation.to("/contato")
	})
})