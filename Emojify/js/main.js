fetch(`https://emojihub.herokuapp.com/api/all`)

    .then(res => res.json()) // parse response as JSON
    .then(data => {
            
    document.querySelector('button').addEventListener('click', getText)

    function getText () {

            const input = document.querySelector('#input').value
            const split = input.split(' ')
            let arr = []
            const result = document.querySelector('.result')

            for (let i = 0; i <split.length; i++) {
                arr.push(data[Math.ceil(Math.random()*1329)].htmlCode[0])
            }

            result.innerHTML = split.map((x,y,z) => x.concat(` ${arr[y]} `)).join('')
            
        }

    })

    .catch(err => {
        console.log(`error ${err}`)
    });
