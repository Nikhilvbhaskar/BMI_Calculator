var height=document.getElementById("height")
var weight=document.getElementById("weight")
var indicator=document.getElementById("indicator")
var def=document.getElementById("def")
var obs=document.getElementById("observation")


function find_max_min(height){

    var max_min=[]
    max_min.push((25*(height**2)).toFixed(2))
    max_min.push((18.5*(height**2)).toFixed(2))
    console.log("max_min",max_min);
    return max_min
}

function result(bmi,height,weight){
    var desc
    var max_min
    if(bmi<18.5){
        desc="It's time to have a feast!! \n For being healthy, your weight should be in between: \n"
        max_min=find_max_min(height,weight)
        console.log(max_min[1],'-',max_min[0]);
        document.getElementById("result").innerText = desc+max_min[1]+'-'+max_min[0];
    }else if(bmi>=25){
        desc="It's time to hit the gym!! \n For being healthy, your weight should be in between: \n"
        max_min=find_max_min(height,weight)
        console.log(max_min[1],'-',max_min[0]);
        document.getElementById("result").innerText = desc+max_min[1]+'-'+max_min[0];
    }else {
        desc="You a healthy person!! \n Keep going."
        document.getElementById("result").innerText = desc;
    }

}

function change(){
    
    def.style.display="none"
    obs.style.display="block"
}
function popup(bmi){
    console.log("hello",bmi);
    
    if(bmi<18.5){
        indicator.style.backgroundColor="lightskyblue"
    }else if(18.5<=bmi && bmi<=24.9){
        indicator.style.backgroundColor="lightgreen"
    }else if(25<=bmi && bmi<=29.9){
        indicator.style.backgroundColor="orange"
    }else if(30<=bmi){
        indicator.style.backgroundColor="orangered"
    }
}

function display(){
    hei=height.value;
    wei=weight.value;

    console.log(hei,wei);
    var height_in_m=hei/100
    var bmi=wei/((height_in_m)**2)
    console.log(bmi);
    
    document.getElementById("BMI").innerText = bmi.toFixed(2);
    popup(bmi);
    change()
    result(bmi,height_in_m,wei)
}