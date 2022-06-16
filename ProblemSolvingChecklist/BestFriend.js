// Bigger Name Return.
let bestFriends = ["Mark", "John", "Marry"];
function bestFriend(biggerName){
    let BiggerName = "";
    for(const friend of biggerName){
        if(friend.length > BiggerName.length){
            BiggerName = friend;
        }
    }
    return BiggerName;
}
let BigName = bestFriend(bestFriends);
console.log(BigName);