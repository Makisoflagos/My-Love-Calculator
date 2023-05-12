function lovecalculator(){
    return new Promise((resolve)=> {
        
         loveScore1 = Math.floor(Math.random()*100)
        resolve(loveScore1)
        
    });
}
const lovecalculator1 = (b)=>{
    return new Promise((resolve)=> {
        const loveScore1= b
         const lovescore2 = Math.floor(Math.random()*100)
        const average = (loveScore1 + lovescore2)/2;
        const result = {loveScore1: b, lovescore2: lovescore2, average: average}
        resolve(result)
    });
}



const AverageloveScore =(b, c, d)=>{
    switch(true){
        case (b.average>=70):
        return(`${c} is ${b.loveScore1}, ${d} is ${b.lovescore2}, average is ${b.average}: Very Compatible`)
        case (b.average>=60):
            return(`${c} is ${b.loveScore1}, ${d} is ${b.lovescore2}, average is ${b.average}: Slightly Compatible`)
        case (b.average>=50):
            return(`${c} is ${b.loveScore1}, ${d} is ${b.lovescore2}, average is ${b.average}:  Compatible`)
            case (b.average>=40):
                return(`${c} is ${b.loveScore1}, ${d} is ${b.lovescore2}, average is ${b.average}: Not Compatible`)
               default:
                    return(`${c} is ${b.loveScore1}, ${d} is ${b.lovescore2}, average is ${b.average}: Try it and die`)
            }   
}
function failureCallback(error){
    console.error(`This error happened: ${error}`);
}

const lovecalculator3= async (man, woman)=>{
    try{
        let loveScore1 = await lovecalculator();
        let resultObj = await lovecalculator1 (loveScore1);
        let theResult = AverageloveScore(resultObj, man, woman)
        console.log(theResult);
    }
    catch(error){
        failureCallback(error)
    }
}


lovecalculator3("ayo", "blessing")