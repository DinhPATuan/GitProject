
async function find(){
    let key = document.getElementById("keyWord").value;
    let url = 'http://api.giphy.com/v1/gifs/search?q='+ key + '&api_key=QluAH0IzeixHhopwSDdmzyANXMD7FRn7';
    console.log(url);
    console.log(key);
    try{
        const res = await axios.get(url);  
        let data = res.data.data;
        console.log("data", data)
        const imageHtml = data.map(item => {
           const img = item.images['480w_still'].url
           return `<img src='${img}' />`
        }).join('')
        document.getElementById("showImg").innerHTML += imageHtml
    } catch (e) {
        console.log(e);
    }
}
function delete1(){
    document.getElementById('showImg').innerHTML = " ";
}