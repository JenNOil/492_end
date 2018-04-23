class Preprocess{
    constructor(date,type,location,user) { 

        this.count        = 0
        this.user         = user
        this.type         = type
        this.location     = location
        this.date         = date
        this.user         = user

        $.ajaxSetup({
            async: false
        })

        this.ref          = firebase.database()

        this.value
    }

    check(){
        this.ref.ref(this.user + '/' + this.location + '/'+ this.type + '/'+ this.date).once("value")
                .then((snapshot) => {
                    if(this.user == 'Anonymous'){
                        if (!snapshot.exists()){

                            this.setdata()
                            this.getdata()

                        }
                        else{

                            this.getdata()

                        }
                    }
                    else{
                            this.getdata()
                    }   
                })

        

    }
    getvalue(){
        return this.value
    }


    setdata(){
        
        let serverURL    = "https://data.learninginventions.org/channels/"
        let time_energy = []

        for(let id = 1; id <= 34; id++){
            let url = serverURL + (101 + id) + "/field/1.json?&start=" + this.date + "%2000:00:00&end=" + this.date + "%2023:59:59"

            let json = ( () => { 
                let result
                $.getJSON(url, {}, (json) => {
                    result = json
                })
                return result
            })()

            time_energy[id-1] = []
            let num = 0

            for (let i = 0; i < json.feeds.length; i += 15) {

                let tmp_item    = json.feeds[i]
                let gettime     = tmp_item.created_at.substring(11, 16)
                let getenergy   = tmp_item.field1
                time_energy[id-1][num]     = gettime + '/' + getenergy

                
                num++
            }  
        }
        this.writeData(time_energy)
    }

    getdata(snapshot){
        let url = this.user + '/' + this.location + '/' + this.type + '/' + this.date + '/Value'
        this.value = []
        this.ref.ref(url).on('value',(snap) =>{
                       let data = snap.exportVal()
                       for(let i=0; data[i] != null || i == 19 ;i++){
                        if(i == 19 && this.user == 'Anonymous'){continue}
                            this.value[i]= data[i]
                        }
                    })

                    
    }


    csvsetdata(data){
        let     time_value  = []
        let     hour        = []
        let     nf          = new Intl.NumberFormat(["en-US"], {    
                                        minimumIntegerDigits : 2  
                                        })
        let     id          = 0
        let     tmp         = 0
        for(let row = 1; row < data.length; row++){
            if(id != data[row][3]){
                id = data[row][3]
                time_value[id-1]  = []
                tmp         = 0
            }
            if(data[row][4] != ""){
                let sp = data[row][4].split(':')
                hour[0] = nf.format(sp[0])
                hour[1] = nf.format(sp[1])
                let tmp_time = hour.join(":")
                 time_value[id-1][tmp] =  tmp_time + '/' + data[row][5]
            }
            tmp++
        }
        this.writeData(time_value)
    }

    
    writeData(value){
        let url = this.user + '/' + this.location + '/'+ this.type + '/'+ this.date
        this.ref.ref(url).set({
              Value : value
          })
    }
}


Preprocess.prototype.checklocation = (data) =>{

    let faculty = [' ', 'Humanities', 'Education', 'Fine Art', 'Social-Sci',
                               'Science', 'Engineering', 'Medicine', 'Agriculture', 'Dentistry',
                               'Pharmacy', 'AMS', 'Nursing', 'Agro-Industry', 'Veterinary',
                               'BA', 'Economics', 'Architecture', 'Mass Com', 'Pol-Sci',
                               'Law', 'CAMT']
    let floor = [' ', '(1st)' , '(2nd)', '(3rd)', '(4th)',
                             '(5th)', '(6th)' , '(7th)', '(8th)', '(9th)',
                             '(10th)']

    let fac_id = parseInt(data.slice(1, 3))
    let build_id = data.slice(3, 5)
    let floor_id = data.slice(5)

    if(build_id === '00' && floor_id === '00'){
        return faculty[fac_id]

    }
    else if(floor_id === '00'){
        return '(' + parseInt(build_id) + ') B '+ faculty[fac_id]
    }
    else{
        return floor[parseInt(floor_id)] +' F (' + parseInt(build_id) + ') B '+ faculty[fac_id]
    }

}


