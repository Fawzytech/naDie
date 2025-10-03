


const conTain = document.querySelector("#mainContainer")
const lookUp = document.getElementById("search")
const divider = document.querySelector(".content")




async function countryInfos() {
    const response = await axios.get(`https://restcountries.com/v3.1/all?fields=name,flags,population,
region,currency`)
    const res = response.data;
    console.log(response.data);

    let countryElement="";

    for (let display of res) {
        const newDiv = document.createElement("div")
        const flags = document.createElement("img")
        const name = document.createElement("p")
        const population = document.createElement("p")
        const region = document.createElement("p")

        conTain.append(newDiv)
        conTain.append(divider)
        newDiv.append(divider)
        divider.append(flags)
        divider.append(name)
        divider.append(population)
        divider.append(region)


        newDiv.innerHTML = `
            <div>
            <img src="${display.flags.svg}" alt="${display.flags.alt}"/>
            <p>${display.name.common}<p/>
            <p>${display.population}<p/>
            <p>${display.region}<p/>
            </div> 
            `

        divider.style.display ="flex"
        divider.style.flexDirection ="wrap"

    }

}


countryInfos()