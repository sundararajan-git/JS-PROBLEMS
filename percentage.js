/*
The 50-30-20 strategy is a simple 
way to budget, which involves spending 
50% of after-tax income on needs, 30% 
after tax income on wants, and 20%
after-tax income on savings or paying
off debt.

Given the after-tax income as ati, 
what you are supposed to do is to 
make a function that will return an
object that shows how much a person 
needs to spend on needs, wants, and savings
*/

function percentage(x){
    
    //  it is 50 30 20 strategy like find the
    // 50 % of amt , 30 % amt , 20 % amt

    let needs = (50/100)*x  ;
    let wants = (30/100) * x ;
    let savings =  (20/100) * x ;

    let obj = {Needs : needs , Wants : wants , Savings : savings}
    
    console.log(obj)
}


percentage(10000)

percentage(50000) 

percentage(13450)

