module.exports = function reverse (n) {
    let x = 0;
       let m = 0; 
    while(0 != n){
        m = n%10; 
        n = (n-n%10)/10;
        x = x*10+m;       
    }
    if (x<0){
        x=x*-1;
    }
   
    return x
}