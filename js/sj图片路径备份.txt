
function sj(){
var time=new Date().getHours(); 
const root = document.documentElement;
if(time>=6 && time <16){
	console.log("早上好");
           root.style.setProperty('--sj','url(/img/bizhi3.jpeg) center center/cover no-repeat');
}
        else if(time>=16 && time <=19){
console.log("下午好");
            root.style.setProperty('--sj','url(/img/bizhi4.jpeg) center center/cover no-repeat');
        }else if(time>=19 && time <24){
console.log("晚上好");
            root.style.setProperty('--sj','url(/img/bizhi2.jpeg) center center/cover no-repeat');
        }
	else if(time>=0 && time <6){
console.log("晚安");
             root.style.setProperty('--sj','url(/img/bizhi2.jpeg) center center/cover no-repeat');
        }

}
           
sj();