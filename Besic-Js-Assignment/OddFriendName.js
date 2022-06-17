// Problem Four.

let friendsName = ["Johns", "Mary", "Mark"];
function oddFriend(name){
    let OddName = "";
    for(const friend of name){
        if(friend.length % 2 != 0){
            OddName = friend;
            break;
        }
    }
    return OddName;
}
let OddFriendNameIsHere = oddFriend(friendsName);
console.log(OddFriendNameIsHere);