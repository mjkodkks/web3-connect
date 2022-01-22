console.log("hello world");

const connect = document.getElementById("connect")
const display = document.getElementById("display")

const web3 = new Web3(Web3.givenProvider)

connect.addEventListener("click", async ()=> {
    console.log('on click');
    if(await ethEnabled()) {
        console.log(true);
        displayInfo()
        getNetwork()
    }
    
})

const ethEnabled = async () => {
    if (window.ethereum) {
      await window.ethereum.send('eth_requestAccounts');
      window.web3 = new Web3(window.ethereum);
      return true;
    }
    return false;
}

async function displayInfo() {
    if(window.ethereum) {
        const test = await window.ethereum.request({ method: 'eth_requestAccounts' });
        console.dir(display);
        display.innerHTML += test
    }
}

async function getNetwork(){
    const chainID = await web3.eth.net.getId();
    display.innerHTML += `chainID: ${chainID}`
}
