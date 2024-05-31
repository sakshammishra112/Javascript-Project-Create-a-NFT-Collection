
// array to store our NFT
const NFTs = [];

// function to create NFTs and push it into our array
function mintNFT (_name, _color, _grade, _style) {
    const NFT = {
        "Name" : _name,
        "Color" : _color,
        "Grade" : _grade,
        "Style" : _style
    }
    NFTs.push(NFT);
}

// To display the NFTs and it's properties
function listNFTs () {
    for( let i=0; i<NFTs.length; i++ ){

        console.log("NFT Number : " + (i+1)  );
        console.log("Name  : " + NFTs[i].Name);
        console.log("Color : " + NFTs[i].Color);
        console.log("Grade : " + NFTs[i].Grade);
        console.log("Style : " + NFTs[i].Style);
        console.log("\n");
    }
}

// To get the total number of NFTs
function getTotalSupply() {
    return NFTs.length;
}

// Function call to create NFT
mintNFT("Harvy", "Blue", "A", "Casual");
mintNFT("Mike", "Red", "B", "Traditional");
mintNFT("Jessica", "Violet", "A", "Traditional");
mintNFT("FordMen", "Black", "B", "Casual");

// function call to get the total number of NFTs present 
console.log("Total Number of Mint : " + getTotalSupply() + "\n");

// Function call to display the NFTs
listNFTs();
