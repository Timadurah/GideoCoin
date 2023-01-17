let ajaxUrl = "https://min-api.cryptocompare.com/data/histoday?fsym=BTC&tsym=USD&limit=30";
//Bye cryptocompare welcome blockchaininfo
//https://api.blockchain.info/charts/market-price?format=json
let dataSet = [];

function ajax_request(url) {
	let xhttp;
	xhttp= new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			handle_chart(this);
		}
	}
	xhttp.open("GET", url, true);
	xhttp.send();
}

function handle_chart(data) {
	let parsed_data = JSON.parse(data.responseText);
	parsed_data = parsed_data.Data;
	
	$.each(parsed_data, function(index, value) {
			dataSet.push([value.time*1000, value.high]);
	});
	
	let options = {
		chart: {
			type: 'area',
			height: 350,
		},
		title: {
			text: 'Bitcoin price / last 30 days',
			align: 'left',
			margin: 10,
			offsetX: 0,
			offsetY: 0,
			floating: false,
			style: {
				fontSize:  '24px',
				color:  '#213043'
			},
		},
		toolbar: {
			show:false,
			 tools: {
        download: false,
        selection: false,
        zoom: false,
        zoomin: false,
        zoomout: false,
        pan: false,
        reset: false
      },
		},
		dataLabels: {
			enabled: false
		},
		tooltip: {
			x: {
      	format: "dd MMM yyyy"
      },
			fixed: {
				enabled: false,
				position: 'topRight'
			}
		},
		fill: {
			opacity: 1,
			type: 'gradient'
		},
		colors: ['#F8CCCD'],
		series: [{
				name: 'BTC (USD)',
				data: dataSet
			},
		],
		xaxis: {
			type: "datetime",
			axisBorder: {
				show: false
			},
			axisTicks: {
				show: false
			}
		}
	};
	let chart = new ApexCharts(document.querySelector("#timeline-chart"), options);
	chart.render();
}

$(window).on('load', function() {
	setTimeout(function() {
		$('.loader').fadeOut();
		$('#timeline-chart').addClass('loaded');
	}, 1200);	
});

ajax_request(ajaxUrl);