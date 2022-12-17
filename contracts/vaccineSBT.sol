// // SPDX-License-Identifier: MIT

// pragma solidity ^0.8.0;

// // We first import some OpenZeppelin Contracts.
// import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
// import "@openzeppelin/contracts/utils/Counters.sol";
// import "@openzeppelin/contracts/utils/Strings.sol";
// import "@openzeppelin/contracts/utils/Base64.sol";

// // We inherit the contract we imported. This means we'll have access
// // to the inherited contract's methods.
// contract VaccineCerti is ERC721URIStorage {
//     using Strings for uint256;
//     //help us keep track of tokenIds.
//     using Counters for Counters.Counter;
//     Counters.Counter private _tokenIds;
//     //_tokenIds is a state variable which means if we change it, the value is stored on the contract directly.

//     mapping(uint256 => uint256) public tokenIdToLevels;

//     constructor() ERC721("VaccineCerti", "VCERT") {}

//     function generateCharacter(uint256 tokenId)
//         public
//         view
//         returns (string memory)
//     {
//         bytes memory svg = abi.encodePacked(
//             '<svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin meet" viewBox="0 0 350 350">',
//             "<style>.base { fill: white; font-family: serif; font-size: 14px; }</style>",
//             '<rect width="100%" height="100%" fill="black" />',
//             '<text x="50%" y="40%" class="base" dominant-baseline="middle" text-anchor="middle">',
//             "Warrior",
//             "</text>",
//             '<text x="50%" y="50%" class="base" dominant-baseline="middle" text-anchor="middle">',
//             "Levels: ",
//             getInfo(tokenId),
//             "</text>",
//             "</svg>"
//         );
//         return
//             string(
//                 abi.encodePacked(
//                     "data:image/svg+xml;base64,",
//                     Base64.encode(svg)
//                 )
//             );
//     }

//     function getInfo(uint256 tokenId) public view returns (string memory) {
//         uint256 info = tokenIdToLevels[tokenId];
//         return info.toString();
//     }

//     function mint() public {
//         // Get the current tokenId, this starts at 0.
//         uint256 newItemId = _tokenIds.current();
//         // Actually mint the NFT to the sender using msg.sender, using new NFT ID.
//         _safeMint(msg.sender, newItemId);
//         tokenIdToLevels[newItemId] = 0;
//         _setTokenURI(newItemId, getTokenURI(newItemId));
//         // Increment the counter for when the next NFT is minted.
//         _tokenIds.increment();
//     }

//     // base64 is basically an accepted standard for encoding data into a string.
//     function getTokenURI(uint256 tokenId) public view returns (string memory) {
//         bytes memory dataURI = abi.encodePacked(
//             "{",
//             '"name": "Vaccine Ceritficate #',
//             tokenId.toString(),
//             '",',
//             '"description": "Vaccination on chain",',
//             '"image": "',
//             generateCharacter(tokenId),
//             '"',
//             "}"
//             /*
//              "{",
//             '"name": "Vaccine Ceritficate #',
//             tokenId.toString(),
//             '",',
//             '"description": "Vaccination on chain",',
//             '"image": "',
//             generateCharacter(tokenId),
//             '"',
//             "}"
//             */
//         );
//         return
//             string(
//                 abi.encodePacked(
//                     "data:application/json;base64,",
//                     Base64.encode(dataURI)
//                 )
//             );
//     }

//     // function train(uint256 tokenId) public {
//     //     require(_exists(tokenId), "Please use an existing token");
//     //     require(
//     //         ownerOf(tokenId) == msg.sender,
//     //         "You must own this token to train it"
//     //     );
//     //     uint256 currentLevel = tokenIdToLevels[tokenId];
//     //     tokenIdToLevels[tokenId] = currentLevel + 1;
//     //     _setTokenURI(tokenId, getTokenURI(tokenId));
//     // }
// }
