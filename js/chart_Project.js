let   	data     	= JSON.parse(localStorage.getItem('data'))
console.log(data)
let   	date     	= JSON.parse(localStorage.getItem('date'))

let     type        = JSON.parse(localStorage.getItem('type'))


let time_label = [  '12 AM','1 AM','2 AM','3 AM','4 AM','5 AM',
                    '6 AM','7 AM','8 AM','9 AM','10 AM','11 AM',
                    '12 PM','1 PM','2 PM','3 PM','4 PM','5 PM',
                    '6 PM','7 PM','8 PM','9 PM','10 PM','11 PM']

let total_value = []
let time_value = []
let sum, timesum
let label = []


for(let i = 1; data[i] != null || data[i+1] != null ; i++){
    label[i-1] = i
    if(i === 19 && type === 'Electricity'){
        continue
    }

	sum = 0
    timesum = 0
    time_value[i-1] = []
	if(i !== 20){
		for(let j = 1; data[i][j] != null; j++ ){
			let tmp1 = data[i][j-1].split('/')
			let tmp2 = data[i][j].split('/')
			sum = sum + (tmp2[1] - tmp1[1])
			let time_group1 = tmp1[0].split(':')
            let time_group2 = tmp2[0].split(':')
            if(time_group1[0] === time_group2[0]){
                timesum = timesum + (tmp2[1] - tmp1[1])
            }
            else{
                time_value[i-1][parseInt(time_group1[0])] = timesum
                timesum = 0
            }
            if (data[i][j+1] == null){
                time_value[i-1][parseInt(time_group1[0])] = timesum
            }

		}
	}
	total_value[i-1] = sum
}

if(type === 'Electricity'){
    let ctx1 = document.getElementById("myChart1")
    let myChart = new Chart(ctx1, {
                type: 'bar',
                data: {
                    labels: label,
                    datasets: [
                        {
                            label: 'Usage',
                            data: total_value
                        }

                    ]
                } ,
        options: {
        	responsive: false
            
        }
    })


    let room = []
        for (let i = 0; i < 22; i++) {
            room[i] = []
        }
        console.log(time_value)
        for (let j = 0;j < time_value[0].length; j++) {
            room[0][j]  = time_value[30][j]+time_value[29][j]+time_value[27][j]    //401  
            room[1][j]  = time_value[0][j]+time_value[2][j]+time_value[4][j]       //402  
            room[2][j]  = time_value[3][j]                                         //403
            room[3][j]  = time_value[1][j]                                         //404
            room[4][j]  = time_value[5][j]                                         //405
            room[5][j]  = time_value[6][j]+time_value[8][j]                        //406
            room[6][j]  = time_value[10][j]                                        //407
            room[7][j]  = time_value[7][j]                                         //409
            room[8][j]  = time_value[9][j]                                         //410
            room[9][j]  = time_value[12][j]+time_value[14][j]                      //411LD
            room[10][j] = time_value[11][j]+time_value[16][j]                      //411
            room[11][j] = time_value[17][j]/*+time_value[19][j]*/                  //412(4th)
            room[12][j] = time_value[15][j]                                        //412(1)
            room[13][j] = time_value[13][j]                                        //412(2)
            room[14][j] = time_value[13][j]                                        //412(N)
            room[15][j] = time_value[20][j]+time_value[22][j]                      //413
            room[16][j] = time_value[20][j]+time_value[23][j]                      //413(GRA)
            room[17][j] = time_value[25][j]                                        //414
            room[18][j] = time_value[24][j]+time_value[28][j]                      //415(LIL)
            room[19][j] = time_value[21][j]+time_value[26][j]                      //415(3rd)
            room[20][j] = time_value[31][j]                                        //SIPA
            room[21][j] = time_value[32][j]                                        //422
        }

    let ctx2 = document.getElementById("myChart2")
    let chartroom = new Chart(ctx2, {
        type: 'line',
        data: {
            datasets: [
                {
                    label: '401',
                    data: room[0]
                },
                {
                    label: '402',
                    data: room[1]
                },
                {
                    label: '403',
                    data: room[2]
                },
                {
                    label: '404',
                    data: room[3]
                },
                {
                    label: '405',
                    data: room[4]
                },
                {
                    label: 406,
                    data: room[5]
                },
                {
                    label: 407,
                    data: room[6]
                },
                {
                    label: 409,
                    data: room[7]
                },
                {
                    label: 410,
                    data: room[8]
                },
                {
                    label: '411LD',
                    data: room[9]
                },
                {
                    label: 411,
                    data: room[10]
                },
                {
                    label: '412(4th)',
                    data: room[11]
                },
                {
                    label: '412(1)',
                    data: room[12]
                },
                {
                    label: '412(2)',
                    data: room[13]
                },
                {
                    label: '412(N)',
                    data: room[14]
                },
                {
                    label: 413,
                    data: room[15]
                },
                {
                    label: '413(GRA)',
                    data: room[16]
                },
                {
                    label: 414,
                    data: room[17]
                },
                {
                    label: '415(LIL)',
                    data: room[18]
                },
                {
                    label: '415(3rd)',
                    data: room[19]
                },
                {
                    label: 'SIPA',
                    data: room[20]
                },
                {
                    label: '422',
                    data: room[21]
                }
                    
                
            ],
            labels: time_label
        },
                options: {
                    responsive: false,
                    scales: {
                        xAxes: [{
                            display: true,
                            scaleLabel: {
                                display: true,
                                labelString: 'Time'
                            }
                        }],
                        yAxes: [{
                            display: true,
                            scaleLabel: {
                                display: true,
                                labelString: 'kW'
                            }
                        }]
                    }
                }
    })



}

