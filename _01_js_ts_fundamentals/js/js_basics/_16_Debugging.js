


const a = await fetch('http://www.google.com')
const resp = fetch(a).then(()=> {
    console.log('Done')
})
