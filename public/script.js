const joinNow = document.querySelector(`#joinNow`);
joinNow.addEventListener(`click`, function () {
	alert(`You click " Join Now " !`)
});


const submit = document.querySelector(`#submit`);
submit.addEventListener(`click`, function () {
	// 	const email = document.querySelector(`#email`);
	// 	const nama = document.querySelector(`#nama`);
	// 	const pesan = document.querySelector(`#pesan`);

	// 	alert(`Email : ${email.value}
	// Nama : ${nama.value}
	// Pesan : ${pesan.value}

	// Pesan anda sukses terkirim! 
	// Terimakasih telah berkunjung di Portfolio Portfolio-an Dika.`);

	let prom = Number(prompt(`Beri Nilai (1 - 10) Untuk Website Ini : `));
	console.log(prom);
	if ((prom >= 0) && (prom <= 4)) {
		alert(`Hmm.. Ga apa apa, Dika akan bekerja lebih baik lagi. Terimakasih ya !`)
	}
	else if ((prom >= 5) && (prom <= 7)) {
		alert(`Baik, Terimakasih atas penilaiannya !`)
	}
	else if ((prom >= 8) && (prom <= 10)) {
		alert(`WOWW ! Terimakasih atas penilaiannya !`)
	}
	else if ((prom <= 0) || (prom >= 11)) {
		alert(`1 sampai 10 please bro sis !`)
	}

});

// for (let a = 0; a < array.length; a++) {
// 	const element = array[a];

// }