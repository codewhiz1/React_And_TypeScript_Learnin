type StringOrNumber = string | number;
type objectWithName = {names_12: string , uid: StringOrNumber};




const logDetails = (uid: StringOrNumber, item: string) => {
    console.log(`${item} has a uid of ${uid}`);
}

const newDetails = (user: {
    names_12: string, uid: StringOrNumber}) => {
        console.log(`${user.names_12} says hello`);
    } 

const newDetails_12 =  (user: objectWithName) => {
    console.log(`${user.names_12} says hello !!!`);
}