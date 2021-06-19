const klokKleur = ['white','yellow','red','blue']

const getalNamen = ["twaalf","een","twee","drie","vier","vijf","zes","zeven","acht","negen","tien","elf",
					"twaalf","der-<br>tien","veer-<br>tien","kwart","zes-<br>tien","zeven-<br>tien","acht-<br>tien","negen-<br>tien"]

const pad6 = (num) => { return ('00000' + num).substr(-6); }

const refresh = () => {

	const now = new Date();
	console.log(now)

	const minuutNum = now.getMinutes()
	const uurNum = now.getHours()

	const uren = pad6(uurNum.toString(2)).split("").map(x => 2 * x)
	const minuten = pad6(minuutNum.toString(2)).split("").map(x => parseInt(x))
	const kleurNrs = uren.map(function(u, i) { return u + minuten[i]})

	kleurNrs.forEach(function(kleurNr, i) {
		$('#'+i).css('background-color', klokKleur[kleurNr]);
	})

 	const minuutNaam =  (minuutNum === 0) ? "" :
						(minuutNum <= 19) ? getalNamen[minuutNum] + "<br>over<br>" :
						(minuutNum <= 29) ? getalNamen[30 - minuutNum] + "<br>voor<br>half<br>" :
						(minuutNum === 30) ? "half<br>" :
						(minuutNum <= 44) ? getalNamen[minuutNum - 30] + "<br>over<br>half<br>" :
						getalNamen[60 - minuutNum] + "<br>voor<br>"

	const uurNaam =     (minuutNum === 0) ? getalNamen[uurNum % 12] + "<br>uur" :
						(minuutNum <= 19) ? getalNamen[uurNum % 12] : getalNamen[(uurNum % 12 + 1) ]
	$('.tijdtekst').html("het<br>is<br>"+minuutNaam+uurNaam);
	console.log("het is "+(minuutNaam+uurNaam).replaceAll("<br>", " "))

	setTimeout(refresh, 1000*(60 - now.getSeconds()) - now.getMilliseconds());
}

refresh()